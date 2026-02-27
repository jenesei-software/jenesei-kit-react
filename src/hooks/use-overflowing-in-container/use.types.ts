import { RefObject } from 'react';

export interface IUseOverflowingInContainer {
  isOverflowing?: boolean;
  isCheckSize?: boolean;
  ref: RefObject<HTMLElement | null>;
  dependencies?: unknown[];
}
