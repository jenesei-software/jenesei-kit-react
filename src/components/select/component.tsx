import { Button } from '@local/components/button/export';
import { ErrorMessage } from '@local/components/error/export';
import { Icon } from '@local/components/icon/export';
import { Popover, usePopover } from '@local/components/popover/export';
import { Typography } from '@local/components/typography/export';
import { LIST_LANGUAGE } from '@local/consts';
import { getSxTypography } from '@local/functions';
import { KEY_SIZE_DATA } from '@local/styles/theme/export';

import { useMergeRefs } from '@floating-ui/react';
import { useVirtualizer } from '@tanstack/react-virtual';
import moment from 'moment';
import { FC, KeyboardEvent, memo, Ref, useCallback, useEffect, useMemo, useRef, useState } from 'react';

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
  SelectLanguageProps,
  SelectList,
  SelectListOption,
  SelectMonthProps,
  SelectMonthsProps,
  SelectProps,
  SelectTextArea,
  SelectWrapper,
  SelectYearProps,
} from '.';

const DEFAULT_LABEL_SELECT_ALL = 'Select all option';
const DEFAULT_LABEL_PLACEHOLDER = 'Select an option';
const DEFAULT_LABEL_EMPTY_OPTION = 'No options available';
const DEFAULT_LABEL_AND_MORE = (count: number) => `+${count} more`;
const DEFAULT_LABEL_ADD_OPTION = (value: string) => `Add "${value}" option`;

const DEFAULT_MAX_VIEW_SELECT = 2;
const DEFAULT_MAX_VIEW_DROPDOWN = 5;
const DEFAULT_MIN_VIEW_DROPDOWN = 1;
const DEFAULT_OVERSCAN = 1;

