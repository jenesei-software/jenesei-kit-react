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

export type NormalizedSX = {
  default?: CSSObject;
  breakpoints?: Record<string, CSSObject>;
  horizontal?: CSSObject;
  vertical?: CSSObject;
};

export type NormalizedSXTypography = {
  default?: TypographyAllProps;
  breakpoints?: Record<string, TypographyAllProps>;
  horizontal?: TypographyAllProps;
  vertical?: TypographyAllProps;
};


export type TypographyAllProps = TypographyDataProps | TypographyVariantProps;

export type TypographySXProps = {
  default: TypographyAllProps;
} & {
  [K in IThemeDevice]?: TypographyAllProps;
};

type SXRecord = {
  [K in IThemeDevice]?: CSSObject;
};

export type SXProps = SXRecord | ((theme: DefaultTheme) => SXRecord);
export type SXPropsWithoutFunc = SXRecord;

export interface addSXProps {
  sx?: SXProps;
}
export type addSXPropsDollar = AddDollarSign<addSXProps>;

export type addSXTypographyProps = {
  sxTypography?: TypographySXProps;
};

export type addSXTypographyPropsDollar = AddDollarSign<addSXTypographyProps>;

export type addOutlineProps = {
  isReadOnly?: boolean;
  isDisabledOutline?: boolean;
  isOutlineBoxShadow?: boolean;
};

export type addOutlinePropsDollar = AddDollarSign<addOutlineProps>;
