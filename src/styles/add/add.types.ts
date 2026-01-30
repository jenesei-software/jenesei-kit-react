import {
  IThemeDevice,
  IThemeFontFamily,
  IThemePaletteKeys,
  IThemeTypographyHeading,
  IThemeTypographyWeight,
} from '@local/styles/theme';
import { AddDollarSign } from '@local/types';

import { CSSProperties } from 'react';
import { DefaultTheme } from 'styled-components';

import { IThemeGlobal } from '../theme/theme.vanilla-extract.types.ts';

type TypographyDefaultProps = {
  align?: CSSProperties['textAlign'];

  color?: IThemePaletteKeys;

  cursor?: CSSProperties['cursor'];

  decoration?: CSSProperties['textDecoration'];

  family?: IThemeFontFamily;

  isTransitionFontSize?: boolean;
  
  flex?: string;

  height?: number | string;

  isHoverUnderlining?: boolean;

  letterSpacing?: CSSProperties['letterSpacing'];

  line?: number;

  overflow?: CSSProperties['overflow'];

  shadow?: 'shadowPulse';

  transform?: CSSProperties['textTransform'];

  weight?: IThemeTypographyWeight;

  wrap?: CSSProperties['textWrap'];

  isNoUserSelect?: boolean;
};

type TypographyDataProps = TypographyDefaultProps & {
  size?: number | string;
};

type TypographyVariantProps = TypographyDefaultProps & {
  variant: IThemeTypographyHeading;
};

export type TypographyAllProps = TypographyDataProps | TypographyVariantProps;

export type NormalizedSXTypography = {
  default?: TypographyAllProps;
  breakpoints?: Record<IThemeDevice | string, TypographyAllProps>;
  horizontal?: TypographyAllProps;
  vertical?: TypographyAllProps;
};

export type TypographySXProps = NormalizedSXTypography | ((theme: DefaultTheme) => NormalizedSXTypography);

export type addSXTypographyProps = {
  sxTypography?: TypographySXProps;
};

export type addSXTypographyPropsNew = {
  sxTypography?: NormalizedSXTypography | ((theme: IThemeGlobal) => NormalizedSXTypography);
};

export type addSXTypographyPropsDollar = AddDollarSign<addSXTypographyProps>;

export type addOutlineProps = {
  isReadOnly?: boolean;
  isDisabledOutline?: boolean;
  isOutlineBoxShadow?: boolean;
};

export type addOutlinePropsDollar = AddDollarSign<addOutlineProps>;

export type NormalizedParams<A extends unknown> = {
  default?: A;
  breakpoints?: Record<IThemeDevice | string, A>;
  horizontal?: A;
  vertical?: A;
};

export type NormalizedSX = {
  default?: CSSProperties;
  breakpoints?: Record<IThemeDevice | string, CSSProperties>;
  horizontal?: CSSProperties;
  vertical?: CSSProperties;
};

export type SXProps = NormalizedSX | ((theme: DefaultTheme) => NormalizedSX);

export type SXPropsWithoutFunc = NormalizedSX;

export interface addSXProps {
  sx?: SXProps;
}

export interface addSXPropsNew {
  sx?: NormalizedSX | ((theme: IThemeGlobal) => NormalizedSX);
}

export interface addSXPropsNew2<A extends unknown> {
  sx?: NormalizedParams<A> | ((theme: IThemeGlobal) => NormalizedParams<A>);
}

export type addSXPropsDollar = AddDollarSign<addSXProps>;
