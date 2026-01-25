import { addSXProps, addSXPropsDollar } from '@local/styles/add';
import { IThemePaletteKeys, IThemeSize } from '@local/styles/theme';
import { AddDollarSign } from '@local/types';

import React from 'react';
import { DefaultTheme } from 'styled-components';

export type IconProps = {
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

export type StyledIconProps = AddDollarSign<
  Pick<IconProps, 'size' | 'turn' | 'order'> & { color?: IThemePaletteKeys }
> &
  addSXPropsDollar;

export type StyledIconSkeletonProps = AddDollarSign<Pick<IconProps, 'size' | 'order'>>;

export type addIconProps = {
  [T in keyof DefaultTheme['icon']['map']]: Omit<IconProps, 'size'> & {
    type: T;
    name: DefaultTheme['icon']['map'][T][number];
    isHidden?: boolean;
    size?: IconProps['size'];
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
