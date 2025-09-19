import { Button } from '@local/components/button';
import { Ripple } from '@local/components/ripple';
import { SelectMonth, SelectYear } from '@local/components/select';
import { Stack } from '@local/components/stack';
import { ErrorMessage } from '@local/styles/error';
import { KEY_SIZE_DATA } from '@local/theme';

import moment, { Moment } from 'moment';
import { Fragment, KeyboardEvent, RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import { Popover, usePopover } from '../popover';
import { Typography } from '../typography';
import {
  DateDayProps,
  DateDropdownDay,
  DateDropdownDayOfWeek,
  DateDropdownDays,
  DateDropdownList,
  DateInput,
  DateInputButton,
  DateInputWrapper,
  DatePickerMode,
  DatePickerProps,
  DatePickerVariant,
  DateWrapper,
  WeekItem,
} from '.';

function countSevens(number: number) {
  const divisor = 7;
  const count = Math.floor(number / divisor);
  const remainder = number % divisor;

  return remainder > 0 ? count + 1 : count;
}

export const DatePicker = (props: DatePickerProps) => {
  const { onChange } = props;
  const theme = useTheme();

  const [valueMoment, setValueMoment] = useState<null | Moment>(null);
  const [dateDefaultMoment, setDateDefaultMoment] = useState<Moment>(moment(props.dateDefault).utc());

  // Изменяем тип с number | null на string
  const [input, setInput] = useState<Record<DatePickerVariant, string>>({
    [DatePickerVariant.DD]: '',
    [DatePickerVariant.MM]: '',
    [DatePickerVariant.YYYY]: '',
  });
  const refInputValue = useRef(input);
  useEffect(() => {
    refInputValue.current = input;
  }, [input]);
  // Обновляем проверку на наличие input
  const isHasInput = useMemo(() => {
    return (
      input[DatePickerVariant.DD] !== '' || input[DatePickerVariant.MM] !== '' || input[DatePickerVariant.YYYY] !== ''
    );
  }, [input]);

  const onClearInput = useCallback(() => {
    setInput({
      [DatePickerVariant.DD]: '',
      [DatePickerVariant.MM]: '',
      [DatePickerVariant.YYYY]: '',
    });
  }, []);

  const [activeSegment, setActiveSegment] = useState<DatePickerVariant | null>(null);
  const [isError, setIsError] = useState(false);

  const mode: DatePickerMode = useMemo(() => {
    if (!props.mode || props.mode.length === 0) {
      return [DatePickerVariant.DD, DatePickerVariant.MM, DatePickerVariant.YYYY]; // дефолт
    }

    const hasDuplicates = new Set(props.mode).size !== props.mode.length;

    if (hasDuplicates) {
      return [DatePickerVariant.DD, DatePickerVariant.MM, DatePickerVariant.YYYY]; // дефолт при дублировании
    }

    return props.mode;
  }, [props.mode]);

  const getNextSegment = useCallback(
    (currentSegment: DatePickerVariant): DatePickerVariant | null => {
      const currentIndex = mode.indexOf(currentSegment);
      return currentIndex < mode.length - 1 ? mode[currentIndex + 1] : mode[0];
    },
    [mode],
  );

  const getPrevSegment = useCallback(
    (currentSegment: DatePickerVariant): DatePickerVariant | null => {
      const currentIndex = mode.indexOf(currentSegment);
      return currentIndex > 0 ? mode[currentIndex - 1] : mode[mode.length - 1];
    },
    [mode],
  );

  // Обновляем функцию валидации для работы со строками
  const getValidateInput = useCallback(
    (
      input: Record<DatePickerVariant, string>,
      onSuccess?: (value: number) => void,
      onFailure?: () => void,
      onNan?: (isHasInput: boolean) => void,
    ) => {
      const dayStr = input.DD;
      const monthStr = input.MM;
      const yearStr = input.YYYY;

      const day = dayStr === '' ? NaN : Number(dayStr);
      const month = monthStr === '' ? NaN : Number(monthStr);
      const year = yearStr === '' ? NaN : Number(yearStr);

      const isHasInput = dayStr !== '' || monthStr !== '' || yearStr !== '';

      if (!Number.isNaN(day) && !Number.isNaN(month) && !Number.isNaN(year)) {
        const m = moment.utc(`${day}.${month}.${year}`, 'D.M.YYYY', true).startOf('day');
        if (m.isValid()) {
          onSuccess?.(m.valueOf());
        } else {
          onFailure?.();
        }
      } else {
        onNan?.(isHasInput);
      }
    },
    [],
  );

  const dataDate = useMemo(() => {
    const segments = [DatePickerVariant.DD, DatePickerVariant.MM, DatePickerVariant.YYYY];

    const result = Object.fromEntries(
      segments.map((segment) => [
        segment,
        {
          type: segment,
          value: input[segment],
          placeholder:
            props.locale.inputs[
              segment === DatePickerVariant.DD ? 'day' : segment === DatePickerVariant.MM ? 'month' : 'year'
            ],
          isFirst: mode[0] === segment,
          isLast: mode[mode.length - 1] === segment,
          segmentNext: getNextSegment(segment),
          segmentPrev: getPrevSegment(segment),
          onNextSegment: () => setActiveSegment(getNextSegment(segment)),
          onPrevSegment: () => setActiveSegment(getPrevSegment(segment)),
          setValue: (value: string) => setInput((prev) => ({ ...prev, [segment]: value })),
          setActive: () => setActiveSegment(segment),
        },
      ]),
    ) as Record<
      DatePickerVariant,
      {
        type: DatePickerVariant;
        value: string;
        placeholder: string;
        isFirst: boolean;
        isLast: boolean;
        segmentNext: DatePickerVariant | null;
        segmentPrev: DatePickerVariant | null;
        onNextSegment: () => void;
        onPrevSegment: () => void;
        setValue: (value: string) => void;
        setActive: () => void;
      }
    >;

    const resultSort = mode.map((segment) => result[segment]).filter(Boolean);

    return { sort: resultSort, default: result };
  }, [props, getNextSegment, getPrevSegment, mode, input]);

  const daysInWeek = useMemo(() => {
    const weekOrder: WeekItem['value'][] = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

    return weekOrder.map((key, index) => {
      const found = props.locale.weeks.find((w) => w.value === key);
      return {
        index,
        label: found?.localeShort ?? key.toUpperCase(),
      };
    });
  }, [props.locale.weeks]);

  const daysInMonth: DateDayProps[] = useMemo(() => {
    const today = moment.utc();
    const baseMoment = valueMoment ?? dateDefaultMoment;
    const startOfMonth = baseMoment.clone().startOf('month');
    const endOfMonth = baseMoment.clone().endOf('month');

    const dateMin = props.dateMin ? moment.utc(props.dateMin) : null;
    const dateMax = props.dateMax ? moment.utc(props.dateMax) : null;

    // Определяем диапазон дат (с учетом дней до и после месяца)
    const firstVisibleDay = startOfMonth.clone().subtract(startOfMonth.isoWeekday() - 1, 'days');
    const lastVisibleDay = endOfMonth.clone().add(7 - endOfMonth.isoWeekday(), 'days');

    const days: DateDayProps[] = [];
    const currentDate = firstVisibleDay.clone();

    while (currentDate <= lastVisibleDay) {
      const isCurrentMonth = currentDate.isBetween(startOfMonth, endOfMonth, 'day', '[]');
      days.push({
        value: currentDate.valueOf(),
        labelString: currentDate.format('dd'),
        labelNumber: currentDate.date(),
        dayOfWeek: currentDate.isoWeekday(),
        isWeekend: [6, 7].includes(currentDate.isoWeekday()),
        weekOfMonth: Math.ceil((days.length + 1) / 7),
        isToday: currentDate.isSame(today, 'day'),
        isCurrentMonth,
        isDisabled: !!(
          (dateMin && currentDate.isBefore(dateMin, 'day')) ||
          (dateMax && currentDate.isAfter(dateMax, 'day'))
        ),
      });

      currentDate.add(1, 'day');
    }

    return days;
  }, [valueMoment, dateDefaultMoment, props.dateMax, props.dateMin]);

  const rows = useMemo(() => countSevens(daysInMonth.length) + 1, [daysInMonth]);

  const height = useMemo(
    () => 40 + rows * 28 + (rows - 1) * 6 + KEY_SIZE_DATA[props.size].padding * 2,
    [props.size, rows],
  );

  const sizeRadius = useMemo(() => KEY_SIZE_DATA[props.size].radius, [props.size]);
  const sizePadding = useMemo(() => KEY_SIZE_DATA[props.size].padding, [props.size]);

  const isHasValue = useMemo(() => {
    return valueMoment !== null;
  }, [valueMoment]);
  const isBlockNextMonth = useMemo(() => {
    const nextMonth = (valueMoment ?? dateDefaultMoment).clone().add(1, 'month').startOf('month');
    const isBeforeEndDate = props.dateMax ? nextMonth.isAfter(moment.utc(props.dateMax), 'month') : false;
    return isBeforeEndDate;
  }, [valueMoment, props.dateMax, dateDefaultMoment]);
  const isBlockPrevMonth = useMemo(() => {
    const prevMonth = (valueMoment ?? dateDefaultMoment).clone().subtract(1, 'month').startOf('month');
    const isAfterStartDate = props.dateMin ? prevMonth.isBefore(moment.utc(props.dateMin), 'month') : false;
    return isAfterStartDate;
  }, [valueMoment, props.dateMin, dateDefaultMoment]);

  const [isInputFocused, setIsInputFocused] = useState(false);

  const refPrevValue = useRef('');
  const refSelectMonth = useRef<HTMLElement>(null);
  const refSelectYear = useRef<HTMLElement>(null);
  const refHiddenInput = useRef<HTMLInputElement>(null);

  const onFocusPopover = useCallback(() => {
    props.onFocus?.();
  }, [props.onFocus]);
  const onBlurPopover = useCallback(() => {
    props.onBlur?.();
  }, [props.onBlur]);
  const onBlurReference = useCallback(() => {
    setActiveSegment(null);
  }, []);
  const { isOpen, refReference, refFloating, floatingStyles, close, toggle } = usePopover({
    placement: 'bottom-start',
    offset: sizePadding,
    mode: 'independence',
    isClickOutside: true,
    refsExcludeClickOutside: [refSelectMonth, refSelectYear],
    isDisabled: props?.isDisabled || props?.isReadOnly,
    onFocus: onFocusPopover,
    onBlur: onBlurPopover,
    onBlurReference: onBlurReference,
  });

  const isShowPlaceholder = useMemo(() => {
    return !!(!isInputFocused && !isHasValue && props.labelPlaceholder && !isOpen && !isHasInput && !activeSegment);
  }, [isInputFocused, isHasValue, isOpen, props.labelPlaceholder, isHasInput, activeSegment]);

  const onChangeDate = useCallback(
    (timestamp: number, isAddLeadingZeros: boolean, isForceInput?: boolean) => {
      const momentNewDate = moment(timestamp).utc();
      if (!valueMoment?.isSame(momentNewDate, 'day')) {
        setValueMoment(momentNewDate);
        onChange(momentNewDate.valueOf());
      }

      if (!valueMoment?.isSame(momentNewDate, 'day') || isForceInput) {
        setInput({
          [DatePickerVariant.DD]: isAddLeadingZeros
            ? momentNewDate.clone().date().toString().padStart(2, '0')
            : momentNewDate.clone().date().toString(),
          [DatePickerVariant.MM]: isAddLeadingZeros
            ? (momentNewDate.clone().month() + 1).toString().padStart(2, '0')
            : (momentNewDate.clone().month() + 1).toString(),
          [DatePickerVariant.YYYY]: momentNewDate.clone().year().toString(),
        });
      }
    },
    [valueMoment, onChange],
  );

  // const onNextSegment = useCallback(
  //   (
  //     newInput: Record<DatePickerVariant, string>,
  //   ) => {
  //     if(newInput){
  //        getValidateInput(
  //       newInput,
  //       (value) => {
  //         onChangeDate(value, true);
  //         setIsError(false);
  //       },
  //       () => {
  //         setIsError(true);
  //       },
  //       () => {
  //         setIsError(true);
  //       },
  //     );
  //     }else{

  //     }

  //   },
  //   [getValidateInput, onChangeDate],
  // );
  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;

      const allowedKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace', 'Delete', 'Tab', 'Enter'];

      const isDigit = /^\d$/.test(key);
      const isAllowed = isDigit || allowedKeys.includes(key) || e.ctrlKey || e.metaKey;

      if (!isAllowed) {
        e.preventDefault();
        return;
      }

      if (activeSegment && dataDate.default[activeSegment]) {
        if (isDigit) {
          const digit = key;

          handleDigitKey(digit, activeSegment, input, dataDate);
          e.preventDefault();
          e.stopPropagation();
        }
        if (key === 'Tab') {
          if (!dataDate.default[activeSegment].isLast) {
            e.preventDefault();
            dataDate.default[activeSegment].onNextSegment();
          } else {
            refHiddenInput?.current?.blur();
          }
        }
        if (key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
        }
        if (key === 'Backspace' || key === 'Delete') {
          if (activeSegment === DatePickerVariant.DD) {
            if (input.DD !== '') {
              const current = input.DD;
              if (current.length === 1) {
                dataDate.default[activeSegment].setValue('');
              } else {
                const newValue = current.slice(0, -1);
                dataDate.default[activeSegment].setValue(newValue);
              }
            } else {
              dataDate.default[activeSegment].onPrevSegment();
            }
          } else if (activeSegment === DatePickerVariant.MM) {
            if (input.MM !== '') {
              const current = input.MM;
              if (current.length === 1) {
                dataDate.default[activeSegment].setValue('');
              } else {
                const newValue = current.slice(0, -1);
                dataDate.default[activeSegment].setValue(newValue);
              }
            } else {
              dataDate.default[activeSegment].onPrevSegment();
            }
          } else if (activeSegment === DatePickerVariant.YYYY) {
            if (input.YYYY !== '') {
              const current = input.YYYY;
              if (current.length === 1) {
                dataDate.default[activeSegment].setValue('');
              } else {
                const newValue = current.slice(0, -1);
                dataDate.default[activeSegment].setValue(newValue);
              }
            } else {
              dataDate.default[activeSegment].onPrevSegment();
            }
          }

          e.preventDefault();
          e.stopPropagation();
        }
        if (key === 'ArrowLeft' || key === 'ArrowDown') {
          e.preventDefault();
          dataDate.default[activeSegment].onPrevSegment();
        }
        if (key === 'ArrowRight' || key === 'ArrowUp') {
          e.preventDefault();
          dataDate.default[activeSegment].onNextSegment();
        }
      }
    },
    [activeSegment, input, dataDate.default, dataDate],
  );
  const onNextMonth = useCallback(() => {
    const newDate = (valueMoment ?? dateDefaultMoment).clone().add(1, 'month');
    onChangeDate(newDate.valueOf(), true);
  }, [valueMoment, onChangeDate, dateDefaultMoment]);

  const onPrevMonth = useCallback(() => {
    const newDate = (valueMoment ?? dateDefaultMoment).clone().subtract(1, 'month');
    onChangeDate(newDate.valueOf(), true);
  }, [valueMoment, onChangeDate, dateDefaultMoment]);

  useEffect(() => {
    setDateDefaultMoment(moment(props.dateDefault).utc());
  }, [props.dateDefault]);

  useEffect(() => {
    setValueMoment(props.value || props.defaultValue ? moment(props.value ?? props.defaultValue).utc() : null);
    if (props.value) {
      // При инициализации также форматируем в строки с ведущими нулями
      const m = moment(props.value).utc();
      setInput({
        [DatePickerVariant.DD]: m.date().toString().padStart(2, '0'),
        [DatePickerVariant.MM]: (m.month() + 1).toString().padStart(2, '0'),
        [DatePickerVariant.YYYY]: m.year().toString(),
      });
    }
  }, [props.value, props.defaultValue]);

  useEffect(() => {
    if (!activeSegment)
      getValidateInput(
        input,
        (value) => {
          onChangeDate(value, true);
          setIsError(false);
        },
        () => {
          onChange(null);
          setIsError(true);
        },
        (isHasInput) => {
          if (!isHasInput) {
            setIsError(false);
          }
        },
      );
  }, [getValidateInput, onChangeDate, onChange, input, activeSegment]);

  useEffect(() => {
    if (!isOpen && !isInputFocused && isHasInput && !activeSegment)
      getValidateInput(
        input,
        () => {},
        () => {
          onChange(null);
          onClearInput();
          setIsError(false);
        },
        () => {
          onChange(null);
          onClearInput();
          setIsError(false);
        },
      );
  }, [getValidateInput, onClearInput, input, isOpen, isInputFocused, onChange, isHasInput, activeSegment]);

  useEffect(() => {
    if (!activeSegment) return;
    getValidateInput(
      refInputValue.current,
      (value) => {
        onChangeDate(value, true, true);
        setIsError(false);
      },
      () => {
        setIsError(true);
      },
      (isHasInput) => {
        if (!isHasInput) {
          setIsError(false);
        }
      },
    );
  }, [onChangeDate, getValidateInput, activeSegment]);

  useEffect(() => {
    if (activeSegment) {
      refHiddenInput?.current?.focus();
    }
  }, [activeSegment]);
  return (
    <>
      <DateWrapper
        $size={props.size}
        $genre={props.genre}
        $sx={props.sx}
        $isDisabled={props?.isDisabled}
        $isMinWidth={props?.isMinWidth}
        $radius={sizeRadius}
        $parentListHeight={height}
        tabIndex={-1}
      >
        <DateInputWrapper
          ref={refReference as RefObject<HTMLDivElement | null>}
          $genre={props.genre}
          $size={props.size}
          $isShowPlaceholder={isShowPlaceholder}
          $isDisabled={props?.isDisabled}
          $isReadOnly={props?.isReadOnly}
          $isDisabledOutline={props?.isDisabledOutline}
          $isOutlineBoxShadow={props?.isOutlineBoxShadow}
          tabIndex={-1}
          $error={
            isError
              ? {
                  isError: true,
                  size: props?.error?.size ?? props.size,
                  ...props.notValidDate,
                }
              : props.error
          }
          $isOpen={isOpen || !!activeSegment}
          onClick={() => {
            if (!activeSegment && !props?.isReadOnly) setActiveSegment(DatePickerVariant.DD);
          }}
        >
          <input
            name={props.name}
            id={props.id}
            ref={refHiddenInput}
            type='tel'
            inputMode='numeric'
            tabIndex={0}
            disabled={props?.isDisabled || props?.isReadOnly}
            style={{
              position: 'absolute',
              left: '-100dvw',
              top: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              border: 'none',
              background: 'transparent',
            }}
            onKeyDown={onKeyDown}
            onChange={(e) => {
              const value = e.target.value;
              const prevValue = refPrevValue.current;

              const newChar = value.length > prevValue.length ? value.slice(-1) : null;

              refPrevValue.current = value;

              if (newChar && /^\d$/.test(newChar)) {
                onKeyDown({
                  key: newChar,
                  preventDefault: () => {},
                  stopPropagation: () => {},
                } as unknown as KeyboardEvent<HTMLInputElement>);
              }

              if (value.length < prevValue.length) {
                onKeyDown({
                  key: 'Backspace',
                  preventDefault: () => {},
                  stopPropagation: () => {},
                } as unknown as KeyboardEvent<HTMLInputElement>);
              }
            }}
            onFocus={() => {
              setIsInputFocused(true);
              if (!activeSegment) setActiveSegment(DatePickerVariant.DD);
            }}
            onBlur={() => {
              setIsInputFocused(false);

              if (!isOpen) {
                props.onBlur?.();
              }
            }}
          />
          {isShowPlaceholder ? (
            <Typography
              sx={{ default: { size: 16, line: 1, isNoUserSelect: true } }}
              sxStandard={(theme) => ({
                default: {
                  color: theme.colors.input[props.genre].color.placeholder,
                },
              })}
            >
              {props.labelPlaceholder}
            </Typography>
          ) : (
            dataDate.sort.map((date, index) => (
              <Fragment key={date.type}>
                <DateInput
                  $isHaveValue={!!date.value}
                  $isActive={activeSegment === date.type}
                  $genre={props.genre}
                  $size={props.size}
                  $font={{
                    ...props.font,
                    size: props.font?.size ?? 16,
                    weight: props.font?.weight ?? (props.isBold ? 500 : 400),
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (props?.isDisabled || props?.isReadOnly) return;
                    date.setActive();
                  }}
                >
                  {date.value || date.placeholder || ''}
                </DateInput>
                {index !== dataDate.sort.length - 1 && (
                  <span style={{ width: '4px', pointerEvents: 'none', textAlign: 'center' }}>.</span>
                )}
              </Fragment>
            ))
          )}
          <DateInputButton
            genre={props.genre}
            size='small'
            isWidthAsHeight
            isFullSize
            isRadius
            isWhileTapEffect
            isOnlyIcon
            isDisabledRipple
            icons={[{ name: 'Calendar', type: 'id' }]}
            isDisabled={props?.isDisabled || props?.isReadOnly}
            onFocus={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveSegment(null);
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggle();
            }}
          />
        </DateInputWrapper>
      </DateWrapper>
      <Popover
        sx={(theme) => ({
          default: {
            background: theme.colors.input[props.genre].background.rest,
            border: `solid 1px ${theme.colors.input[props.genre].border.rest}`,
          },
        })}
        size={props.size}
        genre={props.genre}
        isOpen={isOpen}
        isShowAlwaysOutline
        floatingStyles={floatingStyles}
        ref={refFloating}
      >
        <DateDropdownList $isInputEffect={props.isInputEffect} $genre={props.genre} $size={props.size}>
          <Stack
            sx={{
              default: {
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            }}
          >
            <Button
              type='button'
              isRadius
              isWhileTapEffect
              icons={[
                {
                  name: 'Arrow2',
                  type: 'id',
                  turn: 90,
                },
              ]}
              isWidthAsHeight
              genre={props.genre}
              size={'small'}
              onClick={() => !isBlockPrevMonth && onPrevMonth()}
              isDisabledRipple
              isHidden={isBlockPrevMonth}
              isDisabled={isBlockPrevMonth}
            />
            <Stack sx={{ default: { gap: '8px' } }}>
              <SelectMonth
                monthsLocale={props.locale.months}
                genre={props.genre}
                size={'small'}
                value={(valueMoment ?? dateDefaultMoment).clone().startOf('month').utc().valueOf()}
                isOnClickOptionClose
                isStayValueAfterSelect
                isOnlyColorInSelectListOption
                isCenter
                isShortLabel
                refFloating={refSelectMonth}
                onChange={(timestamp: number | null) => {
                  if (timestamp) onChangeDate(timestamp, true);
                }}
                dateMin={props.dateMin}
                dateMax={props.dateMax}
                sx={{ default: { width: '60px' } }}
              />
              <SelectYear
                genre={props.genre}
                size={'small'}
                refFloating={refSelectYear}
                value={(valueMoment ?? dateDefaultMoment).clone().startOf('year').utc().valueOf()}
                onChange={(timestamp: number | null) => {
                  if (timestamp) onChangeDate(timestamp, true);
                }}
                isOnClickOptionClose
                isStayValueAfterSelect
                isOnlyColorInSelectListOption
                isCenter
                dateMin={props.dateMin}
                dateMax={props.dateMax}
                sx={{ default: { width: '60px' } }}
              />
            </Stack>
            <Button
              type='button'
              isWhileTapEffect
              onClick={() => !isBlockNextMonth && onNextMonth()}
              isWidthAsHeight
              isRadius
              icons={[
                {
                  name: 'Arrow2',
                  type: 'id',
                  turn: -90,
                },
              ]}
              genre={props.genre}
              size={'small'}
              isDisabledRipple
              isDisabled={isBlockNextMonth}
              isHidden={isBlockNextMonth}
            />
          </Stack>
          <DateDropdownDays $rows={rows}>
            {daysInWeek.map((e, index) => (
              <DateDropdownDayOfWeek
                $font={{
                  ...props.font,
                  size: 12,
                  weight: 700,
                }}
                tabIndex={-1}
                type='button'
                $isToday={false}
                $isWeekend={false}
                $genre={props.genre}
                $size={props.size}
                $row={daysInMonth[0]?.weekOfMonth - 1}
                $column={index + 1}
                key={`${e.label}-${index}`}
              >
                {e.label}
              </DateDropdownDayOfWeek>
            ))}
            {daysInMonth.map((day) => (
              <DateDropdownDay
                $font={{
                  ...props.font,
                  size: 12,
                  weight: 700,
                }}
                type='button'
                $isDisabled={day.isDisabled}
                $isDisabledOutline={day.isDisabled ?? props.isDisabledOutline}
                $isOutlineBoxShadow={props.isOutlineBoxShadow}
                $isReadOnly={props.isReadOnly}
                $genre={props.genre}
                $size={props.size}
                $row={day?.weekOfMonth + 1}
                $column={day.dayOfWeek}
                key={day.value}
                onClick={() => {
                  if (!day.isDisabled) {
                    onChangeDate(day.value, true);
                    if (props.isOnClickClose) {
                      close();
                    }
                  }
                }}
                tabIndex={day.isDisabled ? -1 : 0}
                $isToday={day.isToday}
                $isWeekend={day.isWeekend}
                $isChoice={day.value === valueMoment?.valueOf()}
                $isCurrentMonth={day.isCurrentMonth}
              >
                <Ripple color={theme.colors.date[props.genre].color.rest} isDisabled={day.isDisabled}/>
                {day.labelNumber}
              </DateDropdownDay>
            ))}
          </DateDropdownDays>
        </DateDropdownList>
      </Popover>
      {isError || props?.error ? (
        <ErrorMessage
          {...(isError
            ? {
                isError: true,
                size: props?.error?.size ?? props.size,
                ...props.notValidDate,
              }
            : props.error)}
          size={props?.error?.size ?? props.size}
          font={{
            size: 12,
            weight: 400,
            family: props.font?.family ?? theme.font.family,
          }}
        />
      ) : null}
    </>
  );
};

