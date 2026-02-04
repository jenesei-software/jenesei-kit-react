

import { CSSProperties } from 'react';

import { THEME_GLOBAL_VALUE } from './theme.constants';


type I_TYPOGRAPHY_DEFAULT = {
  align?: CSSProperties['textAlign'];

  color?: I_THEME_TYPOGRAPHY_PALETTE;

  cursor?: CSSProperties['cursor'];

  decoration?: CSSProperties['textDecoration'];

  family?: I_THEME_TYPOGRAPHY_FONT_FAMILY;

  isTransitionFontSize?: boolean;

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

export type I_LAYOUT<A> = I_LAYOUT_VALUE<A> | ((theme: I_THEME_GLOBAL) => I_LAYOUT_VALUE<A>);

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

export type I_THEME_RANGE = typeof THEME_GLOBAL_VALUE.colors.range;
export type I_THEME_RANGE_GENRE = keyof typeof THEME_GLOBAL_VALUE.colors.range;

export type I_THEME_BUTTON = typeof THEME_GLOBAL_VALUE.colors.button;
export type I_THEME_BUTTON_GENRE = keyof typeof THEME_GLOBAL_VALUE.colors.button;

export type I_THEME_DATE = typeof THEME_GLOBAL_VALUE.colors.date;
export type I_THEME_DATE_GENRE = keyof typeof THEME_GLOBAL_VALUE.colors.date;

export type I_THEME_IMAGE_SELECT = typeof THEME_GLOBAL_VALUE.colors.imageSelect;
export type I_THEME_IMAGE_SELECT_GENRE = keyof typeof THEME_GLOBAL_VALUE.colors.imageSelect;

export type I_THEME_INPUT = typeof THEME_GLOBAL_VALUE.colors.input;
export type I_THEME_INPUT_GENRE = keyof typeof THEME_GLOBAL_VALUE.colors.input;

export type I_THEME_SELECT = typeof THEME_GLOBAL_VALUE.colors.select;
export type I_THEME_SELECT_GENRE = keyof typeof THEME_GLOBAL_VALUE.colors.select;

export type I_THEME_SONNER = typeof THEME_GLOBAL_VALUE.colors.sonner;
export type I_THEME_SONNER_GENRE = keyof typeof THEME_GLOBAL_VALUE.colors.sonner;

export type I_THEME_TOGGLE = typeof THEME_GLOBAL_VALUE.colors.toggle;
export type I_THEME_TOGGLE_GENRE = keyof typeof THEME_GLOBAL_VALUE.colors.toggle;

export type I_THEME_TYPOGRAPHY_HEADING = keyof typeof THEME_GLOBAL_VALUE.font.sizeHeading;
export type I_THEME_TYPOGRAPHY_WEIGHT = '100' | '300' | '400' | '500' | '700' | '900';
export type I_THEME_TYPOGRAPHY_PALETTE = keyof typeof THEME_GLOBAL_VALUE.palette;
export type I_THEME_TYPOGRAPHY_FONT_FAMILY = 'Inter' | 'Roboto' | 'Work Sans' | 'Roboto Mono' | 'Manrope';
export type I_THEME_SIZE = 'large' | 'largeMedium' | 'medium' | 'mediumSmall' | 'small';

export type I_THEME_GLOBAL = typeof THEME_GLOBAL_VALUE;

export type I_THEME_BREAKPOINT = Exclude<keyof typeof THEME_GLOBAL_VALUE.screen.breakpoint, 'default'>;
export type I_THEME_PALETTE = keyof typeof THEME_GLOBAL_VALUE.palette;

export type I_THEME_ORIENTATION = keyof typeof THEME_GLOBAL_VALUE.screen.orientation;
