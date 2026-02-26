import { StackProps } from '@local/components/stack';
import { I_THEME_PALETTE } from '@local/styles/utils';

import { CSSProperties } from 'react';

type SkeletonDefaultProps = {
  className?: string;
  style?: CSSProperties;
  defaultVisible?: boolean;
  type?: 'primary' | 'secondary';
  color?: I_THEME_PALETTE;
  colorLine?: I_THEME_PALETTE;
  isInheritColor?: boolean;
};

interface SkeletonIsShowProps extends SkeletonDefaultProps {
  visible: boolean;
}

interface SkeletonTimeProps extends SkeletonDefaultProps {
  time: number;
}

export type SkeletonProps = StackProps & (SkeletonIsShowProps | SkeletonTimeProps);
export type StyledSkeletonProps = Pick<SkeletonIsShowProps, 'visible' | 'type' | 'color' | 'isInheritColor'>;
