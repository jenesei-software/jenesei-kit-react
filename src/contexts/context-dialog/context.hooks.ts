import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize';

import { useCallback, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

  const propsMemo = useDeepCompareMemoize(props);

  const localAdd: DialogContextItemProps<T>['add'] = useCallback(
    (dialog) => {
      const find = dialogHistory.find((item) => item.id === dialog.id);
      if (!id || !find) {
        const id = dialog.id || uuidv4();
        setId(id);
        add({ ...(dialog as T), props: propsMemo, id });
      }
    },
    [add, dialogHistory, id, propsMemo],
  );
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
