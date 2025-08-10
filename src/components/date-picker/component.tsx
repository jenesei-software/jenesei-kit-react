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

  const [input, setInput] = useState<Record<DatePickerVariant, number | null>>({
    [DatePickerVariant.DD]: null,
    [DatePickerVariant.MM]: null,
    [DatePickerVariant.YYYY]: null,
  });

  const isHasInput = useMemo(() => {
    return (
      input[DatePickerVariant.DD] !== null ||
      input[DatePickerVariant.MM] !== null ||
      input[DatePickerVariant.YYYY] !== null
    );
  }, [input]);
  const onClearInput = useCallback(() => {
    setInput({
      [DatePickerVariant.DD]: null,
      [DatePickerVariant.MM]: null,
      [DatePickerVariant.YYYY]: null,
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

  const dataDate = useMemo(() => {
    const result = {
      MM: {
        nextSegment: getNextSegment(DatePickerVariant.MM),
        preSegment: getPrevSegment(DatePickerVariant.MM),
        onNext: () => setActiveSegment(getNextSegment(DatePickerVariant.MM)),
        onPrev: () => setActiveSegment(getPrevSegment(DatePickerVariant.MM)),
        isLast: mode[mode.length - 1] === DatePickerVariant.MM,
        isFirst: mode[0] === DatePickerVariant.MM,
        type: DatePickerVariant.MM,
        value: input.MM,
        setValue: (value: number | null) => setInput((prevValue) => ({ ...prevValue, [DatePickerVariant.MM]: value })),
        setActive: () => setActiveSegment(DatePickerVariant.MM),
        placeholder: props.locale.inputs.month,
      },
      DD: {
        nextSegment: getNextSegment(DatePickerVariant.DD),
        preSegment: getPrevSegment(DatePickerVariant.DD),
        isLast: mode[mode.length - 1] === DatePickerVariant.DD,
        isFirst: mode[0] === DatePickerVariant.DD,
        onNext: () => setActiveSegment(getNextSegment(DatePickerVariant.DD)),
        onPrev: () => setActiveSegment(getPrevSegment(DatePickerVariant.DD)),
        type: DatePickerVariant.DD,
        value: input.DD,
        setValue: (value: number | null) => setInput((prevValue) => ({ ...prevValue, [DatePickerVariant.DD]: value })),
        setActive: () => setActiveSegment(DatePickerVariant.DD),
        placeholder: props.locale.inputs.day,
      },
      YYYY: {
        nextSegment: getNextSegment(DatePickerVariant.YYYY),
        preSegment: getPrevSegment(DatePickerVariant.YYYY),
        isLast: mode[mode.length - 1] === DatePickerVariant.YYYY,
        isFirst: mode[0] === DatePickerVariant.YYYY,
        onNext: () => setActiveSegment(getNextSegment(DatePickerVariant.YYYY)),
        onPrev: () => setActiveSegment(getPrevSegment(DatePickerVariant.YYYY)),
        type: DatePickerVariant.YYYY,
        value: input.YYYY,
        setValue: (value: number | null) =>
          setInput((prevValue) => ({ ...prevValue, [DatePickerVariant.YYYY]: value })),
        setActive: () => setActiveSegment(DatePickerVariant.YYYY),
        placeholder: props.locale.inputs.year,
      },
    };
    const resultSort = mode
      .map((e) => {
        if (e === DatePickerVariant.DD) return result.DD;
        if (e === DatePickerVariant.MM) return result.MM;
        if (e === DatePickerVariant.YYYY) return result.YYYY;
        return null;
      })
      .filter((e) => e !== null);
    return { sort: resultSort, default: result };
  }, [
    props.locale.inputs.day,
    props.locale.inputs.month,
    props.locale.inputs.year,
    getNextSegment,
    getPrevSegment,
    mode,
    input.DD,
    input.MM,
    input.YYYY,
  ]);
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
    const startOfMonth = (valueMoment ?? dateDefaultMoment).clone().startOf('month');
    const endOfMonth = (valueMoment ?? dateDefaultMoment).clone().endOf('month');
    const days = [];

    const dateMin = props.dateMin ? moment.utc(props.dateMin) : null;
    const dateMax = props.dateMax ? moment.utc(props.dateMax) : null;

    const daysToAddBefore = startOfMonth.isoWeekday() - 1;
    if (daysToAddBefore > 0) {
      for (let i = daysToAddBefore; i > 0; i--) {
        const day = startOfMonth.clone().subtract(i, 'days');
        days.push({
          value: day.valueOf(),
          labelString: day.format('dd'),
          labelNumber: day.date(),
          dayOfWeek: day.isoWeekday(),
          isWeekend: day.isoWeekday() === 6 || day.isoWeekday() === 7,
          weekOfMonth: Math.ceil((days.length + 1) / 7),
          isToday: day.isSame(today, 'day'),
          isCurrentMonth: false,
          isDisabled: day.isBefore(dateMin, 'day') || day.isAfter(dateMax, 'day'),
        });
      }
    }

    const currentDate = startOfMonth.clone();
    while (currentDate <= endOfMonth) {
      days.push({
        value: currentDate.valueOf(),
        labelString: currentDate.format('dd'),
        labelNumber: currentDate.date(),
        dayOfWeek: currentDate.isoWeekday(),
        isWeekend: currentDate.isoWeekday() === 6 || currentDate.isoWeekday() === 7,
        weekOfMonth: Math.ceil((days.length + 1) / 7),
        isToday: currentDate.isSame(today, 'day'),
        isCurrentMonth: true,
        isDisabled: currentDate.isBefore(dateMin, 'day') || currentDate.isAfter(dateMax, 'day'),
      });
      currentDate.add(1, 'day');
    }

    const daysToAddAfter = 7 - endOfMonth.isoWeekday();
    if (daysToAddAfter > 0) {
      for (let i = 1; i <= daysToAddAfter; i++) {
        const day = endOfMonth.clone().add(i, 'days').startOf('day');
        days.push({
          value: day.valueOf(),
          labelString: day.format('dd'),
          labelNumber: day.date(),
          dayOfWeek: day.isoWeekday(),
          isWeekend: day.isoWeekday() === 6 || day.isoWeekday() === 7,
          weekOfMonth: Math.ceil((days.length + 1) / 7),
          isToday: day.isSame(today, 'day'),
          isCurrentMonth: false,
          isDisabled: day.isBefore(dateMin, 'day') || day.isAfter(dateMax, 'day'),
        });
      }
    }

    days.sort((a, b) => a.value - b.value);
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
    (timestamp: number) => {
      const momentNewDate = moment(timestamp).utc();
      if (valueMoment?.isSame(momentNewDate, 'day')) return;
      setValueMoment(momentNewDate);
      onChange(momentNewDate.valueOf());

      setInput({
        [DatePickerVariant.DD]: momentNewDate.clone().date(),
        [DatePickerVariant.MM]: momentNewDate.clone().month() + 1,
        [DatePickerVariant.YYYY]: momentNewDate.clone().year(),
      });
    },
    [valueMoment, onChange],
  );
  const handleKeyDown = useCallback(
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
            dataDate.default[activeSegment].onNext();
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
            if (input.DD !== null) {
              const current = input.DD.toString();
              if (current.length === 1) {
                dataDate.default[activeSegment].setValue(null);
              } else {
                const newValue = current.slice(0, -1);
                dataDate.default[activeSegment].setValue(Number(newValue));
              }
            } else {
              dataDate.default[activeSegment].onPrev();
            }
          } else if (activeSegment === DatePickerVariant.MM) {
            if (input.MM !== null) {
              const current = input.MM.toString();
              if (current.length === 1) {
                dataDate.default[activeSegment].setValue(null);
              } else {
                const newValue = current.slice(0, -1);
                dataDate.default[activeSegment].setValue(Number(newValue));
              }
            } else {
              dataDate.default[activeSegment].onPrev();
            }
          } else if (activeSegment === DatePickerVariant.YYYY) {
            if (input.YYYY !== null) {
              const current = input.YYYY.toString();
              if (current.length === 1) {
                dataDate.default[activeSegment].setValue(null);
              } else {
                const newValue = current.slice(0, -1);
                dataDate.default[activeSegment].setValue(Number(newValue));
              }
            } else {
              dataDate.default[activeSegment].onPrev();
            }
          }

          e.preventDefault();
          e.stopPropagation();
        }
        if (key === 'ArrowLeft' || key === 'ArrowDown') {
          e.preventDefault();
          dataDate.default[activeSegment].onPrev();
        }
        if (key === 'ArrowRight' || key === 'ArrowUp') {
          e.preventDefault();
          dataDate.default[activeSegment].onNext();
        }
      }
    },
    [activeSegment, input, dataDate.default, dataDate],
  );
  const onNextMonth = useCallback(() => {
    const newDate = (valueMoment ?? dateDefaultMoment).clone().add(1, 'month');
    onChangeDate(newDate.valueOf());
  }, [valueMoment, onChangeDate, dateDefaultMoment]);

  const onPrevMonth = useCallback(() => {
    const newDate = (valueMoment ?? dateDefaultMoment).clone().subtract(1, 'month');
    onChangeDate(newDate.valueOf());
  }, [valueMoment, onChangeDate, dateDefaultMoment]);

  useEffect(() => {
    setDateDefaultMoment(moment(props.dateDefault).utc());
  }, [props.dateDefault]);

  useEffect(() => {
    setValueMoment(props.value || props.defaultValue ? moment(props.value ?? props.defaultValue).utc() : null);
  }, [props.value, props.defaultValue]);

  const getValidateInput = useCallback(
    (
      input: Record<DatePickerVariant, number | null>,
      onSuccess?: (value: number) => void,
      onFailure?: () => void,
      onNan?: (isHasInput: boolean) => void,
    ) => {
      const day = input.DD ?? NaN;
      const month = input.MM ?? NaN;
      const year = input.YYYY ?? NaN;
      const isHasInput = input[DatePickerVariant.DD] !== null ||
        input[DatePickerVariant.MM] !== null ||
        input[DatePickerVariant.YYYY] !== null
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

  useEffect(() => {
    getValidateInput(
      input,
      (value) => {
        onChangeDate(value);
        setIsError(false);
      },
      () => {
        onChange(null);
        setIsError(true);
      },
      (isHasInput) => {
        if (!isHasInput) {
          onChange(null);
          setIsError(false);
        }
      }
    );
  }, [getValidateInput, onChangeDate, onChange, input]);

  useEffect(() => {
    if (!isOpen && !isInputFocused && isHasInput && !activeSegment)
      getValidateInput(
        input,
        () => { },
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
            if (!activeSegment) setActiveSegment(DatePickerVariant.DD);
          }}
        >
          <input
            ref={refHiddenInput}
            type='tel'
            inputMode='numeric'
            tabIndex={0}
            disabled={props?.isDisabled || props?.isReadOnly}
            style={{ position: 'absolute', left: -9999, opacity: 0 }}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              const value = e.target.value;
              const prevValue = refPrevValue.current;

              const newChar = value.length > prevValue.length ? value.slice(-1) : null;

              refPrevValue.current = value;

              if (newChar && /^\d$/.test(newChar)) {
                handleKeyDown({
                  key: newChar,
                  preventDefault: () => { },
                  stopPropagation: () => { },
                } as unknown as KeyboardEvent<HTMLInputElement>);
              }

              if (value.length < prevValue.length) {
                handleKeyDown({
                  key: 'Backspace',
                  preventDefault: () => { },
                  stopPropagation: () => { },
                } as unknown as KeyboardEvent<HTMLInputElement>);
              }

              // if (newChar === '\n') {
              //   close();
              // }
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
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (props?.isDisabled || props?.isReadOnly) return;
                    date.setActive();
                  }}
                >
                  {date.value != null
                    ? String(date.value).padStart(date.type === DatePickerVariant.YYYY ? 1 : 2, '0')
                    : date.placeholder || ''}
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
            isOnlyIcon
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
              isHidden={isBlockPrevMonth}
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
                  if (timestamp) onChangeDate(timestamp);
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
                  if (timestamp) onChangeDate(timestamp);
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
              isHidden={isBlockNextMonth}
            />
          </Stack>
          <DateDropdownDays $rows={rows}>
            {daysInWeek.map((e, index) => (
              <DateDropdownDayOfWeek
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
                type='button'
                $isDisabled={day.isDisabled}
                $genre={props.genre}
                $size={props.size}
                $row={day?.weekOfMonth + 1}
                $column={day.dayOfWeek}
                key={day.value}
                onClick={() => {
                  if (!day.isDisabled) {
                    onChangeDate(day.value);
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
                {!day.isDisabled && <Ripple color={theme.colors.date[props.genre].color.rest} />}
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
        />
      ) : null}
    </>
  );
};
function handleDigitKey(
  key: string,
  activeSegment: DatePickerVariant,
  input: Record<DatePickerVariant, number | null>,
  dataDate: { default: Record<DatePickerVariant, { setValue: (value: number) => void; onNext: () => void }> },
) {
  const digit = key; // '0'..'9'
  const seg = activeSegment;
  const current = input[seg]?.toString() ?? ''; // Преобразуем number в string для работы

  // Вспомогательная проверка
  const isZero = (s: string) => s === '0';
  const toNum = (s: string) => Number(s);

  if (seg === DatePickerVariant.DD) {
    // Дни: максимум 31, ноль недопустим как самостоятельное значение
    if (current.length >= 2) {
      // уже два символа — начинаем ввод заново
      const parsed = toNum(digit);
      if (parsed === 0 || parsed > 31) return;
      dataDate.default[seg].setValue(parsed);
      return;
    }

    // special-case: если было '0' и пользователь ввёл не '0' — НЕ подставляем '0' перед цифрой,
    // сохраняем single-digit и считаем ввод завершённым (переходим).
    if (current.length === 1 && isZero(current)) {
      const parsed = toNum(digit);
      if (parsed === 0 || parsed > 31) return;
      dataDate.default[seg].setValue(parsed); // сохраняем число, а не строку
      dataDate.default[seg].onNext();
      return;
    }

    // обычный путь: добавляем цифру и решаем — перезаписать или дополнить
    const potential = current + digit;
    const potentialParsed = toNum(potential);

    // ИСПРАВЛЕНИЕ: если потенциальное значение больше 31, используем только новую цифру и переходим дальше
    if (potentialParsed > 31) {
      const parsed = toNum(digit);
      if (parsed === 0 || parsed > 31) return;
      dataDate.default[seg].setValue(parsed);
      dataDate.default[seg].onNext(); // Переходим к следующему сегменту
      return;
    }

    // Если потенциальное значение равно 0, используем только новую цифру
    const nextValue = potentialParsed === 0 ? digit : potential;
    const parsed = toNum(nextValue);
    if (parsed === 0 || parsed > 31) return;
    dataDate.default[seg].setValue(parsed);
    if (nextValue.length === 2) dataDate.default[seg].onNext();

  } else if (seg === DatePickerVariant.MM) {
    // Месяцы: максимум 12, ноль недопустим как самостоятельное значение
    if (current.length >= 2) {
      const parsed = toNum(digit);
      if (parsed === 0 || parsed > 12) return;
      dataDate.default[seg].setValue(parsed);
      return;
    }

    if (current.length === 1 && isZero(current)) {
      const parsed = toNum(digit);
      if (parsed === 0 || parsed > 12) return;
      dataDate.default[seg].setValue(parsed); // сохраняем число, а не строку
      dataDate.default[seg].onNext();
      return;
    }

    const potential = current + digit;
    const potentialParsed = toNum(potential);
    const nextValue = potentialParsed === 0 || potentialParsed > 12 ? digit : potential;

    const parsed = toNum(nextValue);
    if (parsed === 0 || parsed > 12) return;
    dataDate.default[seg].setValue(parsed);
    if (nextValue.length === 2 || (nextValue.length === 1 && parsed > 1)) {
      dataDate.default[seg].onNext();
    }

  } else if (seg === DatePickerVariant.YYYY) {
    // Год: накапливаем до 4 цифр. Если уже 4 — начинаем заново (как раньше)
    if (current.length >= 4) {
      if (digit === '0') return;
      dataDate.default[seg].setValue(toNum(digit));
      return;
    }

    const nextValue = (current + digit).slice(-4);
    dataDate.default[seg].setValue(toNum(nextValue));
  }
}