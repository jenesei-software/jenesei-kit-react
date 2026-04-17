import { IErrorMessage } from '@local/components/error';
import { ISelectMonth } from '@local/components/select';
import { ITypography } from '@local/styles/utils';
import { IThemeControl, IThemeGenreDatePicker, IThemeSize } from '@local/styles/utils/types';

import { CSSProperties, HTMLInputAutoCompleteAttribute } from 'react';

export type IDatePickerMode = DatePickerVariant[];

export enum DatePickerVariant {
  DD = 'DD',
  MM = 'MM',
  YYYY = 'YYYY',
}

export type IDatePickerType = 'manual' | 'select' | 'manualAndSelect';

export type IDatePickerCommon = {
  className?: string;
  style?: CSSProperties;

  classNamePopover?: string;
  stylePopover?: CSSProperties;

  sxTypography?: ITypography;
  control?: IThemeControl;
  error?: IErrorMessage;

  genre: IThemeGenreDatePicker;

  id?: string;

  isNiceNumber?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isBold?: boolean;
  isMinWidth?: boolean;
  isShowClearButton?: boolean;
  isOnClickClose?: boolean;

  labelPlaceholder?: string;

  locale: {
    months: ISelectMonth['monthsLocale'];
    weeks: IDatePickerTranslateWeek[];
    inputs: IDatePickerTranslateInput;
  };

  notValidDate?: Omit<IErrorMessage, 'size' | 'isError'>;

  mode?: IDatePickerMode;

  type?: IDatePickerType;

  name?: string;

  ariaLabel?: string;

  autoComplete?: HTMLInputAutoCompleteAttribute | string;

  onBlur?: () => void;

  onChange: (timestamp: number | null) => void;

  onFocus?: () => void;

  size: IThemeSize;

  dateMax?: number;

  dateMin?: number;

  dateDefault: number;
};

type IDatePickerControlledValue = {
  value: number | null | undefined;

  defaultValue?: never;
};

type IDatePickerUncontrolledValue = {
  defaultValue: number | null | undefined;

  value?: never;
};
export type IDatePicker = IDatePickerCommon & (IDatePickerControlledValue | IDatePickerUncontrolledValue);

export interface IDatePickerDay {
  dayOfWeek: number;

  isCurrentMonth: boolean;

  isDisabled: boolean;

  isChoice: boolean;

  isToday: boolean;

  isWeekend: boolean;

  labelNumber: number;

  labelString: string;

  value: number;

  weekOfMonth: number;
}

export type IDatePickerTranslateMonth = {
  localeLong: string;

  localeShort: string;

  value:
    | 'january'
    | 'february'
    | 'march'
    | 'april'
    | 'may'
    | 'june'
    | 'july'
    | 'august'
    | 'september'
    | 'october'
    | 'november'
    | 'december';
};
export type IDatePickerTranslateWeek = {
  localeLong: string;

  localeShort: string;

  value: 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa' | 'su';
};
export type IDatePickerTranslateInput = {
  day: string;

  month: string;

  year: string;
};
