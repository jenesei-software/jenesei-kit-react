import { IDatePickerTranslateMonth } from '@local/components/date-picker';
import { IErrorMessage } from '@local/components/error';
import { IThemeSize } from '@local/styles/utils';
import { IThemeControl, IThemeGenreSelect, ITypography } from '@local/styles/utils/types';

import { CSSProperties, FocusEvent, ReactNode, Ref } from 'react';

export interface ISelectItem {
  [key: string]: unknown;

  isDisabled?: boolean;

  isLoading?: boolean;

  label: string | number | ReactNode;

  value: string | number;
}

export type ISelect<T extends ISelectItem> = {
  id?: string;

  size: IThemeSize;
  genre: IThemeGenreSelect;
  control?: IThemeControl;
  sxTypography?: ITypography;
  error?: IErrorMessage;

  className?: string;
  style?: CSSProperties;

  isToggleWhenClickSelectListOption?: boolean;
  isDisabled?: boolean;
  isShowDropdownOptionIcon?: boolean;
  isShowIconToggle?: boolean;
  isShowIconSearchClear?: boolean;
  isShowIconFetching?: boolean;
  isShowSelectAll?: boolean;
  isShowSelectAllLabel?: boolean;
  isShowAddOption?: boolean;
  isNotShowDisabledOptions?: boolean;
  isOnClickOptionClose?: boolean;
  isSortValueAsOption?: boolean;
  isCenter?: boolean;
  isStayValueAfterSelect?: boolean;
  isBold?: boolean;
  isWrapSelectOption?: boolean;
  isMulti?: boolean;
  isFetching?: boolean;
  isClearWhenClickSelectListOption?: boolean;
  isOnlyColorInSelectListOption?: boolean;

  labelPlaceholder?: string;
  labelEmptyOption?: string;
  labelSelectAll?: string;
  labelAndMore?: (count: number) => string;
  labelAddOption?: (value: string) => string;

  isSearch?: boolean;
  valueSearch?: string;
  onChangeSearch?: (value: string) => void;

  optionAllLength?: number;

  option: T[];
  value: T[];
  maxViewSelect?: number;
  maxViewDropdown?: number;
  minViewDropdown?: number;

  refFloating?: Ref<HTMLElement | null>;
  refReference?: Ref<HTMLElement | null>;

  onAddOption?: (value: string) => void;
  onChange: (value: T[]) => void;
  onChangeAll?: (value: T[], isAll: boolean) => void;
  onFocus?: (event?: FocusEvent<HTMLElement>) => void;
  onBlur?: (event?: FocusEvent<HTMLElement>) => void;
  fetchNextPage?: () => void;
  getEstimateSize?: (index: number) => number;
};

export interface ISelectLanguageOption extends ISelectItem {
  placeholder: string;

  search?: string;
}

export type ISelectLanguage = Omit<ISelect<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  value: string | null;
  onChange: (language: string | null) => void;
};

export type ISelectMonth = Omit<ISelect<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  dateMin?: number;
  dateMax?: number;
  value: number | null;
  isShortLabel?: boolean;
  onChange: (value: number | null) => void;
  monthsLocale: IDatePickerTranslateMonth[];
};
export type ISelectMonths = Omit<ISelect<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  dateMin?: number;
  dateMax?: number;
  value: number[];
  isShortLabel?: boolean;
  onChange: (value: number[]) => void;
  monthsLocale: IDatePickerTranslateMonth[];
};
export type ISelectYear = Omit<ISelectMonth, 'monthsLocale'> & {
  dateMin?: number;
  dateMax?: number;
  sortOrder?: 'asc' | 'desc';
};

export type IContainerDropdownListOption<T extends ISelectItem> = Pick<
  ISelect<T>,
  'genre' | 'size' | 'isCenter' | 'isBold' | 'isShowDropdownOptionIcon' | 'sxTypography' | 'className' | 'style'
> & {
  item: T;

  isChecked?: boolean;

  isShowScroll?: boolean;

  onClick: () => void;

  virtualRowSize: number;

  virtualRowStart: number;
};
export type IContainerSelectListOption<T extends ISelectItem> = Pick<
  ISelect<T>,
  | 'genre'
  | 'size'
  | 'isCenter'
  | 'isWrapSelectOption'
  | 'isClearWhenClickSelectListOption'
  | 'isOnlyColorInSelectListOption'
  | 'className'
  | 'style'
> & {
  item: T;

  isChecked?: boolean;

  onClick: () => void;
};
