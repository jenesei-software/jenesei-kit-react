import { addSXProps, addSXTypographyProps } from '@local/styles/add/export';
import { IThemeSize } from '@local/styles/theme/export';
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
