import { ErrorMessage } from '@local/components/error';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { useMergeRefs } from '@floating-ui/react';
import { useCallback, useMemo, useRef } from 'react';
import { NumberFormatValues, NumericFormat, PatternFormat } from 'react-number-format';

import { IInput } from './component.types';

export const Input = (props: IInput) => {
  const handleOnChange = useCallback(
    (input: string | NumberFormatValues) => {
      if (props.variety === 'standard') {
        const value = typeof input === 'string' ? input : input.value;
        const cleaned = props.isNoSpaces ? value.replace(/\s+/g, '') : value;
        props.onChange?.(cleaned);
      }

      if (props.variety === 'pattern' || props.variety === 'numeric') {
        if (typeof input !== 'string') {
          props.onChange?.(input);
        }
      }
    },
    [props],
  );

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: {
      ...props?.sxTypography,
      family: props.isNiceNumber ? 'Roboto Mono' : props.sxTypography?.family,
      size: 16,
      weight: props.isBold ? '700' : '400',
      height: '1',
    },
  });

  const { className, style } = useMemo(() => {
    const className = setClasses([
      props.className,
      CSS_CLASS.component.input.wrapper,
      CSS_CLASS.transition.color,
      props.error?.isError && CSS_CLASS.isError,
      CSS_CLASS.control[props.isDisabled ? 'none' : (props.control ?? 'boxShadow')],
      props.isWidthAsHeight && CSS_CLASS.component.input.wrapperIsWidthAsHeight,
      props.isZeroRadius && CSS_CLASS.component.input.wrapperIsZeroRadius,
      props.isHidden && CSS_CLASS.component.input.wrapperIsHidden,
      props.isHiddenBorder && CSS_CLASS.component.input.wrapperIsHiddenBorder,
      props.isFullRadius && CSS_CLASS.component.input.wrapperIsFullRadius,
      props.isWidthAsHeight && CSS_CLASS.component.input.wrapperIsWidthAsHeight,
      props.isMinWidthAsContent && CSS_CLASS.component.input.wrapperIsMinWidthAsContent,
      props.isCenter && CSS_CLASS.component.input.wrapperIsCenter,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.input.height] = CSS_VARS.size[props.size].height;
    vars[CSS_VARS_RAW.component.input.radius] = CSS_VARS.size[props.size].radius;
    vars[CSS_VARS_RAW.component.input.borderColor] = CSS_VARS.genre.input[props.genre].border;
    vars[CSS_VARS_RAW.component.input.background] = CSS_VARS.genre.input[props.genre].background;

    if (props.postfixChildren?.left) vars[CSS_VARS_RAW.component.input.postfixLeft] = props.postfixChildren?.left;
    if (props.postfixChildren?.right) vars[CSS_VARS_RAW.component.input.postfixRight] = props.postfixChildren?.right;
    if (props.postfixChildren?.width) vars[CSS_VARS_RAW.component.input.postfixWidth] = props.postfixChildren?.width;

    if (props.prefixChildren?.left) vars[CSS_VARS_RAW.component.input.prefixLeft] = props.prefixChildren?.left;
    if (props.prefixChildren?.right) vars[CSS_VARS_RAW.component.input.prefixRight] = props.prefixChildren?.right;
    if (props.prefixChildren?.width) vars[CSS_VARS_RAW.component.input.prefixWidth] = props.prefixChildren?.width;

    const style = setStyles([props.style, Object.keys(vars).length ? vars : undefined]);

    return { className, style };
  }, [
    props.className,
    props.isWidthAsHeight,
    props.size,
    props.style,
    props.isDisabled,
    props.isHidden,
    props.isFullRadius,
    props.isHiddenBorder,
    props.isMinWidthAsContent,
    props.isZeroRadius,
    props.genre,
    props.postfixChildren?.left,
    props.postfixChildren?.right,
    props.postfixChildren?.width,
    props.prefixChildren?.left,
    props.prefixChildren?.right,
    props.prefixChildren?.width,
    props.control,
    props.isCenter,
    props.error?.isError,
  ]);

  const { className: classNameInput, style: styleInput } = useMemo(() => {
    const className = setClasses([
      CSS_CLASS.component.input.root,
      CSS_CLASS.transition.color,
      classNameTypography,
      props.prefixChildren && CSS_CLASS.component.input.hasPrefix,
      props.postfixChildren && CSS_CLASS.component.input.hasPostfix,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.input.color] = CSS_VARS.genre.input[props.genre].color;
    vars[CSS_VARS_RAW.component.input.placeholderColor] = CSS_VARS.genre.input[props.genre].placeholder;
    vars[CSS_VARS_RAW.component.input.padding] = CSS_VARS.size[props.size].padding;

    const style = setStyles([props.style, styleTypography, Object.keys(vars).length ? vars : undefined]);

    return { className, style };
  }, [
    props.size,
    props.style,
    props.genre,
    classNameTypography,
    styleTypography,
    props.postfixChildren,
    props.prefixChildren,
  ]);

  const refDefault = useRef<HTMLInputElement>(null);

  const ref = useMergeRefs([refDefault, props.ref]);

  return (
    <>
      <div className={className} style={style}>
        {props.prefixChildren && (
          <div
            onMouseDown={(e) => {
              if (props.prefixChildren?.isFocusInput) {
                e.preventDefault();
                refDefault.current?.focus();
              }
            }}
            className={CSS_CLASS.component.input.prefix}
          >
            {props.prefixChildren.children}
          </div>
        )}
        {props.variety === 'pattern' ? (
          <PatternFormat
            className={classNameInput}
            style={styleInput}
            disabled={props.isDisabled}
            readOnly={props.isReadOnly}
            required={props.isRequired}
            defaultValue={props.defaultValue === null ? '' : props.defaultValue}
            value={props.value === null ? '' : props.value}
            placeholder={props.placeholder}
            onValueChange={(props) => handleOnChange(props)}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            onPaste={props.onPaste}
            onKeyDown={props.onKeyDown}
            name={props.name}
            aria-label={props.ariaLabel ?? props.name}
            id={props.id}
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            minLength={props.minLength}
            tabIndex={props.tabIndex}
            getInputRef={ref}
            {...props.propsPattern}
          />
        ) : props.variety === 'numeric' ? (
          <NumericFormat
            className={classNameInput}
            style={styleInput}
            disabled={props.isDisabled}
            readOnly={props.isReadOnly}
            required={props.isRequired}
            defaultValue={props.defaultValue === null ? '' : props.defaultValue}
            value={props.value === null ? '' : props.value}
            placeholder={props.placeholder}
            onValueChange={(props) => handleOnChange(props)}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            onPaste={props.onPaste}
            onKeyDown={props.onKeyDown}
            name={props.name}
            aria-label={props.ariaLabel ?? props.name}
            id={props.id}
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            minLength={props.minLength}
            tabIndex={props.tabIndex}
            getInputRef={ref}
            {...props.propsNumeric}
          />
        ) : (
          <input
            className={classNameInput}
            style={styleInput}
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            minLength={props.minLength}
            ref={ref}
            disabled={props.isDisabled}
            readOnly={props.isReadOnly}
            required={props.isRequired}
            defaultValue={props.defaultValue === null ? '' : props.defaultValue}
            value={props.value === null ? '' : props.value}
            placeholder={props.placeholder}
            type={props.type}
            autoComplete={props.autoComplete}
            onInput={(event) => {
              const input = event.target as HTMLInputElement;
              handleOnChange(input.value);
            }}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            onPaste={props.onPaste}
            onKeyDown={props.onKeyDown}
            name={props.name}
            aria-label={props.ariaLabel ?? props.name}
            id={props.id}
            tabIndex={props.tabIndex}
            min={props.min}
            max={props.max}
            step={props.step}
          />
        )}
        {props.postfixChildren && (
          <div
            onMouseDown={(e) => {
              if (props.postfixChildren?.isFocusInput) {
                e.preventDefault();
                refDefault?.current?.focus();
              }
            }}
            className={CSS_CLASS.component.input.postfix}
          >
            {props.postfixChildren.children}
          </div>
        )}
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

export function formatPhoneNumber(dialCode: string, international: string) {
  function isDigit(char: string): boolean {
    return /\d/.test(char);
  }

  let formattedNumber = '';
  let placeholderNumber = '';
  let dialCodeIndex = 0;

  if (dialCode.length === 0) {
    return { format: '', placeholder: '' };
  }

  for (let i = 0; i < international.length; i++) {
    const char = international.charAt(i);

    if (char === dialCode.charAt(dialCodeIndex)) {
      formattedNumber += char;
      placeholderNumber += isDigit(char) ? '#' : char;
      dialCodeIndex++;
    } else {
      if (isDigit(char)) {
        formattedNumber += '#';
        placeholderNumber += '-';
      } else {
        formattedNumber += char;
        placeholderNumber += char;
      }
    }
  }

  while (dialCodeIndex < dialCode.length) {
    formattedNumber += dialCode.charAt(dialCodeIndex);
    placeholderNumber += dialCode.charAt(dialCodeIndex);
    dialCodeIndex++;
  }

  return {
    format: formattedNumber,
    placeholder: placeholderNumber,
  };
}
