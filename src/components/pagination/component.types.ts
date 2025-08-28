import { ButtonProps } from '@local/components/button';
import { addSXProps } from '@local/styles/sx';

export type PaginationProps = {
  buttonControl: Pick<ButtonProps, 'size' | 'genre' | 'isRadius' | 'isWidthAsHeight' | 'isPlaystationEffect'>;
  buttonCount: {
    active: Pick<ButtonProps, 'size' | 'genre' | 'isRadius' | 'isPlaystationEffect'>;
    inactive: Pick<ButtonProps, 'size' | 'genre' | 'isRadius' | 'isPlaystationEffect'>;
  };
  gap?: number;
  index: number;
  lengthData?: Record<number, Pick<ButtonProps, 'genre' | 'icons'>>;
  length: number;
  isInfinity?: boolean;
  viewQuantity: number;
  changeIndex: (index: number) => void;
  locale: {
    prev: string;
    next: string;
  };
} & addSXProps;
