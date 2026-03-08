import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { useMemo } from 'react';

import { IUseTypographyStyles, IUseTypographyStylesResult } from './use.types';

export const useTypographyStyles = ({
  sx,
  className: propsClassName,
  style: propsStyle,
}: IUseTypographyStyles): IUseTypographyStylesResult => {
  const { className, style } = useMemo(() => {
    const className = setClasses([
      CSS_CLASS.component.typography.root,
      propsClassName,
      CSS_CLASS.transition[sx.transition ?? 'color'],
      sx.isBold != null && CSS_CLASS.component.typography.isBold,
      sx.line != null
        ? sx.line > 1
          ? CSS_CLASS.component.typography.lineMulti
          : CSS_CLASS.component.typography.lineSingle
        : false,
      sx.shadow != null ? (sx.shadow === 'shadowPulse' ? CSS_CLASS.component.typography.shadowShadowPulse : false) : false,
      sx.isHoverUnderlining != null && CSS_CLASS.component.typography.isHoverUnderlining,
      sx.isNoUserSelect != null && CSS_CLASS.component.typography.isNoUserSelect,
      'size' in sx && CSS_CLASS.component.typography.size,
      'variant' in sx && CSS_CLASS.component.typography.variant,
      'variant' in sx &&
        (sx.variant === 'callout' || sx.variant === 'headline') &&
        CSS_CLASS.component.typography.variantCallout,
    ]);

    const vars: Record<string, string> = {};

    if ('size' in sx) {
      vars[CSS_VARS_RAW.component.typography.size] = typeof sx.size === 'number' ? `${sx.size}px` : `${sx.size}`;
    }

    if ('variant' in sx) {
      vars[CSS_VARS_RAW.component.typography.variant] = CSS_VARS.font.sizeHeading[sx.variant];
      vars[CSS_VARS_RAW.component.typography.variantHeight] =
        `${CSS_VARS.font.sizeHeading[sx.variant]}-plus-height`;
    }

    if (sx.letterSpacing != null) {
      vars[CSS_VARS_RAW.component.typography.letterSpacing] =
        typeof sx.letterSpacing === 'number' ? `${sx.letterSpacing}px` : `${sx.letterSpacing}`;
    }

    if (sx.flex != null) vars[CSS_VARS_RAW.component.typography.flex] = `${sx.flex}`;
    if (sx.cursor != null) vars[CSS_VARS_RAW.component.typography.cursor] = `${sx.cursor}`;
    if (sx.overflow != null) vars[CSS_VARS_RAW.component.typography.overflow] = `${sx.overflow}`;

    if (sx.line != null && sx.line > 1) {
      vars[CSS_VARS_RAW.component.typography.line.multiline] = `${sx.line}`;
    }

    if (sx.family != null) vars[CSS_VARS_RAW.component.typography.family] = `${sx.family}`;
    if (sx.weight != null) vars[CSS_VARS_RAW.component.typography.weight] = `${sx.weight}`;
    if (sx.height != null) vars[CSS_VARS_RAW.component.typography.height] = `${sx.height}`;

    if (sx.color != null) vars[CSS_VARS_RAW.component.typography.color] = CSS_VARS.palette[sx.color];
    if (sx.align != null) vars[CSS_VARS_RAW.component.typography.align] = `${sx.align}`;
    if (sx.wrap != null) vars[CSS_VARS_RAW.component.typography.wrap] = `${sx.wrap}`;
    if (sx.decoration != null) vars[CSS_VARS_RAW.component.typography.decoration] = `${sx.decoration}`;
    if (sx.transform != null) vars[CSS_VARS_RAW.component.typography.transform] = `${sx.transform}`;

    const style = setStyles([propsStyle, Object.keys(vars).length ? vars : undefined]);

    return { className, style };
  }, [sx, propsClassName, propsStyle]);

  return { className, style };
};
