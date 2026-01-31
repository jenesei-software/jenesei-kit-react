import {
  I_THEME_TYPOGRAPHY_FONT_FAMILY,
  I_THEME_TYPOGRAPHY_HEADING,
  I_THEME_TYPOGRAPHY_PALETTE,
  I_THEME_TYPOGRAPHY_WEIGHT,
} from '@local/styles/theme';

import { CSSProperties } from 'react';

import { I_THEME_BREAKPOINT, I_THEME_GLOBAL, I_THEME_ORIENTATION } from '../theme/theme.types.ts';

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
