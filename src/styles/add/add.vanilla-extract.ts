import { assignInlineVars } from '@vanilla-extract/dynamic';

import { TypographyAllProps } from './add.types';
import { addFontSizeTransition, addSxTypographyRecipe, addSxTypographyVars } from './add.vanilla-extract.css';
import { ThemeGlobal } from '../theme/theme.vanilla-extract.css';

export const addSxTypography = {
  className: (params: TypographyAllProps) =>
    [
      addFontSizeTransition({
        isTransitionFontSize: params.isTransitionFontSize === true,
      }),
      addSxTypographyRecipe({
        shadow: params.shadow,
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
      }),
    ].join(' '),
  style: (params: TypographyAllProps) =>
    assignInlineVars({
      ...(params.letterSpacing !== undefined && {
        [addSxTypographyVars.letterSpacing]: `${params.letterSpacing}px`,
      }),
      ...(params.flex !== undefined && {
        [addSxTypographyVars.flex]: params.flex,
      }),
      ...(params.cursor !== undefined && {
        [addSxTypographyVars.cursor]: params.cursor,
      }),
      ...(params.overflow !== undefined && {
        [addSxTypographyVars.overflow]: params.overflow,
      }),
      ...(params.line !== undefined && {
        [addSxTypographyVars.line]: String(params.line),
      }),
      ...(params.family !== undefined && {
        [addSxTypographyVars.family]: params.family,
      }),
      ...(params.weight !== undefined && {
        [addSxTypographyVars.weight]: String(params.weight),
      }),
      ...(params.height !== undefined && {
        [addSxTypographyVars.height]: String(params.height),
      }),
      ...(params.color !== undefined && {
        [addSxTypographyVars.color]: ThemeGlobal.palette[params.color],
      }),
      ...(params.align !== undefined && {
        [addSxTypographyVars.align]: params.align,
      }),
      ...(params.wrap !== undefined && {
        [addSxTypographyVars.wrap]: params.wrap,
      }),
      ...(params.decoration !== undefined && {
        [addSxTypographyVars.decoration]: String(params.decoration),
      }),
      ...(params.transform !== undefined && {
        [addSxTypographyVars.transform]: String(params.transform),
      }),
      ...('size' in params &&
        params.size !== undefined && {
          [addSxTypographyVars.size]: `${typeof params.size === 'number' ? `${params.size}px` : params.size}`,
        }),
      ...('variant' in params &&
        params.variant !== undefined && {
          [addSxTypographyVars.variant]: `${typeof params.variant === 'number' ? `${params.variant}px` : params.variant}`,
        }),
    }),
};
