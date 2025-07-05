import { useVirtualizer } from '@tanstack/react-virtual'
import moment from 'moment'
import {
  FC,
  KeyboardEvent,
  Ref,
  RefObject,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { ListLanguage, MapThemeList } from '@local/consts'
import { useOverflowing } from '@local/hooks/use-overflowing'
import { useOverflowingAdvanced } from '@local/hooks/use-overflowing-advanced'
import { useOverflowingInContainer } from '@local/hooks/use-overflowing-in-container'
import { ErrorMessage } from '@local/styles/error'
import { KEY_SIZE_DATA } from '@local/theme'

import {
  ButtonList,
  ContainerDropdownListOptionProps,
  ContainerSelectListOptionProps,
  DropdownList,
  DropdownListOption,
  DropdownListOptionIcon,
  DropdownListParent,
  ISelectItem,
  ISelectLanguageOption,
  ISelectMapThemeOption,
  SelectInput,
  SelectLanguageProps,
  SelectList,
  SelectListOption,
  SelectMapThemeProps,
  SelectMonthProps,
  SelectMonthsProps,
  SelectProps,
  SelectWrapper,
  SelectYearProps
} from '.'
import { Button } from '../button'
import { Icon } from '../icon'
import { Popover, usePopover } from '../popover'
import { Typography } from '../typography'

const DEFAULT_LABEL_PLACEHOLDER = 'Select an option'
const DEFAULT_LABEL_EMPTY_OPTION = 'No options available'
const DEFAULT_LABEL_AND_MORE = (count: number) => `+${count} more`

const DEFAULT_MAX_VIEW_SELECT = 2
const DEFAULT_MAX_VIEW_DROPDOWN = 5
const DEFAULT_MIN_VIEW_DROPDOWN = 5
const DEFAULT_OVERSCAN = 1

export const Select = <T extends object & ISelectItem>(props: SelectProps<T>) => {
  const { isOpen, close, open, refReference, refFloating, floatingStyles, toggle } = usePopover({
    placement: 'bottom-start',
    offset: 0,
    mode: 'independence',
    isClickOutside: true,
    isWidthAsContent: true,
    isDisabled: props?.isDisabled
  })
  const refInput = useRef<HTMLInputElement>(null)
  const refDropdownList = useRef<HTMLDivElement>(null)

  const labelPlaceholder = useMemo(() => props.labelPlaceholder ?? DEFAULT_LABEL_PLACEHOLDER, [props.labelPlaceholder])
  const labelEmptyOption = useMemo(() => props.labelEmptyOption ?? DEFAULT_LABEL_EMPTY_OPTION, [props.labelEmptyOption])
  const labelAndMore = useMemo(() => props.labelAndMore ?? DEFAULT_LABEL_AND_MORE, [props.labelAndMore])

  const maxViewSelect = useMemo(() => props.maxViewSelect ?? DEFAULT_MAX_VIEW_SELECT, [props.maxViewSelect])
  const maxViewDropdown = useMemo(() => props.maxViewDropdown ?? DEFAULT_MAX_VIEW_DROPDOWN, [props.maxViewDropdown])
  const minViewDropdown = useMemo(() => props.minViewDropdown ?? DEFAULT_MIN_VIEW_DROPDOWN, [props.minViewDropdown])

  const isAll = useMemo(() => props.value.length == props.option.length, [props.option.length, props.value.length])
  const isHaveOption = useMemo(() => !!props.option.length, [props.option.length])
  const isHaveValue = useMemo(() => !!props.value.length, [props.value.length])

  const [isShowSearch, setIsShowSearch] = useState<boolean>(false)

  const optionsLength = useMemo(() => props.option.length, [props.option.length])

  const sizeHeight = useMemo(() => KEY_SIZE_DATA[props.size].height, [props.size])
  const sizePadding = useMemo(() => KEY_SIZE_DATA[props.size].padding, [props.size])
  const sizeRadius = useMemo(() => KEY_SIZE_DATA[props.size].radius, [props.size])

  const heightDropdownList = useMemo(
    () =>
      sizeHeight *
      (optionsLength < maxViewDropdown
        ? optionsLength < minViewDropdown
          ? optionsLength
          : optionsLength
        : maxViewDropdown),
    [sizeHeight, optionsLength, maxViewDropdown, minViewDropdown]
  )
  const heightPopover = useMemo(
    () => (isHaveOption ? heightDropdownList : sizeHeight),
    [isHaveOption, heightDropdownList, sizeHeight]
  )
  const isValueMoreMaxViewSelect = useMemo(
    () => props.value.length > maxViewSelect,
    [maxViewSelect, props.value.length]
  )
  const isShowIconSearchClear = useMemo(
    () => props.isShowIconSearchClear && props.valueSearch,
    [props.isShowIconSearchClear, props.valueSearch]
  )
  const isShowScroll = useMemo(() => optionsLength > maxViewDropdown, [maxViewDropdown, optionsLength])
  const isSelectedItem = useCallback(
    (option: T): boolean => {
      return isAll || props.value.some(val => val.value === option.value)
    },
    [isAll, props.value]
  )

  const listVirtualizer = useVirtualizer({
    count: optionsLength,
    estimateSize: props.getEstimateSize ? props.getEstimateSize : () => sizeHeight,
    getScrollElement: () => refDropdownList.current,
    overscan: DEFAULT_OVERSCAN,
    paddingEnd: 0
  })

  const onChangeShowSearch = useCallback(
    (show: boolean) => {
      if (props.isSearch) {
        setIsShowSearch(show)
        if (refInput.current) {
          refInput.current.focus()
        }
      }
    },
    [props.isSearch]
  )
  const onClick = useCallback(
    (option: T) => {
      if (props.isOnClickOptionClose) {
        close()
      }

      let newValues: T[] = []
      const optionValue = option.value

      const findIndex = (val: T) => val.value === optionValue
      const index = props.value.findIndex(findIndex)
      const isFind = index !== -1

      if (props.isMulti) {
        if (isFind) {
          newValues = [...props.value.slice(0, index), ...props.value.slice(index + 1)]
        } else {
          newValues = [...props.value, option]
        }
      } else {
        if (isFind && !props.isStayValueAfterSelect) {
          newValues = [...props.value.slice(0, index), ...props.value.slice(index + 1)]
        } else {
          newValues = [option]
        }
      }
      props.onChange(newValues)
      onChangeShowSearch(!!props.isStaySearchAfterSelect)
      if (props.isOnClickOptionClose) {
        close()
      }
    },
    [close, onChangeShowSearch, props]
  )
  const onClear = useCallback(() => {
    props.onChange([])
  }, [props])
  const onClearSearch = useCallback(() => {
    props.onChangeSearch?.('')
  }, [props])
  const onScroll = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement
        if (scrollHeight - scrollTop - clientHeight < heightDropdownList && !props.isFetching && props.fetchNextPage) {
          props.fetchNextPage()
        }
      }
    },
    [heightDropdownList, props]
  )

  useEffect(() => {
    if (!isHaveValue) {
      onChangeShowSearch(true)
    }
  }, [isHaveValue, onChangeShowSearch])
  return (
    <>
      <SelectWrapper
        tabIndex={0}
        $isNotShowHoverStyle={props?.isNotShowHoverStyle}
        $size={props.size}
        $genre={props.genre}
        $sx={props.sx}
        $isOpen={isOpen}
        ref={refReference as RefObject<HTMLDivElement | null>}
        onClick={() => {
          open()
          onChangeShowSearch(true)
        }}
        onFocus={() => {
          open()
          onChangeShowSearch(true)
        }}
        animate={{
          '--after-height': isOpen ? `${heightPopover}px` : `0px`,
          borderBottomLeftRadius: isOpen ? `0px` : `${sizeRadius}px`,
          borderBottomRightRadius: isOpen ? `0px` : `${sizeRadius}px`
        }}
        transition={{ duration: 0.2 }}
      >
        {isShowSearch && (
          <SelectInput
            $genre={props.genre}
            $size={props.size}
            onChange={e => {
              props?.onChangeSearch?.(e.target.value)
            }}
            value={props.valueSearch}
            placeholder={labelPlaceholder}
          />
        )}
        {isHaveValue ? (
          <SelectList
            $size={props.size}
            tabIndex={-1}
            $isWrapSelectOption={props.isWrapSelectOption}
            onMouseDown={e => {
              e.preventDefault()
            }}
            onClick={e => {
              e.preventDefault()
            }}
          >
            {props.value.map((value, index) => {
              if (index >= maxViewSelect) return null

              const isChecked = isSelectedItem(value)
              return (
                <ContainerSelectListOption
                  key={index}
                  isChecked={isChecked}
                  onClick={() => props.isClearWhenClickSelectListOption && onClick(value)}
                  item={value}
                  genre={props.genre}
                  size={props.size}
                  isBold={props.isBold}
                  isClearWhenClickSelectListOption={props.isClearWhenClickSelectListOption}
                  isWrapSelectOption={props.isWrapSelectOption}
                  isNotShowHoverStyle={props.isNotShowHoverStyle}
                  isCenter={props.isCenter}
                />
              )
            })}
          </SelectList>
        ) : null}
        {}
        {!isHaveValue && !props.isSearch ? (
          <Typography
            sx={{
              default: {
                size: 16,
                line: 1,
                isNoUserSelect: true
              }
            }}
          >
            {labelPlaceholder}
          </Typography>
        ) : null}

        {isValueMoreMaxViewSelect && isHaveValue ? (
          <Typography
            sxStandard={{
              default: {
                paddingLeft: `${sizePadding - sizePadding / 2.8}px`
              }
            }}
            sx={{
              default: {
                size: 16,
                line: 1,
                isNoUserSelect: true
              }
            }}
          >
            {labelAndMore(props.value.length - maxViewSelect)}
          </Typography>
        ) : null}
        <ButtonList
          $size={props.size}
          onMouseDown={e => {
            e.preventDefault()
          }}
        >
          {isShowIconSearchClear && (
            <Button
              genre={props.genre}
              size="small"
              isWidthAsHeight
              isFullSize
              isRadius
              isOnlyIcon
              icons={[
                {
                  name: 'Close',
                  type: 'id'
                }
              ]}
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                onClearSearch()
              }}
            />
          )}
          {props.isShowIconToggle && (
            <Button
              genre={props.genre}
              size="small"
              isWidthAsHeight
              isFullSize
              isRadius
              isOnlyIcon
              icons={[
                {
                  name: 'Select',
                  type: 'id'
                }
              ]}
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                toggle()
              }}
            />
          )}
          {props.isShowIconFetching && props.isFetching && (
            <Button
              tabIndex={-1}
              genre={props.genre}
              size="small"
              isWidthAsHeight
              isFullSize
              isRadius
              isHiddenBorder
              isDisabledRipple
              isNotHoverEffect
            >
              <Icon type={'loading'} name={'Circle'} size={props.size} />
            </Button>
          )}
        </ButtonList>
      </SelectWrapper>
      <Popover
        sx={theme => ({
          default: {
            background: theme.colors.input[props.genre].background.rest,
            borderRadius: `0px 0px ${sizeRadius}px ${sizeRadius}px`,
            padding: '0px',
            maxHeight: `${heightPopover}px`
          }
        })}
        size={props.size}
        genre={props.genre}
        floatingStyles={floatingStyles}
        ref={refFloating}
        isOpen={isOpen}
      >
        <DropdownListParent tabIndex={-1} ref={refDropdownList} onScroll={e => onScroll(e.target as HTMLDivElement)}>
          {isHaveOption ? (
            <DropdownList
              tabIndex={-1}
              style={{
                height: `${listVirtualizer.getTotalSize()}px`,
                minHeight: `${heightDropdownList}px`
              }}
            >
              {listVirtualizer.getVirtualItems().map(virtualRow => {
                const item = props.option[virtualRow.index]
                const isChecked = isSelectedItem(item)
                return (
                  <ContainerDropdownListOption
                    key={virtualRow.index}
                    virtualRowSize={virtualRow.size}
                    virtualRowStart={virtualRow.start}
                    isChecked={isChecked}
                    onClick={() => onClick(item)}
                    item={item}
                    genre={props.genre}
                    size={props.size}
                    isBold={props.isBold}
                    isNotShowHoverStyle={props.isNotShowHoverStyle}
                    isCenter={props.isCenter}
                    isShowScroll={isShowScroll}
                    isShowDropdownOptionIcon={props.isShowDropdownOptionIcon}
                  />
                )
              })}
            </DropdownList>
          ) : null}
          {!isHaveOption ? (
            <SelectListOption
              tabIndex={-1}
              $isClearWhenClickSelectListOption={props.isClearWhenClickSelectListOption}
              $isWrapSelectOption={props.isWrapSelectOption}
              $isCenter={props.isCenter}
              $isNotShowHoverStyle={props.isNotShowHoverStyle}
              $genre={props.genre}
              $size={props.size}
              $isBold={props.isBold}
              style={{
                width: '100%',
                height: `${sizeHeight}px`,
                borderRadius: `0px 0px ${sizeRadius}px ${sizeRadius}px`
              }}
            >
              <Typography
                sx={{
                  default: {
                    size: 16,
                    line: 1
                  }
                }}
              >
                {labelEmptyOption}
              </Typography>
            </SelectListOption>
          ) : null}
        </DropdownListParent>
      </Popover>
      {props?.error ? <ErrorMessage {...props.error} size={props?.error.size ?? props.size} /> : null}
    </>
  )
}

