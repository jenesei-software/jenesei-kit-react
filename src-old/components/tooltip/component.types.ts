import { PopoverProps, UsePopoverProps } from '@local/components/popover';
import { addSXProps, addSXTypographyProps } from '@local/theme';

import { PropsWithChildren, ReactNode } from 'react';

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
