import { IAddIIcon } from '@local/components/icon';
import { IThemeControl, IThemeGenreButton, IThemeSize, ITypography } from '@local/styles/utils/types';

import { CSSProperties, FocusEventHandler, MouseEventHandler, PropsWithChildren, Ref } from 'react';

type IButtonDefault = PropsWithChildren & {
  ariaLabel?: string;

  className?: string;

  genre: IThemeGenreButton;

  icons?: IAddIIcon[];

  id?: string;

  isDisabled?: boolean;

  isFullSize?: boolean;

  isHidden?: boolean;

  isHiddenBorder?: boolean;

  isMinWidthAsContent?: boolean;

  isOnlyIcon?: boolean;

  isZeroPadding?: boolean;
  
  isSizeFitContent?: boolean;

  isFullRadius?: boolean;

  isWidthAsHeight?: boolean;

  isZeroRadius?: boolean;

  name?: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;

  onFocus?: FocusEventHandler<HTMLButtonElement>;

  onMouseDown?: MouseEventHandler<HTMLButtonElement>;

  control?: IThemeControl;

  sxTypography?: ITypography;
  
  ref?: Ref<HTMLElement | null>;

  size: IThemeSize;

  style?: CSSProperties;

  tabIndex?: number;

  type?: HTMLButtonElement['type'];
};

type IButtonStandard = IButtonDefault & {
  isIconGroup?: false;
};
type IButtonIconGroup = IButtonDefault & {
  isIconGroup?: true;

  iconGroupOrder?: number;
};

export type IButton = IButtonStandard | IButtonIconGroup;