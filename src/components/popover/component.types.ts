import { addErrorStylesProps } from '@local/styles/error';
import { addSXProps, addSXStyleProps } from '@local/styles/sx';
import { IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

import { Placement } from '@floating-ui/react';
import { CSSProperties, PropsWithChildren, Ref } from 'react';

import { TButtonGenre } from '../button';
import { addSXTypographyProps, addSXTypographyStyleProps } from '../typography';

export type PopoverProps = PropsWithChildren & {
  className?: string;
  maxWidth?: string;
  maxHeight?: string;
  isOpen: boolean;
  isShowAlwaysOutline?: boolean;
  floatingStyles: CSSProperties;
  onClose?: () => void;
  ref?: Ref<HTMLElement | null>;
  size?: IThemeSize;
  genre?: TButtonGenre;
} & addSXProps &
  addSXTypographyProps;

export type StyledPopoverProps = AddDollarSign<
  Pick<PopoverProps, 'maxWidth' | 'maxHeight' | 'size' | 'isShowAlwaysOutline'> & Required<Pick<PopoverProps, 'genre'>>
> &
  addSXStyleProps &
  addErrorStylesProps &
  addSXTypographyStyleProps;

export type UsePopoverProps = {
  hoverCloseDelay?: number;

  hoverOffset?: number;

  isClickOutside?: boolean;

  isDisabled?: boolean;

  isFloatingHover?: boolean;

  isWidthAsContent?: boolean;

  mode?: 'click' | 'hover' | 'clickOpen' | 'independence';

  offset?: number;

  placement: Placement;

  refsExcludeClickOutside?: Ref<HTMLElement | null>[];
  refsExcludeBlur?: Ref<HTMLElement | null>[];

  onFocus?: () => void;
  onBlur?: () => void;
  onBlurReference?: () => void;
};
