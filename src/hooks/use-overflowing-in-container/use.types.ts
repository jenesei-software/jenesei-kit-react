import { RefObject } from 'react';

export interface useOverflowingInContainerProps {
  isOverflowing?: boolean;
  isCheckSize?: boolean;
  ref: RefObject<HTMLElement | null>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dependencies?: any[];
}
