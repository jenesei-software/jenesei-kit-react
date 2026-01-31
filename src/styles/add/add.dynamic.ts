import { StyledSkeletonProps } from '@local/areas/skeleton';
import { THEME_GLOBAL, THEME_GLOBAL_VALUE } from '@local/styles/theme';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { recipeAreaSkeleton, recipeFontSizeTransition, recipeTypography } from './add.recipe.css';
import { I_TYPOGRAPHY } from './add.types';
import { varsAreaSkeleton, varsTypography } from './add.vars.css';

export const dynamicTypography = {
  className: (params: I_TYPOGRAPHY) =>
    [
      recipeFontSizeTransition({
        isTransitionFontSize: params.isTransitionFontSize === true,
      }),
      recipeTypography({
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
  style: (params: I_TYPOGRAPHY) =>
    assignInlineVars({
      ...(params.letterSpacing !== undefined && {
        [varsTypography.letterSpacing]: `${params.letterSpacing}px`,
      }),
      ...(params.flex !== undefined && {
        [varsTypography.flex]: params.flex,
      }),
      ...(params.cursor !== undefined && {
        [varsTypography.cursor]: params.cursor,
      }),
      ...(params.overflow !== undefined && {
        [varsTypography.overflow]: params.overflow,
      }),
      ...(params.line !== undefined && {
        [varsTypography.line]: String(params.line),
      }),
      ...(params.family !== undefined && {
        [varsTypography.family]: params.family,
      }),
      ...(params.weight !== undefined && {
        [varsTypography.weight]: String(params.weight),
      }),
      ...(params.height !== undefined && {
        [varsTypography.height]: String(params.height),
      }),
      ...(params.color !== undefined && {
        [varsTypography.color]: THEME_GLOBAL_VALUE.palette[params.color],
      }),
      ...(params.align !== undefined && {
        [varsTypography.align]: params.align,
      }),
      ...(params.wrap !== undefined && {
        [varsTypography.wrap]: params.wrap,
      }),
      ...(params.decoration !== undefined && {
        [varsTypography.decoration]: String(params.decoration),
      }),
      ...(params.transform !== undefined && {
        [varsTypography.transform]: String(params.transform),
      }),
      ...('size' in params &&
        params.size !== undefined && {
          [varsTypography.size]: `${typeof params.size === 'number' ? `${params.size}px` : params.size}`,
        }),
      ...('variant' in params &&
        params.variant !== undefined && {
          [varsTypography.variant]: THEME_GLOBAL.font.sizeHeading[params.variant],
        }),
    }),
};

export const dynamicAreaSkeleton = {
  className: (params: StyledSkeletonProps) =>
    [
      recipeAreaSkeleton({
        visible: params.visible === true,
      }),
    ].join(' '),
  style: (params: StyledSkeletonProps) =>
    assignInlineVars({
      ...(params.color !== undefined && {
        [varsAreaSkeleton.color]: params.color
          ? THEME_GLOBAL_VALUE.palette[params.color]
          : params.isInheritColor
            ? 'inherit'
            : params.type === 'secondary'
              ? '#f6f7f8'
              : '#edeef1',
      }),
      ...(params.visible !== undefined && {
        [varsAreaSkeleton.opacity]: !params.visible ? '0' : '1',
      }),
    }),
};
