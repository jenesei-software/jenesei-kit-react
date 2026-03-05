import { CSSProperties } from 'react';

import { CSS_CLASS, CSS_VARS } from './constants';

type ITypographyDefault = {
  align?: CSSProperties['textAlign'];

  color?: IThemePalette;

  cursor?: CSSProperties['cursor'];

  decoration?: CSSProperties['textDecoration'];

  family?: IThemeTypographyFontFamily;

  transition?: IThemeTransition;

  isBold?: boolean;

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

type ITypographySize = ITypographyDefault & {
  size?: number | string;
};

type ITypographyVariant = ITypographyDefault & {
  variant: IThemeTypographyHeading;
};

export type ITypography = ITypographySize | ITypographyVariant;
export type IContainer = CSSProperties;

export type ILayoutValue<A> = {
  default?: A;
  breakpoints?: Record<IThemeBreakpoint, A>;
  orientations?: Record<IThemeOrientation, A>;
};

export type ILayout<A> = A | ((theme: IThemeGlobal) => A);

export type ILayoutResponsive<A> = ILayoutValue<A> | ((theme: IThemeGlobal) => ILayoutValue<A>);

export type ITypographyLayout = ILayout<ITypography>;

export type IContainerLayout = ILayout<IContainer>;

export type ISxTypography = {
  sxTypography?: ITypographyLayout;
};

export type ISx = {
  sx?: IContainerLayout;
};

export type ISxOutline = {
  isReadOnly?: boolean;
  isDisabledOutline?: boolean;
  isOutlineBoxShadow?: boolean;
};

export type IThemeTypographyHeading = keyof typeof CSS_VARS.font.sizeHeading;
export type IThemeTypographyWeight = '100' | '300' | '400' | '500' | '700' | '900';
export type IThemeTypographyFontFamily = 'Inter' | 'Roboto' | 'Work Sans' | 'Roboto Mono' | 'Manrope';
export type IThemeSize = 'large' | 'largeMedium' | 'medium' | 'mediumSmall' | 'small';

export type IThemeGlobal = typeof CSS_VARS;

export type IThemeBreakpoint = 'tablet' | 'mobile';
export type IThemeOrientation = 'landscape' | 'portrait';

export type IThemePalette = keyof typeof CSS_VARS.palette;

export type IThemeShadow = keyof typeof CSS_CLASS.shadow;

export type IThemeGenreButton = keyof typeof CSS_VARS.genre.button;

export type IThemeOutline = keyof typeof CSS_CLASS.outline;

export type IThemeTransition = keyof typeof CSS_CLASS.transition;
