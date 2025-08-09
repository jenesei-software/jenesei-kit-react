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

  const refSelectMonth = useRef<HTMLElement>(null);
  const refSelectYear = useRef<HTMLElement>(null);
  const refHiddenInput = useRef<HTMLInputElement>(null);

  const sizePadding = useMemo(() => KEY_SIZE_DATA[props.size].padding, [props.size]);

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
    isDisabled: props?.isDisabled,
    onFocus: onFocusPopover,
    onBlur: onBlurPopover,
    onBlurReference: onBlurReference,
  });

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

          if (activeSegment === DatePickerVariant.DD) {
            const current = input.DD !== null ? input.DD.toString() : '';
            let nextValue: string;

            if (current.length >= 2) {
              // если уже два символа — заменяем полностью
              nextValue = digit;
            } else {
              // пробуем добавить цифру
              const potential = current + digit;
              const potentialParsed = Number(potential);

              // если при добавлении получится >31 или 0 — считаем, что ввод начинается заново
              if (potentialParsed > 31 || potentialParsed === 0) {
                nextValue = digit;
              } else {
                nextValue = potential;
              }
            }

            const parsed = Number(nextValue);
            if (parsed > 31 || parsed === 0) return;

            dataDate.default[activeSegment].setValue(parsed);
            if (nextValue.length === 2) {
              dataDate.default[activeSegment].onNext();
            }
          } else if (activeSegment === DatePickerVariant.MM) {
            const currentMonthStr = input.MM !== null ? input.MM.toString() : '';
            let nextValue: string;

            if (currentMonthStr.length >= 2) {
              nextValue = digit;
            } else {
              const potential = currentMonthStr + digit;
              const potentialParsed = Number(potential);

              if (potentialParsed > 12) {
                nextValue = digit;
              } else {
                nextValue = potential;
              }
            }

            const parsed = Number(nextValue);
            if (parsed > 12 || parsed === 0) return;

            dataDate.default[activeSegment].setValue(parsed);

            if (nextValue.length === 2 || (nextValue.length === 1 && parsed > 1)) {
              dataDate.default[activeSegment].onNext();
            }
          } else if (activeSegment === DatePickerVariant.YYYY) {
            const current = input.YYYY !== null ? input.YYYY.toString() : '';
            let nextValue: string;

            if (current.length >= 4) {
              if (digit === '0') return;
              nextValue = digit;
            } else {
              nextValue = current + digit;
            }

            const parsed = Number(nextValue);

            dataDate.default[activeSegment].setValue(parsed);
          }

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
    [activeSegment, input.DD, input.MM, input.YYYY, dataDate.default],
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

  useEffect(() => {
    if (input.DD !== null && input.MM !== null && input.YYYY !== null) {
      const day = input.DD ?? NaN;
      const month = input.MM ?? NaN;
      const year = input.YYYY ?? NaN;
      if (!Number.isNaN(day) && !Number.isNaN(month) && !Number.isNaN(year)) {
        const m = moment.utc(`${day}.${month}.${year}`, 'D.M.YYYY', true).startOf('day');
        if (m.isValid()) {
          onChangeDate(m.valueOf());
        }
      }
    }
  }, [input.DD, input.MM, input.YYYY, onChangeDate]);

  useEffect(() => {
    if (input.DD !== null && input.MM !== null && input.YYYY !== null) {
      const day = input.DD ?? NaN;
      const month = input.MM ?? NaN;
      const year = input.YYYY ?? NaN;
      if (!Number.isNaN(day) && !Number.isNaN(month) && !Number.isNaN(year)) {
        const m = moment.utc(`${day}.${month}.${year}`, 'D.M.YYYY', true).startOf('day');
        if (m.isValid()) {
          setIsError(false);
        } else {
          onChange(null);
          setIsError(true);
        }
      }
    }
  }, [input.DD, input.MM, input.YYYY, onChange]);

  const prevValueRef = useRef('');
  const [isInputFocused, setIsInputFocused] = useState(false);

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
          $isOpen={isOpen}
          onClick={() => {
            setActiveSegment(DatePickerVariant.DD);
          }}
        >
          <input
            ref={refHiddenInput}
            type='tel'
            inputMode='numeric'
            tabIndex={0}
            style={{ position: 'absolute', left: -9999, opacity: 0 }}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              const value = e.target.value;
              const prevValue = prevValueRef.current;

              const newChar = value.length > prevValue.length ? value.slice(-1) : null;

              prevValueRef.current = value;

              if (newChar && /^\d$/.test(newChar)) {
                handleKeyDown({
                  key: newChar,
                  preventDefault: () => {},
                  stopPropagation: () => {},
                } as unknown as KeyboardEvent<HTMLInputElement>);
              }

              if (value.length < prevValue.length) {
                handleKeyDown({
                  key: 'Backspace',
                  preventDefault: () => {},
                  stopPropagation: () => {},
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
          {!isInputFocused && !isHasValue && props.labelPlaceholder && !isOpen ? (
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
