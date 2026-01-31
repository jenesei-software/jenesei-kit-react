import { THEME_GLOBAL } from '@local/styles/theme';

import { style } from '@vanilla-extract/css';

import { varsComponentStyledIcon, varsComponentStyledIconSkeleton } from './add.vars.css';

export const styleRemoveScrollbar = style({
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': { display: 'none' },
    '&::-webkit-scrollbar-thumb': { display: 'none' },
    '&::-webkit-scrollbar-track': { display: 'none' },
  },
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

export const styleComponentAccordionWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const styleComponentAccordionSummary = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none',
});

export const styleComponentStyledIcon = style([
  {
    color: varsComponentStyledIcon.color,
    height: varsComponentStyledIcon.heightIcon,
    minHeight: varsComponentStyledIcon.heightIcon,
    width: varsComponentStyledIcon.heightIcon,
    minWidth: varsComponentStyledIcon.heightIcon,
    transform: `rotate(${varsComponentStyledIcon.turn})`,
    order: varsComponentStyledIcon.order,
    transition: THEME_GLOBAL.transition.color,
  },
  {
    selectors: {
      '& path': {
        transition: THEME_GLOBAL.transition.color,
      },
    },
  },
]);

export const styleComponentStyledIconSkeleton = style({
  borderRadius: '100%',

  height: varsComponentStyledIconSkeleton.heightIcon,
  minHeight: varsComponentStyledIconSkeleton.heightIcon,
  width: varsComponentStyledIconSkeleton.heightIcon,
  minWidth: varsComponentStyledIconSkeleton.heightIcon,

  order: varsComponentStyledIconSkeleton.order,
});
