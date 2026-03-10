import { IAddError } from '@local/components/error';
import { ISxTypography, IThemeSize } from '@local/styles/utils';
import { IThemeControl, IThemeGenreInput } from '@local/styles/utils/types';

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
    ariaLabel?: string;

    autoComplete?: HTMLInputAutoCompleteAttribute | string;

    className?: string;

    genre: IThemeGenreInput;

    id?: string;

    inputMode?: 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

    isAllowEmptyFormatting?: boolean;

    isBold?: boolean;

    isCenter?: boolean;

    isDisabled?: boolean;

    isFullRadius?: boolean;

    isHidden?: boolean;

    isHiddenBorder?: boolean;

    isMinWidthAsContent?: boolean;

    isNiceNumber?: boolean;

    isNoSpaces?: boolean;

    isReadOnly?: boolean;

    isRequired?: boolean;

    isWidthAsHeight?: boolean;

    isZeroRadius?: boolean;

    maxLength?: number;

    minLength?: number;
    
    name?: string;

    onBlur?: FocusEventHandler<HTMLInputElement>;

    onFocus?: FocusEventHandler<HTMLInputElement>;

    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;

    onPaste?: ClipboardEventHandler<HTMLInputElement>;

    placeholder?: string;

    postfixChildren?: InputChildrenProps;
    
    prefixChildren?: InputChildrenProps;

    ref?: Ref<HTMLInputElement | null>;

    control?: IThemeControl;
    
    size: IThemeSize;

    style?: CSSProperties;

    tabIndex?: number;
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
    'allowEmptyFormatting' | 'format' | 'mask' | 'patternChar' | 'type' | 'valueIsNumericString'
  >;
};
export type IInputNumeric = IBaseInput & {
  variety: 'numeric';
  onChange?: (value: NumberFormatValues) => void;
  propsNumeric: Pick<
    NumericFormatProps,
    | 'allowLeadingZeros'
    | 'allowNegative'
    | 'allowedDecimalSeparators'
    | 'decimalScale'
    | 'decimalSeparator'
    | 'fixedDecimalScale'
    | 'isAllowed'
    | 'prefix'
    | 'suffix'
    | 'thousandSeparator'
    | 'thousandsGroupStyle'
  >;
};
export type IInput = IInputStandard | IInputPattern | IInputNumeric;

export interface InputChildrenProps extends PropsWithChildren {
  left: string;

  right: string;

  width: string;
}
