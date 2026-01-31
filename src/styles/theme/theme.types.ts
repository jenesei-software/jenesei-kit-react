import { THEME_GLOBAL_VALUE } from './theme.constants';

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
export type I_THEME_TYPOGRAPHY_SIZE = 'large' | 'largeMedium' | 'medium' | 'mediumSmall' | 'small';

export type I_THEME_GLOBAL = typeof THEME_GLOBAL_VALUE;

export type I_THEME_BREAKPOINT = Exclude<keyof typeof THEME_GLOBAL_VALUE.screen.breakpoint, 'default'>;
export type I_THEME_PALETTE = keyof typeof THEME_GLOBAL_VALUE.palette;
export type I_THEME_ORIENTATION = keyof typeof THEME_GLOBAL_VALUE.screen.orientation;
