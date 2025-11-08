import { addIconProps } from '@local/components/icon/export';
import {
  addOutlineProps,
  addOutlinePropsDollar,
  addSXProps,
  addSXPropsDollar,
  addSXTypographyProps,
  addSXTypographyPropsDollar,
} from '@local/styles/add/export';
import { IThemeGenre, IThemeSize } from '@local/styles/theme/export';
import { AddDollarSign } from '@local/types';

import React, { PropsWithChildren, Ref } from 'react';

export type TButtonGenre = keyof IThemeGenre;

type ButtonPropsDefault = PropsWithChildren & {
  size: IThemeSize;
  genre: TButtonGenre;

  id?: string;

  tabIndex?: number;

  ref?: Ref<HTMLElement | null>;

  className?: string;

  icons?: addIconProps[];

  isDisabled?: boolean;

  isDisabledRipple?: boolean;

  isHidden?: boolean;

  isOnlyIcon?: boolean;

  isWhileTapEffect?: boolean;

  isWidthAsHeight?: boolean;

  isMinWidthAsContent?: boolean;

  isRadius?: boolean;

  isHiddenBorder?: boolean;

  isPlaystationEffect?: boolean;

  isNotHoverEffect?: boolean;

  isFullSize?: boolean;

  onFocus?: (event: React.FocusEvent<HTMLButtonElement, Element>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit' | 'reset';
} & addSXProps &
  addOutlineProps &
  addSXTypographyProps;

export type ButtonPropsStandard = ButtonPropsDefault & {
  isIconGroup?: false;
};
export type ButtonPropsIconGroup = ButtonPropsDefault & {
  isIconGroup?: true;
  iconGroupOrder?: number;
};

export type ButtonProps = ButtonPropsStandard | ButtonPropsIconGroup;
export type StyledButtonPropsDollar = AddDollarSign<
  Pick<
    ButtonProps,
    | 'genre'
    | 'isDisabled'
    | 'isHidden'
    | 'isWidthAsHeight'
    | 'isMinWidthAsContent'
    | 'isRadius'
    | 'isHiddenBorder'
    | 'isPlaystationEffect'
    | 'size'
    | 'isFullSize'
    | 'isNotHoverEffect'
  >
> &
  addSXPropsDollar &
  addOutlinePropsDollar &
  addSXTypographyPropsDollar;

export type StyledButtonIconsWrapperPropsDollar = AddDollarSign<
  Pick<ButtonProps, 'isIconGroup' | 'size'> & Pick<ButtonPropsIconGroup, 'iconGroupOrder'>
>;
