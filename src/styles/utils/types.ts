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

export type ILayoutResponsive<A> = ILayoutValue<A>;

export type ISx = {
  sx?: CSSProperties;
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
export type IThemeGenreCheckbox = keyof typeof CSS_VARS.genre.checkbox;
export type IThemeGenreToggle = keyof typeof CSS_VARS.genre.toggle;
export type IThemeGenreInput = keyof typeof CSS_VARS.genre.input;
export type IThemeGenreDatePicker = keyof typeof CSS_VARS.genre.select;
export type IThemeGenreTextArea = keyof typeof CSS_VARS.genre.textarea;
export type IThemeGenrePopover = keyof typeof CSS_VARS.genre.popover;
export type IThemeGenreSelect = keyof typeof CSS_VARS.genre.select;

export type IThemeControl = keyof typeof CSS_CLASS.control;

export type IThemeTransition = keyof typeof CSS_CLASS.transition;

export const EXTRA_VALUE = {
  font: {
    height: 16,
    size: 1.2,
  },
  sizeToController: {
    large: 'controller-large',
    largeMedium: 'controller-large-medium',
    medium: 'controller-medium',
    mediumSmall: 'controller-medium-small',
    small: 'controller-small',
  } as Record<IThemeSize,IThemeTypographyHeading>,
};
  