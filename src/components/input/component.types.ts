import { addFontProps, addOutlineProps, addOutlinePropsDollar } from '@local/styles/add';
import { addErrorProps } from '@local/styles/error';
import { addSXProps } from '@local/styles/sx';
import { IThemeGenreInput, IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

import {
  ClipboardEventHandler,
  FocusEventHandler,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  PropsWithChildren,
  Ref,
} from 'react';
import { NumberFormatValues, NumericFormatProps, PatternFormatProps } from 'react-number-format';

type CommonInputProps = addErrorProps &
  addFontProps &
  addOutlineProps &
  addSXProps & {
    ref?: Ref<HTMLInputElement | null>;

    name?: string;

    ariaLabel?: string;
    
    id?: string;

    className?: string;

    isNotShowHoverStyle?: boolean;

    autoComplete?: HTMLInputAutoCompleteAttribute | string;

    isAllowEmptyFormatting?: boolean;

    genre: TInputGenre;

    size: IThemeSize;

    tabIndex?: number;

    isWidthAsHeight?: boolean;

    isNiceNumber?: boolean;

    isDisabled?: boolean;

    isLoading?: boolean;

    isInputEffect?: boolean;

    isRequired?: boolean;

    isCenter?: boolean;

    isNoSpaces?: boolean;

    onBlur?: FocusEventHandler<HTMLInputElement>;

    onPaste?: ClipboardEventHandler<HTMLInputElement>;

    onFocus?: FocusEventHandler<HTMLInputElement>;

    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;

    placeholder?: string;

    isBold?: boolean;

    postfixChildren?: InputChildrenProps;

    prefixChildren?: InputChildrenProps;

    inputMode?: 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

    maxLength?: number;

    minLength?: number;
  };

// Контролируемый вариант
type ControlledValue = {
  value: string | number | null | undefined;

  defaultValue?: never;
};

// Неконтролируемый вариант
type UncontrolledValue = {
  defaultValue: string | number | null | undefined;

  value?: never;
};

type BaseInputProps = CommonInputProps & (ControlledValue | UncontrolledValue);

export type InputStandardProps = BaseInputProps & {
  variety: 'standard';
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  step?: number;
};
export type InputPatternProps = BaseInputProps & {
  variety: 'pattern';
  onChange?: (value: NumberFormatValues) => void;
  propsPattern: Pick<
    PatternFormatProps,
    'format' | 'mask' | 'allowEmptyFormatting' | 'patternChar' | 'valueIsNumericString' | 'type'
  >;
};
export type InputNumericProps = BaseInputProps & {
  variety: 'numeric';
  onChange?: (value: NumberFormatValues) => void;
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
  >;
};
export type InputProps = InputStandardProps | InputPatternProps | InputNumericProps;

export interface InputChildrenProps extends PropsWithChildren {
  left: string;

  right: string;

  width: string;
}

export type StyledInputChildrenProps = AddDollarSign<
  Pick<InputProps, 'isDisabled'> & Pick<InputChildrenProps, 'left' | 'right' | 'width'>
>;

export type TInputGenre = keyof IThemeGenreInput;

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
    | 'font'
  >
> &
  addOutlinePropsDollar;

export type StyledInputWrapperProps = AddDollarSign<
  Pick<InputProps, 'isDisabled' | 'isInputEffect' | 'sx' | 'size' | 'isWidthAsHeight'>
>;
