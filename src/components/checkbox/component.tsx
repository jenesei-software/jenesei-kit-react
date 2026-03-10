import { Icon } from '@local/components/icon';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { useMergeRefs } from '@floating-ui/react';
import { motion } from 'framer-motion';
import { FC, useCallback, useMemo, useRef } from 'react';

import { ICheckbox } from './component.types';
import { ErrorMessage } from '../error';

export const Checkbox: FC<ICheckbox> = (props) => {
  const refDefault = useRef<HTMLButtonElement>(null);

  const ref = useMergeRefs([refDefault, props.ref]);

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: { ...props?.sxTypography, size: CSS_VARS.size[props.size].font, weight: '700', height: '1' },
    style: { order: 0, display: 'contents' },
  });

  const { className, style } = useMemo(() => {
    const className = setClasses([
      props.className,
      CSS_CLASS.component.checkbox.root,
      CSS_CLASS.outline[props.isDisabledOutline ? 'none' : (props.outline ?? 'default')],
      CSS_CLASS.control[
        props.isDisabled || props.isHidden ? 'none' : props.isNotHoverEffect ? 'onlyActive' : 'boxShadow'
      ],
      CSS_CLASS.transition.color,
      props.error?.isError && CSS_CLASS.isError,
      props.isZeroRadius && CSS_CLASS.component.checkbox.isZeroRadius,
      props.isHidden && CSS_CLASS.component.checkbox.isHidden,
      props.isHiddenBorder && CSS_CLASS.component.checkbox.isHiddenBorder,
      props.isFullRadius && CSS_CLASS.component.checkbox.isFullRadius,
      props.isFullSize && CSS_CLASS.component.checkbox.isFullSize,
      props.isWidthAsHeight && CSS_CLASS.component.checkbox.isWidthAsHeight,
      props.isMinWidthAsContent && CSS_CLASS.component.checkbox.isMinWidthAsContent,
      props.isOnlyIcon && CSS_CLASS.component.checkbox.isOnlyIcon,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.checkbox.background] = CSS_VARS.genre.checkbox[props.genre].background.index;
    vars[CSS_VARS_RAW.component.checkbox.color] = CSS_VARS.genre.checkbox[props.genre].color.index;
    vars[CSS_VARS_RAW.component.checkbox.border] = CSS_VARS.genre.checkbox[props.genre].border.index;

    vars[CSS_VARS_RAW.component.checkbox.height] = CSS_VARS.size[props.size].height;
    vars[CSS_VARS_RAW.component.checkbox.padding] = CSS_VARS.size[props.size].padding;
    vars[CSS_VARS_RAW.component.checkbox.radius] = CSS_VARS.size[props.size].radius;
    vars[CSS_VARS_RAW.component.checkbox.gap] = `calc(${CSS_VARS.size[props.size].padding} - 2px)`;

    const style = setStyles([props.sx, props.style, Object.keys(vars).length ? vars : undefined]);

    return { className, style };
  }, [
    props.className, 
    props.style, 
    props.sx, 
    props.genre, 
    props.isDisabled, 
    props.isDisabledOutline, 
    props.isFullSize, 
    props.isHidden, 
    props.isHiddenBorder, 
    props.isMinWidthAsContent, 
    props.isNotHoverEffect, 
    props.isFullRadius, 
    props.isWidthAsHeight, 
    props.outline, 
    props.size, 
    props.error, props.isFullRadius, props.isZeroRadius, props.isOnlyIcon
  ]);
  const handleClick = useCallback(() => {
    if (!props.isDisabled && props.onChange) {
      props.onChange(!props.checked);
    }
  }, [props.isDisabled, props.onChange, props.checked]);
  return (
    <>
      <motion.button
        disabled={props.isDisabled}
        tabIndex={props.tabIndex ?? 0}
        onClick={handleClick}
        onFocus={props.onFocus}
        onMouseDown={props.onMouseDown}
        className={className}
        style={style}
        type={props.type ?? 'button'}
        ref={ref}
        name={props.name}
        aria-label={props.ariaLabel}
        id={props.id}
      >
        <Icon
          {...(props.checked ? props.view.true : props.view.false)}
          size={(props.checked ? props.view.true : props.view.false)?.size ?? props.size}
        />
        {!props.isOnlyIcon && (
          <div className={classNameTypography} style={styleTypography}>
            {props.children}
          </div>
        )}
      </motion.button>
      {props?.error?.isError && (
        <ErrorMessage
          size={props?.error.size ?? props.size}
          sxTypography={{ size: 'medium', weight: '400', ...props.sxTypography, ...props?.error.sxTypography }}
          {...props.error}
        />
      )}
    </>
  );
};
