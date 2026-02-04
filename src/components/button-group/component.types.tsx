import { ButtonProps } from '@local/components/button';
import { addSXProps, addSXPropsDollar } from '@local/theme';
import { AddDollarSign } from '@local/types';

export type ButtonGroupProps = {
  value: ButtonProps[];
  className?: string;
  position: 'horizontal' | 'vertical';
} & addSXProps;

export type StyledButtonGroupProps = AddDollarSign<Pick<ButtonGroupProps, 'position'>> & addSXPropsDollar;
