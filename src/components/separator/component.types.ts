import { addSXProps } from '@local/styles/add/export';
import { IThemePaletteKeys } from '@local/styles/theme/export';
import { AddDollarSign } from '@local/types';

export interface SeparatorProps {
  sx?: addSXProps['sx'];
  radius?: string;
  type?: 'horizontal' | 'vertical';
  color?: IThemePaletteKeys;
  thickness?: string;
}

export type SeparatorWrapperProps = AddDollarSign<
  Pick<SeparatorProps, 'sx' | 'radius' | 'color' | 'type' | 'thickness'>
>;
