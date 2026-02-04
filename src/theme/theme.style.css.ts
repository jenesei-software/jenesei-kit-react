

import { style } from '@vanilla-extract/css';

import { THEME_GLOBAL } from './theme.global-theme.css';
import { varsComponentStyledIcon, varsComponentStyledIconSkeleton } from './theme.vars.css';

/**
 * Core
 */
export const styleCoreRemoveScrollbar = style({
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': { display: 'none' },
    '&::-webkit-scrollbar-thumb': { display: 'none' },
    '&::-webkit-scrollbar-track': { display: 'none' },
  },
});

export const styleCoreRemoveOutline = style({
  outline: '0px solid transparent !important',
  outlineOffset: '0px !important',
});

export const styleCoreTabularNumbers = style({
  fontVariantNumeric: 'tabular-nums',
  fontFeatureSettings: `'tnum'`,
});

export const styleCoreRipple = style({
  position: 'relative',
  overflow: 'hidden',
  isolation: 'isolate',
});

export const styleCoreContainer = style({
  display: 'flex',
});

/**
 * Component/Accordion
 */
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

/**
 * Component/Icon
 */
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
