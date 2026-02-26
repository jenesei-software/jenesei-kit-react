import { addErrorProps, addErrorPropsDollar } from '@local/components/error';
import { addOutlineProps, addOutlinePropsDollar, ITheme, IThemeSize } from '@local/theme';
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
