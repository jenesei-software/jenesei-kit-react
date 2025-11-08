import { Outside } from '@local/areas/outside/export';

import { AnimatePresence } from 'framer-motion';
import { createContext, FC, memo, useCallback, useEffect, useMemo, useState } from 'react';

import {
  DEFAULT_PROVIDER_DIALOG_DURATION_ELEMENT,
  DEFAULT_PROVIDER_DIALOG_DURATION_LAYOUT,
  DialogContentProps,
  DialogContextProps,
  DialogElementProps,
  DialogElementWrapper,
  DialogLayout,
  ProviderDialogProps,
} from '.';

export const DialogContext = createContext<DialogContextProps | null>(null);

export const ProviderDialog: FC<ProviderDialogProps> = (props) => {
  const [dialogHistory, setDialogHistory] = useState<DialogContentProps[]>([]);

  const remove: DialogContextProps['remove'] = useCallback((id) => {
    setDialogHistory((prev) => {
      const itemToRemove = prev.find((item) => item.id === id);

      if (itemToRemove === undefined) return prev;

      const indexToRemove = itemToRemove.index;

      if (indexToRemove === undefined) return prev;

      const updatedHistory = prev
        .filter((item) => item.id !== id)
        .map((item) => {
          const index = item.index;
          if (index === undefined) return item;

          return {
            ...item,
            index: index > indexToRemove ? index - 1 : item.index,
          };
        });

      return updatedHistory;
    });
  }, []);

  const update: DialogContextProps['update'] = useCallback((dialog) => {
    setDialogHistory((prev) => {
      return prev.map((item) => {
        if (item.id === dialog.id) {
          return { ...item, ...dialog };
        }
        return item;
      });
    });
  }, []);

  const add: DialogContextProps['add'] = useCallback((dialog) => {
    const id = dialog.id;

    setDialogHistory((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === id);

      let updatedHistory: DialogContentProps[];

      if (existingIndex !== -1) {
        updatedHistory = [...prev];
        updatedHistory[existingIndex] = { ...dialog, id, index: prev[existingIndex].index };
      } else {
        updatedHistory = prev.map((item) => {
          const index = item.index;
          if (index === undefined) return item;

          return {
            ...item,
            index: index + 1,
          };
        });
        const newContent = { ...dialog, id, index: 0 };
        updatedHistory.unshift(newContent);
      }

      return updatedHistory;
    });
  }, []);

  const dialogHistoryLength = useMemo(() => dialogHistory.length, [dialogHistory.length]);
  const zIndex = useMemo(() => props.zIndex, [props.zIndex]);

  useEffect(() => {
    return () => {
      setDialogHistory([]);
    };
  }, []);
  return (
    <DialogContext.Provider value={{ add, remove, update, dialogHistory }}>
      <AnimatePresence>
        {dialogHistoryLength && (
          <DialogLayout
            $zIndex={zIndex}
            initial={{
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ type: 'spring', duration: DEFAULT_PROVIDER_DIALOG_DURATION_LAYOUT }}
          >
            {dialogHistory.map((dialog) => {
              return (
                <MemoizedDialogElement
                  key={dialog.id}
                  index={dialog.index}
                  props={dialog.props}
                  id={dialog.id}
                  onRemove={dialog.onRemove}
                />
              );
            })}
          </DialogLayout>
        )}
      </AnimatePresence>

      {props.children}
    </DialogContext.Provider>
  );
};

const DialogElement = <T extends object>(props: DialogElementProps<T>) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const isRemoveOnOutsideClick = useMemo(
    () => props.props?.propsDialog?.isRemoveOnOutsideClick ?? true,
    [props.props?.propsDialog?.isRemoveOnOutsideClick],
  );
  const onRemove = useCallback(() => {
    props.props?.onRemove?.();
    props.onRemove?.();
  }, [props.onRemove, props.props?.onRemove]);

  const children = useMemo(
    () => props.props?.content?.({ remove: onRemove, isAnimating: isAnimating, propsCustom: props.props.propsCustom }),
    [props.props?.content, isAnimating, props?.props?.propsCustom, onRemove],
  );
  return (
    props.index !== undefined && (
      <Outside onOutsideClick={() => isRemoveOnOutsideClick && onRemove?.()}>
        <DialogElementWrapper
          key={props.id}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          onAnimationComplete={() => setIsAnimating(false)}
          transition={{
            type: 'spring',
            duration: DEFAULT_PROVIDER_DIALOG_DURATION_ELEMENT,
            delay: DEFAULT_PROVIDER_DIALOG_DURATION_LAYOUT,
          }}
          style={{
            zIndex: -props.index,
          }}
          $isDisabledOutline={props.props?.propsOutline?.isDisabledOutline}
          $isOutlineBoxShadow={props.props?.propsOutline?.isOutlineBoxShadow}
          $isReadOnly={props.props?.propsOutline?.isReadOnly}
          $propsDialog={props.props?.propsDialog}
        >
          {children}
        </DialogElementWrapper>
      </Outside>
    )
  );
};
const MemoizedDialogElement = memo(DialogElement);
