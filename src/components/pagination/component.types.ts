import { ISx } from '@local/styles/utils';

import { IButton } from '../button';

export type IPagination = {
  buttonControl: Pick<IButton, 'size' | 'genre' | 'isRadius' | 'isWidthAsHeight'>;
  buttonCount: {
    active: Pick<IButton, 'size' | 'genre' | 'isRadius'>;
    inactive: Pick<IButton, 'size' | 'genre' | 'isRadius'>;
  };
  gap?: number;
  index: number;
  lengthData?: Record<number, Pick<IButton, 'genre' | 'icons'>>;
  length: number;
  isInfinity?: boolean;
  viewQuantity: number;
  changeIndex: (index: number) => void;
  locale: {
    prev: string;
    next: string;
  };
} & ISx;
