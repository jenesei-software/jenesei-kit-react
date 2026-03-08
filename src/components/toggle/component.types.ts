import { ISxTypography, IThemeGenreToggle, IThemeOutline, IThemeSize } from '@local/styles/utils/types';

import { CSSProperties, FocusEvent, MouseEventHandler, Ref } from 'react';

import { IAddError } from '../error';

export type IToggle = {
  value: boolean;
  onChange?: (value: boolean) => void;
  onFocus?: (event: FocusEvent<HTMLButtonElement, Element>) => void;

  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  isDisabledOutline?: boolean;
  isHidden?: boolean;
  genre: IThemeGenreToggle;
  size: IThemeSize;
  className?: string;
  style?: CSSProperties;
  name?: string;
  isHiddenBorder?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isNotHoverEffect?: boolean;

  outline?: IThemeOutline;
  ariaLabel?: string;
  ref?: Ref<HTMLElement | null>;
  id?: string;

  tabIndex?: number;
} & IAddError &
  ISxTypography;
