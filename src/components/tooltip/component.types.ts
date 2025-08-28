import { PropsWithChildren, ReactNode } from 'react';

import { addSXProps } from '@local/styles/sx';

import { PopoverProps, UsePopoverProps } from '../popover';
import { addSXTypographyProps } from '../typography';

export type TooltipProps = PropsWithChildren &
  Pick<PopoverProps, 'genre' | 'size' | 'maxHeight' | 'maxWidth'> & {
    content: ReactNode;
    isDisabled?: boolean;
  } & addSXProps &
  addSXTypographyProps &
  Pick<
    UsePopoverProps,
    | 'isWidthAsContent'
    | 'offset'
    | 'isClickOutside'
    | 'isFloatingHover'
    | 'mode'
    | 'hoverCloseDelay'
    | 'hoverOffset'
    | 'placement'
  >;
