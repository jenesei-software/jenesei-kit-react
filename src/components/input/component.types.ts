import { IAddError } from '@local/components/error';
import { ISx, ISxTypography, IThemeSize } from '@local/styles/utils';
import { IThemeGenreInput, IThemeOutline } from '@local/styles/utils/types';

import {
  ClipboardEventHandler,
  CSSProperties,
  FocusEventHandler,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  PropsWithChildren,
  Ref,
} from 'react';
import { NumberFormatValues, NumericFormatProps, PatternFormatProps } from 'react-number-format';

type ICommonInput = IAddError &
  ISxTypography & {
    ref?: Ref<HTMLInputElement | null>;

    name?: string;

    ariaLabel?: string;

    id?: string;

    className?: string;

    style?: CSSProperties;

    isNotShowHoverStyle?: boolean;

    autoComplete?: HTMLInputAutoCompleteAttribute | string;

    isAllowEmptyFormatting?: boolean;

    genre: IThemeGenreInput;

    size: IThemeSize;

    tabIndex?: number;

    isWidthAsHeight?: boolean;

    isNiceNumber?: boolean;

    isDisabled?: boolean;
    isZeroRadius?: boolean;
    isFullRadius?: boolean;
    isMinWidthAsContent?: boolean;
    isReadOnly?: boolean;
    isHidden?: boolean;
    isHiddenBorder?: boolean;
    isDisabledOutline?: boolean;
    isNotHoverEffect?: boolean;
    isLoading?: boolean;

    isInputEffect?: boolean;

    isRequired?: boolean;

    isCenter?: boolean;

    isNoSpaces?: boolean;

    outline?: IThemeOutline;

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

type IControlledValue = {
  value: string | number | null | undefined;

  defaultValue?: never;
};

type IUnControlledValue = {
  defaultValue: string | number | null | undefined;

  value?: never;
};

type IBaseInput = ICommonInput & (IControlledValue | IUnControlledValue);

export type IInputStandard = IBaseInput & {
  variety: 'standard';
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  step?: number;
};
export type IInputPattern = IBaseInput & {
  variety: 'pattern';
  onChange?: (value: NumberFormatValues) => void;
  propsPattern: Pick<
    PatternFormatProps,
    'format' | 'mask' | 'allowEmptyFormatting' | 'patternChar' | 'valueIsNumericString' | 'type'
  >;
};
export type IInputNumeric = IBaseInput & {
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
export type IInput = IInputStandard | IInputPattern | IInputNumeric;

export interface InputChildrenProps extends PropsWithChildren {
  left: string;

  right: string;

  width: string;
}
