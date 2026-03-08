import { IThemePalette } from '@local/styles/utils';

import { CSSProperties } from 'react';

export interface ISeparator {
  radius?: string;
  type?: 'horizontal' | 'vertical';
  color?: IThemePalette;
  thickness?: string;
  className?: string;
  style?: CSSProperties;
}