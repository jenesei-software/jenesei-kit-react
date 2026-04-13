import { ISx } from '@local/styles/utils';
import { IThemeScrollbarGutter } from '@local/styles/utils/types';

import { AnimationProps, DraggableProps, FocusHandlers, HoverHandlers, LayoutProps, TapHandlers } from 'framer-motion';
import { CSSProperties, DragEvent, DragEventHandler, JSX, PropsWithChildren, Ref } from 'react';

export interface IStack extends ISx, PropsWithChildren {
  className?: string;

  isHover?: boolean;

  id?: string;

  isRipple?: boolean;

  as?: keyof JSX.IntrinsicElements;

  scrollbarGutter?: IThemeScrollbarGutter;

  onClick?: () => void;

  onDragOver?: DragEventHandler<HTMLDivElement>;

  onDrop?: (e: DragEvent<HTMLDivElement>) => void;

  ref?: Ref<HTMLDivElement | null>;

  style?: CSSProperties | undefined;
}

export type IStackMotion = IStack &
  LayoutProps &
  AnimationProps &
  HoverHandlers &
  TapHandlers &
  FocusHandlers &
  DraggableProps & {
    style?: CSSProperties;
  };
