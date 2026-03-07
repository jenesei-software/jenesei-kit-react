import { Icon } from '@local/components/icon';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { useMergeRefs } from '@floating-ui/react';
import { motion } from 'framer-motion';
import { FC, useMemo, useRef } from 'react';

import { ICheckbox } from './component.types';

export const Checkbox: FC<ICheckbox> = (props) => {
  const children = useMemo(
    () => (
      <>
        <Icon
          {...(props.checked ? props.view.true : props.view.false)}
          size={(props.checked ? props.view.true : props.view.false)?.size ?? props.size}
        />
        {props.children && props.children}
      </>
    ),
    [props.checked, props.children, props.size, props.view],
  );
  const LoadingComponent = <Icon size={props.size} type='loading' name='Line' />;

  const refDefault = useRef<HTMLButtonElement>(null);

  const ref = useMergeRefs([refDefault, props.ref]);

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: { ...props?.sxTypography, size: CSS_VARS.size[props.size].font, weight: '700' },
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
      props.isHidden && CSS_CLASS.component.checkbox.isHidden,
      props.isHiddenBorder && CSS_CLASS.component.checkbox.isHiddenBorder,
      props.isRadius && CSS_CLASS.component.checkbox.isRadius,
      props.isFullSize && CSS_CLASS.component.checkbox.isFullSize,
      props.isWidthAsHeight && CSS_CLASS.component.checkbox.isWidthAsHeight,
      props.isMinWidthAsContent && CSS_CLASS.component.checkbox.isMinWidthAsContent,
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
    props.isRadius,
    props.isWidthAsHeight,
    props.outline,
    props.size,
  ]);
  const handleClick = () => {
    if (!props.isDisabled && props.onChange) {
      props.onChange(!props.checked);
    }
  };
  return (
    <>
      <motion.button
        type='button'
        disabled={props.isDisabled}
        tabIndex={0}
        onClick={handleClick}
        className={className}
        style={style}
        ref={ref}
        name={props.name}
        aria-label={props.ariaLabel}
        id={props.id}
      >
        {props.isOnlyLoading ? (
          props.isLoading ? (
            LoadingComponent
          ) : (
            children
          )
        ) : (
          <>
            <div className={classNameTypography} style={styleTypography}>
              {children}
            </div>
            {props.isLoading && LoadingComponent}
          </>
        )}
      </motion.button>
      {/* {props?.error ? (
        <ErrorMessage
          size={props?.error.size ?? props.size}
          sxTypography={getSxTypography({ size: 'medium', weight: 400, sx: props.sxTypography, theme })}
          {...props.error}
        />
      ) : null} */}
    </>
  );
};
