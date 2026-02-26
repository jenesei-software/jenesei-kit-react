import { InputStandardProps } from '@local/components/input/component.types';
import { AddDollarSign } from '@local/types';

import { FocusEvent } from 'react';

export type InputOTPProps = {
  length: number;
  onComplete?: (otp: string) => void;
  onFocus?: (event?: FocusEvent<HTMLElement>) => void;
  onBlur?: (event?: FocusEvent<HTMLElement>) => void;
} & Pick<InputStandardProps, 'size' | 'genre' | 'id' | 'sx' | 'error' | 'onChange' | 'sxTypography'>;

export type InputOTPWrapperProps = AddDollarSign<Pick<InputOTPProps, 'size' | 'sx' | 'error'>>;
