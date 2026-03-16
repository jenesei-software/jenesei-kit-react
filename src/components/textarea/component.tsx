import { ErrorMessage } from '@local/components/error';
import { useMergeRefs } from '@local/hooks/use-merge-refs';
import { useTypographyStyles } from '@local/hooks/use-typography-styles/use';
import { CSS_CLASS, CSS_VARS, CSS_VARS_RAW, EXTRA_VALUE } from '@local/styles/utils';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { useCallback, useEffect, useMemo, useRef } from 'react';

import { ITextArea } from './component.types';

const lineHeight = EXTRA_VALUE.font.size * EXTRA_VALUE.font.height;

export const TextArea = (props: ITextArea) => {
  const refLocal = useRef<HTMLTextAreaElement>(null);
  const ref = useMergeRefs([refLocal, props.ref]);

  const maxHeight = useMemo(() => (props.maxRows ? props.maxRows * lineHeight : 0), [props.maxRows]);
  const minHeight = useMemo(() => (props.minRows ? props.minRows * lineHeight : lineHeight), [props.minRows]);

  const resizeTextarea = useCallback(() => {
    const el = refLocal.current;
    if (el && props.isAutoHeight) {
      el.style.height = 'auto';
      const newHeight = Math.min(el.scrollHeight, maxHeight);
      el.style.height = `${newHeight}px`;
    }
  }, [props.isAutoHeight, maxHeight]);

  const handleOnChange = useCallback(
    (value: string) => {
      if (props.isNoSpaces) {
        const valueWithoutSpaces = value.replace(/\s+/g, '');
        props.onChange?.(valueWithoutSpaces);
      } else {
        props.onChange?.(value);
      }
    },
    [props.isNoSpaces, props.onChange],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (props.isAutoHeight) {
      requestAnimationFrame(resizeTextarea);
    }
  }, [props.value, resizeTextarea, props.isAutoHeight]);

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: {
      family: props.isNiceNumber ? 'Roboto Mono' : props.sxTypography?.family,
      size: 16,
      weight: props.isBold ? '700' : '400',
      height: '1.2',
      ...props?.sxTypography,
    },
  });

  const { className, style } = useMemo(() => {
    const className = setClasses([
      CSS_CLASS.component.textarea.wrapper,
      CSS_CLASS.transition.color,
      props.error?.isError && CSS_CLASS.isError,
      CSS_CLASS.control[props.isDisabled ? 'none' : (props.control ?? 'boxShadow')],
      props.isZeroRadius && CSS_CLASS.component.textarea.wrapperIsZeroRadius,
      props.isHidden && CSS_CLASS.component.textarea.wrapperIsHidden,
      props.isHiddenBorder && CSS_CLASS.component.textarea.wrapperIsHiddenBorder,
      props.isFullRadius && CSS_CLASS.component.textarea.wrapperIsFullRadius,
      props.isCenter && CSS_CLASS.component.textarea.wrapperIsCenter,
      !props.isResize && CSS_CLASS.component.textarea.wrapperIsNotResize,
      props.className,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.textarea.radius] = CSS_VARS.size[props.size].radius;
    vars[CSS_VARS_RAW.component.textarea.borderColor] = CSS_VARS.genre.textarea[props.genre].border;
    vars[CSS_VARS_RAW.component.textarea.background] = CSS_VARS.genre.textarea[props.genre].background;
    vars[CSS_VARS_RAW.component.textarea.padding] =
      `calc(${CSS_VARS.size[props.size].padding} - 4px) 0px calc(${CSS_VARS.size[props.size].padding} - 4px) ${CSS_VARS.size[props.size].padding}`;

    const style = setStyles([Object.keys(vars).length ? vars : undefined, props.style]);

    return { className, style };
  }, [
    props.className,
    props.size,
    props.style,
    props.isDisabled,
    props.isHidden,
    props.isFullRadius,
    props.isHiddenBorder,
    props.isZeroRadius,
    props.genre,
    props.control,
    props.isCenter,
    props.error?.isError,
    props.isResize,
  ]);

  const { className: classNameTextarea, style: styleTextarea } = useMemo(() => {
    const className = setClasses([CSS_CLASS.component.textarea.root, CSS_CLASS.transition.color, classNameTypography]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.textarea.color] = CSS_VARS.genre.textarea[props.genre].color;
    vars[CSS_VARS_RAW.component.textarea.placeholderColor] = CSS_VARS.genre.textarea[props.genre].placeholder;

    const style = setStyles([props.style, styleTypography, Object.keys(vars).length ? vars : undefined]);

    return { className, style };
  }, [props.style, props.genre, classNameTypography, styleTypography]);

  return (
    <>
      <div className={className} style={style}>
        <textarea
          className={classNameTextarea}
          tabIndex={0}
          ref={ref}
          maxLength={props.maxLength}
          minLength={props.minLength}
          disabled={props.isDisabled}
          readOnly={props.isReadOnly}
          required={props.isRequired}
          defaultValue={props.defaultValue === null ? '' : props.defaultValue}
          value={props.value === null ? '' : props.value}
          rows={props.minRows}
          placeholder={props.placeholder}
          onChange={(event) => handleOnChange(event.target.value)}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onKeyDown={props.onKeyDown}
          onMouseDown={props.onMouseDown}
          onClick={props.onClick}
          name={props.name}
          aria-label={props.ariaLabel ?? props.name}
          autoComplete={props.autoComplete}
          id={props.id}
          style={{
            ...styleTextarea,
            minHeight: `${minHeight}px`,
            maxHeight: props.isResize ? 'none' : props.isAutoHeight ? `${maxHeight}px` : `${minHeight}px`,
          }}
        />
      </div>

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
