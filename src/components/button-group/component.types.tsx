import { ButtonProps } from '@local/components/button/export';
import { addSXProps, addSXPropsDollar } from '@local/styles/add/export';
import { AddDollarSign } from '@local/types';

export type ButtonGroupProps = {
  value: ButtonProps[];
  className?: string;
  position: 'horizontal' | 'vertical';
} & addSXProps;

export type StyledButtonGroupProps = AddDollarSign<Pick<ButtonGroupProps, 'position'>> & addSXPropsDollar;
