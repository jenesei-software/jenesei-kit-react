import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';

import { useTooltipProps } from '.';

export function useOverflowingInContainer<T extends HTMLElement>(
  props?: useTooltipProps,
): {
  isDisabled: boolean;
  isOverflowing: boolean;
  ref: MutableRefObject<T | null>;
} {
  const { ref } = props || {};
  const isCheckSize = useMemo(() => props?.isCheckSize ?? true, [props?.isCheckSize]);

  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isCheckSize) return;

    const el = elementRef.current;

    const container = ref?.current;

    if (!el || !container) return;

    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const fitsHorizontally = elRect.left >= containerRect.left && elRect.right <= containerRect.right;

    const fitsVertically = elRect.top >= containerRect.top && elRect.bottom <= containerRect.bottom;

    setIsVisible(fitsHorizontally && fitsVertically);
  }, [isCheckSize, ref]);

  return { ref: elementRef, isOverflowing: !isVisible, isDisabled: isVisible };
}
