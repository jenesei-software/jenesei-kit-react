import { Button } from '@local/components/button';
import { Stack } from '@local/components/stack';

import { AnimatePresence, motion } from 'framer-motion';
import { FC, useCallback, useMemo } from 'react';

import { DEFAULT_COMPONENT_PAGINATION_GAP } from './component.constants';
import { PaginationProps } from './component.types';

export const Pagination: FC<PaginationProps> = (props) => {
  const isDisabledPrevious = useMemo(() => props.index === 0 && !props.isInfinity, [props.index, props.isInfinity]);
  const isDisabledNext = useMemo(
    () => props.index === props.length - 1 && !props.isInfinity,
    [props.index, props.isInfinity, props.length],
  );

  const gap = useMemo(() => props.gap ?? DEFAULT_COMPONENT_PAGINATION_GAP, [props.gap]);
  const lengthData = useMemo(() => props.lengthData ?? {}, [props.lengthData]);
  const handlePrevious = useCallback(() => {
    if (props.index === 0) {
      if (props.isInfinity) {
        props.changeIndex(props.length - 1);
      }
    } else {
      props.changeIndex(props.index - 1);
    }
  }, [props]);

  const handleNext = useCallback(() => {
    if (props.index === props.length - 1) {
      if (props.isInfinity) {
        props.changeIndex(0);
      }
    } else {
      props.changeIndex(props.index + 1);
    }
  }, [props]);

  const visibleButtons = useMemo(() => {
    const half = Math.floor(props.viewQuantity / 2);
    const start = Math.max(0, Math.min(props.index - half, props.length - props.viewQuantity));
    const end = Math.min(props.length, start + props.viewQuantity);
    return Array.from({ length: end - start }, (_, i) => start + i);
  }, [props.index, props.viewQuantity, props.length]);

  return (
    <Stack
      sx={(theme) => ({
        ...props?.sx,
        default: {
          height: 'fit-content',
          gap: `${gap}px`,
          ...(props?.sx ? (typeof props?.sx === 'function' ? props?.sx(theme).default : props?.sx.default) : {}),
        },
      })}
    >
      <Button
        isDisabled={isDisabledPrevious}
        isHidden={isDisabledPrevious}
        onClick={handlePrevious}
        {...props.buttonControl}
        icons={[
          {
            type: 'id',
            name: 'Arrow2',
            order: -1,
            turn: 90,
          },
        ]}
      >
        {!props.buttonControl.isWidthAsHeight && props.locale.prev}
      </Button>

      <Stack
        sx={{
          default: {
            width: 'fit-content',
            height: 'fit-content',
            display: 'flex',
            gap: `${gap}px`,
            alignItems: 'center',
            justifyContent: 'flex-start',
          },
        }}
      >
        {Array.from({ length: props.length }).map((_, i) => {
          const isVisible = visibleButtons.includes(i);
          return (
            <AnimatePresence key={i} mode='popLayout'>
              {isVisible && (
                <motion.div
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  transition={{ duration: 1, ease: 'backOut' }}
                >
                  <Button
                    isWidthAsHeight
                    {...(i === props.index ? props.buttonCount.active : props.buttonCount.inactive)}
                    {...lengthData?.[i]}
                    onClick={() => props.changeIndex(i)}
                  >
                    {lengthData?.[i]?.icons?.length ? null : i + 1}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </Stack>

      <Button
        isDisabled={isDisabledNext}
        isHidden={isDisabledNext}
        onClick={handleNext}
        {...props.buttonControl}
        icons={[
          {
            type: 'id',
            name: 'Arrow2',
            turn: -90,
          },
        ]}
      >
        {!props.buttonControl.isWidthAsHeight && props.locale.next}
      </Button>
    </Stack>
  );
};
