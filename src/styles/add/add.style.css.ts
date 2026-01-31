import { THEME_GLOBAL } from '@local/styles/theme';

import { style } from '@vanilla-extract/css';

export const styleRemoveScrollbar = style({
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': { display: 'none' },
    '&::-webkit-scrollbar-thumb': { display: 'none' },
    '&::-webkit-scrollbar-track': { display: 'none' },
  },
});

export const styleTransition = style({
  transition: [
    `outline 0s`,
    `opacity ${THEME_GLOBAL.transition.default}`,
    `transform ${THEME_GLOBAL.transition.default}`,
    `background-color ${THEME_GLOBAL.transition.default}`,
    `height ${THEME_GLOBAL.transition.default}`,
    `max-height ${THEME_GLOBAL.transition.default}`,
    `width ${THEME_GLOBAL.transition.default}`,
    `color ${THEME_GLOBAL.transition.default}`,
    `visibility ${THEME_GLOBAL.transition.default}`,
    `box-shadow ${THEME_GLOBAL.transition.default}`,
    `border-color ${THEME_GLOBAL.transition.default}`,
    `left ${THEME_GLOBAL.transition.default}`,
    `right ${THEME_GLOBAL.transition.default}`,
    `grid-template-areas ${THEME_GLOBAL.transition.default}`,
    `grid-template-rows ${THEME_GLOBAL.transition.default}`,
    `grid-template-columns ${THEME_GLOBAL.transition.default}`,
  ].join(', '),
});

export const styleTransitionWithoutSize = style({
  transition: [
    `outline 0s`,
    `opacity ${THEME_GLOBAL.transition.default}`,
    `transform ${THEME_GLOBAL.transition.default}`,
    `background-color ${THEME_GLOBAL.transition.default}`,
    `color ${THEME_GLOBAL.transition.default}`,
    `visibility ${THEME_GLOBAL.transition.default}`,
    `box-shadow ${THEME_GLOBAL.transition.default}`,
    `border-color ${THEME_GLOBAL.transition.default}`,
    `left ${THEME_GLOBAL.transition.default}`,
    `right ${THEME_GLOBAL.transition.default}`,
    `grid-template-areas ${THEME_GLOBAL.transition.default}`,
    `grid-template-rows ${THEME_GLOBAL.transition.default}`,
    `grid-template-columns ${THEME_GLOBAL.transition.default}`,
  ].join(', '),
});

export const styleGridTransition = style({
  transition: [
    `grid-template-areas ${THEME_GLOBAL.transition.default}`,
    `grid-template-rows ${THEME_GLOBAL.transition.default}`,
    `grid-template-columns ${THEME_GLOBAL.transition.default}`,
  ].join(', '),
});

export const styleColorTransition = style({
  transition: [
    `outline 0s`,
    `opacity ${THEME_GLOBAL.transition.default}`,
    `background-color ${THEME_GLOBAL.transition.default}`,
    `color ${THEME_GLOBAL.transition.default}`,
    `box-shadow ${THEME_GLOBAL.transition.default}`,
    `border-color ${THEME_GLOBAL.transition.default}`,
  ].join(', '),
});

export const styleRemoveOutline = style({
  outline: '0px solid transparent !important',
  outlineOffset: '0px !important',
});

export const styleNiceNumber = style({
  fontVariantNumeric: 'tabular-nums',
  fontFeatureSettings: `'tnum'`,
});

export const styleRippleDefault = style({
  position: 'relative',
  overflow: 'hidden',
  isolation: 'isolate',
});

export const styleContainer = style({
  display: 'flex',
});
