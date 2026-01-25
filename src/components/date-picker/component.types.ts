import { addErrorProps } from '@local/components/error';
import { InputStandardProps, StyledInputProps, StyledInputWrapperProps } from '@local/components/input';
import { SelectMonthProps } from '@local/components/select';
import { addOutlineProps, addOutlinePropsDollar, addSXProps, addSXTypographyProps } from '@local/styles/add';
import { ITheme, IThemeSize } from '@local/styles/theme';
import { AddDollarSign } from '@local/types';

import { HTMLInputAutoCompleteAttribute } from 'react';

export type DatePickerMode = DatePickerVariant[];

export enum DatePickerVariant {
  DD = 'DD',
  MM = 'MM',
  YYYY = 'YYYY',
}

export type DatePickerType = 'manual' | 'select' | 'manualAndSelect';

export type CommonDatePickerProps = addErrorProps &
  addSXProps &
  addOutlineProps &
  addSXTypographyProps & {
    genre: TDateGenre;

    id?: string;

    isDisabled?: boolean;
    isBold?: boolean;
    isMinWidth?: boolean;

    isShowClearButton?: boolean;

    isInputEffect?: InputStandardProps['isInputEffect'];

    isOnClickClose?: boolean;

    labelPlaceholder?: string;

    locale: {
      months: SelectMonthProps['monthsLocale'];
      weeks: DatePickerTranslateWeekProps[];
      inputs: DatePickerTranslateInputProps;
    };

    notValidDate?: Omit<addErrorProps['error'], 'size' | 'isError'>;

    mode?: DatePickerMode;

    type?: DatePickerType;

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

type ControlledValue = {
  value: number | null | undefined;

  defaultValue?: never;
};

type UncontrolledValue = {
  defaultValue: number | null | undefined;

  value?: never;
};
export type DatePickerProps = CommonDatePickerProps & (ControlledValue | UncontrolledValue);

export type TDateGenre = keyof ITheme['colors']['date'];

export interface DateDayProps {
  dayOfWeek: number;

  isCurrentMonth: boolean;

  isDisabled: boolean;

  isToday: boolean;

  isWeekend: boolean;

  labelNumber: number;

  labelString: string;

  value: number;

  weekOfMonth: number;
}

export type DateWrapperProps = AddDollarSign<
  Pick<InputStandardProps, 'genre' | 'isDisabled'> & {
    parentListHeight: number;
    radius: number;
    isMinWidth?: boolean;
  }
> &
  StyledInputWrapperProps;

export type DateInputProps = AddDollarSign<
  Pick<
    DatePickerProps,
    | 'error'
    | 'genre'
    | 'size'
    | 'isBold'
    | 'isReadOnly'
    | 'isDisabledOutline'
    | 'isOutlineBoxShadow'
    | 'isDisabled'
    | 'sxTypography'
  > & {
    isOpen?: boolean;
    isActive?: boolean;
    isHaveValue?: boolean;
    isShowPlaceholder?: boolean;
  }
>;

export type DateStyledOptionProps = AddDollarSign<{
  isSelectedItem?: boolean;
  isCheckboxProps?: boolean;
}> &
  StyledInputProps;

export type DateStyledListProps = AddDollarSign<Pick<InputStandardProps, 'genre' | 'size'>>;

export type DateDropdownListProps = AddDollarSign<
  Pick<DatePickerProps, 'isInputEffect'> & Pick<DatePickerProps, 'genre' | 'size'>
>;

export type DateDropdownDayProps = AddDollarSign<
  Pick<DatePickerProps, 'genre' | 'size' | 'sxTypography'> &
    Pick<DateDayProps, 'isToday' | 'isWeekend'> & {
      row: number;
      column: number;
      isChoice?: boolean;
      isCurrentMonth?: boolean;
      isDisabled?: boolean;
    }
> &
  addOutlinePropsDollar;

export type DatePickerTranslateMonthProps = {
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
export type DatePickerTranslateWeekProps = {
  localeLong: string;

  localeShort: string;

  value: 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa' | 'su';
};
export type DatePickerTranslateInputProps = {
  day: string;

  month: string;

  year: string;
};
