import { AddDollarSign } from '@local/types';

import { FocusEvent } from 'react';

import { InputStandardProps } from '../input/component.types';

export type InputOTPProps = {
  length: number;
  onComplete?: (otp: string) => void;
  onFocus?: (event?: FocusEvent<HTMLElement>) => void;
  onBlur?: (event?: FocusEvent<HTMLElement>) => void;
} & Pick<InputStandardProps, 'size' | 'genre' | 'id' | 'sx' | 'error' | 'onChange'>;

export type InputOTPWrapperProps = AddDollarSign<Pick<InputOTPProps, 'size' | 'sx' | 'error'>>;
