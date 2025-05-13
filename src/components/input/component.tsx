import { forwardRef, useCallback } from 'react'
import { NumberFormatValues } from 'react-number-format'

import { ErrorMessage } from '@local/styles/error'

import {
  InputPostfixChildren,
  InputPrefixChildren,
  InputProps,
  StyledInput,
  StyledInputNumeric,
  StyledInputPattern,
  StyledInputWrapper
} from '.'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const handleOnChange = useCallback(
    (input: string | NumberFormatValues) => {
      if (props.variety === 'standard') {
        const value = typeof input === 'string' ? input : input.value
        const cleaned = props.isNoSpaces ? value.replace(/\s+/g, '') : value
        props.onChange?.(cleaned)
      }

      if (props.variety === 'pattern' || props.variety === 'numeric') {
        if (typeof input !== 'string') {
          props.onChange?.(input)
        }
      }
    },
    [props]
  )

  return (
    <>
      <StyledInputWrapper
        $isInputEffect={props.isInputEffect}
        className={props.className}
        $isDisabled={props.isDisabled}
        $width={props.width}
        $size={props.size}
        $isWidthAsHeight={props.isWidthAsHeight}
      >
        {props.prefixChildren && (
          <InputPrefixChildren
            $left={props.prefixChildren.left}
            $right={props.prefixChildren.right}
            $isDisabled={props.isDisabled}
            $width={props.prefixChildren.width}
          >
            {props.prefixChildren.children}
          </InputPrefixChildren>
        )}
        {props.variety === 'pattern' ? (
          <StyledInputPattern
            $isInputEffect={props.isInputEffect}
            $error={props?.error}
            $isLoading={props.isLoading}
            $postfixChildren={props?.postfixChildren}
            $prefixChildren={props?.prefixChildren}
            $genre={props.genre}
            $size={props.size}
            $isBold={props.isBold}
            $isDisabled={props.isDisabled}
            disabled={props.isDisabled}
            readOnly={props.isReadOnly}
            required={props.isRequired}
            defaultValue={props.defaultValue}
            value={props.value}
            placeholder={props.placeholder}
            onValueChange={props => handleOnChange(props)}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            onPaste={props.onPaste}
            name={props.name}
            id={props.id}
            onKeyDown={props.onKeyDown}
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            minLength={props.minLength}
            tabIndex={props.tabIndex}
            {...props.propsPattern}
          />
        ) : props.variety === 'numeric' ? (
          <StyledInputNumeric
            $isInputEffect={props.isInputEffect}
            $error={props?.error}
            $isLoading={props.isLoading}
            $postfixChildren={props?.postfixChildren}
            $prefixChildren={props?.prefixChildren}
            $genre={props.genre}
            $size={props.size}
            $isBold={props.isBold}
            $isDisabled={props.isDisabled}
            disabled={props.isDisabled}
            readOnly={props.isReadOnly}
            required={props.isRequired}
            defaultValue={props.defaultValue}
            value={props.value}
            placeholder={props.placeholder}
            onValueChange={props => handleOnChange(props)}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            onPaste={props.onPaste}
            name={props.name}
            id={props.id}
            onKeyDown={props.onKeyDown}
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            minLength={props.minLength}
            tabIndex={props.tabIndex}
            {...props.propsNumeric}
          />
        ) : (
          <StyledInput
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            minLength={props.minLength}
            ref={ref}
            $error={props.error}
            $isInputEffect={props.isInputEffect}
            $isLoading={props.isLoading}
            $postfixChildren={props?.postfixChildren}
            $prefixChildren={props?.prefixChildren}
            $genre={props.genre}
            $size={props.size}
            $isBold={props.isBold}
            $isDisabled={props.isDisabled}
            disabled={props.isDisabled}
            readOnly={props.isReadOnly}
            required={props.isRequired}
            defaultValue={props.defaultValue}
            value={props.value ?? ''}
            placeholder={props.placeholder}
            type={props.type}
            autoComplete={props.autocomplete}
            onInput={event => {
              const input = event.target as HTMLInputElement
              handleOnChange(input.value)
            }}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            onPaste={props.onPaste}
            name={props.name}
            id={props.id}
            tabIndex={props.tabIndex}
            onKeyDown={props.onKeyDown}
            min={props.min}
            max={props.max}
            step={props.step}
          />
        )}

        {props.postfixChildren && (
          <InputPostfixChildren
            $left={props.postfixChildren.left}
            $right={props.postfixChildren.right}
            $isDisabled={props.isDisabled}
            $width={props.postfixChildren.width}
          >
            {props.postfixChildren.children}
          </InputPostfixChildren>
        )}
      </StyledInputWrapper>
      {props?.error ? <ErrorMessage {...props.error} size={props?.error.size ?? props.size} /> : null}
    </>
  )
})

Input.displayName = 'Input'

export function formatPhoneNumber(dialCode: string, international: string) {
  function isDigit(char: string): boolean {
    return /\d/.test(char)
  }

  let formattedNumber = ''
  let placeholderNumber = ''
  let dialCodeIndex = 0

  if (dialCode.length === 0) {
    return { format: '', placeholder: '' }
  }

  for (let i = 0; i < international.length; i++) {
    const char = international.charAt(i)

    if (char === dialCode.charAt(dialCodeIndex)) {
      formattedNumber += char
      placeholderNumber += isDigit(char) ? '#' : char
      dialCodeIndex++
    } else {
      if (isDigit(char)) {
        formattedNumber += '#'
        placeholderNumber += '-'
      } else {
        formattedNumber += char
        placeholderNumber += char
      }
    }
  }

  while (dialCodeIndex < dialCode.length) {
    formattedNumber += dialCode.charAt(dialCodeIndex)
    placeholderNumber += dialCode.charAt(dialCodeIndex)
    dialCodeIndex++
  }

  return {
    format: formattedNumber,
    placeholder: placeholderNumber
  }
}
