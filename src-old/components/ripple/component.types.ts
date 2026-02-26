import { AddDollarSign } from '@local/types';

export interface RippleProps {
  duration?: number;
  color?: string;
  isDisabled?: boolean;
  isHidden?: boolean;
}

export interface RippleArrayElement {
  x: number;
  y: number;
  size: number;
}

export type RippleContainerProps = AddDollarSign<RippleProps>;
