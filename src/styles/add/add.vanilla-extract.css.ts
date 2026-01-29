import { CSSProperties, createVar, style } from '@vanilla-extract/css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { recipe } from '@vanilla-extract/recipes';

import { addSXPropsNew, addSXTypographyPropsNew, TypographyAllProps } from './add.types';
import { JeneseiPalette } from '../theme';
import { IThemeBreakpointKey, IThemeOrientationKey, ThemeGlobalValue } from '../theme/theme.vanilla-extract.css.ts';

function createSXTypography() {
  const breakpoints: IThemeBreakpointKey[] = Object.keys(ThemeGlobalValue.screen.breakpoint) as IThemeBreakpointKey[];
  const orientations: IThemeOrientationKey[] = Object.keys(
    ThemeGlobalValue.screen.orientation,
  ) as IThemeOrientationKey[];

  const createVarsSet = () => ({
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
  });

  const vars = {
    default: createVarsSet(),
    breakpoints: Object.fromEntries(
      breakpoints.filter((bp) => bp !== 'default').map((bp) => [bp, createVarsSet()]),
    ) as Record<Exclude<IThemeBreakpointKey, 'default'>, ReturnType<typeof createVarsSet>>,
    orientations: Object.fromEntries(orientations.map((orientation) => [orientation, createVarsSet()])) as Record<
      Exclude<IThemeOrientationKey, 'default'>,
      ReturnType<typeof createVarsSet>
    >,
  };

  const createMediaQueries = (cssProp: keyof CSSProperties, varKey: keyof ReturnType<typeof createVarsSet>) => ({
    '@media': {
      ...Object.fromEntries(
        Object.entries(vars.breakpoints).map(([bp, varSet]) => {
          const media = ThemeGlobalValue.screen.breakpoint[bp as IThemeBreakpointKey]?.media;
          return [media, { [cssProp]: varSet[varKey] }];
        }),
      ),
      ...Object.fromEntries(
        Object.entries(vars.orientations).map(([orientation, varSet]) => {
          const media = ThemeGlobalValue.screen.orientation[orientation as IThemeOrientationKey]?.media;
          return [media, { [cssProp]: varSet[varKey] }];
        }),
      ),
    },
  });

  const createVariant = (cssProp: keyof CSSProperties, varKey: keyof ReturnType<typeof createVarsSet>) => ({
    true: {
      [cssProp]: vars.default[varKey],
      ...createMediaQueries(cssProp, varKey),
    },
  });

  const styles = recipe({
    variants: {
      letterSpacing: createVariant('letterSpacing', 'letterSpacing'),
      flex: createVariant('flex', 'flex'),
      cursor: createVariant('cursor', 'cursor'),
      overflow: createVariant('overflow', 'overflow'),
      family: createVariant('fontFamily', 'family'),
      weight: createVariant('fontWeight', 'weight'),
      height: createVariant('lineHeight', 'height'),
      color: createVariant('color', 'color'),
      align: createVariant('textAlign', 'align'),
      wrap: createVariant('textWrap', 'wrap'),
      decoration: createVariant('textDecoration', 'decoration'),
      transform: createVariant('textTransform', 'transform'),
      size: createVariant('fontSize', 'size'),

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
          WebkitLineClamp: vars.default.line,
          width: 'fit-content',
          overflowWrap: 'anywhere',
          '@media': {
            ...Object.fromEntries(
              Object.entries(vars.breakpoints).map(([bp, varSet]) => {
                const media = ThemeGlobalValue.screen.breakpoint[bp as IThemeBreakpointKey]?.media;
                return [media, { WebkitLineClamp: varSet.line }];
              }),
            ),
            ...Object.fromEntries(
              Object.entries(vars.orientations).map(([orientation, varSet]) => {
                const media = ThemeGlobalValue.screen.orientation[orientation as IThemeOrientationKey]?.media;
                return [media, { WebkitLineClamp: varSet.line }];
              }),
            ),
          },
        },
      },

      variant: {
        true: {
          fontSize: `calc(${ThemeGlobalValue.font.sizeHeading[vars.default.variant as keyof typeof ThemeGlobalValue.font.sizeHeading]} * ${ThemeGlobalValue.font.sizeDevice.default}px)`,
          '@media': Object.fromEntries(
            Object.entries(ThemeGlobalValue.screen.breakpoint)
              .filter(([label]) => label !== 'default')
              .map(([label, size]) => {
                const key = label as keyof typeof ThemeGlobalValue.font.sizeDevice;
                const varSet = vars.breakpoints[key as Exclude<IThemeBreakpointKey, 'default'>];
                return [
                  `screen and (max-width: ${size.width}px)`,
                  {
                    fontSize: `calc(${ThemeGlobalValue.font.sizeHeading[varSet.variant as keyof typeof ThemeGlobalValue.font.sizeHeading]} * ${ThemeGlobalValue.font.sizeDevice[key]}px)`,
                  },
                ] as const;
              }),
          ),
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
    },
  });

  const getVarsForBreakpoint = (params: TypographyAllProps, varSet: ReturnType<typeof createVarsSet>) => {
    return {
      ...(params.letterSpacing !== undefined && {
        [varSet.letterSpacing]: `${params.letterSpacing}px`,
      }),
      ...(params.flex !== undefined && {
        [varSet.flex]: params.flex,
      }),
      ...(params.cursor !== undefined && {
        [varSet.cursor]: params.cursor,
      }),
      ...(params.overflow !== undefined && {
        [varSet.overflow]: params.overflow,
      }),
      ...(params.line !== undefined && {
        [varSet.line]: String(params.line),
      }),
      ...(params.family !== undefined && {
        [varSet.family]: params.family,
      }),
      ...(params.weight !== undefined && {
        [varSet.weight]: String(params.weight),
      }),
      ...(params.height !== undefined && {
        [varSet.height]: String(params.height),
      }),
      ...(params.color !== undefined && {
        [varSet.color]: JeneseiPalette[params.color],
      }),
      ...(params.align !== undefined && {
        [varSet.align]: params.align,
      }),
      ...(params.wrap !== undefined && {
        [varSet.wrap]: params.wrap,
      }),
      ...(params.decoration !== undefined && {
        [varSet.decoration]: String(params.decoration),
      }),
      ...(params.transform !== undefined && {
        [varSet.transform]: String(params.transform),
      }),
      ...('size' in params &&
        params.size !== undefined && {
          [varSet.size]: `${typeof params.size === 'number' ? `${params.size}px` : params.size}`,
        }),
      ...('variant' in params &&
        params.variant !== undefined && {
          [varSet.variant]: String(params.variant),
        }),
    };
  };

  const getVars = (params: addSXTypographyPropsNew) => {
    const sxTypography = params.sxTypography;
    if (!sxTypography) return {};

    let result = {};

    if (sxTypography.default) {
      result = {
        ...result,
        ...getVarsForBreakpoint(sxTypography.default, vars.default),
      };
    }

    if (sxTypography.breakpoints) {
      Object.entries(sxTypography.breakpoints).forEach(([bp, breakpointStyle]) => {
        if (breakpointStyle && bp in vars.breakpoints) {
          result = {
            ...result,
            ...getVarsForBreakpoint(breakpointStyle, vars.breakpoints[bp as Exclude<IThemeBreakpointKey, 'default'>]),
          };
        }
      });
    }
    if (sxTypography.horizontal) {
      result = {
        ...result,
        ...getVarsForBreakpoint(sxTypography.horizontal, vars.orientations.horizontal),
      };
    }

    if (sxTypography.vertical) {
      result = {
        ...result,
        ...getVarsForBreakpoint(sxTypography.vertical, vars.orientations.vertical),
      };
    }

    return assignInlineVars(result);
  };

  const getStyles = (props: addSXTypographyPropsNew) => {
    const defaultTypography: TypographyAllProps | undefined = props.sxTypography?.default;

    if (!defaultTypography) return undefined;

    return styles({
      letterSpacing: defaultTypography.letterSpacing != null,
      flex: defaultTypography.flex != null,
      cursor: defaultTypography.cursor != null,
      overflow: defaultTypography.overflow != null,
      line:
        defaultTypography.line === 1
          ? 'single'
          : defaultTypography.line && defaultTypography.line > 1
            ? 'multi'
            : undefined,
      family: defaultTypography.family != null,
      weight: defaultTypography.weight != null,
      height: defaultTypography.height != null,
      color: defaultTypography.color != null,
      align: defaultTypography.align != null,
      wrap: defaultTypography.wrap != null,
      decoration: defaultTypography.decoration != null,
      transform: defaultTypography.transform != null,
      isHoverUnderlining: defaultTypography.isHoverUnderlining === true,
      isNoUserSelect: defaultTypography.isNoUserSelect === true,
      size: 'size' in defaultTypography && defaultTypography.size != null,
      variant: 'variant' in defaultTypography && defaultTypography.variant != null,
    });
  };

  return { vars, getStyles, getVars };
}

