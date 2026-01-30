import { globalStyle } from '@vanilla-extract/css';

import { ThemeGlobal } from './theme.vanilla-extract.css.ts';
import { addRipple, addRippleDefault } from '../add/add.ts';
import { addHover, addOutline, addRemoveOutline, addSxTypographyRecipe } from '../add/add.vanilla-extract.css.ts';

globalStyle('#storybook-root', {
  display: 'flex',
  maxHeight: '100dvh',
  maxWidth: '100dvw',
  overflow: 'auto',
});

globalStyle('.sb-show-main.sb-main-padded', {
  padding: '0',
});

// globalStyle('*', {
//   boxSizing: 'border-box',
// });

globalStyle('html', {
  display: 'flex',
  overflowX: 'hidden',
  maxWidth: '100dvw',
  minHeight: '100dvh',
  height: '100%',
  fontSize: ThemeGlobal.font.sizeDevice.default,
  fontFamily: `${ThemeGlobal.font.family}, Inter, system-ui, sans-serif`,
  fontWeight: ThemeGlobal.font.weight,
  fontFeatureSettings: `'kern' normal`,
  fontKerning: 'auto',
  fontOpticalSizing: 'auto',
  lineHeight: ThemeGlobal.font.lineHeight,
  transition: `font-size ${ThemeGlobal.transition.default}`,
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

// globalStyle('body:has(.LayoutModal)', {
//   '@media': {
//     [ThemeGlobalValue.screen.breakpoint.tablet.media]: {
//       overflow: 'hidden',
//     },
//   },
// });

globalStyle("input[type='checkbox'], input[type='radio']", {
  appearance: 'none',
  transform: 'translate(0px)',
});

globalStyle("input[type='time']::-webkit-calendar-picker-indicator", {
  background: 'none',
});

globalStyle('html::-webkit-scrollbar', {
  width: ThemeGlobal.scrollbar.width,
  height: ThemeGlobal.scrollbar.width,
});

globalStyle('html::-webkit-scrollbar-track', {
  background: ThemeGlobal.scrollbar.background,
});

globalStyle('html::-webkit-scrollbar-thumb', {
  background: ThemeGlobal.scrollbar.thumb,
  border: ThemeGlobal.scrollbar.thumbBorder,
  backgroundClip: 'padding-box',
});

globalStyle(`${addRipple} *:not(#${ThemeGlobal.id.ripple})`, {
  userSelect: 'none',
  pointerEvents: 'none',
});

globalStyle(`${addRippleDefault} *:not(#${ThemeGlobal.id.ripple})`, {
  userSelect: 'none',
  pointerEvents: 'none',
});

globalStyle(`${addOutline({ isOutline: 'default' })}:focus-visible`, {
  outline: `2px solid ${ThemeGlobal.state.focus}`,
});

globalStyle(`${addOutline({ isOutline: 'boxShadow' })}:focus-visible`, {
  outline: '1px solid #83b7e8',
  boxShadow: '0 1px 1px rgba(24,36,51,0.06), 0 0 0 .25rem rgba(6,111,209,0.25)',
});

globalStyle(`${addRemoveOutline}:focus-visible`, {
  outline: `0px solid ${ThemeGlobal.state.focus} !important`,
});

globalStyle(`${addHover}:hover`, {
  backgroundColor: `${ThemeGlobal.palette.black05}`,
});

globalStyle(`${addSxTypographyRecipe({ isHoverUnderlining: true })}:hover`, {
  textDecoration: 'underline',
});
