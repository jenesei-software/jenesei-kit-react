import { Outside } from '@local/areas/outside';
import { setClasses } from '@local/styles/utils/functions';

import { AnimatePresence, motion } from 'framer-motion';
import { CSSProperties, FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { createContext } from 'use-context-selector';

import { DEFAULT_PROVIDER_DIALOG_DURATION_ELEMENT, DEFAULT_PROVIDER_DIALOG_DURATION_LAYOUT } from './context.constants';
import { DialogClass, getDialogElementStyle, getDialogLayoutClassName, getDialogLayoutStyle } from './context.styles';
import { IDialogContent, IDialogContext, IDialogElement, IDialogProvider } from './context.types';

export const DialogContext = createContext<IDialogContext | null>(null);

export const ProviderDialog: FC<IDialogProvider> = (props) => {
  const [dialogHistory, setDialogHistory] = useState<IDialogContent[]>([]);
  const classNameDialogLayout = getDialogLayoutClassName();

  const remove: IDialogContext['remove'] = useCallback((id) => {
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

  const update: IDialogContext['update'] = useCallback((dialog) => {
    setDialogHistory((prev) => {
      return prev.map((item) => {
        if (item.id === dialog.id) {
          return { ...item, ...dialog };
        }
        return item;
      });
    });
  }, []);

  const add: IDialogContext['add'] = useCallback((dialog) => {
    const id = dialog.id;

    setDialogHistory((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === id);

      let updatedHistory: IDialogContent[];

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
          <motion.div
            className={classNameDialogLayout}
            style={getDialogLayoutStyle({ zIndex })}
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
            {[...dialogHistory].reverse().map((dialog) => {
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
          </motion.div>
        )}
      </AnimatePresence>

      {props.children}
    </DialogContext.Provider>
  );
};

const DialogElement = (props: IDialogElement<Record<string, unknown>>) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const styleDialogElement = useMemo(() => {
    return {
      ...getDialogElementStyle({
        propsDialog: props.props?.propsDialog,
      }),
    };
  }, [props.props?.propsDialog]);
  const styleDialogLayer = useMemo<CSSProperties>(() => {
    return {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: props.index === 0 ? 'auto' : 'none',
    };
  }, [props.index]);

  const isRemoveOnOutsideClick = useMemo(
    () => props.props?.propsDialog?.isRemoveOnOutsideClick ?? true,
    [props.props?.propsDialog?.isRemoveOnOutsideClick],
  );
  const onRemove = useCallback(() => {
    props.props?.onRemove?.();
    props.onRemove?.();
  }, [props.onRemove, props.props?.onRemove]);

  const Content = props.props?.content;
  const children = useMemo(() => {
    if (props.id === undefined || Content === undefined) return null;

    return <Content remove={onRemove} isAnimating={isAnimating} propsCustom={props.props?.propsCustom} id={props.id} />;
  }, [Content, isAnimating, props.props?.propsCustom, onRemove, props.id]);
  return (
    props.index !== undefined && (
      <div style={styleDialogLayer}>
        <Outside onOutsideClick={() => props.index === 0 && isRemoveOnOutsideClick && onRemove?.()}>
          <motion.dialog
            key={props.id}
            className={setClasses([DialogClass.element])}
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
            style={styleDialogElement}
          >
            {children}
          </motion.dialog>
        </Outside>
      </div>
    )
  );
};
const MemoizedDialogElement = memo(DialogElement);
