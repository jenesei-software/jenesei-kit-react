import { CheckboxProps } from '@local/components/checkbox/export';
import { addSXProps, addSXPropsDollar, addSXTypographyProps } from '@local/styles/add/export';
import { AddDollarSign } from '@local/types';

export interface CheckboxGroupValueProps {
  label: string | number;
  value: string | number;
}

export type CheckboxGroupProps<T extends CheckboxGroupValueProps> = {
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
  addSXTypographyProps;

export type CheckboxGroupWrapperProps = AddDollarSign<
  Pick<CheckboxGroupProps<CheckboxGroupValueProps>, 'size' | 'sxTypography'>
> &
  addSXPropsDollar;
