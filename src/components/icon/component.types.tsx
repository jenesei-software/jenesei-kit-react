import { IThemePalette, IThemeSize } from '@local/styles/utils';

import { CSSProperties, MouseEvent } from 'react';

import { THEME_MAP } from './component.consts';

export type IIconMao = {
  id: typeof THEME_MAP.id;
  checkbox: typeof THEME_MAP.checkbox;
  loading: typeof THEME_MAP.loading;
  logo: typeof THEME_MAP.logo;
};

export type IIcon = {
  [K in keyof IIconMao]: {
    type: K;
    name: IIconMao[K][number];
    className?: string;
    style?: CSSProperties;
    onClick?: (event: MouseEvent<SVGSVGElement>) => void;
    size: IThemeSize | '100%';
    color?: IThemePalette;
    turn?: number;
    order?: number;
    tabIndex?: number;
  };
}[keyof IIconMao];

export type IAddIIcon = {
  [T in keyof IIconMao]: Omit<IIcon, 'size'> & {
    type: T;
    name: IIconMao[T][number];
    isHidden?: boolean;
    size?: IIcon['size'];
  };
}[keyof IIconMao];

export type IAddIIconGeneric<T extends keyof IIconMao = keyof IIconMao> = {
  type: T;
  name: IIconMao[T][number];
  className?: string;
  onClick?: (event: MouseEvent<SVGSVGElement>) => void;
  size?: IThemeSize | '100%';
  color?: IThemePalette;
  turn?: number;
  order?: number;
  tabIndex?: number;
  isHidden?: boolean;
};

export type IGetIconComponentsProps = {
  size: IThemeSize;

  icons?: IAddIIcon[];
};
