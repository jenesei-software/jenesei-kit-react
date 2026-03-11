import { ISxTypography, IThemeSize } from '@local/styles/utils';
import { IThemeControl, IThemeGenreTextArea } from '@local/styles/utils/types';

import {
  ClipboardEventHandler,
  CSSProperties,
  FocusEventHandler,
  HTMLInputAutoCompleteAttribute,
  KeyboardEventHandler,
  MouseEventHandler,
  Ref
} from 'react';

import { IAddError } from '../error';

type ICommonTextArea = IAddError &
  ISxTypography & {
    name?: string;
    ariaLabel?: string;
    autoComplete?: HTMLInputAutoCompleteAttribute | string;
    id?: string;
    className?: string;
    style?: CSSProperties;
    genre: IThemeGenreTextArea;
    minRows: number;
    ref?: Ref<HTMLTextAreaElement | null>;
    control?: IThemeControl;
    size: IThemeSize;
    placeholder?: string;

    maxLength?: number;
    minLength?: number;

    isResize?: boolean;
    isLoading?: boolean;
    isBold?: boolean;
    isDisabled?: boolean;
    isFullRadius?: boolean;
    isHidden?: boolean;
    isHiddenBorder?: boolean;
    isNiceNumber?: boolean;
    isNoSpaces?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    isZeroRadius?: boolean;

    onChange?: (value: string) => void;
    onClick?: MouseEventHandler<HTMLTextAreaElement>;
    onMouseDown?: MouseEventHandler<HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
    onPaste?: ClipboardEventHandler<HTMLTextAreaElement>;
  };

type IControlledValue = {
  value: string | null | undefined;
  defaultValue?: never;
};

type IUnControlledValue = {
  value?: never;
  defaultValue: string;
};

type IBaseTextArea = ICommonTextArea & (IControlledValue | IUnControlledValue);

// AutoHeight вариант
type IAutoHeightTextArea = IBaseTextArea & {
  isAutoHeight: true;
  maxRows: number;
  isResize?: false | undefined;
};

// Resizable (с запретом autoHeight и maxRows)
type IResizableTextArea = IBaseTextArea & {
  isResize: true;
  isAutoHeight?: false | undefined;
  maxRows?: never;
};

// Fixed (не autoHeight и не resizable)
type IFixedTextArea = IBaseTextArea & {
  isResize?: false | undefined;
  isAutoHeight?: false | undefined;
  maxRows?: never;
};

export type ITextArea = IAutoHeightTextArea | IResizableTextArea | IFixedTextArea;
