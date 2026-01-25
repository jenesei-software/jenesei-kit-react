import { addErrorProps, addErrorPropsDollar } from '@local/components/error';
import { addOutlineProps, addOutlinePropsDollar } from '@local/styles/add';
import { ITheme, IThemeSize } from '@local/styles/theme';
import { AddDollarSign } from '@local/types';

export type ToggleProps = {
  value: boolean;
  onChange?: (checked: boolean) => void;
  isDisabled?: boolean;
  genre: keyof ITheme['colors']['toggle'];
  size: IThemeSize;
} & addErrorProps &
  addOutlineProps;

export type StyledToggleProps = AddDollarSign<Pick<ToggleProps, 'genre' | 'isDisabled' | 'value' | 'size'>> &
  addErrorPropsDollar &
  addOutlinePropsDollar;
