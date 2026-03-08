import { ISxTypography, IThemeSize } from '@local/styles/utils';

import { CSSProperties } from 'react';

export type IErrorMessage = {
  errorMessage?: string;

  isError?: boolean;

  isErrorAbsolute?: boolean;

  size?: IThemeSize;

  className?: string;
  
  style?: CSSProperties;
} & ISxTypography;

export interface IAddError {
  error?: IErrorMessage;
}
