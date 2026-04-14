import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { v4 as uuidv4 } from 'uuid';

import { DialogContext } from './context';
import { IDialogContext, IDialogItem, IUseDialog, IUseDialogDependencies } from './context.types';

export const useDialogs = (props: IUseDialogDependencies): IDialogContext => {
  const context = useContextSelector(DialogContext, (v) => {
    return v
      ? props.reduce((acc, prop) => {
          acc[prop] = v[prop];
          return acc;
        }, {} as any)
      : null;
  });
  if (!context) {
    throw new Error('useDialogs must be used within an DialogContext');
  }
  return context;
};

export const useDialog = <T extends object = Record<string, unknown>>(props?: IUseDialog<T>): IDialogItem => {
  const { add, remove, update } = useDialogs(['add', 'remove', 'update']);
  const [id, setId] = useState<string | null>(null);
  const refId = useRef<string | null>(null);
  const propsMemo = useDeepCompareMemoize(props);

  const localRemove = useCallback(() => {
    if (refId.current) {
      setId(null);
      remove(refId.current);
      refId.current = null;
    }
  }, [remove]);

  const localAdd: IDialogItem['add'] = useCallback(() => {
    if (refId.current) return;
    const dialogId = uuidv4();
    setId(dialogId);
    refId.current = dialogId;
    add({
      id: dialogId,
      props: propsMemo as IUseDialog<Record<string, unknown>>,
      onRemove: () => {
        localRemove();
        propsMemo?.onRemove?.();
      },
    });
  }, [add, propsMemo, localRemove]);

  useEffect(() => {
    if (refId.current) {
      update({ id: refId.current, props: propsMemo as IUseDialog<Record<string, unknown>> });
    }
  }, [propsMemo, update]);

  return { add: localAdd, remove: localRemove, id: id };
};
