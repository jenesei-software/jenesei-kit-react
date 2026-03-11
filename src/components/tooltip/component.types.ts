import { IPopover, IUsePopover } from '@local/components/popover';
import { ISxTypography } from '@local/styles/utils';

import { PropsWithChildren, ReactNode } from 'react';

export type ITooltip = PropsWithChildren &
  Pick<IPopover, 'genre' | 'size' | 'maxHeight' | 'maxWidth' | 'className' | 'style'> & {
    content: ReactNode;
    isDisabled?: boolean;
  } & ISxTypography &
  Pick<
    IUsePopover,
    | 'isWidthAsContent'
    | 'offset'
    | 'isClickOutside'
    | 'isFloatingHover'
    | 'mode'
    | 'hoverCloseDelay'
    | 'hoverOffset'
    | 'placement'
  >;
