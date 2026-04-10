/** biome-ignore-all lint/a11y/noNoninteractiveTabindex: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
import { Button } from '@local/components/button';
import { ErrorMessage } from '@local/components/error';
import { Icon } from '@local/components/icon';
import { Popover, usePopover } from '@local/components/popover';
import { TextArea } from '@local/components/textarea';
import { Typography } from '@local/components/typography';
import { useMergeRefs } from '@local/hooks/use-merge-refs';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { CSS_CLASS, CSS_VARS, CSS_VARS_RAW, EXTRA_VALUE } from '@local/styles/utils';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { useVirtualizer } from '@tanstack/react-virtual';
import { KeyboardEvent, memo, Ref, useCallback, useMemo, useRef } from 'react';

import { IContainerDropdownListOption, IContainerSelectListOption, ISelect, ISelectItem } from './component.types';

const DEFAULT_LABEL_SELECT_ALL = 'Select all option';
const DEFAULT_LABEL_PLACEHOLDER = 'Select an option';
const DEFAULT_LABEL_EMPTY_OPTION = 'No options available';
const DEFAULT_LABEL_AND_MORE = (count: number) => `+${count} more`;
const DEFAULT_LABEL_ADD_OPTION = (value: string) => `Add "${value}" option`;

const DEFAULT_MAX_VIEW_SELECT = 2;
const DEFAULT_MAX_VIEW_DROPDOWN = 5;
const DEFAULT_MIN_VIEW_DROPDOWN = 1;
const DEFAULT_OVERSCAN = 1;

export const Select = <T extends object & ISelectItem>(props: ISelect<T>) => {
  const sizeHeight = useMemo(() => CSS_VARS.sizeValue[props.size].height, [props.size]);
  const sizePadding = useMemo(() => CSS_VARS.sizeValue[props.size].padding, [props.size]);
  const sizeRadius = useMemo(() => CSS_VARS.sizeValue[props.size].radius, [props.size]);

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

  const optionsLength = useMemo(() => {
    if (props.isNotShowDisabledOptions) {
      return props.option.filter((option) => !option.isDisabled).length;
    } else {
      return props.option.length;
    }
  }, [props.option, props.isNotShowDisabledOptions]);

  const heightDropdownList = useMemo(() => {
    let result = 0;
    result =
      sizeHeight *
      (optionsLength < maxViewDropdown
        ? optionsLength < minViewDropdown
          ? optionsLength
          : optionsLength
        : maxViewDropdown);
    result =
      result +
      (optionsLength < maxViewDropdown
        ? optionsLength < minViewDropdown
          ? (optionsLength - 1) * (sizePadding / 2.8)
          : (optionsLength - 1) * (sizePadding / 2.8)
        : (maxViewDropdown - 1) * (sizePadding / 2.8));
    return result;
  }, [sizeHeight, optionsLength, maxViewDropdown, minViewDropdown, sizePadding]);

  const heightPopover = useMemo(() => {
    const selectAll = props.isShowSelectAll && isHaveOption ? sizeHeight : 0;
    const selectNoOption = !isHaveOption ? sizeHeight : 0;
    const selectList = isHaveOption ? heightDropdownList : 0;
    const selectAdd = isShowAddOption ? sizeHeight : 0;
    const selectSearch = props.isSearch ? sizeHeight : 0;
    const sum =
      (selectAll !== 0 ? 1 : 0) +
      (selectNoOption !== 0 ? 1 : 0) +
      (selectList !== 0 ? 1 : 0) +
      (selectAdd !== 0 ? 1 : 0) +
      (selectSearch !== 0 ? 1 : 0);
    const gap = sum <= 1 ? 0 : (sum - 1) * (sizePadding / 2.8);
    const padding = (sizePadding / 4) * 2
    const result = selectAll + selectNoOption + selectList + selectAdd + selectSearch + padding + gap;
    return result;
  }, [
    props.isShowSelectAll,
    sizeHeight,
    isHaveOption,
    sizePadding,
    heightDropdownList,
    isShowAddOption,
    props.isSearch,
  ]);

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
    gap: sizePadding / 2.8,
  });

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
      if (props.isOnClickOptionClose) {
        close();
      }
    },
    [close, props],
  );
  const onClickAll = useCallback(() => {
    props.onChangeAll?.(isAll ? [] : props.option, !isAll);
    if (props.isOnClickOptionClose) {
      close();
    }
  }, [close, isAll, props]);
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

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: {
      variant: EXTRA_VALUE.sizeToController[props.size],
      weight: props.isBold ? '700' : '400',
      height: '1',
      ...props?.sxTypography,
    },
  });

  const { className: classNameWrapper, style: styleWrapper } = useMemo(() => {
    const className = setClasses([
      CSS_CLASS.component.select.wrapper,
      CSS_CLASS.control[
        props.isDisabled ? 'none' : (props.control ?? (isOpen ? 'boxShadowSelect' : 'boxShadowOnlyHover'))
      ],
      CSS_CLASS.transition.color,
      isShowScroll && CSS_CLASS.component.select.isShowScroll,
      props.isCenter && CSS_CLASS.component.select.isCenter,
      props.isWrapSelectOption && CSS_CLASS.component.select.isWrapSelectOption,
      props.isClearWhenClickSelectListOption && CSS_CLASS.component.select.isClearWhenClickSelectListOption,
      props.isOnlyColorInSelectListOption && CSS_CLASS.component.select.isOnlyColorInSelectListOption,
      props.error?.isError && CSS_CLASS.isError,
      props.className,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.select.background] = CSS_VARS.genre.select[props.genre].background.index;
    vars[CSS_VARS_RAW.component.select.color] = CSS_VARS.genre.select[props.genre].color.index;
    vars[CSS_VARS_RAW.component.select.borderColor] = CSS_VARS.genre.select[props.genre].border.index;
    vars[CSS_VARS_RAW.component.select.borderColorSelect] = CSS_VARS.genre.select[props.genre].border.select;

    vars[CSS_VARS_RAW.component.select.backgroundChecked] = CSS_VARS.genre.select[props.genre].background.select;
    vars[CSS_VARS_RAW.component.select.borderColorChecked] = CSS_VARS.genre.select[props.genre].border.select;

    vars[CSS_VARS_RAW.component.select.height] = CSS_VARS.size[props.size].height;
    vars[CSS_VARS_RAW.component.select.padding] = CSS_VARS.size[props.size].padding;
    vars[CSS_VARS_RAW.component.select.borderRadius] = CSS_VARS.size[props.size].radius;

    vars[CSS_VARS_RAW.component.select.backgroundInput] = CSS_VARS.genre.input[props.genre].background;
    vars[CSS_VARS_RAW.component.select.colorInput] = CSS_VARS.genre.input[props.genre].color;
    vars[CSS_VARS_RAW.component.select.borderColorInput] = CSS_VARS.genre.input[props.genre].border;

    const style = setStyles([Object.keys(vars).length ? vars : undefined, props.style]);

    return { className, style };
  }, [
    props.className,
    props.style,
    props.genre,
    props.isDisabled,
    props.size,
    props.control,
    isOpen,
    props.error?.isError,
    isShowScroll,
    props.isCenter,
    props.isClearWhenClickSelectListOption,
    props.isOnlyColorInSelectListOption,
    props.isWrapSelectOption,
  ]);

  const { className: classNamePopover, style: stylePopover } = useMemo(() => {
    const className = setClasses([
      CSS_CLASS.transition.color,
      isShowScroll && CSS_CLASS.component.select.isShowScroll,
      props.isCenter && CSS_CLASS.component.select.isCenter,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.select.background] = CSS_VARS.genre.select[props.genre].background.index;
    vars[CSS_VARS_RAW.component.select.color] = CSS_VARS.genre.select[props.genre].color.index;
    vars[CSS_VARS_RAW.component.select.borderColor] = CSS_VARS.genre.select[props.genre].border.index;
    vars[CSS_VARS_RAW.component.select.borderColorSelect] = CSS_VARS.genre.select[props.genre].border.select;

    vars[CSS_VARS_RAW.component.select.backgroundChecked] = CSS_VARS.genre.select[props.genre].background.select;
    vars[CSS_VARS_RAW.component.select.borderColorChecked] = CSS_VARS.genre.select[props.genre].border.select;

    vars[CSS_VARS_RAW.component.select.height] = CSS_VARS.size[props.size].height;
    vars[CSS_VARS_RAW.component.select.padding] = CSS_VARS.size[props.size].padding;
    vars[CSS_VARS_RAW.component.select.borderRadius] = CSS_VARS.size[props.size].radius;

    vars[CSS_VARS_RAW.component.select.backgroundInput] = CSS_VARS.genre.input[props.genre].background;
    vars[CSS_VARS_RAW.component.select.backgroundOption] = CSS_VARS.genre.input[props.genre].backgroundOption;
    vars[CSS_VARS_RAW.component.select.colorInput] = CSS_VARS.genre.input[props.genre].color;
    vars[CSS_VARS_RAW.component.select.borderColorInput] = CSS_VARS.genre.input[props.genre].border;

    const style = setStyles([
      Object.keys(vars).length ? vars : undefined,
      {
        background: CSS_VARS.genre.popover[props.genre].background,
        borderRadius: `${sizeRadius}px`,
        padding: '0px',
        maxHeight: `${heightPopover}px`,
        boxSizing: 'content-box',
      },
    ]);

    return { className, style };
  }, [props.genre, props.size, isShowScroll, heightPopover, sizeRadius, props.isCenter]);
  return (
    <>
      <div
        tabIndex={0}
        className={classNameWrapper}
        style={styleWrapper}
        ref={refReference as Ref<HTMLDivElement | null>}
        onMouseDown={(e) => {
          e.preventDefault();
          toggle();
        }}
        onFocus={() => {
          // При фокусе через Tab/клавиатуру открываем select
          if (!isOpen) {
            open();
          }
        }}
      >
        {isHaveValue && (props.isShowSelectAllLabel ? !isAll : true) ? (
          <ul
            className={CSS_CLASS.component.select.list}
            tabIndex={-1}
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
                <SelectListOption
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
                  isOnlyColorInSelectListOption={props.isOnlyColorInSelectListOption}
                  isClearWhenClickSelectListOption={props.isClearWhenClickSelectListOption}
                  isWrapSelectOption={props.isWrapSelectOption}
                  isCenter={props.isCenter}
                  className={classNameTypography}
                  style={styleTypography}
                />
              );
            })}
          </ul>
        ) : null}
        {isHaveValue && (props.isShowSelectAllLabel ? isAll : false) ? (
          <Typography
            style={{
              padding: `${sizePadding / 2.8}px 0px ${sizePadding / 2.8}px ${sizePadding / 2.8}px`,
            }}
            sx={{ size: 16, line: 1, isNoUserSelect: true }}
          >
            {labelSelectAll}
          </Typography>
        ) : null}
        {!isHaveValue ? (
          <Typography
            style={{
              color: CSS_VARS.genre.select[props.genre].placeholder.index,
              padding: `${sizePadding / 2.8}px 0px ${sizePadding / 2.8}px ${sizePadding / 2.8}px`,
            }}
            sx={{ size: 16, line: 1, isNoUserSelect: true }}
          >
            {labelPlaceholder}
          </Typography>
        ) : null}
        {isValueMoreMaxViewSelect && isHaveValue && (props.isShowSelectAllLabel ? !isAll : true) ? (
          <Typography
            style={{
              padding: `${sizePadding / 2.8}px 0px ${sizePadding / 2.8}px ${sizePadding / 2.8}px`,
            }}
            sx={{ size: 16, line: 1, isNoUserSelect: true }}
          >
            {labelAndMore(props.value.length - maxViewSelect)}
          </Typography>
        ) : null}
        {isShowButtonList ? (
          <div
            className={CSS_CLASS.component.select.listButton}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            {props.isShowIconToggle && (
              <Button
                genre={props.genre}
                isOnlyIcon
                size='small'
                isWidthAsHeight
                isFullSize
                isFullRadius
                isHiddenBorder
                icons={[{ name: 'Select', type: 'id', size: 'large' }]}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
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
                isFullRadius
                isHiddenBorder
                control='none'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Icon type={'loading'} name={'Line'} size={props.size} />
              </Button>
            )}
          </div>
        ) : null}
      </div>
      <Popover
        style={stylePopover}
        className={classNamePopover}
        size={props.size}
        genre={props.genre}
        floatingStyles={floatingStyles}
        ref={refFloating}
        isOpen={isOpen}
        control='boxShadowSelect'
        isDisabledBoxShadow
      >
        <div
          tabIndex={-1}
          ref={refDropdownList}
          className={CSS_CLASS.component.select.dropdownListWrapper}
          onScroll={(e) => onScroll(e.target as HTMLDivElement)}
        >
          {isShowDropdownSettingsList && (
            <ul style={{ position: 'sticky', top: 0, zIndex: 1 }} className={CSS_CLASS.component.select.dropdownList}>
              {props.isSearch && (
                <li
                  className={setClasses([
                    CSS_CLASS.component.select.dropdownListOption,
                    CSS_CLASS.component.select.dropdownListOptionIsBorder,
                    classNameTypography,
                  ])}
                  tabIndex={0}
                  onClick={() => {
                    refTextArea.current?.focus();
                  }}
                  style={setStyles([{ position: 'relative', minHeight: `${sizeHeight}px` }, styleTypography])}
                >
                  <TextArea
                    className={CSS_CLASS.component.select.textarea}
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
                    control='none'
                  />
                  {isShowIconSearchClear && (
                    <Button
                      genre={props.genre}
                      size='small'
                      isWidthAsHeight
                      isFullSize
                      isFullRadius
                      isHiddenBorder
                      isOnlyIcon
                      icons={[{ name: 'Close', type: 'id', size: 'large' }]}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onClearSearch();
                      }}
                    />
                  )}
                </li>
              )}
              {isShowAddOption ? (
                <li
                  className={setClasses([
                    CSS_CLASS.component.select.dropdownListOption,
                    CSS_CLASS.component.select.dropdownListOptionIsBorder,
                    classNameTypography,
                  ])}
                  tabIndex={0}
                  onClick={() => props.valueSearch && onAddOption(props.valueSearch)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && props.valueSearch) onAddOption(props.valueSearch);
                  }}
                  style={setStyles([{ position: 'relative', minHeight: `${sizeHeight}px` }, styleTypography])}
                >
                  {props.valueSearch && labelAddOption(props.valueSearch)}
                </li>
              ) : null}
              {props.isShowSelectAll && isHaveOption ? (
                <li
                  className={setClasses([
                    CSS_CLASS.component.select.dropdownListOption,
                    isAll && CSS_CLASS.component.select.dropdownListOptionIsChecked,
                    classNameTypography,
                  ])}
                  tabIndex={0}
                  onClick={() => onClickAll()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onClickAll();
                  }}
                  style={setStyles([{ position: 'relative', minHeight: `${sizeHeight}px` }, styleTypography])}
                >
                  {labelSelectAll}
                  {props.isShowDropdownOptionIcon && (
                    <Icon
                      className={CSS_CLASS.component.select.dropdownListOptionIcon}
                      tabIndex={-1}
                      size={props.size}
                      type='checkbox'
                      name='Arrow'
                    />
                  )}
                </li>
              ) : null}
              {!isHaveOption ? (
                <li
                  tabIndex={-1}
                  className={setClasses([CSS_CLASS.component.select.dropdownListOption, classNameTypography])}
                  style={setStyles([{ position: 'relative', minHeight: `${sizeHeight}px` }, styleTypography])}
                >
                  <Typography sx={{ size: 16, line: 1 }}>{labelEmptyOption}</Typography>
                </li>
              ) : null}
            </ul>
          )}

          {isHaveOption ? (
            <ul
              tabIndex={-1}
              style={{ height: `${listVirtualizer.getTotalSize()}px`, minHeight: `${heightDropdownList}px` }}
              className={CSS_CLASS.component.select.dropdownList}
            >
              {listVirtualizer.getVirtualItems().map((virtualRow) => {
                const item = props.option[virtualRow.index];
                const isChecked = isSelectedItem(item);
                return (
                  <DropdownListOption
                    key={virtualRow.index}
                    virtualRowSize={virtualRow.size}
                    virtualRowStart={virtualRow.start}
                    isChecked={isChecked}
                    onClick={() => onClick(item)}
                    item={item}
                    genre={props.genre}
                    size={props.size}
                    className={classNameTypography}
                    style={styleTypography}
                    isCenter={props.isCenter}
                    isShowScroll={isShowScroll}
                    isShowDropdownOptionIcon={props.isShowDropdownOptionIcon}
                  />
                );
              })}
            </ul>
          ) : null}
        </div>
      </Popover>
      {props?.error?.isError && (
        <ErrorMessage
          size={props?.error.size ?? props.size}
          sxTypography={{ size: 16, weight: '400', ...props?.error.sxTypography }}
          {...props.error}
        />
      )}
    </>
  );
};

const ContainerDropdownListOption = <T extends object & ISelectItem>(props: IContainerDropdownListOption<T>) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (props.item.isDisabled) return;
    if (event.key === 'Enter') {
      props.onClick();
    }
  };

  return (
    <li
      className={setClasses([
        CSS_CLASS.component.select.dropdownListOption,
        props.isChecked && CSS_CLASS.component.select.dropdownListOptionIsChecked,
        props.item.isDisabled && CSS_CLASS.component.select.dropdownListOptionIsDisabled,
        props.className,
      ])}
      tabIndex={0}
      onClick={() => {
        !props.item.isDisabled && props.onClick();
      }}
      onKeyDown={handleKeyDown}
      style={setStyles([
        {
          position: 'absolute',
          height: `${props.virtualRowSize}px`,
          transform: `translateY(${props.virtualRowStart}px)`,
        },
        props.style,
      ])}
    >
      {props.item.label}
      {props.isShowDropdownOptionIcon && (
        <Icon
          className={CSS_CLASS.component.select.dropdownListOptionIcon}
          color='inherit'
          tabIndex={-1}
          type='checkbox'
          name='Arrow'
          size={props.size}
        />
      )}
    </li>
  );
};

const ContainerSelectListOption = <T extends object & ISelectItem>(props: IContainerSelectListOption<T>) => {
  return (
    <li
      className={setClasses([
        CSS_CLASS.component.select.listOption,
        props.isChecked && CSS_CLASS.component.select.listOptionIsChecked,
        props.className,
      ])}
      style={props.style}
      tabIndex={-1}
      onClick={props.onClick}
    >
      <Typography sx={{ size: 16, height: 1 }}>{props.item.label}</Typography>
    </li>
  );
};

export const DropdownListOption = memo(ContainerDropdownListOption);
export const SelectListOption = memo(ContainerSelectListOption);