export const Select = <T extends object & ISelectItem>(props: SelectProps<T>) => {
  const sizeHeight = useMemo(() => KEY_SIZE_DATA[props.size].height, [props.size]);
  const sizePadding = useMemo(() => KEY_SIZE_DATA[props.size].padding, [props.size]);
  const sizeRadius = useMemo(() => KEY_SIZE_DATA[props.size].radius, [props.size]);

  const {
    isOpen,
    close,
    open,
    refReference: refReferencePopover,
    refFloating: refFloatingPopover,
    floatingStyles,
    toggle,
  } = usePopover({
    isFocusTrap: true,
    placement: 'bottom-start',
    offset: sizePadding,
    mode: 'independence',
    isClickOutside: true,
    isWidthAsContent: true,
    isDisabled: props?.isDisabled,
    onBlur: props.onBlur,
    onFocus: props.onFocus,
  });
  const refTextArea = useRef<HTMLTextAreaElement>(null);
  const refDropdownList = useRef<HTMLDivElement>(null);

  const refReference = useMergeRefs([props.refReference, refReferencePopover]);
  const refFloating = useMergeRefs([props.refFloating, refFloatingPopover]);

  const labelSelectAll = useMemo(() => props.labelSelectAll ?? DEFAULT_LABEL_SELECT_ALL, [props.labelSelectAll]);
  const labelPlaceholder = useMemo(() => props.labelPlaceholder ?? DEFAULT_LABEL_PLACEHOLDER, [props.labelPlaceholder]);
  const labelEmptyOption = useMemo(
    () => props.labelEmptyOption ?? DEFAULT_LABEL_EMPTY_OPTION,
    [props.labelEmptyOption],
  );
  const labelAndMore = useMemo(() => props.labelAndMore ?? DEFAULT_LABEL_AND_MORE, [props.labelAndMore]);
  const labelAddOption = useMemo(() => props.labelAddOption ?? DEFAULT_LABEL_ADD_OPTION, [props.labelAddOption]);

  const maxViewSelect = useMemo(() => props.maxViewSelect ?? DEFAULT_MAX_VIEW_SELECT, [props.maxViewSelect]);
  const maxViewDropdown = useMemo(() => props.maxViewDropdown ?? DEFAULT_MAX_VIEW_DROPDOWN, [props.maxViewDropdown]);
  const minViewDropdown = useMemo(() => props.minViewDropdown ?? DEFAULT_MIN_VIEW_DROPDOWN, [props.minViewDropdown]);

  const isAll = useMemo(
    () => props.value.length === props.option.length || props.value.length === props.optionAllLength,
    [props.option.length, props.optionAllLength, props.value.length],
  );
  const isHaveOption = useMemo(() => !!props.option.length, [props.option.length]);
  const isHaveValue = useMemo(() => !!props.value.length, [props.value.length]);
  const isShowAddOption = useMemo(
    () => props.valueSearch && props.isShowAddOption,
    [props.valueSearch, props.isShowAddOption],
  );
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);

  const optionsLength = useMemo(() => {
    if (props.isNotShowDisabledOptions) {
      return props.option.filter((option) => !option.isDisabled).length;
    } else {
      return props.option.length;
    }
  }, [props.option, props.isNotShowDisabledOptions]);

  const heightDropdownList = useMemo(
    () =>
      sizeHeight *
      (optionsLength < maxViewDropdown
        ? optionsLength < minViewDropdown
          ? optionsLength
          : optionsLength
        : maxViewDropdown),
    [sizeHeight, optionsLength, maxViewDropdown, minViewDropdown],
  );
  const heightPopover = useMemo(() => {
    const selectAll = props.isShowSelectAll && isHaveOption ? sizeHeight : 0;
    const selectNoOption = !isHaveOption ? sizeHeight : 0;
    const selectList = isHaveOption ? heightDropdownList : 0;
    const selectAdd = isShowAddOption ? sizeHeight : 0;
    const sum =
      (selectAll !== 0 ? 1 : 0) +
      (selectNoOption !== 0 ? 1 : 0) +
      (selectList !== 0 ? 1 : 0) +
      (selectAdd !== 0 ? 1 : 0);
    const padding = sum <= 1 ? 0 : (sum - 1) * (sizePadding / 2.8);
    return selectAll + selectNoOption + selectList + selectAdd + padding;
  }, [props.isShowSelectAll, sizeHeight, isHaveOption, sizePadding, heightDropdownList, isShowAddOption]);

  const isValueMoreMaxViewSelect = useMemo(
    () => props.value.length > maxViewSelect,
    [maxViewSelect, props.value.length],
  );
  const isShowIconSearchClear = useMemo(
    () => props.isShowIconSearchClear && props.valueSearch,
    [props.isShowIconSearchClear, props.valueSearch],
  );
  const isShowButtonList = useMemo(
    () => isShowIconSearchClear || props.isShowIconToggle || (props.isShowIconFetching && props.isFetching),
    [isShowIconSearchClear, props.isShowIconToggle, props.isShowIconFetching, props.isFetching],
  );
  const isShowScroll = useMemo(() => optionsLength > maxViewDropdown, [maxViewDropdown, optionsLength]);
  const isSelectedItem = useCallback(
    (option: T): boolean => {
      return isAll || props.value.some((val) => val.value === option.value);
    },
    [isAll, props.value],
  );
  const isShowDropdownSettingsList = useMemo(
    () => isShowAddOption || (props.isShowSelectAll && isHaveOption) || !isHaveOption,
    [isHaveOption, isShowAddOption, props.isShowSelectAll],
  );
  const listVirtualizer = useVirtualizer({
    count: optionsLength,
    estimateSize: props.getEstimateSize ? props.getEstimateSize : () => sizeHeight,
    getScrollElement: () => refDropdownList.current,
    overscan: DEFAULT_OVERSCAN,
    paddingEnd: 0,
  });

  const onChangeShowSearch = useCallback(
    (show: boolean) => {
      if (props.isSearch && !props.isDisabled) {
        setIsShowSearch(show);
      } else {
        setIsShowSearch(false);
      }
    },
    [props.isDisabled, props.isSearch],
  );
  const onClick = useCallback(
    (option: T) => {
      let newValues: T[] = [];
      const optionValue = option.value;

      const findIndex = (val: T) => val.value === optionValue;
      const index = props.value.findIndex(findIndex);
      const isFind = index !== -1;

      if (props.isMulti) {
        if (isFind) {
          newValues = [...props.value.slice(0, index), ...props.value.slice(index + 1)];
        } else {
          newValues = [...props.value, option];
        }
      } else {
        if (isFind && !props.isStayValueAfterSelect) {
          newValues = [...props.value.slice(0, index), ...props.value.slice(index + 1)];
        } else {
          newValues = [option];
        }
      }
      props.onChange(newValues);
      onChangeShowSearch(!!props.isStaySearchAfterSelect);
      if (props.isOnClickOptionClose) {
        close();
      }
    },
    [close, onChangeShowSearch, props],
  );
  const onClickAll = useCallback(() => {
    props.onChangeAll?.(isAll ? [] : props.option, !isAll);
    onChangeShowSearch(!!props.isStaySearchAfterSelect);
    if (props.isOnClickOptionClose) {
      close();
    }
  }, [close, isAll, onChangeShowSearch, props]);
  // const onClear = useCallback(() => {
  //   props.onChange([]);
  // }, [props]);
  const onClearSearch = useCallback(() => {
    props.onChangeSearch?.('');
  }, [props]);
  const onScroll = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        if (scrollHeight - scrollTop - clientHeight < heightDropdownList && !props.isFetching && props.fetchNextPage) {
          props.fetchNextPage();
        }
      }
    },
    [heightDropdownList, props],
  );
  const onAddOption = useCallback(
    (value: string) => {
      props.onAddOption?.(value);
      props.onChangeSearch?.('');
    },
    [props],
  );
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    onChangeShowSearch(false);
  }, [onChangeShowSearch, props.isDisabled]);
  useEffect(() => {
    if (!isHaveValue) {
      onChangeShowSearch(true);
    }
  }, [isHaveValue, onChangeShowSearch]);
  useEffect(() => {
    if (!isOpen && isHaveValue) {
      onChangeShowSearch(false);
    }
  }, [isHaveValue, isOpen, onChangeShowSearch]);

  const sxTypography = useMemo(() => {
    return getSxTypography({
      size: props.size,
      weight: props.isBold ? 500 : 400,
      sx: props.sxTypography,
    });
  }, [props.isBold, props.size, props.sxTypography]);
  return (
    <>
      <SelectWrapper
        tabIndex={0}
        $error={props?.error}
        $isNotShowHoverStyle={props?.isNotShowHoverStyle}
        $size={props.size}
        $genre={props.genre}
        $isCenter={props.isCenter}
        $sx={props.sx}
        $isOpen={isOpen}
        ref={refReference as Ref<HTMLDivElement | null>}
        onMouseDown={(e) => {
          e.preventDefault();
          toggle();
          onChangeShowSearch(true);
        }}
        onFocus={() => {
          // При фокусе через Tab/клавиатуру открываем select
          if (!isOpen) {
            open();
            onChangeShowSearch(true);
          }
        }}
      >
        {isShowSearch && (
          <SelectTextArea
            ref={refTextArea}
            genre={props.genre}
            size={props.size}
            minRows={1}
            maxRows={5}
            isAutoHeight
            onChange={(value) => {
              props?.onChangeSearch?.(value);
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            value={props.valueSearch}
            placeholder={labelPlaceholder}
          />
        )}
        {isHaveValue && (props.isShowSelectAllLabel ? !isAll : true) ? (
          <SelectList
            $size={props.size}
            tabIndex={-1}
            $isWrapSelectOption={props.isWrapSelectOption}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            {props.value.map((value, index) => {
              if (index >= maxViewSelect) return null;

              const isChecked = isSelectedItem(value);
              return (
                <ContainerSelectListOption
                  key={`${value.value}-${index}`}
                  isChecked={isChecked}
                  onClick={() => {
                    if (props.isClearWhenClickSelectListOption) {
                      onClick(value);
                    }
                    if (props.isToggleWhenClickSelectListOption) {
                      toggle();
                    }
                  }}
                  item={value}
                  genre={props.genre}
                  size={props.size}
                  isBold={props.isBold}
                  isOnlyColorInSelectListOption={props.isOnlyColorInSelectListOption}
                  isClearWhenClickSelectListOption={props.isClearWhenClickSelectListOption}
                  isWrapSelectOption={props.isWrapSelectOption}
                  isNotShowHoverStyle={props.isNotShowHoverStyle}
                  isCenter={props.isCenter}
                />
              );
            })}
          </SelectList>
        ) : null}
        {isHaveValue && (props.isShowSelectAllLabel ? isAll : false) ? (
          <Typography
            sxStandard={{
              default: { padding: `${sizePadding / 2.8}px 0px ${sizePadding / 2.8}px ${sizePadding / 2.8}px` },
            }}
            sx={{ default: { size: 16, line: 1, isNoUserSelect: true } }}
          >
            {labelSelectAll}
          </Typography>
        ) : null}
        {!isHaveValue && !props.isSearch ? (
          <Typography
            sxStandard={(theme) => ({
              default: {
                color: theme.colors.input[props.genre].color.placeholder,
                padding: `${sizePadding / 2.8}px 0px ${sizePadding / 2.8}px ${sizePadding / 2.8}px`,
              },
            })}
            sx={{ default: { size: 16, line: 1, isNoUserSelect: true } }}
          >
            {labelPlaceholder}
          </Typography>
        ) : null}

        {isValueMoreMaxViewSelect && isHaveValue && (props.isShowSelectAllLabel ? !isAll : true) ? (
          <Typography
            sxStandard={{
              default: { padding: `${sizePadding / 2.8}px 0px ${sizePadding / 2.8}px ${sizePadding / 2.8}px` },
            }}
            sx={{ default: { size: 16, line: 1, isNoUserSelect: true } }}
          >
            {labelAndMore(props.value.length - maxViewSelect)}
          </Typography>
        ) : null}
        {isShowButtonList ? (
          <ButtonList
            $size={props.size}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {isShowIconSearchClear && (
              <Button
                genre={props.genre}
                size='small'
                isWidthAsHeight
                isFullSize
                isRadius
                isOnlyIcon
                icons={[{ name: 'Close', type: 'id' }]}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onClearSearch();
                }}
              />
            )}
            {props.isShowIconToggle && (
              <Button
                genre={props.genre}
                size='small'
                isWidthAsHeight
                isFullSize
                isRadius
                isOnlyIcon
                icons={[{ name: 'Select', type: 'id' }]}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggle();
                }}
              />
            )}
            {props.isShowIconFetching && props.isFetching && (
              <Button
                tabIndex={-1}
                genre={props.genre}
                size='small'
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
        ) : null}
      </SelectWrapper>
      <Popover
        sx={(theme) => ({
          default: {
            background: theme.colors.input[props.genre].background.rest,
            borderRadius: `${sizeRadius}px`,
            padding: '0px',
            maxHeight: `${heightPopover}px`,
          },
        })}
        isShowAlwaysOutline
        size={props.size}
        genre={props.genre}
        floatingStyles={floatingStyles}
        ref={refFloating}
        isOpen={isOpen}
      >
        <DropdownListParent
          tabIndex={-1}
          ref={refDropdownList}
          $size={props.size}
          onScroll={(e) => onScroll(e.target as HTMLDivElement)}
        >
          {isShowDropdownSettingsList && (
            <DropdownList style={{ position: 'sticky', top: 0, zIndex: 1 }}>
              {isShowAddOption ? (
                <DropdownListOption
                  tabIndex={0}
                  onClick={() => props.valueSearch && onAddOption(props.valueSearch)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && props.valueSearch) onAddOption(props.valueSearch);
                  }}
                  $isCenter={props.isCenter}
                  $isNotShowHoverStyle={props.isNotShowHoverStyle}
                  $genre={props.genre}
                  $size={props.size}
                  $sxTypography={sxTypography}
                  $isBold={props.isBold}
                  $isChecked={isAll}
                  style={{ position: 'relative', minHeight: `${sizeHeight}px` }}
                >
                  {props.valueSearch && labelAddOption(props.valueSearch)}
                </DropdownListOption>
              ) : null}
              {props.isShowSelectAll && isHaveOption ? (
                <DropdownListOption
                  tabIndex={0}
                  onClick={() => onClickAll()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onClickAll();
                  }}
                  $isCenter={props.isCenter}
                  $isNotShowHoverStyle={props.isNotShowHoverStyle}
                  $genre={props.genre}
                  $size={props.size}
                  $sxTypography={sxTypography}
                  $isBold={props.isBold}
                  $isChecked={isAll}
                  $isShowScroll={isShowScroll}
                  style={{ position: 'relative', minHeight: `${sizeHeight}px` }}
                >
                  {labelSelectAll}
                  {props.isShowDropdownOptionIcon && (
                    <DropdownListOptionIcon
                      tabIndex={-1}
                      size={props.size}
                      type='checkbox'
                      name='Arrow'
                      $genre={props.genre}
                      $checked={isAll}
                      $size={props.size}
                    />
                  )}
                </DropdownListOption>
              ) : null}
              {!isHaveOption ? (
                <DropdownListOption
                  tabIndex={-1}
                  $isCenter={props.isCenter}
                  $isNotShowHoverStyle={props.isNotShowHoverStyle}
                  $genre={props.genre}
                  $size={props.size}
                  $sxTypography={sxTypography}
                  $isBold={props.isBold}
                  $isChecked={isAll}
                  $isShowScroll={isShowScroll}
                  style={{ position: 'relative', minHeight: `${sizeHeight}px` }}
                >
                  <Typography sx={{ default: { size: 16, line: 1 } }}>{labelEmptyOption}</Typography>
                </DropdownListOption>
              ) : null}
            </DropdownList>
          )}

          {isHaveOption ? (
            <DropdownList
              tabIndex={-1}
              style={{ height: `${listVirtualizer.getTotalSize()}px`, minHeight: `${heightDropdownList}px` }}
            >
              {listVirtualizer.getVirtualItems().map((virtualRow) => {
                const item = props.option[virtualRow.index];
                const isChecked = isSelectedItem(item);
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
                    sxTypography={sxTypography}
                    isBold={props.isBold}
                    isNotShowHoverStyle={props.isNotShowHoverStyle}
                    isCenter={props.isCenter}
                    isShowScroll={isShowScroll}
                    isShowDropdownOptionIcon={props.isShowDropdownOptionIcon}
                  />
                );
              })}
            </DropdownList>
          ) : null}
        </DropdownListParent>
      </Popover>
      {props?.error ? (
        <ErrorMessage
          size={props?.error.size ?? props.size}
          sxTypography={getSxTypography({
            size: props.size,
            weight: 400,
            sx: props.sxTypography,
          })}
          {...props.error}
        />
      ) : null}
    </>
  );
};

