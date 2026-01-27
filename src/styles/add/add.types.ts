import {
  IThemeDevice,
  IThemeFontFamily,
  IThemePaletteKeys,
  IThemeTypographyHeading,
  IThemeTypographyWeight,
} from '@local/styles/theme';
import { AddDollarSign } from '@local/types';

import { CSSProperties } from 'react';
import { CSSObject, DefaultTheme } from 'styled-components';

type TypographyDefaultProps = {
  align?: CSSProperties['textAlign'];

  color?: IThemePaletteKeys;

  cursor?: CSSProperties['cursor'];

  decoration?: CSSProperties['textDecoration'];

  family?: IThemeFontFamily;

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

export type TypographySXPropsWithoutFunc = NormalizedSXTypography;

export type addSXTypographyProps = {
  sxTypography?: TypographySXProps;
};

export type addSXTypographyPropsNew = {
  sxTypography?: TypographySXPropsWithoutFunc;
};

export type addSXTypographyPropsDollar = AddDollarSign<addSXTypographyProps>;

export type addOutlineProps = {
  isReadOnly?: boolean;
  isDisabledOutline?: boolean;
  isOutlineBoxShadow?: boolean;
};

export type addOutlinePropsDollar = AddDollarSign<addOutlineProps>;

export type NormalizedSX = {
  default?: CSSObject;
  breakpoints?: Record<IThemeDevice | string, CSSObject>;
  horizontal?: CSSObject;
  vertical?: CSSObject;
};

export type SXProps = NormalizedSX | ((theme: DefaultTheme) => NormalizedSX);

export type SXPropsWithoutFunc = NormalizedSX;

export interface addSXProps {
  sx?: SXProps;
}
export type addSXPropsDollar = AddDollarSign<addSXProps>;
