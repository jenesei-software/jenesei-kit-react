import { ISx, ISxTypography, IThemeSize } from '@local/styles/utils';
import { IThemeGenreCheckbox, IThemeOutline } from '@local/styles/utils/types';

import { CSSProperties, FocusEvent, MouseEventHandler, PropsWithChildren, Ref } from 'react';

import { IAddError } from '../error';
import { IIcon } from '../icon';

type IIconWithoutSize = {
  [K in IIcon['type']]: Omit<Extract<IIcon, { type: K }>, 'size'> & { size?: IThemeSize };
}[IIcon['type']];

export type ICheckbox = PropsWithChildren & {
  checked?: boolean;

  genre: IThemeGenreCheckbox;

  view: {
    true: IIconWithoutSize & { size?: IThemeSize };
    false: IIconWithoutSize & { size?: IThemeSize };
  };

  ref?: Ref<HTMLElement | null>;
  isHidden?: boolean;
  className?: string;

  style?: CSSProperties;
  name?: string;
  tabIndex?: number;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  isDisabled?: boolean;
  isDisabledOutline?: boolean;
  isRadius?: boolean;
  isOnlyLoading?: boolean;
  isMinWidthAsContent?: boolean;
  isLoading?: boolean;
  isNotHoverEffect?: boolean;
  isHiddenBorder?: boolean;
  isNotBackground?: boolean;
  isFullSize?: boolean;
  onChange?: (checked: boolean) => void;
  outline?: IThemeOutline;
  isWidthAsHeight?: boolean;
  onFocus?: (event: FocusEvent<HTMLButtonElement, Element>) => void;

  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  size: IThemeSize;
} & ISx &
  IAddError &
  ISxTypography;
