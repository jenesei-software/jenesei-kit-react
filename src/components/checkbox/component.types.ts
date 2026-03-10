import { ISx, ISxTypography, IThemeSize } from '@local/styles/utils';
import { IThemeControl, IThemeGenreCheckbox } from '@local/styles/utils/types';

import { CSSProperties, FocusEvent, MouseEventHandler, PropsWithChildren, Ref } from 'react';

import { IAddError } from '../error';
import { IIcon } from '../icon';

type IIconWithoutSize = {
  [K in IIcon['type']]: Omit<Extract<IIcon, { type: K }>, 'size'> & { size?: IThemeSize };
}[IIcon['type']];

export type ICheckbox = PropsWithChildren & {
  ariaLabel?: string;

  checked?: boolean;

  className?: string;

  genre: IThemeGenreCheckbox;

  id?: string;

  isDisabled?: boolean;

  isFullSize?: boolean;

  isHidden?: boolean;

  isHiddenBorder?: boolean;

  isLoading?: boolean;

  isMinWidthAsContent?: boolean;

  isNotBackground?: boolean;

  isOnlyIcon?: boolean;
  
  isFullRadius?: boolean;

  isZeroRadius?: boolean;

  isWidthAsHeight?: boolean;

  name?: string;

  onChange?: (checked: boolean) => void;

  onFocus?: (event: FocusEvent<HTMLButtonElement, Element>) => void;

  onMouseDown?: MouseEventHandler<HTMLButtonElement>;

  control?: IThemeControl;

  ref?: Ref<HTMLElement | null>;

  size: IThemeSize;

  style?: CSSProperties;

  tabIndex?: number;

  type?: HTMLButtonElement['type'];

  view: {
    true: IIconWithoutSize & { size?: IThemeSize };
    
    false: IIconWithoutSize & { size?: IThemeSize };
  };
} & ISx &
  IAddError &
  ISxTypography;
