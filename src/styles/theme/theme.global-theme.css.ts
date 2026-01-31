

import { createGlobalTheme } from '@vanilla-extract/css';

import { THEME_GLOBAL_VALUE } from './theme.constants';

export const THEME_GLOBAL = createGlobalTheme(':root', {
  transition: THEME_GLOBAL_VALUE.transition,
  scrollbar: THEME_GLOBAL_VALUE.scrollbar,
  screen: THEME_GLOBAL_VALUE.screen,
  font: THEME_GLOBAL_VALUE.font,
  effect: THEME_GLOBAL_VALUE.effect,
  palette: THEME_GLOBAL_VALUE.palette,
  background: THEME_GLOBAL_VALUE.background,
  state: THEME_GLOBAL_VALUE.state,
  id: THEME_GLOBAL_VALUE.id,
  colors: THEME_GLOBAL_VALUE.colors,
});