const ContainerDropdownListOptionComponent = <T extends object & ISelectItem>(
  props: ContainerDropdownListOptionProps<T>
) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      props.onClick()
    }
  }
  return (
    <DropdownListOption
      tabIndex={0}
      onClick={props.onClick}
      onKeyDown={handleKeyDown}
      style={{
        height: `${props.virtualRowSize}px`,
        transform: `translateY(${props.virtualRowStart}px)`
      }}
      $isCenter={props.isCenter}
      $isNotShowHoverStyle={props.isNotShowHoverStyle}
      $item={props.item}
      $genre={props.genre}
      $size={props.size}
      $isBold={props.isBold}
      $isChecked={props.isChecked}
      $isShowScroll={props.isShowScroll}
    >
      {props.item.label}
      {props.isShowDropdownOptionIcon && (
        <DropdownListOptionIcon
          tabIndex={-1}
          size={props.size}
          type="checkbox"
          name="Arrow"
          $genre={props.genre}
          $checked={props.isChecked}
          $size={props.size}
        />
      )}
    </DropdownListOption>
  )
}

const ContainerSelectListOptionComponent = <T extends object & ISelectItem>(
  props: ContainerSelectListOptionProps<T>
) => {
  return (
    <SelectListOption
      tabIndex={-1}
      onClick={props.onClick}
      $isClearWhenClickSelectListOption={props.isClearWhenClickSelectListOption}
      $isWrapSelectOption={props.isWrapSelectOption}
      $isCenter={props.isCenter}
      $isNotShowHoverStyle={props.isNotShowHoverStyle}
      $item={props.item}
      $genre={props.genre}
      $size={props.size}
      $isBold={props.isBold}
      $isChecked={props.isChecked}
    >
      <Typography
        sx={{
          default: {
            size: 16,
            line: 1
          }
        }}
      >
        {props.item.label}
      </Typography>
    </SelectListOption>
  )
}

