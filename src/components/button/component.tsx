import { getIconComponents } from '@local/components/icon';
import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize';
import { useMergeRefs } from '@local/hooks/use-merge-refs';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { CSS_CLASS, CSS_VARS, CSS_VARS_RAW, EXTRA_VALUE } from '@local/styles/utils';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import isEqual from 'lodash/isEqual';
import { FC, memo, Ref, useCallback, useMemo, useRef } from 'react';

import { IButton } from './component.types';

const ButtonComponent: FC<IButton> = (props) => {
  const icons = useDeepCompareMemoize(props.icons ?? []);
  const propsStyle = useDeepCompareMemoize(props.style);
  const sxTypography = useDeepCompareMemoize(props.sxTypography);
  const hasIconGroupOrder = 'iconGroupOrder' in props;
  const iconGroupOrder = hasIconGroupOrder ? props.iconGroupOrder : undefined;

  const iconComponents = useMemo(
    () =>
      getIconComponents({
        icons: icons.map((e) => ({
          ...e,
          style: { color: CSS_VARS.genre.button[props.genre].color.index },
        })),
        size: props.size,
      }),
    [icons, props.size, props.genre],
  );

  const handleClick = useCallback<Exclude<IButton['onClick'], undefined>>(
    (event) => {
      if (!props.isDisabled && props.onClick) {
        props.onClick(event);
      }
    },
    [props.isDisabled, props.onClick],
  );

  const refDefault = useRef<HTMLButtonElement>(null);

  const refs = useMemo(() => [refDefault, props.ref], [props.ref]);
  const ref = useMergeRefs(refs);

  const typographySx = useMemo(
    () => ({ variant: EXTRA_VALUE.sizeToController[props.size], isNoUserSelect: true, ...sxTypography }),
    [props.size, sxTypography],
  );

  const typographyStyle = useMemo(() => ({ order: 0, display: 'inline-flex' }), []);

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: typographySx,
    style: typographyStyle,
  });

  const { className, style } = useMemo(() => {
    const className = setClasses([
      CSS_CLASS.component.button.root,
      CSS_CLASS.control[props.isDisabled ? 'none' : (props.control ?? 'boxShadow')],
      CSS_CLASS.transition.color,
      props.isZeroRadius && CSS_CLASS.component.button.isZeroRadius,
      props.isHidden && CSS_CLASS.component.button.isHidden,
      props.isHiddenBorder && CSS_CLASS.component.button.isHiddenBorder,
      props.isFullRadius && CSS_CLASS.component.button.isFullRadius,
      props.isFullSize && CSS_CLASS.component.button.isFullSize,
      props.isWidthAsHeight && CSS_CLASS.component.button.isWidthAsHeight,
      props.isMinWidthAsContent && CSS_CLASS.component.button.isMinWidthAsContent,
      props.isZeroPadding && CSS_CLASS.component.button.isZeroPadding,
      props.isSizeFitContent && CSS_CLASS.component.button.isSizeFitContent,
      props.className,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.button.background] = CSS_VARS.genre.button[props.genre].background.index;
    vars[CSS_VARS_RAW.component.button.color] = CSS_VARS.genre.button[props.genre].color.index;
    vars[CSS_VARS_RAW.component.button.border] = CSS_VARS.genre.button[props.genre].border.index;

    vars[CSS_VARS_RAW.component.button.height] = CSS_VARS.size[props.size].height;
    vars[CSS_VARS_RAW.component.button.padding] = CSS_VARS.size[props.size].padding;
    vars[CSS_VARS_RAW.component.button.radius] = CSS_VARS.size[props.size].radius;
    vars[CSS_VARS_RAW.component.button.gap] = `calc(${CSS_VARS.size[props.size].padding} - 2px)`;

    const style = setStyles([Object.keys(vars).length ? vars : undefined, propsStyle]);

    return { className, style };
  }, [
    props.className,
    propsStyle,
    props.genre,
    props.isDisabled,
    props.isFullSize,
    props.isHidden,
    props.isHiddenBorder,
    props.isMinWidthAsContent,
    props.isFullRadius,
    props.isWidthAsHeight,
    props.size,
    props.isZeroRadius,
    props.control,
    props.isZeroPadding,
    props.isSizeFitContent,
  ]);

  const { className: classNameIconGroup, style: styleIconGroup } = useMemo(() => {
    const className = setClasses([
      CSS_CLASS.component.button.iconGroup,

      props.isIconGroup && CSS_CLASS.component.button.iconGroupIsIconGroup,
    ]);

    const vars: Record<string, string> = {};

    if (hasIconGroupOrder) vars[CSS_VARS_RAW.component.button.iconGroupOrder] = String(iconGroupOrder ?? 'initial');

    const style = setStyles([Object.keys(vars).length ? vars : undefined]);

    return { className, style };
  }, [props.isIconGroup, hasIconGroupOrder, iconGroupOrder]);

  return (
    <button
      tabIndex={props.tabIndex}
      disabled={props.isDisabled}
      className={className}
      style={style}
      onClick={handleClick}
      onFocus={props.onFocus}
      onMouseDown={props.onMouseDown}
      type={props.type ?? 'button'}
      ref={ref as Ref<HTMLButtonElement>}
      name={props.name}
      aria-label={props.ariaLabel}
      id={props.id}
    >
      {!props.isOnlyIcon && props.children && (
        <div className={classNameTypography} style={styleTypography}>
          {props.children}
        </div>
      )}
      <div className={classNameIconGroup} style={styleIconGroup}>
        {iconComponents}
      </div>
    </button>
  );
};

export const Button = memo(ButtonComponent, areButtonPropsEqual);
Button.displayName = 'Button';

function areButtonPropsEqual(prev: IButton, next: IButton) {
  const { icons: prevIcons, style: prevStyle, sxTypography: prevSxTypography, ...prevRest } = prev;
  const { icons: nextIcons, style: nextStyle, sxTypography: nextSxTypography, ...nextRest } = next;

  return (
    isEqual(prevIcons, nextIcons) &&
    isEqual(prevStyle, nextStyle) &&
    isEqual(prevSxTypography, nextSxTypography) &&
    areShallowEqual(prevRest, nextRest)
  );
}

function areShallowEqual<T extends Record<string, unknown>>(prev: T, next: T) {
  const prevKeys = Object.keys(prev);
  const nextKeys = Object.keys(next);

  if (prevKeys.length !== nextKeys.length) return false;

  const nextKeysSet = new Set(nextKeys);

  return prevKeys.every((key) => nextKeysSet.has(key) && Object.is(prev[key], next[key]));
}
