import { CSSProperties, createVar } from '@vanilla-extract/css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { recipe } from '@vanilla-extract/recipes';

import { addSXTypographyPropsNew, TypographyAllProps } from './add.types';
import { JeneseiPalette } from '../theme';
import { ThemeGlobal } from '../theme/theme.vanilla-extract';

function createTypography() {
  const vars = {
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

  const styles = recipe({
    variants: {
      letterSpacing: {
        true: {
          letterSpacing: vars.letterSpacing,
        },
      },
      flex: {
        true: {
          flex: vars.flex,
        },
      },
      cursor: {
        true: {
          cursor: vars.cursor,
        },
      },
      overflow: {
        true: {
          overflow: vars.overflow,
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
          WebkitLineClamp: vars.line,
          width: 'fit-content',
          overflowWrap: 'anywhere',
        },
      },

      family: {
        true: {
          fontFamily: vars.family,
        },
      },

      weight: {
        true: {
          fontWeight: vars.weight,
        },
      },

      height: {
        true: {
          lineHeight: vars.height,
        },
      },

      color: {
        true: {
          color: vars.color,
        },
      },

      align: {
        true: {
          textAlign: vars.align,
        },
      },

      wrap: {
        true: {
          textWrap: vars.wrap,
        },
      },

      decoration: {
        true: {
          textDecoration: vars.decoration,
        },
      },

      transform: {
        true: {
          textTransform: vars.transform,
        },
      },

      isHoverUnderlining: {
        true: {
          selectors: {
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        },
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
          fontSize: vars.size,
        },
      },

      variant: {
        true: {
          fontSize: `calc(${ThemeGlobal.font.sizeHeading[vars.variant as keyof typeof ThemeGlobal.font.sizeHeading]} * ${ThemeGlobal.font.sizeDevice.default}px)`,

          '@media': Object.fromEntries(
            Object.entries(ThemeGlobal.screen.breakpoint)
              .filter(([label]) => label !== 'default')
              .map(([label, size]) => {
                const key = label as keyof typeof ThemeGlobal.font.sizeDevice;
                return [
                  `screen and (max-width: ${size.width})`,
                  {
                    fontSize: `calc(${ThemeGlobal.font.sizeHeading[vars.variant as keyof typeof ThemeGlobal.font.sizeHeading]} * ${ThemeGlobal.font.sizeDevice[key]}px)`,
                  },
                ] as const;
              }),
          ),
        },
      },
    },
  });

  const getVarsScreen = (params: TypographyAllProps) => {
    return assignInlineVars({
      ...(params.letterSpacing !== undefined && {
        [vars.letterSpacing]: `${params.letterSpacing}px`,
      }),
      ...(params.flex !== undefined && {
        [vars.flex]: params.flex,
      }),
      ...(params.cursor !== undefined && {
        [vars.cursor]: params.cursor,
      }),
      ...(params.overflow !== undefined && {
        [vars.overflow]: params.overflow,
      }),
      ...(params.line !== undefined && {
        [vars.line]: String(params.line),
      }),
      ...(params.family !== undefined && {
        [vars.family]: params.family,
      }),
      ...(params.weight !== undefined && {
        [vars.weight]: String(params.weight),
      }),
      [vars.height]: String(params.height ?? ThemeGlobal.font.lineHeight),
      ...(params.color !== undefined && {
        [vars.color]: JeneseiPalette[params.color],
      }),
      ...(params.align !== undefined && {
        [vars.align]: params.align,
      }),
      ...(params.wrap !== undefined && {
        [vars.wrap]: params.wrap,
      }),
      ...(params.decoration !== undefined && {
        [vars.decoration]: String(params.decoration),
      }),
      ...(params.transform !== undefined && {
        [vars.transform]: String(params.transform),
      }),
      ...('size' in params &&
        params.size !== undefined && {
          [vars.size]: `${typeof params.size === 'number' ? `${params.size}px` : params.size}`,
        }),
      ...('variant' in params &&
        params.variant !== undefined && {
          [vars.variant]: String(params.variant),
        }),
    });
  };

  const getVars = (params: addSXTypographyPropsNew) => {
    const result: CSSProperties = {};
    const sxTypography = params.sxTypography;
    if (!sxTypography) return result;

    if (sxTypography.default) {
      Object.assign(result, getVarsScreen(sxTypography.default));
    }

    if (sxTypography.breakpoints)
      Object.entries(sxTypography.breakpoints).forEach(([bp, breakpointStyle]) => {
        const width = ThemeGlobal.screen.breakpoint[bp as keyof typeof ThemeGlobal.screen.breakpoint]?.width;
        if (breakpointStyle && width) {
          Object.assign(result, {
            [`@media (max-width: ${width}px)`]: getVarsScreen(breakpointStyle),
          });
        }
      });

    if (sxTypography.horizontal) {
      Object.assign(result, {
        [ThemeGlobal.screen.orientation.horizontal.media]: getVarsScreen(sxTypography.horizontal),
      });
    }
    if (sxTypography.vertical) {
      Object.assign(result, {
        [ThemeGlobal.screen.orientation.vertical.media]: getVarsScreen(sxTypography.vertical),
      });
    }
    return result;
  };

  const getStyles = (params: TypographyAllProps) => {
    const result = styles({
      line: params.line === 1 ? 'single' : params.line && params.line > 1 ? 'multi' : undefined,
      letterSpacing: params.letterSpacing != null,
      flex: params.flex != null,
      cursor: params.cursor != null,
      overflow: params.overflow != null,
      family: params.family != null,
      weight: params.weight != null,
      height: params.height != null,
      color: params.color != null,
      align: params.align != null,
      wrap: params.wrap != null,
      decoration: params.decoration != null,
      transform: params.transform != null,
      isHoverUnderlining: params.isHoverUnderlining === true,
      isNoUserSelect: params.isNoUserSelect === true,
      size: 'size' in params && params.size != null,
      variant: 'variant' in params && params.variant != null,
    });
    return result;
  };
  return { vars, getStyles, getVars };
}

export const typography = createTypography();
