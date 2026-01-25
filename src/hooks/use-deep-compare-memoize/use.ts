import isEqual from 'lodash/isEqual';
import { useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const isDeepEqual = (a: any, b: any): boolean => {
//   if (a === b) return true;
//   if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;

//   const keysA = Object.keys(a);
//   const keysB = Object.keys(b);

//   if (keysA.length !== keysB.length) return false;

//   for (const key of keysA) {
//     if (!Object.prototype.hasOwnProperty.call(b, key) || !isDeepEqual(a[key], b[key])) {
//       return false;
//     }
//   }

//   return true;
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDeepCompareMemoize = <T>(value: T): T => {
  const ref = useRef<T>(value);
  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
};
