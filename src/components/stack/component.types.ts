import { I_SX } from '@local/theme';

import { AnimationProps, DraggableProps, FocusHandlers, HoverHandlers, LayoutProps, TapHandlers } from 'framer-motion';
import { CSSProperties, DragEvent, DragEventHandler, JSX, PropsWithChildren, Ref } from 'react';

export interface StackProps extends I_SX, PropsWithChildren {
  className?: string;

  isHover?: boolean;

  id?: string;
  
  isRipple?: boolean;

  as?: keyof JSX.IntrinsicElements;

  onClick?: () => void;

  onDragOver?: DragEventHandler<HTMLDivElement>;

  onDrop?: (e: DragEvent<HTMLDivElement>) => void;

  ref?: Ref<HTMLDivElement | null>;

  style?: CSSProperties;
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
