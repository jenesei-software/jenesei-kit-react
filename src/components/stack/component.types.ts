import { addSXProps } from '@local/styles/sx';
import { AddDollarSign } from '@local/types';

import { AnimationProps, DraggableProps, LayoutProps } from 'framer-motion';
import { CSSProperties, DragEvent, DragEventHandler, PropsWithChildren, Ref } from 'react';

export interface StackProps extends addSXProps, PropsWithChildren {
  className?: string;

  isHover?: boolean;

  isRipple?: boolean;

  onClick?: () => void;

  onDragOver?: DragEventHandler<HTMLDivElement>;

  onDrop?: (e: DragEvent<HTMLDivElement>) => void;

  ref?: Ref<HTMLDivElement | null>;
}

export type StackMotionProps = StackProps &
  LayoutProps &
  AnimationProps &
  DraggableProps & {
    style?: CSSProperties;
  };

export type StyledStackProps = AddDollarSign<StackProps>;
