import { FocusEvent } from 'react';

import { IInputStandard } from '../input';

export type IInputOTP = {
  length: number;
  onComplete?: (otp: string) => void;
  onFocus?: (event?: FocusEvent<HTMLElement>) => void;
  onBlur?: (event?: FocusEvent<HTMLElement>) => void;
} & Pick<
  IInputStandard,
  | 'size'
  | 'genre'
  | 'id'
  | 'error'
  | 'onChange'
  | 'sxTypography'
  | 'className'
  | 'style'
  | 'isBold'
  | 'isFullRadius'
  | 'isDisabled'
  | 'isHidden'
  | 'isHiddenBorder'
>;