export const sxTypography = createSXTypography();

export function getSX(resolvedSX: addSXPropsNew['sx']) {
  const sx = typeof resolvedSX === 'function' ? resolvedSX(ThemeGlobalValue) : resolvedSX;

  if (!sx || Object.keys(sx).length === 0) return '';

  const styles: any = {};

  if (sx.default) {
    Object.assign(styles, sx.default);
  }

  if (sx.breakpoints) {
    const mediaQueries: any = {};

    Object.entries(sx.breakpoints).forEach(([breakpoint, breakpointStyle]) => {
      if (!breakpointStyle) return;

      const isThemeDevice = breakpoint in ThemeGlobalValue.screen.breakpoint;

      if (breakpoint === 'default') {
        Object.assign(styles, breakpointStyle);
      } else if (isThemeDevice) {
        const width = ThemeGlobalValue.screen.breakpoint[breakpoint as IThemeBreakpointKey]?.width;
        if (width) {
          const query = `screen and (max-width: ${width}px)`;
          mediaQueries[query] = { ...mediaQueries[query], ...breakpointStyle };
        }
      } else {
        mediaQueries[breakpoint] = { ...mediaQueries[breakpoint], ...breakpointStyle };
      }
    });

    if (Object.keys(mediaQueries).length > 0) {
      styles['@media'] = mediaQueries;
    }
  }

  if (sx.horizontal) {
    if (!styles['@media']) {
      styles['@media'] = {};
    }
    styles['@media'][ThemeGlobalValue.screen.orientation.horizontal.media] = {
      ...styles['@media'][ThemeGlobalValue.screen.orientation.horizontal.media],
      ...sx.horizontal,
    };
  }

  if (sx.vertical) {
    if (!styles['@media']) {
      styles['@media'] = {};
    }
    styles['@media'][ThemeGlobalValue.screen.orientation.vertical.media] = {
      ...styles['@media'][ThemeGlobalValue.screen.orientation.vertical.media],
      ...sx.vertical,
    };
  }

  return style(styles);
}