const ContainerDropdownListOptionComponent = <T extends object & ISelectItem>(
  props: ContainerDropdownListOptionProps<T>,
) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (props.item.isDisabled) return;
    if (event.key === 'Enter') {
      props.onClick();
    }
  };

  return (
    <DropdownListOption
      tabIndex={0}
      onClick={() => {
        !props.item.isDisabled && props.onClick();
      }}
      onKeyDown={handleKeyDown}
      style={{
        position: 'absolute',
        height: `${props.virtualRowSize}px`,
        transform: `translateY(${props.virtualRowStart}px)`,
      }}
      $isCenter={props.isCenter}
      $isNotShowHoverStyle={props.isNotShowHoverStyle}
      $item={props.item}
      $genre={props.genre}
      $size={props.size}
      $sxTypography={props.sxTypography}
      $isBold={props.isBold}
      $isChecked={props.isChecked}
      $isShowScroll={props.isShowScroll}
    >
      {props.item.label}
      {props.isShowDropdownOptionIcon && (
        <DropdownListOptionIcon
          tabIndex={-1}
          size={props.size}
          type='checkbox'
          name='Arrow'
          $genre={props.genre}
          $checked={props.isChecked}
          $size={props.size}
        />
      )}
    </DropdownListOption>
  );
};

const ContainerSelectListOptionComponent = <T extends object & ISelectItem>(
  props: ContainerSelectListOptionProps<T>,
) => {
  return (
    <SelectListOption
      tabIndex={-1}
      onClick={props.onClick}
      $isOnlyColorInSelectListOption={props.isOnlyColorInSelectListOption}
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
      <Typography sx={{ default: { size: 16, line: 1 } }}>{props.item.label}</Typography>
    </SelectListOption>
  );
};

