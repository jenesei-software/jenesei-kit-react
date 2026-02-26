import { CSSProperties } from 'react';

import { CSS_VARS } from './constants';

type I_TYPOGRAPHY_DEFAULT = {
  align?: CSSProperties['textAlign'];

  color?: I_THEME_PALETTE;

  cursor?: CSSProperties['cursor'];

  decoration?: CSSProperties['textDecoration'];

  family?: I_THEME_TYPOGRAPHY_FONT_FAMILY;

  isTransitionFontSize?: boolean;

  isBold?: boolean;

  flex?: string;

  height?: number | string;

  isHoverUnderlining?: boolean;

  letterSpacing?: CSSProperties['letterSpacing'];

  line?: number;

  overflow?: CSSProperties['overflow'];

  shadow?: 'shadowPulse';

  transform?: CSSProperties['textTransform'];

  weight?: I_THEME_TYPOGRAPHY_WEIGHT;

  wrap?: CSSProperties['textWrap'];

  isNoUserSelect?: boolean;
};

type I_TYPOGRAPHY_SIZE = I_TYPOGRAPHY_DEFAULT & {
  size?: number | string;
};

type I_TYPOGRAPHY_VARIANT = I_TYPOGRAPHY_DEFAULT & {
  variant: I_THEME_TYPOGRAPHY_HEADING;
};

export type I_TYPOGRAPHY = I_TYPOGRAPHY_SIZE | I_TYPOGRAPHY_VARIANT;
export type I_CONTAINER = CSSProperties;

export type I_LAYOUT_VALUE<A> = {
  default?: A;
  breakpoints?: Record<I_THEME_BREAKPOINT, A>;
  orientations?: Record<I_THEME_ORIENTATION, A>;
};

export type I_LAYOUT<A> = A | ((theme: I_THEME_GLOBAL) => A);

export type ILayoutResponsive<A> = I_LAYOUT_VALUE<A> | ((theme: I_THEME_GLOBAL) => I_LAYOUT_VALUE<A>);

export type I_TYPOGRAPHY_LAYOUT = I_LAYOUT<I_TYPOGRAPHY>;

export type I_CONTAINER_LAYOUT = I_LAYOUT<I_CONTAINER>;

export type I_SX_TYPOGRAPHY = {
  sxTypography?: I_TYPOGRAPHY_LAYOUT;
};

export type I_SX = {
  sx?: I_CONTAINER_LAYOUT;
};

export type I_SX_OUTLINE = {
  isReadOnly?: boolean;
  isDisabledOutline?: boolean;
  isOutlineBoxShadow?: boolean;
};

// export type I_THEME_RANGE = typeof CSS_VARS.colors.range;
// export type I_THEME_RANGE_GENRE = keyof typeof CSS_VARS.colors.range;

// export type I_THEME_BUTTON = typeof CSS_VARS.colors.button;
// export type I_THEME_BUTTON_GENRE = keyof typeof CSS_VARS.colors.button;

// export type I_THEME_DATE = typeof CSS_VARS.colors.date;
// export type I_THEME_DATE_GENRE = keyof typeof CSS_VARS.colors.date;

// export type I_THEME_IMAGE_SELECT = typeof CSS_VARS.colors.imageSelect;
// export type I_THEME_IMAGE_SELECT_GENRE = keyof typeof CSS_VARS.colors.imageSelect;

// export type I_THEME_INPUT = typeof CSS_VARS.colors.input;
// export type I_THEME_INPUT_GENRE = keyof typeof CSS_VARS.colors.input;

// export type I_THEME_SELECT = typeof CSS_VARS.colors.select;
// export type I_THEME_SELECT_GENRE = keyof typeof CSS_VARS.colors.select;

// export type I_THEME_SONNER = typeof CSS_VARS.colors.sonner;
// export type I_THEME_SONNER_GENRE = keyof typeof CSS_VARS.colors.sonner;

// export type I_THEME_TOGGLE = typeof CSS_VARS.colors.toggle;
// export type I_THEME_TOGGLE_GENRE = keyof typeof CSS_VARS.colors.toggle;

export type I_THEME_TYPOGRAPHY_HEADING = keyof typeof CSS_VARS.font.sizeHeading;
export type I_THEME_TYPOGRAPHY_WEIGHT = '100' | '300' | '400' | '500' | '700' | '900';
export type I_THEME_TYPOGRAPHY_FONT_FAMILY = 'Inter' | 'Roboto' | 'Work Sans' | 'Roboto Mono' | 'Manrope';
export type I_THEME_SIZE = 'large' | 'largeMedium' | 'medium' | 'mediumSmall' | 'small';

export type I_THEME_GLOBAL = typeof CSS_VARS;

export type I_THEME_BREAKPOINT = 'tablet' | 'mobile';
export type I_THEME_ORIENTATION = 'landscape' | 'portrait';

export type I_THEME_PALETTE = keyof typeof CSS_VARS.palette;