export const ContainerDropdownListOption = memo(ContainerDropdownListOptionComponent)
export const ContainerSelectListOption = memo(ContainerSelectListOptionComponent)

export const SelectLanguage: FC<SelectLanguageProps> = props => {
  const { value, onChange } = props

  const option = ListLanguage

  const [viewOption, setViewOption] = useState<ISelectLanguageOption[]>(option)

  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) onChange(null)
    onChange(value[0].toString())
  }
  const valueLocal = useMemo(() => {
    const findOption = option.find(e => e.value === value)
    if (!findOption) return []
    return [findOption]
  }, [option, value])

  return (
    <Select<ISelectLanguageOption>
      {...props}
      option={viewOption}
      value={valueLocal}
      onChange={handleSelectChange}
      minViewDropdown={1}
    />
  )
}

export const SelectMonth: FC<SelectMonthProps> = props => {
  const { value, onChange, startDate, endDate, monthsLocale, isShortLabel } = props

  const year = moment(value).utc().year()

  const option = useMemo(() => {
    return monthsLocale.map(monthItem => {
      const monthIndex = moment().month(monthItem.value).month()

      const monthMoment = moment.utc().year(year).month(monthIndex).startOf('month')
      const isDisabled =
        (startDate && monthMoment.isBefore(moment.utc(startDate), 'month')) ||
        (endDate && monthMoment.isAfter(moment.utc(endDate), 'month'))

      return {
        value: monthMoment.valueOf(),
        label: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        placeholder: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        search: `${monthItem.localeLong.toLowerCase()}, ${monthIndex + 1}`,
        isDisabled: !!isDisabled,
        monthValue: monthItem.value
      }
    })
  }, [monthsLocale, year, startDate, endDate, isShortLabel])

  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) onChange(null)
    onChange(+value[0])
  }
  const valueLocal = useMemo(() => {
    const findOption = option.find(e => e.value === value)
    if (!findOption) return []
    return [findOption]
  }, [value, option])

  return (
    <Select<ISelectLanguageOption>
      {...props}
      option={option}
      minViewDropdown={1}
      isShowDropdownOptionIcon
      value={valueLocal}
      onChange={handleSelectChange}
    />
  )
}
export const SelectMonths: FC<SelectMonthsProps> = props => {
  const { value, onChange, startDate, endDate, monthsLocale, isShortLabel } = props

  const year = moment(value).utc().year()

  const option = useMemo(() => {
    return monthsLocale.map(monthItem => {
      const monthIndex = moment().month(monthItem.value).month()

      const monthMoment = moment.utc().year(year).month(monthIndex).startOf('month')
      const isDisabled =
        (startDate && monthMoment.isBefore(moment.utc(startDate), 'month')) ||
        (endDate && monthMoment.isAfter(moment.utc(endDate), 'month'))

      return {
        value: monthMoment.valueOf(),
        label: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        placeholder: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        search: `${monthItem.localeLong.toLowerCase()}, ${monthIndex + 1}`,
        isDisabled: !!isDisabled,
        monthValue: monthItem.value
      }
    })
  }, [monthsLocale, year, startDate, endDate, isShortLabel])
  const [viewOption, setViewOption] = useState<ISelectLanguageOption[]>(option)

  useEffect(() => {
    setViewOption(option)
  }, [option])
  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) onChange([])
    onChange(value.map(e => +e.value))
  }
  const valueLocal = useMemo(() => {
    if (!value || value.length === 0) return []
    return option.filter(e => value.includes(e.value))
  }, [value, option])

  const [search, setSearch] = useState<string>('')
  const handleSearchChange = useCallback(
    (value: string) => {
      setSearch(value)

      if (value === '') {
        setViewOption(option)
      } else {
        const filteredOptions = option.filter(option =>
          Object.values(option).some(field => field?.toString().toLowerCase().includes(value.toLowerCase()))
        )
        setViewOption(filteredOptions)
      }
    },
    [option]
  )
  return (
    <Select<ISelectLanguageOption>
      {...props}
      valueSearch={search}
      onChangeSearch={handleSearchChange}
      option={viewOption}
      minViewDropdown={1}
      isMulti
      isShowDropdownOptionIcon
      value={valueLocal}
      onChange={handleSelectChange}
    />
  )
}

