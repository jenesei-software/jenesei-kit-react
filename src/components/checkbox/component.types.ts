import { addErrorProps, addErrorPropsDollar } from '@local/components/error';
import { addIconProps } from '@local/components/icon';
import { 
  addOutlineProps,
  addOutlinePropsDollar,
  addSXProps,
  addSXPropsDollar,
  addSXTypographyProps,
  addSXTypographyPropsDollar,IThemeGenre, IThemeSize, } from '@local/theme';
import { AddDollarSign } from '@local/types';

import { PropsWithChildren } from 'react';

export type CheckboxProps = PropsWithChildren & {
  checked?: boolean;

  genre: TCheckboxGenre;

  view: {
    true: addIconProps;
    false: addIconProps;
  };

  isDisabled?: boolean;

  isOnlyLoading?: boolean;

  isLoading?: boolean;

  isHiddenBorder?: boolean;

  isNotBackground?: boolean;

  onChange?: (checked: boolean) => void;

  isWidthAsHeight?: boolean;

  size: IThemeSize;
} & addSXProps &
  addErrorProps &
  addSXTypographyProps &
  addOutlineProps;

export type StyledCheckboxProps = AddDollarSign<
  Pick<
    CheckboxProps,
    'checked' | 'genre' | 'view' | 'isWidthAsHeight' | 'size' | 'isDisabled' | 'isNotBackground' | 'isHiddenBorder'
  >
> &
  addSXPropsDollar &
  addErrorPropsDollar &
  addSXTypographyPropsDollar &
  addOutlinePropsDollar;

export type TCheckboxGenre = keyof IThemeGenre;

export type StyledIconProps = AddDollarSign<Pick<CheckboxProps, 'genre' | 'checked'>>;
