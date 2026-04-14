import { ITypography } from '@local/styles/utils/types';

import { CSSProperties } from 'react';

export type IUseTypographyStyles = {
  sx: ITypography;
  className?: string;
  style?: CSSProperties;
};

export interface IUseTypographyStylesResult {
  className: string;
  style?: CSSProperties;
}
