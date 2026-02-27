import { useSX } from '@local/hooks/use-responsive-layout/use';
import { CSS_CLASS, CSS_VARS, ITypography } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { ElementType, memo, useMemo } from 'react';

import styles from './component.styles.module.css';
import { ITypographyComponent } from './component.types';

export const Typography = memo((props: ITypographyComponent) => {
  const sx = useSX(props?.sx ?? {}) as ITypography;

  const { className, style, Component } = useMemo(() => {
    const className = setClasses([
      props.className,
      sx.isTransitionFontSize != null && CSS_CLASS.transitionFontSize,
      sx.letterSpacing != null && styles['typography-letter-spacing'],
      sx.isBold != null && styles['typography-is-bold'],
      sx.flex != null && styles['typography-flex'],
      sx.cursor != null && styles['typography-cursor'],
      sx.overflow != null && styles['typography-overflow'],
      sx.line != null ? (sx.line > 1 ? styles['typography-line-multi'] : styles['typography-line-single']) : false,
      sx.family != null && styles['typography-family'],
      sx.weight != null && styles['typography-weight'],
      sx.height != null && styles['typography-height'],
      sx.color != null && styles['typography-color'],
      sx.align != null && styles['typography-align'],
      sx.wrap != null && styles['typography-wrap'],
      sx.decoration != null && styles['typography-decoration'],
      sx.transform != null && styles['typography-transform'],
      sx.shadow != null ? (sx.shadow === 'shadowPulse' ? styles['typography-shadow-shadowPulse'] : false) : false,
      sx.isHoverUnderlining != null && styles['typography-is-hover-underlining'],
      sx.isNoUserSelect != null && styles['typography-is-no-user-select'],
      'size' in sx && styles[`typography-size`],
      'variant' in sx && styles[`typography-variant`],
      'variant' in sx &&
        (sx.variant === 'callout' || sx.variant === 'headline') &&
        styles[`typography-variant-callout`],
      styles.typography,
    ]);

    const vars: Record<string, string> = {};

    if ('size' in sx) {
      vars[CSS_VARS_RAW.component.typography.index.size] = typeof sx.size === 'number' ? `${sx.size}px` : `${sx.size}`;
    }

    if ('variant' in sx) {
      vars[CSS_VARS_RAW.component.typography.index.variant] = CSS_VARS.font.sizeHeading[sx.variant];
      vars[CSS_VARS_RAW.component.typography.index.variantHeight] =
        `${CSS_VARS.font.sizeHeading[sx.variant]}-plus-height`;
    }

    if (sx.letterSpacing != null) {
      vars[CSS_VARS_RAW.component.typography.index.letterSpacing] =
        typeof sx.letterSpacing === 'number' ? `${sx.letterSpacing}px` : `${sx.letterSpacing}`;
    }

    if (sx.flex != null) vars[CSS_VARS_RAW.component.typography.index.flex] = `${sx.flex}`;
    if (sx.cursor != null) vars[CSS_VARS_RAW.component.typography.index.cursor] = `${sx.cursor}`;
    if (sx.overflow != null) vars[CSS_VARS_RAW.component.typography.index.overflow] = `${sx.overflow}`;

    if (sx.line != null && sx.line > 1) {
      vars[CSS_VARS_RAW.component.typography.index.line.multiline] = `${sx.line}`;
    }

    if (sx.family != null) vars[CSS_VARS_RAW.component.typography.index.family] = `${sx.family}`;
    if (sx.weight != null) vars[CSS_VARS_RAW.component.typography.index.weight] = `${sx.weight}`;
    if (sx.height != null) vars[CSS_VARS_RAW.component.typography.index.height] = `${sx.height}`;

    if (sx.color != null) vars[CSS_VARS_RAW.component.typography.index.color] = CSS_VARS.palette[sx.color];
    if (sx.align != null) vars[CSS_VARS_RAW.component.typography.index.align] = `${sx.align}`;
    if (sx.wrap != null) vars[CSS_VARS_RAW.component.typography.index.wrap] = `${sx.wrap}`;
    if (sx.decoration != null) vars[CSS_VARS_RAW.component.typography.index.decoration] = `${sx.decoration}`;
    if (sx.transform != null) vars[CSS_VARS_RAW.component.typography.index.transform] = `${sx.transform}`;

    const style = setStyles([props.style, Object.keys(vars).length ? vars : undefined]);

    const Component: ElementType = props.isAnchor
      ? 'a'
      : props.isParagraph
        ? 'p'
        : props.isSpan
          ? 'span'
          : sx && 'variant' in sx
            ? sx.variant === 'headline'
              ? 'h1'
              : sx.variant === 'sub-headline'
                ? 'h2'
                : sx.variant === 'title-1'
                  ? 'h3'
                  : sx.variant === 'title-2'
                    ? 'h4'
                    : sx.variant === 'title-3'
                      ? 'h5'
                      : sx.variant === 'title-4'
                        ? 'h6'
                        : 'span'
            : 'span';

    return { className, style, Component };
  }, [sx, props.isAnchor, props.isParagraph, props.isSpan, props.className, props.style]);

  return (
    <Component ref={props.ref as any} href={props.href} className={className} style={style}>
      {props.children}
    </Component>
  );
});
