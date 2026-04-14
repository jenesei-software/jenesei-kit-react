import { Ref, useMemo } from 'react';

export function useMergeRefs<T>(refs: Array<Ref<T> | undefined>): Ref<T> | null {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) return null;

    return (node: T | null) => {
      refs.forEach((ref) => {
        if (!ref) return;
        if (typeof ref === 'function') {
          ref(node);
        } else {
          // @ts-ignore
          ref.current = node;
        }
      });
    };
  }, [refs]);
}
