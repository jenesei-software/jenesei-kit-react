import isEqual from 'lodash/isEqual';
import { useRef } from 'react';

export function useDeepMemo<T>(factory: () => T, deps: any[]): T {
  const valueRef = useRef<T>(undefined);
  const depsRef = useRef<any[]>(undefined);

  const nextValue = factory();

  if (!depsRef.current || !isEqual(depsRef.current, deps)) {
    depsRef.current = deps;
    valueRef.current = nextValue;
  } else if (!isEqual(valueRef.current, nextValue)) {
    valueRef.current = nextValue;
  }


  return valueRef.current as T;
}