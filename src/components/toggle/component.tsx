import { CSS_CLASS, CSS_VARS, CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { useMergeRefs } from '@floating-ui/react';
import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';

import { IToggle } from './component.types';
import { ErrorMessage } from '../error';

export const Toggle = (props: IToggle) => {
  const { className, style } = useMemo(() => {
    const className = setClasses([
      props.className,
      CSS_CLASS.component.toggle.root,
      props.value ? CSS_CLASS.component.toggle.active : CSS_CLASS.component.toggle.unActive,
      CSS_CLASS.outline[props.isDisabledOutline ? 'none' : (props.outline ?? 'default')],
      CSS_CLASS.control[
        props.isDisabled || props.isHidden ? 'none' : props.isNotHoverEffect ? 'onlyActive' : 'boxShadow'
      ],
      CSS_CLASS.transition.color,
      props.error?.isError && CSS_CLASS.isError,
      props.isHidden && CSS_CLASS.component.toggle.isHidden,
      props.isHiddenBorder && CSS_CLASS.component.toggle.isHiddenBorder,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.toggle.height] = CSS_VARS.sizeToggle[props.size].height;
    vars[CSS_VARS_RAW.component.toggle.width] = CSS_VARS.sizeToggle[props.size].width;
    vars[CSS_VARS_RAW.component.toggle.padding] = CSS_VARS.sizeToggle[props.size].padding;
    vars[CSS_VARS_RAW.component.toggle.backgroundActive] = CSS_VARS.genre.toggle[props.genre].active.track;
    vars[CSS_VARS_RAW.component.toggle.backgroundUnActive] = CSS_VARS.genre.toggle[props.genre].unActive.track;
    vars[CSS_VARS_RAW.component.toggle.borderActive] = CSS_VARS.genre.toggle[props.genre].active.border;
    vars[CSS_VARS_RAW.component.toggle.borderUnActive] = CSS_VARS.genre.toggle[props.genre].unActive.border;

    const style = setStyles([props.style, Object.keys(vars).length ? vars : undefined]);

    return { className, style };
  }, [
    props.className,
    props.style,
    props.genre,
    props.isDisabled,
    props.isDisabledOutline,
    props.isHidden,
    props.isHiddenBorder,
    props.isNotHoverEffect,
    props.outline,
    props.size,
    props.value,
    props.error?.isError,
  ]);

  const { className: classNameCenter, style: styleCenter } = useMemo(() => {
    const className = setClasses([
      CSS_CLASS.component.toggle.center,
      CSS_CLASS.transition.color,
      props.value ? CSS_CLASS.component.toggle.centerActive : CSS_CLASS.component.toggle.centerUnActive,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.toggle.centerHeight] = CSS_VARS.sizeToggle[props.size].thumb;
    vars[CSS_VARS_RAW.component.toggle.centerWidth] = CSS_VARS.sizeToggle[props.size].thumb;
    vars[CSS_VARS_RAW.component.toggle.centerBackgroundActive] = CSS_VARS.genre.toggle[props.genre].active.thumb;
    vars[CSS_VARS_RAW.component.toggle.centerBackgroundUnActive] = CSS_VARS.genre.toggle[props.genre].unActive.thumb;
    vars[CSS_VARS_RAW.component.toggle.centerBorderActive] = CSS_VARS.palette.transparent;
    vars[CSS_VARS_RAW.component.toggle.centerBorderUnActive] = CSS_VARS.palette.transparent;
    vars[CSS_VARS_RAW.component.toggle.centerBoxShadowActive] =
      CSS_VARS.genre.toggle[props.genre].active.thumbBoxShadow;
    vars[CSS_VARS_RAW.component.toggle.centerBoxShadowUnActive] =
      CSS_VARS.genre.toggle[props.genre].unActive.thumbBoxShadow;

    vars[CSS_VARS_RAW.component.toggle.centerX] = props.value
      ? `calc(${CSS_VARS.sizeToggle[props.size].width} - ${CSS_VARS.sizeToggle[props.size].thumb} - ${CSS_VARS.sizeToggle[props.size].padding} * 2)`
      : '0px';

    const style = setStyles([props.style, Object.keys(vars).length ? vars : undefined]);

    return { className, style };
  }, [props.style, props.genre, props.size, props.value]);

  const refDefault = useRef<HTMLButtonElement>(null);

  const ref = useMergeRefs([refDefault, props.ref]);
  const handleClick = () => {
    if (!props.isDisabled && props.onChange) {
      props.onChange(!props.value);
    }
  };
  return (
    <>
      <motion.button
        className={className}
        style={style}
        type={props.type ?? 'button'}
        ref={ref}
        name={props.name}
        aria-label={props.ariaLabel}
        id={props.id}
        onClick={handleClick}
        onFocus={props.onFocus}
        onMouseDown={props.onMouseDown}
      >
        <motion.div className={classNameCenter} style={styleCenter} />
      </motion.button>
      {props?.error?.isError ? (
        <ErrorMessage
          size={props?.error.size ?? props.size}
          sxTypography={{ size: 'medium', weight: '400', ...props.sxTypography }}
          {...props.error}
        />
      ) : null}
    </>
  );
};
