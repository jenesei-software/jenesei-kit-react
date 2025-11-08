import { PopoverProps, UsePopoverProps } from '@local/components/popover/export';
import { addSXProps, addSXTypographyProps } from '@local/styles/add/export';

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
