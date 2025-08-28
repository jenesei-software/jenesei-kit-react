import { RefObject, useEffect, useMemo, useRef, useState } from 'react';

import { useTooltipProps } from '.';
import { useDeepCompareMemoize } from '../use-deep-compare-memoize';

export function useOverflowing<T extends HTMLElement>(
  props?: useTooltipProps,
): {
  isDisabled: boolean;
  isOverflowing: boolean;
  ref: RefObject<HTMLElement | null>;
} {
  const isCheckSize = useMemo(() => props?.isCheckSize ?? true, [props?.isCheckSize]);
  const isParentMode = useMemo(() => props?.mode === 'parent', [props?.mode]);

  const [isOverflowing, setIsOverflowing] = useState(props?.isOverflowing !== undefined ? props?.isOverflowing : false);
  const ref = useRef<T | null>(null);
  const dependencies = useDeepCompareMemoize(props?.dependencies);

  useEffect(() => {
    if (!isCheckSize) return;

    const checkOverflow = () => {
      const el = ref.current;
      if (!el) return;

      const scrollWidth = el.scrollWidth;
      const scrollHeight = el.scrollHeight;

      const clientWidth = isParentMode && el.parentElement ? el.parentElement.clientWidth : el.clientWidth;

      const clientHeight = isParentMode && el.parentElement ? el.parentElement.clientHeight : el.clientHeight;

      setIsOverflowing(scrollWidth > clientWidth || scrollHeight > clientHeight);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [dependencies, isCheckSize, isParentMode]);

  return { isDisabled: !isOverflowing, ref: ref, isOverflowing };
}
