import { StackProps } from '@local/components/stack/export';
import { IThemePaletteKeys } from '@local/styles/theme/export';
import { AddDollarSign } from '@local/types';

type SkeletonDefaultProps = {
  className?: string;
  defaultVisible?: boolean;
  type?: 'primary' | 'secondary';
  color?: IThemePaletteKeys;
  isInheritColor?: boolean;
};

interface SkeletonIsShowProps extends SkeletonDefaultProps {
  visible: boolean;
}

interface SkeletonTimeProps extends SkeletonDefaultProps {
  time: number;
}

export type SkeletonProps = StackProps & (SkeletonIsShowProps | SkeletonTimeProps);
export type StyledSkeletonProps = StackProps &
  AddDollarSign<Pick<SkeletonIsShowProps & SkeletonTimeProps, 'visible' | 'type' | 'color' | 'isInheritColor'>>;
