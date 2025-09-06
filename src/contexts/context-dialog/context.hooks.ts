import { useCallback, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize';

import { DialogContext, DialogContextItemProps, DialogContextProps, useDialogProps } from '.';

export const useDialogs = (): DialogContextProps<object> => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialogs must be used within an ProviderDialog');
  }
  return context;
};

export const useDialog = <T extends object>(props?: useDialogProps<T>): DialogContextItemProps<T> => {
  const { add, remove, update, dialogHistory } = useDialogs();
  const [id, setId] = useState<string | null>(null);

  const localAdd: DialogContextItemProps<T>['add'] = useCallback(
    (dialog) => {
      const find = dialogHistory.find((item) => item.id === dialog.id);
      if (!id || !find) {
        const id = dialog.id || uuidv4();
        setId(id);
        add({ ...(dialog as T), props: props, id });
      }
    },
    [add, dialogHistory, id, props],
  );
  const localRemove = useCallback(() => {
    if (id) {
      remove(id);
      setId(null);
    }
  }, [id, remove]);

  const propsMemo = useDeepCompareMemoize(props);

  useEffect(() => {
    if (id) {
      update({ id, props: propsMemo });
    }
  }, [id, propsMemo, update]);

  return { add: localAdd, remove: localRemove, id };
};
