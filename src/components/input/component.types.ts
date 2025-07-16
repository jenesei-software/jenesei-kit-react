import {
  ClipboardEventHandler,
  FocusEventHandler,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  PropsWithChildren,
  Ref
} from 'react'
import { NumberFormatValues, NumericFormatProps, PatternFormatProps } from 'react-number-format'

import { addErrorProps } from '@local/styles/error'
import { addSXProps } from '@local/styles/sx'
import { IThemeGenreInput, IThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

type InputDefaultProps = addErrorProps &
  addSXProps & {
    ref?: Ref<HTMLInputElement | null>

    name?: string

    id?: string

    className?: string

    defaultValue?: string

    isNotShowHoverStyle?: boolean

    autoComplete?: HTMLInputAutoCompleteAttribute | string

    isAllowEmptyFormatting?: boolean

    genre: TInputGenre

    size: IThemeSize

    tabIndex?: number

    isWidthAsHeight?: boolean

    isNiceNumber?: boolean

    isDisabled?: boolean

    isLoading?: boolean

    isReadOnly?: boolean

    isInputEffect?: boolean

    isRequired?: boolean

    isCenter?: boolean

    isNoSpaces?: boolean

    onBlur?: FocusEventHandler<HTMLInputElement>

    onPaste?: ClipboardEventHandler<HTMLInputElement>

    onFocus?: FocusEventHandler<HTMLInputElement>

    onKeyDown?: KeyboardEventHandler<HTMLInputElement>

    placeholder?: string

    isBold?: boolean

    postfixChildren?: InputChildrenProps

    prefixChildren?: InputChildrenProps

    value?: string | null | number

    inputMode?: 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'

    maxLength?: number
    minLength?: number
  }
export type InputStandardProps = InputDefaultProps & {
  variety: 'standard'
  onChange?: (value: string) => void
  type?: HTMLInputTypeAttribute
  min?: number
  max?: number
  step?: number
}
export type InputPatternProps = InputDefaultProps & {
  variety: 'pattern'
  onChange?: (value: NumberFormatValues) => void
  propsPattern: Pick<
    PatternFormatProps,
    'format' | 'mask' | 'allowEmptyFormatting' | 'patternChar' | 'valueIsNumericString' | 'type'
  >
}
export type InputNumericProps = InputDefaultProps & {
  variety: 'numeric'
  onChange?: (value: NumberFormatValues) => void
  propsNumeric: Pick<
    NumericFormatProps,
    | 'allowLeadingZeros'
    | 'thousandSeparator'
    | 'allowNegative'
    | 'allowedDecimalSeparators'
    | 'decimalScale'
    | 'decimalSeparator'
    | 'fixedDecimalScale'
    | 'prefix'
    | 'thousandsGroupStyle'
    | 'isAllowed'
    | 'suffix'
  >
}
export type InputProps = InputStandardProps | InputPatternProps | InputNumericProps

export interface InputChildrenProps extends PropsWithChildren {
  left: string

  right: string

  width: string
}

export type StyledInputChildrenProps = AddDollarSign<
  Pick<InputProps, 'isDisabled'> & Pick<InputChildrenProps, 'left' | 'right' | 'width'>
>

export type TInputGenre = keyof IThemeGenreInput

export type StyledInputProps = AddDollarSign<
  Pick<
    InputProps,
    | 'genre'
    | 'size'
    | 'error'
    | 'isLoading'
    | 'isInputEffect'
    | 'isDisabled'
    | 'postfixChildren'
    | 'prefixChildren'
    | 'isBold'
    | 'isNiceNumber'
    | 'isNotShowHoverStyle'
    | 'sx'
    | 'isCenter'
  >
>

export type StyledInputWrapperProps = AddDollarSign<
  Pick<InputProps, 'isDisabled' | 'isInputEffect' | 'sx' | 'size' | 'isWidthAsHeight'>
>
