import { addSXProps, addSXStyleProps } from '@local/styles/sx';
import { IThemePaletteKeys, IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

import React from 'react';
import { DefaultTheme } from 'styled-components';

export type IconItemProps = {
  [K in keyof DefaultTheme['icon']['map']]: {
    type: K;
    name: DefaultTheme['icon']['map'][K][number];
    className?: string;
    onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
    size: IThemeSize | '100%';
    color?: IThemePaletteKeys;
    turn?: number;
    order?: number;
    tabIndex?: number;
  } & addSXProps;
}[keyof DefaultTheme['icon']['map']];

export type StyledIconItemProps = AddDollarSign<
  Pick<IconItemProps, 'size' | 'turn' | 'order'> & { color?: IThemePaletteKeys }
> &
  addSXStyleProps;

export type addIconProps = {
  [T in keyof DefaultTheme['icon']['map']]: Omit<IconItemProps, 'size'> & {
    type: T;
    name: DefaultTheme['icon']['map'][T][number];
    isHidden?: boolean;
    size?: IconItemProps['size'];
  };
}[keyof DefaultTheme['icon']['map']];

export type addIconPropsGeneric<T extends keyof DefaultTheme['icon']['map'] = keyof DefaultTheme['icon']['map']> = {
  type: T;
  name: DefaultTheme['icon']['map'][T][number];
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  size?: IThemeSize | '100%';
  color?: IThemePaletteKeys;
  turn?: number;
  order?: number;
  tabIndex?: number;
  isHidden?: boolean;
} & addSXProps;

export type getIconComponentsProps = {
  size: IThemeSize;

  icons?: addIconProps[];
};
