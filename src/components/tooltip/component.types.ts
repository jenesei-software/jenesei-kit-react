import { IPopover, IUsePopover } from '@local/components/popover';
import { ITypography } from '@local/styles/utils';

import { CSSProperties, PropsWithChildren, ReactNode } from 'react';

export type ITooltip = PropsWithChildren &
  Pick<IPopover, 'genre' | 'size' | 'maxHeight' | 'maxWidth'> & {
  content: ReactNode;
  isDisabled?: boolean;
  classNameWrapper?: string;
  styleWrapper?: CSSProperties;
  classNamePopover?: string;
  stylePopover?: CSSProperties;
  sxTypography?: ITypography;
  } &
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
