

import { IButton } from '@local/components/button';

import { CSSProperties } from 'react';

export type IPagination = {
  buttonControl: Pick<IButton, 'size' | 'genre' | 'isFullRadius' | 'isWidthAsHeight'>;
  buttonCount: {
    active: Pick<IButton, 'size' | 'genre' | 'isFullRadius'>;
    inactive: Pick<IButton, 'size' | 'genre' | 'isFullRadius'>;
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
  className?:string;
  style:CSSProperties
};
