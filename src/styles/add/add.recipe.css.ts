import { recipe } from '@vanilla-extract/recipes';

import { varsAreaSkeleton, varsTypography } from './add.vars.css.ts';
import { KEYFRAME_SHADOW_PULSE, THEME_GLOBAL_VALUE } from '../theme/theme.constants.ts';
import { THEME_GLOBAL } from '../theme/theme.global-theme.css.ts';

export const recipeFontSizeTransition = recipe({
  variants: {
    isTransitionFontSize: {
      true: { transition: `font-size ${THEME_GLOBAL.transition.default}` },
    },
  },
  defaultVariants: {
    isTransitionFontSize: false,
  },
});

export const recipeOutline = recipe({
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

export const recipeAlwaysOutline = recipe({
  variants: {
    show: { true: { outline: `2px solid ${THEME_GLOBAL.state.focus}`, outlineOffset: '1px' } },
  },
  defaultVariants: { show: false },
});

export const recipeDisabled = recipe({
  variants: {
    isDisabled: {
      true: { opacity: 0.5 },
      false: { opacity: 1 },
    },
  },
  defaultVariants: { isDisabled: false },
});

export const recipeRipple = recipe({
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

export const recipeHover = recipe({
  variants: {
    isHover: {
      true: {
        transition: `background-color ${THEME_GLOBAL.transition.default}, outline 0s`,
      },
    },
  },
  defaultVariants: { isHover: false },
});

export const recipeTypography = recipe({
  base: {
    color: THEME_GLOBAL.palette.black100,
    fontFamily: THEME_GLOBAL.font.family,
    fontWeight: THEME_GLOBAL.font.weight,
    lineHeight: THEME_GLOBAL.font.lineHeight,
    padding: 0,
    margin: 0,
  },

  variants: {
    letterSpacing: {
      true: {
        letterSpacing: varsTypography.letterSpacing,
      },
    },
    flex: {
      true: {
        flex: varsTypography.flex,
      },
    },
    cursor: {
      true: {
        cursor: varsTypography.cursor,
      },
    },
    overflow: {
      true: {
        overflow: varsTypography.overflow,
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
        WebkitLineClamp: varsTypography.line,
        width: 'fit-content',
        overflowWrap: 'anywhere',
      },
    },
    family: {
      true: {
        fontFamily: varsTypography.family,
      },
    },
    weight: {
      true: {
        fontWeight: varsTypography.weight,
      },
    },
    height: {
      true: {
        lineHeight: varsTypography.height,
      },
    },
    color: {
      true: {
        color: varsTypography.color,
      },
    },
    align: {
      true: {
        textAlign: varsTypography.align,
      },
    },

    wrap: {
      true: {
        whiteSpace: varsTypography.wrap,
      },
    },

    decoration: {
      true: {
        textDecoration: varsTypography.decoration,
      },
    },

    transform: {
      true: {
        textTransform: varsTypography.transform,
      },
    },

    shadow: {
      shadowPulse: {
        animation: `${KEYFRAME_SHADOW_PULSE} 2s infinite`,
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
        fontSize: varsTypography.size,
      },
    },

    variant: {
      true: {
        fontSize: `calc(${varsTypography.variant} * ${THEME_GLOBAL.font.sizeDevice.default})`,

        '@media': Object.fromEntries(
          [
            ...Object.entries(THEME_GLOBAL_VALUE.screen.breakpoint).map(([label, size]) => {
              const key = label as keyof typeof THEME_GLOBAL.font.sizeDevice;
              const isUse = size.isUse as string;
              if (isUse === 'false') return null;
              return [
                size.media,
                {
                  fontSize: `calc(${varsTypography.variant} * ${THEME_GLOBAL.font.sizeDevice[key]})`,
                },
              ] as const;
            }),
            ...Object.entries(THEME_GLOBAL_VALUE.screen.orientation).map(([label, size]) => {
              const key = label as keyof typeof THEME_GLOBAL.font.sizeDevice;
              const isUse = size.isUse as string;
              if (isUse === 'false') return null;
              return [
                size.media,
                {
                  fontSize: `calc(${varsTypography.variant} * ${THEME_GLOBAL.font.sizeDevice[key]})`,
                },
              ] as const;
            }),
          ].filter((entry) => entry !== null),
        ),
      },
    },
  },
});

export const recipeFlex = recipe({
  base: {
    display: 'flex',
  },

  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },

    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
      evenly: { justifyContent: 'space-evenly' },
    },

    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
    },

    wrap: {
      nowrap: { flexWrap: 'nowrap' },
      wrap: { flexWrap: 'wrap' },
    },
  },

  defaultVariants: {
    direction: 'row',
    justify: 'start',
    align: 'stretch',
    wrap: 'nowrap',
  },
});

export const recipeAreaScroll = recipe({
  base: {
    display: 'flex',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },

  variants: {
    horizontal: {
      true: {
        scrollbarGutter: 'stable',
        overflowX: 'auto',
      },
    },
    vertical: {
      true: {
        scrollbarGutter: 'stable',
        overflowY: 'auto',
      },
    },
    isAlwaysHorizontal: {
      true: {
        scrollbarGutter: 'stable',
        overflowX: 'scroll',
      },
    },
    isAlwaysVertical: {
      true: {
        scrollbarGutter: 'stable',
        overflowY: 'scroll',
      },
    },
  },
});

export const recipeAreaSkeleton = recipe({
  base: {
    background: THEME_GLOBAL.background.transparent,
  },

  variants: {
    visible: {
      false: {
        background: `linear-gradient(90deg,${varsAreaSkeleton.color} 25%, ${varsAreaSkeleton.color} 50%, ${varsAreaSkeleton.color} 75%)`,
        backgroundSize: '200% 100%',
        animation: `${KEYFRAME_SHADOW_PULSE} 1.5s infinite linear`,
        pointerEvents: 'none',
      },
    },
  },
});
