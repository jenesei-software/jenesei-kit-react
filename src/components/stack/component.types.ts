import { addSXProps } from '@local/styles/sx';
import { AddDollarSign } from '@local/types';

import { AnimationProps, DraggableProps, FocusHandlers, HoverHandlers, LayoutProps, TapHandlers } from 'framer-motion';
import { CSSProperties, DragEvent, DragEventHandler, JSX, PropsWithChildren, Ref } from 'react';

export interface StackProps extends addSXProps, PropsWithChildren {
  className?: string;

  isHover?: boolean;

  isRipple?: boolean;

  as?: keyof JSX.IntrinsicElements;

  onClick?: () => void;

  onDragOver?: DragEventHandler<HTMLDivElement>;

  onDrop?: (e: DragEvent<HTMLDivElement>) => void;

  ref?: Ref<HTMLDivElement | null>;
}

export type StackMotionProps = StackProps &
  LayoutProps &
  AnimationProps &
  HoverHandlers &
  TapHandlers &
  FocusHandlers &
  DraggableProps & {
    style?: CSSProperties;
  };

export type StyledStackProps = AddDollarSign<StackProps>;
