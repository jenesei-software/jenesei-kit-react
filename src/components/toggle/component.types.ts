import { ISxOutline } from '@local/styles/utils';
import { IThemeGenreToggle, IThemeOutline, IThemeSize } from '@local/styles/utils/types';

import { CSSProperties, Ref } from 'react';

import { IAddError } from '../error';

export type ToggleProps = {
  value: boolean;
  onChange?: (checked: boolean) => void;
  isDisabled?: boolean;

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
  ISxOutline;
