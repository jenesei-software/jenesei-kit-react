import { addErrorProps } from '@local/components/error/export';
import { addSXProps, addSXTypographyProps } from '@local/styles/add/export';
import { ITheme, IThemeSize } from '@local/styles/theme/export';
import { AddDollarSign } from '@local/types';

import { FocusEvent, HTMLInputAutoCompleteAttribute, KeyboardEventHandler, MouseEventHandler, RefObject } from 'react';

type CommonTextAreaProps = addErrorProps &
  addSXTypographyProps &
  addSXProps & {
    name?: string;
    ariaLabel?: string;
    autoComplete?: HTMLInputAutoCompleteAttribute | string;
    id?: string;
    ref?: RefObject<HTMLTextAreaElement | null>;
    className?: string;
    genre: TextAreaGenre;
    minRows: number;
    size: IThemeSize;
    placeholder?: string;

    maxLength?: number;
    minLength?: number;

    isDisabled?: boolean;
    isDisabledOutline?: boolean;
    isOutlineBoxShadow?: boolean;
    isResize?: boolean;
    isLoading?: boolean;
    isReadOnly?: boolean;
    isInputEffect?: boolean;
    isRequired?: boolean;
    isNoSpaces?: boolean;
    isBold?: boolean;
    onFocus?: (event?: FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event?: FocusEvent<HTMLTextAreaElement>) => void;
    onChange?: (value: string) => void;
    onClick?: MouseEventHandler<HTMLTextAreaElement>;
    onMouseDown?: MouseEventHandler<HTMLTextAreaElement>;
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  };

// Контролируемый вариант
type ControlledValue = {
  value: string | null | undefined;
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

type TextAreaGenre = keyof ITheme['colors']['input'];

export type StyledTextAreaProps = AddDollarSign<
  Pick<
    TextAreaProps,
    'genre' | 'size' | 'error' | 'isLoading' | 'isInputEffect' | 'isDisabled' | 'isBold' | 'isResize' | 'sxTypography'
  > & {
    lineHeight: number;
  }
>;

export type TextAreaWrapperProps = AddDollarSign<
  Pick<
    TextAreaProps,
    'isDisabled' | 'isInputEffect' | 'sx' | 'size' | 'genre' | 'isReadOnly' | 'isDisabledOutline' | 'isOutlineBoxShadow'
  > & {
    lineHeight: number;
  }
>;
