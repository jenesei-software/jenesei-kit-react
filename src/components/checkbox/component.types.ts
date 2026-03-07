import { ISx, ISxOutline, ISxTypography, IThemeSize } from '@local/styles/utils';
import { IThemeGenreCheckbox, IThemeOutline } from '@local/styles/utils/types';

import { CSSProperties, PropsWithChildren, Ref } from 'react';

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

  ariaLabel?: string;

  id?: string;
  isDisabled?: boolean;
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

  size: IThemeSize;
} & ISx &
  ISxTypography &
  ISxOutline;
