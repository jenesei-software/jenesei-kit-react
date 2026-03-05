import { IAddIIcon } from '@local/components/icon';
import { ISx, ISxOutline, ISxTypography, IThemeGenreButton, IThemeOutline, IThemeSize } from '@local/styles/utils/types';

import { CSSProperties, FocusEvent, MouseEventHandler, PropsWithChildren, Ref } from 'react';

type IButtonDefault = PropsWithChildren & {
  size: IThemeSize;

  genre: IThemeGenreButton;

  id?: string;

  tabIndex?: number;

  ref?: Ref<HTMLElement | null>;

  className?: string;

  style?: CSSProperties;
  
  icons?: IAddIIcon[];

  isDisabled?: boolean;

  isHidden?: boolean;

  isOnlyIcon?: boolean;

  isWhileTapEffect?: boolean;

  isWidthAsHeight?: boolean;

  isMinWidthAsContent?: boolean;

  isRadius?: boolean;

  isHiddenBorder?: boolean;

  isNotHoverEffect?: boolean;

  isFullSize?: boolean;

  outline?: IThemeOutline;
  
  onFocus?: (event: FocusEvent<HTMLButtonElement, Element>) => void;

  onClick?: MouseEventHandler<HTMLButtonElement>;

  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  
  type?: 'button' | 'submit' | 'reset';
} & ISx &
  ISxOutline &
  ISxTypography;

type IButtonStandard = IButtonDefault & {
  isIconGroup?: false;
};
type IButtonIconGroup = IButtonDefault & {
  isIconGroup?: true;
  iconGroupOrder?: number;
};

export type IButton = IButtonStandard | IButtonIconGroup;
