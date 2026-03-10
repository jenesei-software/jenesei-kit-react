import { IAddIIcon } from '@local/components/icon';
import { ISx, ISxTypography, IThemeControl, IThemeGenreButton, IThemeSize } from '@local/styles/utils/types';

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

  isFullRadius?: boolean;

  isWhileTapEffect?: boolean;

  isWidthAsHeight?: boolean;

  isZeroRadius?: boolean;

  name?: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;

  onFocus?: FocusEventHandler<HTMLButtonElement>;

  onMouseDown?: MouseEventHandler<HTMLButtonElement>;

  control?: IThemeControl;

  ref?: Ref<HTMLElement | null>;

  size: IThemeSize;

  style?: CSSProperties;

  tabIndex?: number;

  type?: HTMLButtonElement['type'];
} & ISx &
  ISxTypography;

type IButtonStandard = IButtonDefault & {
  isIconGroup?: false;
};
type IButtonIconGroup = IButtonDefault & {
  isIconGroup?: true;

  iconGroupOrder?: number;
};

export type IButton = IButtonStandard | IButtonIconGroup;