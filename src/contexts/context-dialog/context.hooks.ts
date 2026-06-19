import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  const { add, remove, update, dialogHistory } = useDialogs(['add', 'remove', 'update', 'dialogHistory']);
  const [id, setId] = useState<string | null>(null);
  const refId = useRef<string | null>(null);
  const propsMemo = useDeepCompareMemoize(props);
  const isOpen = useMemo(() => {
    return id !== null && dialogHistory.some((dialog) => dialog.id === id);
  }, [dialogHistory, id]);

  const localRemove = useCallback(() => {
    const dialogId = refId.current;

    if (!dialogId) return;

    setId(null);
    refId.current = null;
    remove(dialogId);
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
    const dialogId = refId.current;

    if (!dialogId) return;

    if (!dialogHistory.some((dialog) => dialog.id === dialogId)) {
      setId(null);
      refId.current = null;
    }
  }, [dialogHistory]);

  useEffect(() => {
    if (refId.current) {
      update({ id: refId.current, props: propsMemo as IUseDialog<Record<string, unknown>> });
    }
  }, [propsMemo, update]);

  return { add: localAdd, remove: localRemove, id: id, isOpen: isOpen };
};
