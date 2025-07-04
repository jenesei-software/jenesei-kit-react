import { FocusEventHandler, MutableRefObject, ReactNode, RefObject } from 'react'

import { addErrorProps } from '@local/styles/error'
import { addSXProps } from '@local/styles/sx'
import { IThemeGenreSelect, IThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { MonthItem } from '../date-picker'
import { MapTheme } from '../map'

export type TInputSelect = keyof IThemeGenreSelect

export interface ISelectItem {
  [key: string]: unknown

  isDisabled?: boolean

  isLoading?: boolean

  label: string | number | ReactNode

  value: string | number
}

export type SelectProps<T extends ISelectItem> = addErrorProps &
  addSXProps & {
    name?: string
    id?: string

    size: IThemeSize
    genre: TInputSelect

    isDisabled?: boolean
    isShowDropdownOptionIcon?: boolean
    isShowIconToggle?: boolean
    isShowIconClear?: boolean
    isShowIconFetching?: boolean
    isOnClickOptionClose?: boolean
    isNotShowHoverStyle?: boolean
    isSortValueAsOption?: boolean
    isCenter?: boolean
    isStayValueAfterSelect?: boolean
    isBold?: boolean
    isWrapSelectOption?: boolean
    isMulti?: boolean
    isFetching?: boolean

    labelPlaceholder?: string
    labelEmptyOption?: string
    labelAndMore?: string

    option: T[]
    value: (number | string)[]
    maxViewSelect?: number
    maxViewDropdown?: number
    minViewDropdown?: number

    onChange: (value: (number | string)[]) => void
    onFocus?: FocusEventHandler<HTMLInputElement>
    onBlur?: FocusEventHandler<HTMLInputElement>
    fetchNextPage?: () => void
    getEstimateSize?: (index: number) => number
  }

export interface ISelectLanguageOption extends ISelectItem {
  placeholder: string

  search?: string
}

export type SelectLanguageProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  value: string
  onChange: (language: string | null) => void
}

export interface ISelectMapThemeOption extends ISelectItem {
  placeholder: string

  search?: string
}
export type SelectMapThemeProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  value: MapTheme
  onChange: (theme: MapTheme | null) => void
}
export type SelectMonthProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  startDate?: number
  endDate?: number
  value: number | null
  isShortLabel?: boolean
  onChange: (value: number | null) => void
  monthsLocale: MonthItem[]
}
export type SelectMonthsProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  startDate?: number
  endDate?: number
  value: number[]
  isShortLabel?: boolean
  onChange: (value: number[]) => void
  monthsLocale: MonthItem[]
}
export type SelectYearProps = Omit<SelectMonthProps, 'monthsLocale'> & {
  startDate?: number
  endDate?: number
  sortOrder?: 'asc' | 'desc'
}

export type SelectWrapperProps = AddDollarSign<
  Pick<SelectProps<ISelectItem>, 'genre' | 'sx' | 'size' | 'isNotShowHoverStyle'> & { isOpen: boolean }
>

export type DropdownListOptionProps = AddDollarSign<
  Pick<SelectProps<ISelectItem>, 'genre' | 'size' | 'isCenter' | 'isNotShowHoverStyle' | 'isBold'> & {
    item: ISelectItem
    isChecked?: boolean
    isShowScroll?: boolean
  }
>

export type DropdownListOptionIconProps = AddDollarSign<
  Pick<SelectProps<ISelectItem>, 'genre' | 'size'> & {
    checked?: boolean
  }
>

export type ContainerDropdownListOptionProps<T extends ISelectItem> = Pick<
  SelectProps<T>,
  'genre' | 'size' | 'isCenter' | 'isNotShowHoverStyle' | 'isBold' | 'isShowDropdownOptionIcon'
> & {
  item: T

  isChecked?: boolean

  isShowScroll?: boolean

  onClick: () => void

  virtualRowSize: number

  virtualRowStart: number
}
export type ContainerSelectListOptionProps<T extends ISelectItem> = Pick<
  SelectProps<T>,
  'genre' | 'size' | 'isCenter' | 'isNotShowHoverStyle' | 'isBold' | 'isWrapSelectOption'
> & {
  item: T

  isChecked?: boolean

  onClick: () => void
}
export type SelectListOptionProps = AddDollarSign<
  Pick<
    SelectProps<ISelectItem>,
    'genre' | 'size' | 'isCenter' | 'isNotShowHoverStyle' | 'isBold' | 'isWrapSelectOption'
  > & {
    item: ISelectItem
    isChecked?: boolean
    isOverflowing?: boolean
  }
>
export type SelectListProps = AddDollarSign<
  Pick<SelectProps<ISelectItem>, 'size' | 'isWrapSelectOption'> & { isOverflowing?: boolean }
>
export type ButtonListProps = AddDollarSign<Pick<SelectProps<ISelectItem>, 'size'>>