export const ContainerDropdownListOption = memo(ContainerDropdownListOptionComponent);
export const ContainerSelectListOption = memo(ContainerSelectListOptionComponent);

export const SelectLanguage: FC<SelectLanguageProps> = (props) => {
  const { value, onChange } = props;

  const option = LIST_LANGUAGE;

  const [viewOption] = useState<ISelectLanguageOption[]>(option);

  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) {
      onChange(null);
    } else {
      onChange(value[0].value.toString());
    }
  };
  const valueLocal = useMemo(() => {
    const findOption = option.find((e) => e.value === value);
    if (!findOption) return [];
    return [findOption];
  }, [option, value]);

  return (
    <Select<ISelectLanguageOption> {...props} option={viewOption} value={valueLocal} onChange={handleSelectChange} />
  );
};
export const SelectMonth: FC<SelectMonthProps> = (props) => {
  const { value, onChange, dateMin, dateMax, monthsLocale, isShortLabel } = props;

  const year = moment(value).utc().year();

  const option = useMemo(() => {
    return monthsLocale.map((monthItem) => {
      const monthIndex = moment().month(monthItem.value).month();

      const monthMoment = moment.utc().year(year).month(monthIndex).startOf('month');
      const isDisabled =
        (dateMin && monthMoment.isBefore(moment.utc(dateMin), 'month')) ||
        (dateMax && monthMoment.isAfter(moment.utc(dateMax), 'month'));

      return {
        value: monthMoment.valueOf(),
        label: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        placeholder: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        search: `${monthItem.localeLong.toLowerCase()}, ${monthIndex + 1}`,
        isDisabled: !!isDisabled,
        monthValue: monthItem.value,
      };
    });
  }, [monthsLocale, year, dateMin, dateMax, isShortLabel]);

  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) onChange(null);
    onChange(+value[0].value);
  };
  const valueLocal = useMemo(() => {
    const findOption = option.find((e) => e.value === value);
    if (!findOption) return [];
    return [findOption];
  }, [value, option]);

  return <Select<ISelectLanguageOption> {...props} option={option} value={valueLocal} onChange={handleSelectChange} />;
};
export const SelectMonths: FC<SelectMonthsProps> = (props) => {
  const { value, onChange, dateMin, dateMax, monthsLocale, isShortLabel } = props;

  const year = moment(value).utc().year();

  const option = useMemo(() => {
    return monthsLocale.map((monthItem) => {
      const monthIndex = moment().month(monthItem.value).month();

      const monthMoment = moment.utc().year(year).month(monthIndex).startOf('month');
      const isDisabled =
        (dateMin && monthMoment.isBefore(moment.utc(dateMin), 'month')) ||
        (dateMax && monthMoment.isAfter(moment.utc(dateMax), 'month'));

      return {
        value: monthMoment.valueOf(),
        label: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        placeholder: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        search: `${monthItem.localeLong.toLowerCase()}, ${monthIndex + 1}`,
        isDisabled: !!isDisabled,
        monthValue: monthItem.value,
      };
    });
  }, [monthsLocale, year, dateMin, dateMax, isShortLabel]);
  const [viewOption, setViewOption] = useState<ISelectLanguageOption[]>(option);

  useEffect(() => {
    setViewOption(option);
  }, [option]);
  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) onChange([]);
    onChange(value.map((e) => +e.value));
  };
  const valueLocal = useMemo(() => {
    if (!value || value.length === 0) return [];
    return value.map((val) => option.find((opt) => opt.value === val)).filter(Boolean) as ISelectLanguageOption[];
  }, [value, option]);

  const [search, setSearch] = useState<string>('');
  const handleSearchChange = useCallback(
    (value: string) => {
      setSearch(value);

      if (value === '') {
        setViewOption(option);
      } else {
        const filteredOptions = option.filter((option) =>
          Object.values(option).some((field) => field?.toString().toLowerCase().includes(value.toLowerCase())),
        );
        setViewOption(filteredOptions);
      }
    },
    [option],
  );
  return (
    <Select<ISelectLanguageOption>
      {...props}
      valueSearch={search}
      onChangeSearch={handleSearchChange}
      optionAllLength={option.length}
      option={viewOption}
      minViewDropdown={1}
      isMulti
      value={valueLocal}
      onChange={handleSelectChange}
      onChangeAll={(_value, isAll) => {
        if (isAll) {
          onChange(viewOption.map((e) => +e.value));
        } else {
          onChange([]);
        }
      }}
    />
  );
};
export const SelectYear: FC<SelectYearProps> = (props) => {
  const { value, onChange, dateMin, dateMax, sortOrder = 'desc' } = props;

  const startYear = moment(dateMin).utc().year();
  const endYear = moment(dateMax).utc().year();

  const option = useMemo(() => {
    const yearArray = Array.from({ length: endYear - startYear + 1 }, (_, index) => {
      const year = startYear + index;
      return {
        value: moment().year(year).utc().startOf('year').valueOf(),
        label: moment().year(year).utc().format('YYYY'),
        placeholder: moment().year(year).utc().format('YYYY'),
        search: `${moment().year(year).utc().format('YYYY').toLowerCase()}`,
      };
    });

    return sortOrder === 'asc'
      ? yearArray.sort((a, b) => a.value - b.value)
      : yearArray.sort((a, b) => b.value - a.value);
  }, [endYear, startYear, sortOrder]);

  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) onChange(null);
    onChange(+value[0].value);
  };
  const valueLocal = useMemo(() => {
    const findOption = option.find((e) => e.value === value);
    if (!findOption) return [];
    return [findOption];
  }, [value, option]);

  return <Select<ISelectLanguageOption> {...props} option={option} value={valueLocal} onChange={handleSelectChange} />;
};
