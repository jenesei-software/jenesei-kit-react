import { RefObject } from 'react';

export interface useOverflowingInContainerProps {
  isOverflowing?: boolean;
  isCheckSize?: boolean;
  ref: RefObject<HTMLElement | null>;
  dependencies?: unknown[];
}
