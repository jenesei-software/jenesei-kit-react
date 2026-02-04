import { recipe } from '@vanilla-extract/recipes';

import { KEYFRAME_SHADOW_PULSE, THEME_GLOBAL_VALUE } from './theme.constants.ts';
import { THEME_GLOBAL } from './theme.global-theme.css.ts';
import { varsAreaSkeleton, varsComponentAccordionSummaryContent, varsComponentTypography } from './theme.vars.css.ts';

/**
 * Core
 */
export const recipeCoreTransitionFontSize = recipe({
  variants: {
    isTransitionFontSize: {
      true: { transition: `font-size ${THEME_GLOBAL.transition.default}` },
    },
  },
  defaultVariants: {
    isTransitionFontSize: false,
  },
});

export const recipeCoreOutline = recipe({
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

export const recipeCoreOutlineAlways = recipe({
  variants: {
    show: { true: { outline: `2px solid ${THEME_GLOBAL.state.focus}`, outlineOffset: '1px' } },
  },
  defaultVariants: { show: false },
});

export const recipeCoreDisabled = recipe({
  variants: {
    isDisabled: {
      true: { opacity: 0.5 },
      false: { opacity: 1 },
    },
  },
  defaultVariants: { isDisabled: false },
});

export const recipeCoreRipple = recipe({
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

export const recipeCoreHover = recipe({
  variants: {
    isHover: {
      true: {
        transition: `background-color ${THEME_GLOBAL.transition.default}, outline 0s`,
      },
    },
  },
  defaultVariants: { isHover: false },
});

export const recipeCoreContainer = recipe({
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

/**
 * Component/Typography
 */
export const recipeComponentTypography = recipe({
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
        letterSpacing: varsComponentTypography.letterSpacing,
      },
    },
    flex: {
      true: {
        flex: varsComponentTypography.flex,
      },
    },
    cursor: {
      true: {
        cursor: varsComponentTypography.cursor,
      },
    },
    overflow: {
      true: {
        overflow: varsComponentTypography.overflow,
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
        WebkitLineClamp: varsComponentTypography.line,
        width: 'fit-content',
        overflowWrap: 'anywhere',
      },
    },
    family: {
      true: {
        fontFamily: varsComponentTypography.family,
      },
    },
    weight: {
      true: {
        fontWeight: varsComponentTypography.weight,
      },
    },
    height: {
      true: {
        lineHeight: varsComponentTypography.height,
      },
    },
    color: {
      true: {
        color: varsComponentTypography.color,
      },
    },
    align: {
      true: {
        textAlign: varsComponentTypography.align,
      },
    },

    wrap: {
      true: {
        whiteSpace: varsComponentTypography.wrap,
      },
    },

    decoration: {
      true: {
        textDecoration: varsComponentTypography.decoration,
      },
    },

    transform: {
      true: {
        textTransform: varsComponentTypography.transform,
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
        fontSize: varsComponentTypography.size,
      },
    },

    variant: {
      true: {
        fontSize: `calc(${varsComponentTypography.variant} * ${THEME_GLOBAL.font.sizeDevice.default})`,

        '@media': Object.fromEntries(
          [
            ...Object.entries(THEME_GLOBAL_VALUE.screen.breakpoint).map(([label, size]) => {
              const key = label as keyof typeof THEME_GLOBAL.font.sizeDevice;
              const isUse = size.isUse as string;
              if (isUse === 'false') return null;
              return [
                size.media,
                {
                  fontSize: `calc(${varsComponentTypography.variant} * ${THEME_GLOBAL.font.sizeDevice[key]})`,
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
                  fontSize: `calc(${varsComponentTypography.variant} * ${THEME_GLOBAL.font.sizeDevice[key]})`,
                },
              ] as const;
            }),
          ].filter((entry) => entry !== null),
        ),
      },
    },
  },
});

/**
 * Area/Scroll
 */
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

/**
 * Area/Skeleton
 */
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

/**
 * Component/Accordion
 */
export const recipeComponentAccordionSummaryContent = recipe({
  base: {
    width: '100%',
  },

  variants: {
    isAccordionIcon: {
      true: {
        width: `calc(100% - ${varsComponentAccordionSummaryContent.iconWidth})`,
      },
    },
  },
});

export const recipeComponentAccordionDetails = recipe({
  base: {
    overflow: 'hidden',
  },

  variants: {
    expanded: {
      true: {
        maxHeight: '9999px',
        height: '100%',
        opacity: 1,
      },
    },
  },
});

export const recipeComponentAccordionStyledIcon = recipe({
  base: {
    padding: '4px',
    boxSizing: 'content-box',
    cursor: 'pointer',
  },

  variants: {
    expanded: {
      true: {
        transform: `rotate(180deg)`,
      },
      false: {
        transform: `rotate(0deg)`,
      },
    },
  },
});