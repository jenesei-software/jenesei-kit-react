import { StackProps } from '@local/components/stack';
import { AddDollarSign } from '@local/types';

type SkeletonDefaultProps = {
  defaultVisible?: boolean;
  type?: 'primary' | 'secondary';
};

interface SkeletonIsShowProps extends SkeletonDefaultProps {
  visible: boolean;
}

interface SkeletonTimeProps extends SkeletonDefaultProps {
  time: number;
}

export type SkeletonProps = StackProps & (SkeletonIsShowProps | SkeletonTimeProps);
export type StyledSkeletonProps = StackProps &
  AddDollarSign<Pick<SkeletonIsShowProps & SkeletonTimeProps, 'visible' | 'type'>>;
