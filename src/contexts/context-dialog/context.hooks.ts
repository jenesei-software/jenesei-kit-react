import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize';

import { useCallback, useContext, useEffect, useRef, useState } from 'react';
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
  const refId = useRef<string | null>(null);
  const propsMemo = useDeepCompareMemoize(props);

  const localAdd: DialogContextItemProps['add'] = useCallback(() => {
    if (refId.current) return;
    const dialogId = uuidv4();
    setId(dialogId);
    refId.current = dialogId;
    add({
      id: dialogId,
      props: propsMemo,
      onRemove: () => {
        remove(dialogId);
        propsMemo?.onRemove?.();
      },
    });
  }, [add, remove, propsMemo]);

  const localRemove = useCallback(() => {
    if (refId.current) {
      setId(null);
      remove(refId.current);
      refId.current = null;
    }
  }, [remove]);

  useEffect(() => {
    if (refId.current) {
      update({ id: refId.current, props: propsMemo });
    }
  }, [propsMemo, update]);

  return { add: localAdd, remove: localRemove, id: id };
};
