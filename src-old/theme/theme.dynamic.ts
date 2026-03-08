import { StyledSkeletonProps } from '@local/areas/skeleton';
import { AccordionDetailsProps, AccordionSummaryContentProps } from '@local/components/accordion/component.types';
import { StyledIconProps, StyledIconSkeletonProps } from '@local/components/icon/component.types';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { THEME_GLOBAL_VALUE, THEME_KEY_SIZE } from './theme.constants';
import { THEME_GLOBAL } from './theme.global-theme.css';
import {
  recipeAreaSkeleton,
  recipeComponentAccordionDetails,
  recipeComponentAccordionSummaryContent,
  recipeComponentTypography,
  recipeCoreTransitionFontSize,
} from './theme.recipe.css';
import { styleComponentStyledIcon, styleComponentStyledIconSkeleton } from './theme.style.css';
import { I_TYPOGRAPHY } from './theme.types';
import {
  varsAreaSkeleton,
  varsComponentAccordionSummaryContent,
  varsComponentStyledIcon,
  varsComponentStyledIconSkeleton,
  varsComponentTypography,
} from './theme.vars.css';

/**
 * Component/Typography
 */
export const dynamicComponentTypography = {
  className: (params: I_TYPOGRAPHY) =>
    [
      recipeCoreTransitionFontSize({
        isTransitionFontSize: params.isTransitionFontSize === true,
      }),
      recipeComponentTypography({
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
        [varsComponentTypography.letterSpacing]: `${params.letterSpacing}px`,
      }),
      ...(params.flex !== undefined && {
        [varsComponentTypography.flex]: params.flex,
      }),
      ...(params.cursor !== undefined && {
        [varsComponentTypography.cursor]: params.cursor,
      }),
      ...(params.overflow !== undefined && {
        [varsComponentTypography.overflow]: params.overflow,
      }),
      ...(params.line !== undefined && {
        [varsComponentTypography.line]: String(params.line),
      }),
      ...(params.family !== undefined && {
        [varsComponentTypography.family]: params.family,
      }),
      ...(params.weight !== undefined && {
        [varsComponentTypography.weight]: String(params.weight),
      }),
      ...(params.height !== undefined && {
        [varsComponentTypography.height]: String(params.height),
      }),
      ...(params.color !== undefined && {
        [varsComponentTypography.color]: THEME_GLOBAL_VALUE.palette[params.color],
      }),
      ...(params.align !== undefined && {
        [varsComponentTypography.align]: params.align,
      }),
      ...(params.wrap !== undefined && {
        [varsComponentTypography.wrap]: params.wrap,
      }),
      ...(params.decoration !== undefined && {
        [varsComponentTypography.decoration]: String(params.decoration),
      }),
      ...(params.transform !== undefined && {
        [varsComponentTypography.transform]: String(params.transform),
      }),
      ...('size' in params &&
        params.size !== undefined && {
          [varsComponentTypography.size]: `${typeof params.size === 'number' ? `${params.size}px` : params.size}`,
        }),
      ...('variant' in params &&
        params.variant !== undefined && {
          [varsComponentTypography.variant]: THEME_GLOBAL.font.sizeHeading[params.variant],
        }),
    }),
};

/**
 * Area/Skeleton
 */
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

/**
 * Component/Accordion
 */
export const dynamicComponentAccordionSummaryContent = {
  className: (params: AccordionSummaryContentProps) =>
    [
      recipeComponentAccordionSummaryContent({
        isAccordionIcon: params.isAccordionIcon === true,
      }),
    ].join(' '),
  style: (params: AccordionSummaryContentProps) =>
    assignInlineVars({
      ...(params.isAccordionIcon === true && {
        [varsComponentAccordionSummaryContent.iconWidth]: `26px`,
      }),
    }),
};

export const dynamicComponentAccordionDetails = {
  className: (params: AccordionDetailsProps) =>
    [
      recipeComponentAccordionDetails({
        expanded: params.expanded === true,
      }),
    ].join(' '),
};

/**
 * Component/Icon
 */
export const dynamicComponentStyledIcon = {
  className: () => [styleComponentStyledIcon].join(' '),
  style: (params: StyledIconProps) =>
    assignInlineVars({
      [varsComponentStyledIcon.color]: params.color ? THEME_GLOBAL_VALUE.palette[params.color] : 'inherit',
      [varsComponentStyledIcon.heightIcon]:
        params.size !== '100%' ? `${THEME_KEY_SIZE[params.size].heightIcon}px` : '100%',
      [varsComponentStyledIcon.turn]: params.turn ? `${params.turn}deg` : '0deg',
      [varsComponentStyledIcon.order]: params.order ? String(params.order) : 'initial',
    }),
};

export const dynamicComponentStyledIconSkeleton = {
  className: () => [styleComponentStyledIconSkeleton].join(' '),
  style: (params: StyledIconSkeletonProps) =>
    assignInlineVars({
      [varsComponentStyledIconSkeleton.heightIcon]:
        params.size !== '100%' ? `${THEME_KEY_SIZE[params.size].heightIcon}px` : '100%',
      [varsComponentStyledIconSkeleton.order]: params.order ? String(params.order) : 'initial',
    }),
};
