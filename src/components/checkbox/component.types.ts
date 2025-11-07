import { addIconProps } from '@local/components/icon';
import { addOutlineProps, addOutlinePropsDollar } from '@local/styles/add';
import { addErrorProps, addErrorPropsDollar } from '@local/styles/error';
import { addSXProps, addSXPropsDollar } from '@local/styles/sx';
import { IThemeGenre, IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

import { PropsWithChildren } from 'react';

import { addSXTypographyProps, addSXTypographyPropsDollar } from '../typography';

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
