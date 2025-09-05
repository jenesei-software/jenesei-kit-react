import { addSXProps, addSXStyleProps } from '@local/styles/sx';
import { IThemePaletteKeys, IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

import React from 'react';
import { DefaultTheme } from 'styled-components/dist/types';

export type IconItemProps<T extends keyof DefaultTheme['icon']['map']> = {
  type: T;
  name: DefaultTheme['icon']['map'][T][number];
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  size: IThemeSize | '100%';
  primaryColor?: IThemePaletteKeys;
  secondColor?: IThemePaletteKeys;
  turn?: number;
  order?: number;
  tabIndex?: number;
} & addSXProps;

export type StyledIconItemProps = AddDollarSign<
  Pick<IconItemProps<'id'>, 'size' | 'turn' | 'order'> & { color?: IThemePaletteKeys }
> &
  addSXStyleProps;

export type addIconsGetIconComponentsProps = Array<{
  [T in keyof DefaultTheme['icon']['map']]: Omit<IconItemProps<T>, 'size'> & { 
    isHidden?: boolean; 
    size?: IconItemProps<T>['size'] 
  }
}[keyof DefaultTheme['icon']['map']]>;

export type getIconComponentsProps = {
  icons?: addIconsGetIconComponentsProps;
  size: IThemeSize;
};
