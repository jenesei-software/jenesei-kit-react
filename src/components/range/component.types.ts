import { InputStandardProps } from '@local/components/input';
import { AddDollarSign } from '@local/types';

import { FocusEventHandler } from 'react';

export type RangeProps = {
  values: number[];
  onChange: (values: number[]) => void;
  step: number;
  min: number;
  max: number;
  isShowMarker?: boolean;
  onBlur?: FocusEventHandler<HTMLDivElement>;
} & Pick<InputStandardProps, 'size' | 'genre' | 'id' | 'sx' | 'error'>;

export type RangeWrapperProps = AddDollarSign<Pick<RangeProps, 'size' | 'sx' | 'error'>>;
export type RangeComponentProps = AddDollarSign<Pick<RangeProps, 'size' | 'genre'>>;
export type RangeThumbProps = RangeComponentProps & AddDollarSign<{ colorBorder: string; colorBackground: string }>;
