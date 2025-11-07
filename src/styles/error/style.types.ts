import { addSXTypographyProps } from '@local/index';
import { addSXProps } from '@local/styles/sx';
import { IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

export type ErrorMessageDollarProps = AddDollarSign<ErrorMessageProps>;
export type ErrorMessageProps = {
  errorMessage?: string;

  isError?: boolean;

  isErrorAbsolute?: boolean;

  size?: IThemeSize;
} & addSXTypographyProps &
  addSXProps;
export interface addErrorProps {
  error?: ErrorMessageProps;
}
export type addErrorPropsDollar = AddDollarSign<addErrorProps>;
