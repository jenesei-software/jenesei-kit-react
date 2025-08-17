import { Button } from '@local/components/button';
import { Icon } from '@local/components/icon';

import { AnimatePresence, motion } from 'framer-motion';
import { createContext, FC, memo, useCallback, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import {
  DEFAULT_PROVIDER_SONNER_BUTTON,
  DEFAULT_PROVIDER_SONNER_DURATION,
  DEFAULT_PROVIDER_SONNER_GENRE,
  DEFAULT_PROVIDER_SONNER_MARGIN_BOTTOM,
  DEFAULT_PROVIDER_SONNER_SCALE,
  DEFAULT_PROVIDER_SONNER_Y,
  DEFAULT_PROVIDER_SONNER_Z_INDEX,
  ProviderSonnerProps,
  SonnerButtonWrapper,
  SonnerContent,
  SonnerContentDescription,
  SonnerContentProps,
  SonnerContentStandardProps,
  SonnerContentTitle,
  SonnerContextProps,
  SonnerElementProps,
  SonnerElementWrapper,
  SonnerIcon,
  SonnerLayout,
} from '.';

export const SonnerContext = createContext<SonnerContextProps | null>(null);

export const ProviderSonner: FC<ProviderSonnerProps> = (props) => {
  const memoVisibleToasts: ProviderSonnerProps['visibleToasts'] = useMemo(
    () => props.visibleToasts,
    [props.visibleToasts],
  );
  const memoDefaultDescription: ProviderSonnerProps['default']['description'] = useMemo(
    () => props?.default?.description,
    [props?.default?.description],
  );
  const memoDefaultTitle: ProviderSonnerProps['default']['title'] = useMemo(
    () => props?.default?.title,
    [props?.default?.title],
  );
  const memoDefaultButton: ProviderSonnerProps['default']['button'] = useMemo(
    () => props?.default?.button,
    [props?.default?.button],
  );
  const memoDefaultHidingTime: ProviderSonnerProps['default']['hidingTime'] = useMemo(
    () => props?.default?.hidingTime,
    [props?.default?.hidingTime],
  );
  const memoDefaultHidingMode: ProviderSonnerProps['default']['hidingMode'] = useMemo(
    () => props?.default?.hidingMode ?? 'clickOnButton',
    [props?.default?.hidingMode],
  );
  const memoDefaultGenre = useMemo(
    () => props?.default?.genre ?? DEFAULT_PROVIDER_SONNER_GENRE,
    [props?.default?.genre],
  );

  const isTop = useMemo(() => props.position.includes('top'), [props.position]);

  const [contentHistory, setContentHistory] = useState<SonnerContentProps[]>([]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const remove: SonnerContextProps['remove'] = useCallback(
    (id) => {
      setContentHistory((prev) => {
        const itemToRemove = prev.find((item) => item.id === id);

        if (!itemToRemove) return prev;

        const indexToRemove = itemToRemove.index;

        const updatedHistory = prev
          .filter((item) => item.id !== id)
          .map((item) => ({
            ...item,
            index: item.index > indexToRemove ? item.index - 1 : item.index,
          }));

        if (updatedHistory.length === 0) handleMouseLeave();

        return updatedHistory;
      });
    },
    [handleMouseLeave],
  );

  const toast: SonnerContextProps['toast'] = useCallback(
    (content) => {
      const id = content.id ?? uuidv4();

      const hidingTime = content.hidingTime ?? memoDefaultHidingTime;

      setContentHistory((prev) => {
        const existingIndex = prev.findIndex((item) => item.id === id);

        let updatedHistory;
        if (existingIndex !== -1) {
          // Replace existing item
          updatedHistory = [...prev];
          updatedHistory[existingIndex] = { ...content, id, index: prev[existingIndex].index };
        } else {
          // Add new item
          updatedHistory = prev.map((item) => ({
            ...item,
            index: item.index + 1,
          }));
          const newContent = { ...content, id, index: 0 };
          updatedHistory.unshift(newContent);
        }

        return updatedHistory;
      });

      if (hidingTime !== undefined) {
        setTimeout(() => {
          remove(id);
        }, hidingTime);
      }
    },
    [memoDefaultHidingTime, remove],
  );
  const promise: SonnerContextProps['promise'] = useCallback(
    <T,>(
      promise: Promise<T>,
      expectation: Omit<SonnerContentProps, 'index'>,
      localToast: (success: T | undefined, error: unknown | undefined) => Omit<SonnerContentProps, 'index'>,
    ) => {
      const id = uuidv4();
      toast({ ...expectation, id, isLoading: true });

      return promise
        .then((result) => {
          toast({ ...localToast(result, undefined), id });
        })
        .catch((error) => {
          toast({ ...localToast(undefined, error), id });
        });
    },
    [toast],
  );
  const handleOnClick = useCallback(
    (id: SonnerContentStandardProps['id']) => {
      remove(id);
    },
    [remove],
  );
  const theme = useTheme();
  return (
    <SonnerContext.Provider value={{ toast, promise, remove, contentHistory }}>
      <SonnerLayout
        $zIndex={props.zIndex ?? DEFAULT_PROVIDER_SONNER_Z_INDEX}
        $position={props.position}
        $gap={props.gap}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence>
          {contentHistory.map((content) => {
            const index = content.index;
            const isMoreThanLastViewIndexPlusOne = memoVisibleToasts ? index > memoVisibleToasts : false;
            const isMoreThanLastViewIndex = memoVisibleToasts ? index > memoVisibleToasts - 1 : false;
            const isLastViewIndex = memoVisibleToasts ? index == memoVisibleToasts - 1 : false;
            const localGenre = content.genre ?? memoDefaultGenre;
            const buttonGenre = theme.colors.sonner[localGenre].button.genre;
            const hidingMode = content.hidingMode ?? memoDefaultHidingMode;

            const localContent = 'content' in content ? content.content : false;
            const localTitle = 'title' in content ? content.title : false;
            const localDescription = 'description' in content ? content.description : false;
            return (
              <MemoizedSonnerElement
                isMoreThanLastViewIndexPlusOne={isMoreThanLastViewIndexPlusOne}
                isMoreThanLastViewIndex={isMoreThanLastViewIndex}
                isLastViewIndex={isLastViewIndex}
                isTop={isTop}
                key={content.id}
                id={content.id}
                icon={content.icon}
                isLoading={content.isLoading}
                index={index}
                buttonGenre={buttonGenre}
                hidingMode={hidingMode}
                isHovered={isHovered}
                genre={localGenre}
                content={localContent}
                title={localTitle || memoDefaultTitle}
                description={localDescription || memoDefaultDescription}
                button={content.button ?? memoDefaultButton ?? DEFAULT_PROVIDER_SONNER_BUTTON}
                handleOnClick={handleOnClick}
              />
            );
          })}
        </AnimatePresence>
      </SonnerLayout>
      {props.children}
    </SonnerContext.Provider>
  );
};

const SonnerElement = (props: SonnerElementProps) => {
  return (
    <motion.div
      key={props.id}
      layout
      initial={{
        opacity: 0,
        scale: 1,
        y: props.isLastViewIndex
          ? !props.isTop
            ? -DEFAULT_PROVIDER_SONNER_Y
            : DEFAULT_PROVIDER_SONNER_Y
          : !props.isTop
            ? DEFAULT_PROVIDER_SONNER_Y
            : -DEFAULT_PROVIDER_SONNER_Y,
      }}
      animate={{
        y: 0,
        opacity: props.isMoreThanLastViewIndex ? 0 : 1,
        pointerEvents: props.isMoreThanLastViewIndex ? 'none' : 'auto',
        display: props.isMoreThanLastViewIndex ? 'none' : 'flex',
        scale: !props.isHovered ? 1 - props.index * DEFAULT_PROVIDER_SONNER_SCALE : 1,
        marginTop: props.isTop
          ? props.isHovered || props.index === 0
            ? `0px`
            : `-${DEFAULT_PROVIDER_SONNER_MARGIN_BOTTOM}px`
          : '0px',
        marginBottom: !props.isTop
          ? props.isHovered || props.index === 0
            ? `0px`
            : `-${DEFAULT_PROVIDER_SONNER_MARGIN_BOTTOM}px`
          : '0px',
      }}
      style={{
        zIndex: -props.index,
      }}
      whileInView={{ opacity: props.isMoreThanLastViewIndex ? 0 : 1 }}
      exit={{ opacity: 0, y: !props.isTop ? DEFAULT_PROVIDER_SONNER_Y : -DEFAULT_PROVIDER_SONNER_Y }}
      transition={{ type: 'spring', duration: DEFAULT_PROVIDER_SONNER_DURATION }}
    >
      <SonnerElementWrapper
        $genre={props.genre}
        onClick={() => props.hidingMode === 'clickOnSonner' && props.handleOnClick(props.id, 'clickOnSonner')}
      >
        {(props.isLoading || props.icon) && (
          <SonnerIcon>
            {props.isLoading ? (
              <Icon size='medium' type='loading' name='Line' />
            ) : (
              props.icon && <Icon name={props.icon} type='id' size={'medium'} />
            )}
          </SonnerIcon>
        )}
        <SonnerContent>
          {props.content ? (
            props.content
          ) : (
            <>
              {props.title && (
                <SonnerContentTitle
                  $genre={props.genre}
                  $font={{
                    size: 14,
                    weight: 700,
                  }}
                >
                  {props.title}
                </SonnerContentTitle>
              )}
              {props.description && (
                <SonnerContentDescription
                  $font={{
                    size: 12,
                    weight: 400,
                  }}
                  $genre={props.genre}
                >
                  {props.description}
                </SonnerContentDescription>
              )}
            </>
          )}
        </SonnerContent>

        {props.button && props.button.content && (
          <SonnerButtonWrapper>
            <Button
              genre={props.buttonGenre}
              size='small'
              onClick={() => props.hidingMode === 'clickOnButton' && props.handleOnClick(props.id, 'clickOnButton')}
            >
              {props.button.content}
            </Button>
          </SonnerButtonWrapper>
        )}
      </SonnerElementWrapper>
    </motion.div>
  );
};
const MemoizedSonnerElement = memo(SonnerElement);
