import { LIST_TYPOGRAPHY_VARIANTS_DEFAULT } from '@local/consts';

import { globalStyle } from '@vanilla-extract/css';

import { ThemeGlobal, ThemeGlobalValue } from './theme.vanilla-extract.css.ts';

globalStyle('#storybook-root', {
  display: 'flex',
  maxHeight: '100dvh',
  maxWidth: '100dvw',
  overflow: 'auto',
});

globalStyle('.sb-show-main.sb-main-padded', {
  padding: '0',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

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

globalStyle('body:has(.LayoutModal)', {
  '@media': {
    [ThemeGlobalValue.screen.breakpoint.tablet.media]: {
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

globalStyle('::-webkit-scrollbar', {
  width: ThemeGlobal.scrollbar.width,
  height: ThemeGlobal.scrollbar.width,
});

globalStyle('::-webkit-scrollbar-track', {
  background: ThemeGlobal.scrollbar.background,
});

globalStyle('::-webkit-scrollbar-thumb', {
  background: ThemeGlobal.scrollbar.thumb,
  border: ThemeGlobal.scrollbar.thumbBorder,
  backgroundClip: 'padding-box',
});

LIST_TYPOGRAPHY_VARIANTS_DEFAULT.forEach((tag) => {
  globalStyle(tag, {
    fontSize: `calc(${ThemeGlobalValue.font.sizeHeading[tag]} * ${ThemeGlobalValue.font.sizeDevice.default}px)`,

    '@media': Object.fromEntries(
      Object.entries(ThemeGlobalValue.screen.breakpoint)
        .filter(([label]) => label !== 'default')
        .map(([label, size]) => {
          const key = label as keyof typeof ThemeGlobal.font.sizeDevice;
          return [
            size.media,
            {
              fontSize: `calc(${ThemeGlobalValue.font.sizeHeading[tag]} * ${ThemeGlobalValue.font.sizeDevice[key]}px)`,
            },
          ] as const;
        }),
    ),
  });
});
