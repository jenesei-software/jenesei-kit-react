import { addErrorProps } from '@local/styles/error';
import { addSXProps } from '@local/styles/sx';
import { IThemeGenreTextArea, IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

import { FocusEventHandler, KeyboardEventHandler, RefObject } from 'react';

type BaseTextAreaProps = addErrorProps &
  addSXProps & {
    name?: string;
    id?: string;
    ref?: RefObject<HTMLTextAreaElement | null>;
    className?: string;
    defaultValue?: string;
    isAllowEmptyFormatting?: boolean;
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
    value?: string | null;
  };

type AutoHeightTextAreaProps = BaseTextAreaProps & {
  isAutoHeight: true;
  maxRows: number;
};

type FixedHeightTextAreaProps = BaseTextAreaProps & {
  isAutoHeight?: false | undefined;
  maxRows?: never;
};

export type TextAreaProps = AutoHeightTextAreaProps | FixedHeightTextAreaProps;

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
  Pick<TextAreaProps, 'isDisabled' | 'isInputEffect' | 'sx' | 'size' | 'genre'> & {
    lineHeight: number;
  }
>;
