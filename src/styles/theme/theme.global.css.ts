import {
  recipeHover,
  recipeOutline,
  recipeRipple,
  recipeTypography,
  styleRemoveOutline,
  styleRippleDefault,
} from '@local/styles/add';

import { globalKeyframes, globalStyle } from '@vanilla-extract/css';

import { KEYFRAME_SHADOW_PULSE, KEYFRAME_SHIMMER, THEME_GLOBAL_VALUE } from './theme.constants';
import { THEME_GLOBAL } from './theme.global-theme.css';
import { dynamicAreaSkeleton } from '../add/add.dynamic';
import { varsAreaSkeleton } from '../add/add.vars.css';

globalStyle('#storybook-root', {
  display: 'flex',
  maxHeight: '100dvh',
  maxWidth: '100dvw',
  overflow: 'auto',
});

globalStyle('.sb-show-main.sb-main-padded', {
  padding: '0',
});

globalStyle('html', {
  display: 'flex',
  overflowX: 'hidden',
  maxWidth: '100dvw',
  minHeight: '100dvh',
  height: '100%',
  fontSize: THEME_GLOBAL.font.sizeDevice.default,
  fontFamily: `${THEME_GLOBAL.font.family}, Inter, system-ui, sans-serif`,
  fontWeight: THEME_GLOBAL.font.weight,
  fontFeatureSettings: `'kern' normal`,
  fontKerning: 'auto',
  fontOpticalSizing: 'auto',
  lineHeight: THEME_GLOBAL.font.lineHeight,
  transition: `font-size ${THEME_GLOBAL.transition.default}`,
});

globalStyle('html, body, #root', {
  fontSynthesis: 'none',
  touchAction: 'manipulation',
  msTouchAction: 'manipulation',
  overscrollBehavior: 'none',
  textRendering: 'optimizeLegibility',
  margin: '0',
  padding: '0',
  color: 'inherit',
});

globalStyle('body', {
  flex: '1',
});

globalStyle(`body:has(${THEME_GLOBAL_VALUE.id.dialog})`, {
  '@media': {
    [THEME_GLOBAL_VALUE.screen.breakpoint.tablet.media]: {
      overflow: 'hidden',
    },
  },
});

globalStyle("input[type='checkbox'], input[type='radio']", {
  appearance: 'none',
  transform: 'translate(0px)',
});

globalStyle("input[type='time']::-webkit-calendar-picker-indicator", {
  background: 'none',
});

globalStyle('html::-webkit-scrollbar', {
  width: THEME_GLOBAL.scrollbar.width,
  height: THEME_GLOBAL.scrollbar.width,
});

globalStyle('html::-webkit-scrollbar-track', {
  background: THEME_GLOBAL.scrollbar.background,
});

globalStyle('html::-webkit-scrollbar-thumb', {
  background: THEME_GLOBAL.scrollbar.thumb,
  border: THEME_GLOBAL.scrollbar.thumbBorder,
  backgroundClip: 'padding-box',
});

globalStyle(`${recipeRipple} *:not(#${THEME_GLOBAL_VALUE.id.ripple})`, {
  userSelect: 'none',
  pointerEvents: 'none',
});

globalStyle(`${styleRippleDefault} *:not(#${THEME_GLOBAL_VALUE.id.ripple})`, {
  userSelect: 'none',
  pointerEvents: 'none',
});

globalStyle(`${recipeOutline({ isOutline: 'default' })}:focus-visible`, {
  outline: `2px solid ${THEME_GLOBAL.state.focus}`,
});

globalStyle(`${recipeOutline({ isOutline: 'boxShadow' })}:focus-visible`, {
  outline: '1px solid #83b7e8',
  boxShadow: '0 1px 1px rgba(24,36,51,0.06), 0 0 0 .25rem rgba(6,111,209,0.25)',
});

globalStyle(`${styleRemoveOutline}:focus-visible`, {
  outline: `0px solid ${THEME_GLOBAL.state.focus} !important`,
});

globalStyle(`${recipeHover}:hover`, {
  backgroundColor: `${THEME_GLOBAL.palette.black05}`,
});

globalStyle(`${recipeTypography({ isHoverUnderlining: true })}:hover`, {
  textDecoration: 'underline',
});

globalStyle(`${dynamicAreaSkeleton} > *`, {
  opacity: `${varsAreaSkeleton.opacity}`,
  transition: `outline 0s, opacity ${THEME_GLOBAL.transition.default}`,
});

globalKeyframes(KEYFRAME_SHADOW_PULSE, {
  '0%': {
    textShadow: '0 0 0 rgba(0, 0, 0, 0)',
  },
  '50%': {
    textShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
  },
  '100%': {
    textShadow: '0 0 0 rgba(0, 0, 0, 0)',
  },
});

globalKeyframes(KEYFRAME_SHIMMER, {
  '0%': {
    backgroundPosition: '100%',
  },
  '100%': {
    backgroundPosition: '-100%',
  },
});
