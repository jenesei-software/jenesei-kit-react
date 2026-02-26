import { I_SX, I_THEME_PALETTE, I_THEME_SIZE } from '@local/styles/utils';

import React, { CSSProperties } from 'react';

import { THEME_MAP } from './component.consts';
export type I_ICON_MAP = {
  id: typeof THEME_MAP.id;
  checkbox: typeof THEME_MAP.checkbox;
  loading: typeof THEME_MAP.loading;
  logo: typeof THEME_MAP.logo;
};

export type IconProps = {
  [K in keyof I_ICON_MAP]: {
    type: K;
    name: I_ICON_MAP[K][number];
    className?: string;
    style?: CSSProperties;
    onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
    size: I_THEME_SIZE | '100%';
    color?: I_THEME_PALETTE;
    turn?: number;
    order?: number;
    tabIndex?: number;
  } & I_SX;
}[keyof I_ICON_MAP];

export type StyledIconProps = Pick<IconProps, 'size' | 'turn' | 'order'> & { color?: I_THEME_PALETTE };

export type StyledIconSkeletonProps = Pick<IconProps, 'size' | 'order'>;

export type addIconProps = {
  [T in keyof I_ICON_MAP]: Omit<IconProps, 'size'> & {
    type: T;
    name: I_ICON_MAP[T][number];
    isHidden?: boolean;
    size?: IconProps['size'];
  };
}[keyof I_ICON_MAP];

export type addIconPropsGeneric<T extends keyof I_ICON_MAP = keyof I_ICON_MAP> = {
  type: T;
  name: I_ICON_MAP[T][number];
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  size?: I_THEME_SIZE | '100%';
  color?: I_THEME_PALETTE;
  turn?: number;
  order?: number;
  tabIndex?: number;
  isHidden?: boolean;
} & I_SX;

export type getIconComponentsProps = {
  size: I_THEME_SIZE;

  icons?: addIconProps[];
};