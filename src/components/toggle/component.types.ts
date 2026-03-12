import { IAddError } from '@local/components/error';
import { IThemeControl, IThemeGenreToggle, IThemeSize } from '@local/styles/utils/types';

import { CSSProperties, FocusEvent, MouseEventHandler, Ref } from 'react';

export type IToggle = {
  ariaLabel?: string;

  className?: string;

  genre: IThemeGenreToggle;

  id?: string;

  isDisabled?: boolean;

  isHidden?: boolean;

  isHiddenBorder?: boolean;

  isZeroRadius?: boolean;

  name?: string;

  onChange?: (value: boolean) => void;

  onFocus?: (event: FocusEvent<HTMLButtonElement, Element>) => void;

  onMouseDown?: MouseEventHandler<HTMLButtonElement>;

  control?: IThemeControl;

  ref?: Ref<HTMLElement | null>;

  size: IThemeSize;

  style?: CSSProperties;

  tabIndex?: number;

  type?: HTMLButtonElement['type'];

  value: boolean;
} & IAddError;
