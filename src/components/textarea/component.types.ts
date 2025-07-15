import { addErrorProps } from '@local/styles/error';
import { addSXProps } from '@local/styles/sx';
import { IThemeGenreTextArea, IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

import { FocusEventHandler, KeyboardEventHandler, RefObject } from 'react';

type CommonTextAreaProps = addErrorProps &
  addSXProps & {
    name?: string;
    id?: string;
    ref?: RefObject<HTMLTextAreaElement | null>;
    className?: string;
    genre: TextAreaGenre;
    minRows: number;
    size: IThemeSize;
    isDisabled?: boolean;
    isResize?: boolean;
    isLoading?: boolean;
    isReadOnly?: boolean;
    isInputEffect?: boolean;
    isRequired?: boolean;
    isNoSpaces?: boolean;
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
    onChange?: (value: string) => void;
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    isBold?: boolean;
  };

// Контролируемый вариант
type ControlledValue = {
  value: string | null;
  defaultValue?: never;
};

// Неконтролируемый вариант
type UncontrolledValue = {
  value?: never;
  defaultValue: string;
};

type BaseTextAreaProps = CommonTextAreaProps & (ControlledValue | UncontrolledValue);

// AutoHeight вариант
type AutoHeightTextAreaProps = BaseTextAreaProps & {
  isAutoHeight: true;
  maxRows: number;
  isResize?: false | undefined;
};

// Resizable (с запретом autoHeight и maxRows)
type ResizableTextAreaProps = BaseTextAreaProps & {
  isResize: true;
  isAutoHeight?: false | undefined;
  maxRows?: never;
};

// Fixed (не autoHeight и не resizable)
type FixedTextAreaProps = BaseTextAreaProps & {
  isResize?: false | undefined;
  isAutoHeight?: false | undefined;
  maxRows?: never;
};

export type TextAreaProps = AutoHeightTextAreaProps | ResizableTextAreaProps | FixedTextAreaProps;

export type TextAreaGenre = keyof IThemeGenreTextArea;

export type StyledTextAreaProps = AddDollarSign<
  Pick<
    TextAreaProps,
    'genre' | 'size' | 'error' | 'isLoading' | 'isInputEffect' | 'isDisabled' | 'isBold' | 'isResize'
  > & {
    lineHeight: number;
  }
>;

export type TextAreaWrapperProps = AddDollarSign<
  Pick<TextAreaProps, 'isDisabled' | 'isInputEffect' | 'sx' | 'size' | 'genre' | 'isReadOnly'> & {
    lineHeight: number;
  }
>;
