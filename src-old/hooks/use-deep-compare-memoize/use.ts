import isEqual from 'lodash/isEqual';
import { useRef } from 'react';

export const useDeepCompareMemoize = <T>(value: T): T => {
  const ref = useRef<T>(value);
  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
};
