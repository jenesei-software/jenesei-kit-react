import { CheckboxProps } from '@local/components/checkbox';
import { addFontProps } from '@local/styles/add';
import { addSXProps, addSXStyleProps } from '@local/styles/sx';
import { AddDollarSign } from '@local/types';

export interface ICheckboxValue {
  label: string | number;
  value: string | number;
}

export type CheckboxGroupProps<T extends ICheckboxValue> = {
  checkboxGenre: CheckboxProps['genre'];

  checkBoxView: CheckboxProps['view'];

  checkboxSX?: CheckboxProps['sx'];

  checkboxIsHiddenBorder?: CheckboxProps['isHiddenBorder'];

  className?: string;

  childrenField?: keyof T;

  isClickOnlyIcon?: boolean;

  size: CheckboxProps['size'];

  labelField?: keyof T;

  multiple?: boolean;

  onChange?: (props: T[]) => void;

  options: T[];

  value: T[];

  valueField: keyof T;
} & addSXProps &
  addFontProps;

export type CheckboxGroupWrapperProps = AddDollarSign<Pick<CheckboxGroupProps<ICheckboxValue>, 'size' | 'font'>> &
  addSXStyleProps;