function handleDigitKey(
  key: string,
  activeSegment: DatePickerVariant,
  input: Record<DatePickerVariant, string>,
  dataDate: { default: Record<DatePickerVariant, { setValue: (value: string) => void; onNextSegment: () => void }> },
  // onNextSegment?: (newInput: Record<DatePickerVariant, string>) => void,
) {
  const digit = key; // '0'..'9'
  const seg = activeSegment;
  const current = input[seg] ?? ''; // Теперь это уже строка

  if (seg === DatePickerVariant.DD) {
    // Дни: максимум 31
    if (current.length >= 2) {
      // уже два символа — начинаем ввод заново
      // if (digit === '0') return; // нельзя начинать с 0
      dataDate.default[seg].setValue(digit);
      return;
    }

    if (current === '') {
      // первый символ
      dataDate.default[seg].setValue(digit);
      return;
    }

    // есть один символ, добавляем второй
    const potential = current + digit;
    const potentialNum = Number(potential);

    if (potentialNum > 31) {
      // если получается больше 31, заменяем на новую цифру
      // if (digit === '0') return; // нельзя начинать с 0
      dataDate.default[seg].setValue(digit);
      return;
    }

    if (potentialNum === 0) {
      // если получается 00, заменяем на новую цифру
      // if (digit === '0') return; // нельзя начинать с 0
      dataDate.default[seg].setValue(digit);
      return;
    }

    // нормальная комбинация
    dataDate.default[seg].setValue(potential);
    dataDate.default[seg].onNextSegment();
    // const newInput = { ...input, [seg]: potential };
    // onNextSegment?.(newInput);
  } else if (seg === DatePickerVariant.MM) {
    // Месяцы: максимум 12
    if (current.length >= 2) {
      // уже два символа — начинаем ввод заново
      if (digit === '0') return; // нельзя начинать с 0
      dataDate.default[seg].setValue(digit);
      return;
    }

    if (current === '') {
      // первый символ
      dataDate.default[seg].setValue(digit);
      return;
    }

    // есть один символ, добавляем второй
    const potential = current + digit;
    const potentialNum = Number(potential);

    if (potentialNum > 12) {
      // если получается больше 12, заменяем на новую цифру
      if (digit === '0') return; // нельзя начинать с 0
      dataDate.default[seg].setValue(digit);
      return;
    }

    if (potentialNum === 0) {
      // если получается 00, заменяем на новую цифру
      if (digit === '0') return; // нельзя начинать с 0
      dataDate.default[seg].setValue(digit);
      return;
    }

    // нормальная комбинация
    dataDate.default[seg].setValue(potential);
    if (potential.length === 2 || (potential.length === 1 && Number(potential) > 1)) {
      dataDate.default[seg].onNextSegment();
      // const newInput = { ...input, [seg]: potential };
      // onNextSegment?.(newInput);
    }
  } else if (seg === DatePickerVariant.YYYY) {
    // Год: накапливаем до 4 цифр
    if (current.length >= 4) {
      // уже четыре символа — начинаем ввод заново
      dataDate.default[seg].setValue(digit);
      return;
    }

    // добавляем цифру
    const nextValue = current + digit;
    dataDate.default[seg].setValue(nextValue);
  }
}
