import { ErrorMessage } from '@local/components/error';

import { motion } from 'framer-motion';
import { useCallback } from 'react';
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

  return (
    <>
      <div className={props.className}>
        {props.prefixChildren && <div>{props.prefixChildren.children}</div>}
        {props.variety === 'pattern' ? (
          <PatternFormat
            disabled={props.isDisabled}
            readOnly={props.isReadOnly}
            required={props.isRequired}
            defaultValue={props.defaultValue == null ? '' : props.defaultValue}
            value={props.value == null ? '' : props.value}
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
            {...props.propsPattern}
          />
        ) : props.variety === 'numeric' ? (
          <NumericFormat
            disabled={props.isDisabled}
            readOnly={props.isReadOnly}
            required={props.isRequired}
            defaultValue={props.defaultValue == null ? '' : props.defaultValue}
            value={props.value == null ? '' : props.value}
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
            {...props.propsNumeric}
          />
        ) : (
          <motion.input
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            minLength={props.minLength}
            ref={props.ref}
            disabled={props.isDisabled}
            readOnly={props.isReadOnly}
            required={props.isRequired}
            defaultValue={props.defaultValue == null ? '' : props.defaultValue}
            value={props.value == null ? '' : props.value}
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
        {props.postfixChildren && <div>{props.postfixChildren.children}</div>}
      </div>
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
