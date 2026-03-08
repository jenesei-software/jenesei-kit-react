import { IStack } from '@local/components/stack';
import { IThemePalette } from '@local/styles/utils';

import { CSSProperties } from 'react';

type ISkeletonDefault = {
  className?: string;
  style?: CSSProperties;
  defaultVisible?: boolean;
  type?: 'primary' | 'secondary';
  color?: IThemePalette;
  colorLine?: IThemePalette;
  isInheritColor?: boolean;
  isLiquid?: boolean;
};

interface ISkeletonIsShow extends ISkeletonDefault {
  visible: boolean;
}

interface ISkeletonTime extends ISkeletonDefault {
  time: number;
}

export type ISkeleton = IStack & (ISkeletonIsShow | ISkeletonTime);