export const SelectYear: FC<SelectYearProps> = props => {
  const { value, onChange, startDate, endDate, sortOrder = 'desc' } = props

  const startYear = moment(startDate).utc().year()
  const endYear = moment(endDate).utc().year()

  const option = useMemo(() => {
    const yearArray = Array.from({ length: endYear - startYear + 1 }, (_, index) => {
      const year = startYear + index
      return {
        value: moment().year(year).utc().startOf('year').valueOf(),
        label: moment().year(year).utc().format('YYYY'),
        placeholder: moment().year(year).utc().format('YYYY'),
        search: `${moment().year(year).utc().format('YYYY').toLowerCase()}`
      }
    })

    return sortOrder === 'asc'
      ? yearArray.sort((a, b) => a.value - b.value)
      : yearArray.sort((a, b) => b.value - a.value)
  }, [endYear, startYear, sortOrder])

  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) onChange(null)
    onChange(+value[0])
  }
  const valueLocal = useMemo(() => {
    const findOption = option.find(e => e.value === value)
    if (!findOption) return []
    return [findOption]
  }, [value, option])

  return (
    <Select<ISelectLanguageOption>
      {...props}
      option={option}
      minViewDropdown={1}
      isOnClickOptionClose
      isShowDropdownOptionIcon
      value={valueLocal}
      onChange={handleSelectChange}
    />
  )
}

