import React, { FC, useCallback, useLayoutEffect, useMemo, useState } from 'react';

import { DEFAULT_RIPPLE_DURATION, DEFAULT_RIPPLE_ID } from './component.constants';
import { RippleContainer, RippleSpan } from './component.styles';
import { RippleArrayElement, RippleProps } from './component.types';

const useDebouncedRippleCleanUp = (rippleCount: number, duration: number, cleanUpFunction: () => void) => {
  useLayoutEffect(() => {
    // eslint-disable-next-line no-undef
    let bounce: NodeJS.Timeout | null = null;
    if (rippleCount > 0) {
      if (bounce) {
        clearTimeout(bounce);
      }

      bounce = setTimeout(() => {
        cleanUpFunction();
        if (bounce) {
          clearTimeout(bounce);
        }
      }, duration * 4);
    }

    return () => {
      if (bounce) {
        clearTimeout(bounce);
      }
    };
  }, [rippleCount, duration, cleanUpFunction]);
};

export const Ripple: FC<RippleProps> = (props) => {
  const color = useMemo(() => props.color ?? 'unset', [props.color]);
  const duration = useMemo(() => props.duration ?? DEFAULT_RIPPLE_DURATION, [props.duration]);

  const [rippleArray, setRippleArray] = useState<RippleArrayElement[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration ?? DEFAULT_RIPPLE_DURATION, () => {
    setRippleArray([]);
  });

  const onMouseUp = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!event.isTrusted) return;
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = { x, y, size };
    setRippleArray([]);
    setTimeout(() => {
      setRippleArray([newRipple]);
    }, 0);
  }, []);

  if (props.isDisabled || props.isHidden) return null;
  return (
    <RippleContainer id={DEFAULT_RIPPLE_ID} $duration={duration} $color={color} onMouseUp={onMouseUp}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <RippleSpan
              $duration={duration}
              $color={color}
              key={`span-${index}`}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RippleContainer>
  );
};
