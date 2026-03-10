import { ISxTypography, IThemeGenreToggle, IThemeOutline, IThemeSize } from '@local/styles/utils/types';

import { CSSProperties, FocusEvent, MouseEventHandler, Ref } from 'react';

import { IAddError } from '../error';

export type IToggle = {
  ariaLabel?: string;

  className?: string;

  genre: IThemeGenreToggle;

  id?: string;

  isDisabled?: boolean;

  isDisabledOutline?: boolean;

  isHidden?: boolean;

  isHiddenBorder?: boolean;

  isZeroRadius?: boolean;
  
  isNotHoverEffect?: boolean;

  name?: string;

  onChange?: (value: boolean) => void;

  onFocus?: (event: FocusEvent<HTMLButtonElement, Element>) => void;

  onMouseDown?: MouseEventHandler<HTMLButtonElement>;

  outline?: IThemeOutline;

  ref?: Ref<HTMLElement | null>;

  size: IThemeSize;

  style?: CSSProperties;

  tabIndex?: number;

  type?: HTMLButtonElement['type'];

  value: boolean;
} & IAddError;