export const SelectMapTheme: FC<SelectMapThemeProps> = props => {
  const options = useMemo(() => MapThemeList, [])
  const optionsNormalize = useMemo(
    () => MapThemeList.map(e => ({ label: e.name, value: e.name, placeholder: e.name })),
    []
  )

  const [viewOption, setViewOption] = useState<ISelectMapThemeOption[]>(optionsNormalize)
  const [query, setQuery] = useState<string>('')
  const [isEmptyOption, setIsEmptyOption] = useState<boolean>(false)

  const handleSelectChange = (option: ISelectMapThemeOption[]) => {
    const findOption = options.find(e => e.name === option[0].value)
    if (findOption) {
      props.onChange(findOption)
    } else {
      props.onChange(null)
    }
    setQuery('')
  }
  const handleQueryChange = useCallback(
    (value: string) => {
      setQuery(value)
      props.onChange(null)
      if (value === '') {
        setIsEmptyOption(optionsNormalize.length === 0)
        setViewOption(optionsNormalize)
      } else {
        const filteredOptions = optionsNormalize.filter(option =>
          Object.values(option).some(field => field?.toString().toLowerCase().includes(value.toLowerCase()))
        )
        setViewOption(filteredOptions)
        setIsEmptyOption(filteredOptions.length === 0)
      }
    },
    [optionsNormalize, props]
  )

  const [value, setValue] = useState<ISelectMapThemeOption | undefined>(
    optionsNormalize.find(e => e.value === props.value.name)
  )
  useEffect(() => {
    if (value?.value !== props.value.name) setValue(optionsNormalize.find(e => e.value === props.value.name))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, props.value])

  return (
    <Select<ISelectMapThemeOption>
      {...props}
      option={viewOption}
      // isEmptyOption={isEmptyOption}
      minView={1}
      maxView={8}
      isOnClickOptionClose
      value={value ? [value] : []}
      onChange={handleSelectChange}
      // inputProps={{
      //   ...props.inputProps,
      //   variety: 'standard',
      //   isReadOnly: true,
      //   value: (value?.placeholder as string) ?? query,
      //   onChange: handleQueryChange
      // }}
    />
  )
}
