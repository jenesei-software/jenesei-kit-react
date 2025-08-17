import { addOutlineProps, addOutlinePropsDollar } from '@local/styles/add';
import { addErrorProps, addErrorStylesProps } from '@local/styles/error';
import { IThemeGenreToggle, IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

export type ToggleProps = {
  value: boolean;
  onChange?: (checked: boolean) => void;
  isDisabled?: boolean;
  genre: TToggleGenre;
  size: IThemeSize;
} & addErrorProps &
  addOutlineProps;

export type TToggleGenre = keyof IThemeGenreToggle;

export type StyledToggleProps = AddDollarSign<Pick<ToggleProps, 'genre' | 'isDisabled' | 'value' | 'size'>> &
  addErrorStylesProps &
  addOutlinePropsDollar;
