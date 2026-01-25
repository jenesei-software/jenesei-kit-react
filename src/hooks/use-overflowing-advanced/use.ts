import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize';

import { RefObject, useEffect, useRef, useState } from 'react';

import { useTooltipProps } from './use.types';


export function useOverflowingAdvanced<T extends HTMLElement>(
  props?: useTooltipProps,
): {
  isDisabled: boolean;
  isOverflowing: boolean;
  ref: RefObject<HTMLElement | null>;
} {
  const ref = useRef<T>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const deps = useDeepCompareMemoize(props?.dependencies);

  useEffect(() => {
    if (!props?.isCheckSize) return;
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const clone = el.cloneNode(true) as HTMLElement;
      clone.style.visibility = 'hidden';
      clone.style.position = 'absolute';
      clone.style.width = 'fit-content';
      clone.style.maxWidth = 'none';
      clone.style.overflow = 'visible';
      clone.style.whiteSpace = 'nowrap';

      el.parentElement?.appendChild(clone);

      const isNowOverflowing = clone.offsetWidth > el.offsetWidth;
      setIsOverflowing(isNowOverflowing);

      el.parentElement?.removeChild(clone);
    };

    const timeoutId = setTimeout(() => requestAnimationFrame(measure), 0);

    return () => clearTimeout(timeoutId);
  }, [deps, props?.isCheckSize]);
  return { ref: ref, isOverflowing: isOverflowing, isDisabled: !isOverflowing };
}
