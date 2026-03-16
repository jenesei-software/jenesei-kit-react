import { ErrorMessage } from '@local/components/error';
import { Icon } from '@local/components/icon';
import { useMergeRefs } from '@local/hooks/use-merge-refs';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { CSS_CLASS, CSS_VARS, EXTRA_VALUE } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { FC, Ref, useCallback, useMemo, useRef } from 'react';

import { ICheckbox } from './component.types';

export const Checkbox: FC<ICheckbox> = (props) => {
  const refDefault = useRef<HTMLButtonElement>(null);

  const ref = useMergeRefs([refDefault, props.ref]);

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: { variant: EXTRA_VALUE.sizeToController[props.size], isNoUserSelect: true, ...props?.sxTypography },
    style: { order: 0, display: 'inline-flex' },
  });

  const { className, style } = useMemo(() => {
    const className = setClasses([
      CSS_CLASS.component.checkbox.root,
      CSS_CLASS.control[props.isDisabled ? 'none' : (props.control ?? 'boxShadow')],
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
      props.className,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.checkbox.background] = CSS_VARS.genre.checkbox[props.genre].background.index;
    vars[CSS_VARS_RAW.component.checkbox.color] = CSS_VARS.genre.checkbox[props.genre].color.index;
    vars[CSS_VARS_RAW.component.checkbox.border] = CSS_VARS.genre.checkbox[props.genre].border.index;

    vars[CSS_VARS_RAW.component.checkbox.height] = CSS_VARS.size[props.size].height;
    vars[CSS_VARS_RAW.component.checkbox.padding] = CSS_VARS.size[props.size].padding;
    vars[CSS_VARS_RAW.component.checkbox.radius] = CSS_VARS.size[props.size].radius;
    vars[CSS_VARS_RAW.component.checkbox.gap] = `calc(${CSS_VARS.size[props.size].padding} - 2px)`;

    const style = setStyles([Object.keys(vars).length ? vars : undefined, props.style]);

    return { className, style };
  }, [
    props.className,
    props.style,
    props.genre,
    props.isDisabled,
    props.isFullSize,
    props.isHidden,
    props.isHiddenBorder,
    props.isMinWidthAsContent,
    props.isFullRadius,
    props.isWidthAsHeight,
    props.size,
    props.error,
    props.isZeroRadius,
    props.isOnlyIcon,
    props.control,
  ]);
  const handleClick = useCallback(() => {
    if (!props.isDisabled && props.onChange) {
      props.onChange(!props.checked);
    }
  }, [props.isDisabled, props.onChange, props.checked]);
  return (
    <>
      <button
        disabled={props.isDisabled}
        tabIndex={props.tabIndex ?? 0}
        onClick={handleClick}
        onFocus={props.onFocus}
        onMouseDown={props.onMouseDown}
        className={className}
        style={style}
        type={props.type ?? 'button'}
        ref={ref as Ref<HTMLButtonElement>}
        name={props.name}
        aria-label={props.ariaLabel}
        id={props.id}
      >
        <Icon
          {...(props.checked ? props.view.true : props.view.false)}
          size={(props.checked ? props.view.true : props.view.false)?.size ?? props.size}
        />
        {!props.isOnlyIcon && props.children && (
          <div className={classNameTypography} style={styleTypography}>
            {props.children}
          </div>
        )}
      </button>
      {props?.error?.isError && (
        <ErrorMessage
          size={props?.error.size ?? props.size}
          sxTypography={{ size: '16px', weight: '400', ...props?.error.sxTypography }}
          {...props.error}
        />
      )}
    </>
  );
};
