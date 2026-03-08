import { useCallback, useRef } from 'react';

export const useDebouncedCallback = (callback: () => void, delay: number = 300) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedCallback = useCallback(() => {
    if (timeoutRef.current) return;

    callback();

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
};
