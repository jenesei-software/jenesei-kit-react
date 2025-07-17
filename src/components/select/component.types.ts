import { addErrorProps } from '@local/styles/error';
import { addSXProps } from '@local/styles/sx';
import { IThemeGenreSelect, IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

import { FocusEvent, ReactNode, Ref } from 'react';

import { MonthItem } from '../date-picker';
import { MapTheme } from '../map';

export type TInputSelect = keyof IThemeGenreSelect;

export interface ISelectItem {
  [key: string]: unknown;

  isDisabled?: boolean;

  isLoading?: boolean;

  label: string | number | ReactNode;

  value: string | number;
}

export type SelectProps<T extends ISelectItem> = addErrorProps &
  addSXProps & {
    id?: string;

    size: IThemeSize;
    genre: TInputSelect;

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
    isNotShowHoverStyle?: boolean;
    isSortValueAsOption?: boolean;
    isCenter?: boolean;
    isStayValueAfterSelect?: boolean;
    isBold?: boolean;
    isWrapSelectOption?: boolean;
    isMulti?: boolean;
    isFetching?: boolean;
    isClearWhenClickSelectListOption?: boolean;
    isStaySearchAfterSelect?: boolean;
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

export type SelectLanguageProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  value: string | null;
  onChange: (language: string | null) => void;
};

export interface ISelectMapThemeOption extends ISelectItem {
  placeholder: string;

  search?: string;
}
export type SelectMapThemeProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  value: MapTheme;
  onChange: (theme: MapTheme | null) => void;
};
export type SelectMonthProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  startDate?: number;
  endDate?: number;
  value: number | null;
  isShortLabel?: boolean;
  onChange: (value: number | null) => void;
  monthsLocale: MonthItem[];
};
export type SelectMonthsProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  startDate?: number;
  endDate?: number;
  value: number[];
  isShortLabel?: boolean;
  onChange: (value: number[]) => void;
  monthsLocale: MonthItem[];
};
export type SelectYearProps = Omit<SelectMonthProps, 'monthsLocale'> & {
  startDate?: number;
  endDate?: number;
  sortOrder?: 'asc' | 'desc';
};

export type SelectWrapperProps = AddDollarSign<
  Pick<SelectProps<ISelectItem>, 'genre' | 'sx' | 'size' | 'isNotShowHoverStyle' | 'error' | 'isCenter'> & {
    isOpen: boolean;
  }
>;

export type DropdownListOptionProps = AddDollarSign<
  Pick<SelectProps<ISelectItem>, 'genre' | 'size' | 'isCenter' | 'isNotShowHoverStyle' | 'isBold'> & {
    item?: ISelectItem;
    isChecked?: boolean;
    isShowScroll?: boolean;
  }
>;

export type DropdownListOptionIconProps = AddDollarSign<
  Pick<SelectProps<ISelectItem>, 'genre' | 'size'> & {
    checked?: boolean;
  }
>;

export type ContainerDropdownListOptionProps<T extends ISelectItem> = Pick<
  SelectProps<T>,
  'genre' | 'size' | 'isCenter' | 'isNotShowHoverStyle' | 'isBold' | 'isShowDropdownOptionIcon'
> & {
  item: T;

  isChecked?: boolean;

  isShowScroll?: boolean;

  onClick: () => void;

  virtualRowSize: number;

  virtualRowStart: number;
};
export type ContainerSelectListOptionProps<T extends ISelectItem> = Pick<
  SelectProps<T>,
  | 'genre'
  | 'size'
  | 'isCenter'
  | 'isNotShowHoverStyle'
  | 'isBold'
  | 'isWrapSelectOption'
  | 'isClearWhenClickSelectListOption'
  | 'isOnlyColorInSelectListOption'
> & {
  item: T;

  isChecked?: boolean;

  onClick: () => void;
};
export type SelectListOptionProps = AddDollarSign<
  Pick<
    SelectProps<ISelectItem>,
    | 'genre'
    | 'size'
    | 'isCenter'
    | 'isNotShowHoverStyle'
    | 'isBold'
    | 'isWrapSelectOption'
    | 'isClearWhenClickSelectListOption'
    | 'isOnlyColorInSelectListOption'
  > & {
    item?: ISelectItem;
    isChecked?: boolean;
  }
>;
export type SelectListProps = AddDollarSign<Pick<SelectProps<ISelectItem>, 'size' | 'isWrapSelectOption'>>;
export type ButtonListProps = AddDollarSign<Pick<SelectProps<ISelectItem>, 'size'>>;
export type SelectInputProps = AddDollarSign<Pick<SelectProps<ISelectItem>, 'size' | 'genre'>>;
export type DropdownListParentProps = AddDollarSign<Pick<SelectProps<ISelectItem>, 'size'>>;
