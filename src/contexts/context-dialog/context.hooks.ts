import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize';

import { useCallback, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DialogContext, DialogContextItemProps, DialogContextProps, useDialogProps } from '.';

export const useDialogs = (): DialogContextProps => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialogs must be used within an ProviderDialog');
  }
  return context;
};

export const useDialog = <T extends object = object>(props?: useDialogProps<T>): DialogContextItemProps => {
  const { add, remove, update } = useDialogs();
  const [id, setId] = useState<string | null>(null);

  const propsMemo = useDeepCompareMemoize(props);

  const localAdd: DialogContextItemProps['add'] = useCallback(() => {
    const dialogId = id ?? uuidv4();
    setId(dialogId);
    add({
      id: dialogId,
      props: propsMemo,
      onRemove: () => {
        remove(dialogId);
        props?.onRemove?.();
        setId(null);
      },
    });
  }, [add, propsMemo, id, remove, props?.onRemove]);

  const localRemove = useCallback(() => {
    if (id) {
      remove(id);
      setId(null);
    }
  }, [id, remove]);

  
  useEffect(() => {
    if (id) {
      update({ id, props: propsMemo });
    }
  }, [id, propsMemo, update]);

  return { add: localAdd, remove: localRemove, id };
};
