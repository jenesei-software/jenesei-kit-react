import { IErrorMessage } from '@local/components/error';
import { IIcon } from '@local/components/icon';
import { IThemeSize } from '@local/styles/utils';
import { IThemeControl, IThemeGenreCheckbox, ITypography } from '@local/styles/utils/types';

import { CSSProperties, FocusEvent, MouseEventHandler, PropsWithChildren, Ref } from 'react';

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

  sxTypography?: ITypography;

  ref?: Ref<HTMLElement | null>;

  size: IThemeSize;

  style?: CSSProperties;

  tabIndex?: number;

  type?: HTMLButtonElement['type'];

  error?: IErrorMessage;

  view: {
    true: IIconWithoutSize & { size?: IThemeSize };

    false: IIconWithoutSize & { size?: IThemeSize };
  };
};
