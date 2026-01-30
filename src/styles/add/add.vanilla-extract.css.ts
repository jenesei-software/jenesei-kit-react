import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { keyframeShadowPulse } from '../keyframes/index.ts';
import { ThemeGlobal } from '../theme/theme.vanilla-extract.css.ts';

// === Scrollbar ===
export const addRemoveScrollbar = style({
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': { display: 'none' },
    '&::-webkit-scrollbar-thumb': { display: 'none' },
    '&::-webkit-scrollbar-track': { display: 'none' },
  },
});

// === Transition helpers ===
export const addTransition = style({
  transition: [
    `outline 0s`,
    `opacity ${ThemeGlobal.transition.default}`,
    `transform ${ThemeGlobal.transition.default}`,
    `background-color ${ThemeGlobal.transition.default}`,
    `height ${ThemeGlobal.transition.default}`,
    `max-height ${ThemeGlobal.transition.default}`,
    `width ${ThemeGlobal.transition.default}`,
    `color ${ThemeGlobal.transition.default}`,
    `visibility ${ThemeGlobal.transition.default}`,
    `box-shadow ${ThemeGlobal.transition.default}`,
    `border-color ${ThemeGlobal.transition.default}`,
    `left ${ThemeGlobal.transition.default}`,
    `right ${ThemeGlobal.transition.default}`,
    `grid-template-areas ${ThemeGlobal.transition.default}`,
    `grid-template-rows ${ThemeGlobal.transition.default}`,
    `grid-template-columns ${ThemeGlobal.transition.default}`,
  ].join(', '),
});

export const addTransitionWithoutSize = style({
  transition: [
    `outline 0s`,
    `opacity ${ThemeGlobal.transition.default}`,
    `transform ${ThemeGlobal.transition.default}`,
    `background-color ${ThemeGlobal.transition.default}`,
    `color ${ThemeGlobal.transition.default}`,
    `visibility ${ThemeGlobal.transition.default}`,
    `box-shadow ${ThemeGlobal.transition.default}`,
    `border-color ${ThemeGlobal.transition.default}`,
    `left ${ThemeGlobal.transition.default}`,
    `right ${ThemeGlobal.transition.default}`,
    `grid-template-areas ${ThemeGlobal.transition.default}`,
    `grid-template-rows ${ThemeGlobal.transition.default}`,
    `grid-template-columns ${ThemeGlobal.transition.default}`,
  ].join(', '),
});

export const addGridTransition = style({
  transition: [
    `grid-template-areas ${ThemeGlobal.transition.default}`,
    `grid-template-rows ${ThemeGlobal.transition.default}`,
    `grid-template-columns ${ThemeGlobal.transition.default}`,
  ].join(', '),
});

export const addFontSizeTransition = recipe({
  variants: {
    isTransitionFontSize: {
      true: { transition: `font-size ${ThemeGlobal.transition.default}` },
    },
  },
  defaultVariants: {
    isTransitionFontSize: false,
  },
});

export const addColorTransition = style({
  transition: [
    `outline 0s`,
    `opacity ${ThemeGlobal.transition.default}`,
    `background-color ${ThemeGlobal.transition.default}`,
    `color ${ThemeGlobal.transition.default}`,
    `box-shadow ${ThemeGlobal.transition.default}`,
    `border-color ${ThemeGlobal.transition.default}`,
  ].join(', '),
});

// === Outline ===
export const addOutline = recipe({
  variants: {
    isOutline: {
      none: {},
      default: {
        outline: `2px solid transparent`,
        outlineOffset: '1px',
      },
      boxShadow: {
        outline: '1px solid transparent',
        outlineOffset: '0px',
      },
    },
  },
  defaultVariants: {
    isOutline: 'none',
  },
});

// === Misc ===
export const addAlwaysOutline = recipe({
  variants: {
    show: { true: { outline: `2px solid ${ThemeGlobal.state.focus}`, outlineOffset: '1px' } },
  },
  defaultVariants: { show: false },
});

export const addRemoveOutline = style({
  outline: '0px solid transparent !important',
  outlineOffset: '0px !important',
});

export const addNiceNumber = style({
  fontVariantNumeric: 'tabular-nums',
  fontFeatureSettings: `'tnum'`,
});

export const addDisabled = recipe({
  variants: {
    isDisabled: {
      true: { opacity: 0.5 },
      false: { opacity: 1 },
    },
  },
  defaultVariants: { isDisabled: false },
});

export const addRipple = recipe({
  variants: {
    isRipple: {
      true: {
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
      },
    },
  },
  defaultVariants: { isRipple: false },
});

export const addRippleDefault = style({
  position: 'relative',
  overflow: 'hidden',
  isolation: 'isolate',
});

export const addHover = recipe({
  variants: {
    isHover: {
      true: {
        transition: `background-color ${ThemeGlobal.transition.default}, outline 0s`,
      },
    },
  },
  defaultVariants: { isHover: false },
});

export const addSxTypographyVars = {
  letterSpacing: createVar(),
  line: createVar(),
  flex: createVar(),
  cursor: createVar(),
  overflow: createVar(),
  family: createVar(),
  weight: createVar(),
  height: createVar(),
  color: createVar(),
  align: createVar(),
  wrap: createVar(),
  decoration: createVar(),
  transform: createVar(),
  size: createVar(),
  variant: createVar(),
};

export const addSxTypographyRecipe = recipe({
  base: {
    color: ThemeGlobal.palette.black100,
    fontFamily: ThemeGlobal.font.family,
    fontWeight: ThemeGlobal.font.weight,
    lineHeight: ThemeGlobal.font.lineHeight,
    padding: 0,
    margin: 0,
  },

  variants: {
    letterSpacing: {
      true: {
        letterSpacing: addSxTypographyVars.letterSpacing,
      },
    },
    flex: {
      true: {
        flex: addSxTypographyVars.flex,
      },
    },
    cursor: {
      true: {
        cursor: addSxTypographyVars.cursor,
      },
    },
    overflow: {
      true: {
        overflow: addSxTypographyVars.overflow,
      },
    },

    line: {
      single: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '-webkit-fill-available',
        maxWidth: 'fit-content',
      },

      multi: {
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: addSxTypographyVars.line,
        width: 'fit-content',
        overflowWrap: 'anywhere',
      },
    },

    family: {
      true: {
        fontFamily: addSxTypographyVars.family,
      },
    },

    weight: {
      true: {
        fontWeight: addSxTypographyVars.weight,
      },
    },

    height: {
      true: {
        lineHeight: addSxTypographyVars.height,
      },
    },

    color: {
      true: {
        color: addSxTypographyVars.color,
      },
    },

    align: {
      true: {
        textAlign: addSxTypographyVars.align,
      },
    },

    wrap: {
      true: {
        whiteSpace: addSxTypographyVars.wrap,
      },
    },

    decoration: {
      true: {
        textDecoration: addSxTypographyVars.decoration,
      },
    },

    transform: {
      true: {
        textTransform: addSxTypographyVars.transform,
      },
    },

    shadow: {
      shadowPulse: {
        animation: `${keyframeShadowPulse} 2s infinite`,
      },
    },
    isHoverUnderlining: {
      true: {},
    },

    isNoUserSelect: {
      true: {
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
      },
    },

    size: {
      true: {
        fontSize: addSxTypographyVars.size,
      },
    },

    variant: {
      true: {
        fontSize: addSxTypographyVars.variant,
      },
    },
  },
});

export const addSx = style({
  display: 'flex',
});
