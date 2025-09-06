import { addIconProps } from '@local/components/icon';
import { addFontProps, addOutlineProps, addOutlinePropsDollar } from '@local/styles/add';
import { addSXProps, addSXStyleProps } from '@local/styles/sx';
import { IThemeGenre, IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

import React, { PropsWithChildren, Ref } from 'react';

import { addSXTypographyProps, addSXTypographyStyleProps } from '../typography';

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
  addFontProps &
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
export type StyledDollarButtonProps = AddDollarSign<
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
    | 'font'
  >
> &
  addSXStyleProps &
  addOutlinePropsDollar &
  addSXTypographyStyleProps;

export type StyledDollarButtonIconsWrapperProps = AddDollarSign<
  Pick<ButtonProps, 'isIconGroup' | 'size'> & Pick<ButtonPropsIconGroup, 'iconGroupOrder'>
>;
