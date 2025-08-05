import { Button } from '@local/components/button';
import { Ripple } from '@local/components/ripple';
import { SelectMonth, SelectYear } from '@local/components/select';
import { Stack } from '@local/components/stack';
import { ErrorMessage } from '@local/styles/error';
import { KEY_SIZE_DATA } from '@local/theme';

import { pre } from 'framer-motion/client';
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
  DateInputWrapper,
  DatePickerMode,
  DatePickerProps,
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
  const { onChange, onBlur } = props;
  const theme = useTheme();

  const [valueMoment, setValueMoment] = useState<null | Moment>(null);

  const [currentMonth, setCurrentMonth] = useState<null | number>(null);
  const [currentYear, setCurrentYear] = useState<null | number>(null);
  const [currentDay, setCurrentDay] = useState<null | number>(null);

  const [inputDay, setInputDay] = useState<number | null>(null);
  const [inputMonth, setInputMonth] = useState<number | null>(null);
  const [inputYear, setInputYear] = useState<number | null>(null);

  const [activeSegment, setActiveSegment] = useState<'DD' | 'MM' | 'YYYY' | null>(null);
  const [isError, setIsError] = useState(false);

  const mode: DatePickerMode = useMemo(() => props.mode ?? 'DD.MM.YYYY', [props.mode]);

  const segmentOrder = useMemo(
    () => mode.split(/[.\-\/]/).filter((segment) => ['DD', 'MM', 'YYYY'].includes(segment)),
    [mode],
  );

  const getNextSegment = useCallback(
    (currentSegment: string): 'DD' | 'MM' | 'YYYY' | null => {
      const currentIndex = segmentOrder.indexOf(currentSegment);
      return currentIndex < segmentOrder.length - 1
        ? (segmentOrder[currentIndex + 1] as 'DD' | 'MM' | 'YYYY')
        : (segmentOrder[0] as 'DD' | 'MM' | 'YYYY');
    },
    [segmentOrder],
  );

  const getPrevSegment = useCallback(
    (currentSegment: string): 'DD' | 'MM' | 'YYYY' | null => {
      const currentIndex = segmentOrder.indexOf(currentSegment);
      return currentIndex > 0
        ? (segmentOrder[currentIndex - 1] as 'DD' | 'MM' | 'YYYY')
        : (segmentOrder[segmentOrder.length - 1] as 'DD' | 'MM' | 'YYYY');
    },
    [segmentOrder],
  );
  console.log("getNextSegment('YYYY')", getNextSegment('YYYY'));
  const dataDate = useMemo(() => {
    const result = {
      MM: {
        nextSegment: getNextSegment('MM'),
        preSegment: getPrevSegment('MM'),
        onNext: () => setActiveSegment(getNextSegment('MM')),
        onPrev: () => setActiveSegment(getPrevSegment('MM')),
        type: 'MM',
        value: inputMonth,
        setValue: setInputMonth,
        setActive: () => setActiveSegment('MM'),
        valueInput: inputMonth,
        setValueInput: setInputMonth,
        placeholder: props.locale.inputs.month,
      },
      DD: {
        nextSegment: getNextSegment('DD'),
        preSegment: getPrevSegment('DD'),
        onNext: () => setActiveSegment(getNextSegment('DD')),
        onPrev: () => setActiveSegment(getPrevSegment('DD')),
        type: 'DD',
        value: inputDay,
        setValue: setInputDay,
        setActive: () => setActiveSegment('DD'),
        valueInput: inputDay,
        setValueInput: setInputDay,
        placeholder: props.locale.inputs.day,
      },
      YYYY: {
        nextSegment: getNextSegment('YYYY'),
        preSegment: getPrevSegment('YYYY'),
        onNext: () => setActiveSegment(getNextSegment('YYYY')),
        onPrev: () => setActiveSegment(getPrevSegment('YYYY')),
        type: 'YYYY',
        value: inputYear,
        setValue: setInputYear,
        setActive: () => setActiveSegment('YYYY'),
        valueInput: inputYear,
        setValueInput: setInputYear,
        placeholder: props.locale.inputs.year,
      },
    };
    const resultSort = mode
      .split('.')
      .map((e) => e.trim())
      .map((e) => {
        if (e === 'DD') return result.DD;
        if (e === 'MM') return result.MM;
        if (e === 'YYYY') return result.YYYY;
        return null;
      })
      .filter((e) => e !== null);
    return { sort: resultSort, default: result };
  }, [
    inputDay,
    inputMonth,
    inputYear,
    props.locale.inputs.day,
    props.locale.inputs.month,
    props.locale.inputs.year,
    getNextSegment,
    getPrevSegment,
    mode.split,
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
    if (currentYear === null || currentMonth === null) return [];
    const today = moment.utc();

    const startOfMonth = moment.utc().year(currentYear).month(currentMonth).startOf('month');
    const endOfMonth = moment.utc().year(currentYear).month(currentMonth).endOf('month');

    const days = [];

    const startDate = props.startDate ? moment.utc(props.startDate) : null;
    const endDate = props.endDate ? moment.utc(props.endDate) : null;

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
          isDisabled: day.isBefore(startDate, 'day') || day.isAfter(endDate, 'day'),
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
        isDisabled: currentDate.isBefore(startDate, 'day') || currentDate.isAfter(endDate, 'day'),
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
          isDisabled: day.isBefore(startDate, 'day') || day.isAfter(endDate, 'day'),
        });
      }
    }

    days.sort((a, b) => a.value - b.value);
    return days;
  }, [currentMonth, currentYear, props.endDate, props.startDate]);

  const rows = useMemo(() => countSevens(daysInMonth.length) + 1, [daysInMonth]);
  const height = useMemo(
    () => 40 + rows * 28 + (rows - 1) * 6 + KEY_SIZE_DATA[props.size].padding * 2,
    [props.size, rows],
  );
  const sizeRadius = useMemo(() => KEY_SIZE_DATA[props.size].radius, [props.size]);

  const isHasValue = useMemo(() => {
    return props.value !== null && props.value !== undefined;
  }, [props.value]);

  const isBlockNextMonth = useMemo(() => {
    if (currentYear === null || currentMonth === null || currentDay === null) return true;
    const nextMonth = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .add(1, 'month')
      .startOf('month');

    const isBeforeEndDate = props.endDate ? nextMonth.isAfter(moment.utc(props.endDate), 'month') : false;
    return isBeforeEndDate;
  }, [currentYear, currentMonth, currentDay, props.endDate]);

  const isBlockPrevMonth = useMemo(() => {
    if (currentYear === null || currentMonth === null || currentDay === null) return true;
    const prevMonth = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .subtract(1, 'month')
      .startOf('month');

    const isAfterStartDate = props.startDate ? prevMonth.isBefore(moment.utc(props.startDate), 'month') : false;
    return isAfterStartDate;
  }, [currentYear, currentMonth, currentDay, props.startDate]);

  const refSelectMonth = useRef<HTMLElement>(null);
  const refSelectYear = useRef<HTMLElement>(null);

  const sizePadding = useMemo(() => KEY_SIZE_DATA[props.size].padding, [props.size]);

  const { isOpen, close, refReference, refFloating, floatingStyles, open } = usePopover({
    placement: 'bottom-start',
    offset: sizePadding,
    mode: 'independence',
    isClickOutside: true,
    refsExcludeClickOutside: [refSelectMonth, refSelectYear],
    isDisabled: props?.isDisabled,
    onFocus() {
      props.onFocus?.();
    },
    onBlurReference() {
      setActiveSegment(null);
    },
  });

  const onChangeDate = useCallback(
    (timestamp: number, isBlur?: boolean, isChange?: boolean) => {
      const momentStartDate = props.startDate ? moment(props.startDate).utc() : null;
      const momentEndDate = props.endDate ? moment(props.endDate).utc() : null;
      const momentCheckDate = moment(timestamp).utc();
      let momentNewDate = moment(timestamp).utc();

      if (momentStartDate && momentCheckDate.isBefore(momentStartDate, 'day')) {
        momentNewDate = momentStartDate.startOf('day');
      } else if (momentEndDate && momentCheckDate.isAfter(momentEndDate, 'day')) {
        momentNewDate = momentEndDate.startOf('day');
      }
      if (valueMoment?.isSame(momentNewDate, 'day')) return;
      setValueMoment(momentNewDate);
      setCurrentDay(momentNewDate.date());
      setCurrentMonth(momentNewDate.month());
      setCurrentYear(momentNewDate.year());
      if (isChange) onChange(momentNewDate.valueOf());
      if (props.isOnClickClose && isBlur) {
        onBlur?.();
        close();
      }
    },
    [props.startDate, props.endDate, props.isOnClickClose, valueMoment, onChange, onBlur, close],
  );
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;

      const allowedKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace', 'Delete', 'Tab'];

      const isDigit = /^\d$/.test(key);
      const isAllowed = isDigit || allowedKeys.includes(key) || e.ctrlKey || e.metaKey;

      if (!isAllowed) {
        e.preventDefault();
        return;
      }

      console.log('key', key);
      if (isDigit) {
        const digit = key;

        if (activeSegment === 'DD') {
          const current = inputDay !== null ? inputDay.toString() : '';
          let nextValue: string;

          if (current.length >= 2) {
            nextValue = digit;
          } else {
            nextValue = current + digit;
          }

          const parsed = Number(nextValue);
          if (parsed > 31 || parsed === 0) return;

          setInputDay(parsed);
          if (nextValue.length === 2) {
            if (activeSegment) dataDate.default[activeSegment].onNext();
          }
        } else if (activeSegment === 'MM') {
          const currentMonthStr = inputMonth !== null ? inputMonth.toString() : '';
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

          setInputMonth(parsed);

          if (nextValue.length === 2 || (nextValue.length === 1 && parsed > 1)) {
            if (activeSegment) dataDate.default[activeSegment].onNext();
          }
        } else if (activeSegment === 'YYYY') {
          const current = inputYear !== null ? inputYear.toString() : '';
          let nextValue: string;

          if (current.length >= 4) {
            if (digit === '0') return;
            nextValue = digit;
          } else {
            nextValue = current + digit;
          }

          const parsed = Number(nextValue);

          setInputYear(parsed);
        }

        e.preventDefault();
        e.stopPropagation();
      }
      if (key === 'Tab') {
        e.preventDefault();
        if (activeSegment) dataDate.default[activeSegment].onNext();
      }

      if (key === 'Backspace' || key === 'Delete') {
        if (activeSegment === 'DD') {
          if (inputDay !== null) {
            const current = inputDay.toString();
            if (current.length === 1) {
              setInputDay(null);
            } else {
              const newValue = current.slice(0, -1);
              setInputDay(Number(newValue));
            }
          } else {
            if (activeSegment) dataDate.default[activeSegment].onPrev();
          }
        } else if (activeSegment === 'MM') {
          if (inputMonth !== null) {
            const current = inputMonth.toString();
            if (current.length === 1) {
              setInputMonth(null);
            } else {
              const newValue = current.slice(0, -1);
              setInputMonth(Number(newValue));
            }
          } else {
            if (activeSegment) dataDate.default[activeSegment].onPrev();
          }
        } else if (activeSegment === 'YYYY') {
          if (inputYear !== null) {
            const current = inputYear.toString();
            if (current.length === 1) {
              setInputYear(null);
            } else {
              const newValue = current.slice(0, -1);
              setInputYear(Number(newValue));
            }
          } else {
            if (activeSegment) dataDate.default[activeSegment].onPrev();
          }
        }

        e.preventDefault();
        e.stopPropagation();
      }

      if (key === 'ArrowLeft' || key === 'ArrowDown') {
        e.preventDefault();
        if (activeSegment) dataDate.default[activeSegment].onPrev();
      }
      if (key === 'ArrowRight' || key === 'ArrowUp') {
        e.preventDefault();
        if (activeSegment) dataDate.default[activeSegment].onNext();
      }
    },
    [activeSegment, inputDay, inputMonth, inputYear, dataDate.default],
  );
  const onNextMonth = useCallback(() => {
    if (currentYear === null || currentMonth === null || currentDay === null) return;
    const newDate = moment.utc().year(currentYear).month(currentMonth).date(currentDay).add(1, 'month');
    onChangeDate(newDate.valueOf(), false, false);
  }, [currentDay, currentMonth, currentYear, onChangeDate]);

  const onPrevMonth = useCallback(() => {
    if (currentYear === null || currentMonth === null || currentDay === null) return;
    const newDate = moment.utc().year(currentYear).month(currentMonth).date(currentDay).subtract(1, 'month');
    onChangeDate(newDate.valueOf(), false, false);
  }, [currentDay, currentMonth, currentYear, onChangeDate]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const valueMoment = props.value ? moment(props.value).utc() : null;
    if (valueMoment) {
      setInputDay(valueMoment.date());
      setInputMonth(valueMoment.month() + 1);
      setInputYear(valueMoment.year());
      onChangeDate(valueMoment.valueOf(), false, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setActiveSegment('DD');
    } else {
      setActiveSegment(null);
    }
  }, [isOpen]);
  useEffect(() => {
    if (inputDay !== null && inputMonth !== null && inputYear !== null) {
      // Проверяем и применяем дату
      const day = inputDay ?? NaN;
      const month = inputMonth ?? NaN;
      const year = inputYear ?? NaN;
      if (!Number.isNaN(day) && !Number.isNaN(month) && !Number.isNaN(year)) {
        const m = moment.utc(`${day}.${month}.${year}`, 'D.M.YYYY', true).startOf('day');
        if (m.isValid()) {
          console.log('onChangeDate', m);
          onChangeDate(m.valueOf(), false, true);
        } else {
          if (activeSegment === null) setIsError(true);
        }
      }
    }
  }, [activeSegment, inputDay, inputMonth, inputYear, onChangeDate]);
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
          tabIndex={0}
          $genre={props.genre}
          $size={props.size}
          $error={isError ? { isError: true } : props.error}
          $isOpen={isOpen}
          onClick={() => {
            open();
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            open();
          }}
        >
          {!isHasValue && props.labelPlaceholder && !isOpen ? (
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
                  $isHaveValue={!!date.valueInput}
                  $isActive={activeSegment === date.type}
                  $genre={props.genre}
                  $size={props.size}
                  onClick={() => date.setActive()}
                >
                  {date.valueInput != null
                    ? String(date.valueInput).padStart(date.type === 'YYYY' ? 1 : 2, '0')
                    : date.placeholder || ''}
                </DateInput>
                {index !== dataDate.sort.length - 1 && (
                  <span style={{ width: '4px', pointerEvents: 'none', textAlign: 'center' }}>.</span>
                )}
              </Fragment>
            ))
          )}
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
            {currentYear !== null && currentMonth !== null && currentDay !== null ? (
              <Stack sx={{ default: { gap: '8px' } }}>
                <SelectMonth
                  monthsLocale={props.locale.months}
                  genre={props.genre}
                  size={'small'}
                  value={moment
                    .utc()
                    .year(currentYear)
                    .month(currentMonth)
                    .date(currentDay)
                    .startOf('month')
                    .utc()
                    .valueOf()}
                  isOnClickOptionClose
                  isStayValueAfterSelect
                  isOnlyColorInSelectListOption
                  isCenter
                  isShortLabel
                  refFloating={refSelectMonth}
                  onChange={(timestamp: number | null) => {
                    if (timestamp) onChangeDate(timestamp, false, true);
                  }}
                  startDate={props.startDate}
                  endDate={props.endDate}
                  sx={{ default: { width: '60px' } }}
                />
                <SelectYear
                  genre={props.genre}
                  size={'small'}
                  refFloating={refSelectYear}
                  value={moment
                    .utc()
                    .year(currentYear)
                    .month(currentMonth)
                    .date(currentDay)
                    .startOf('year')
                    .utc()
                    .valueOf()}
                  onChange={(timestamp: number | null) => {
                    if (timestamp) onChangeDate(timestamp, false, true);
                  }}
                  isOnClickOptionClose
                  isStayValueAfterSelect
                  isOnlyColorInSelectListOption
                  isCenter
                  startDate={props.startDate}
                  endDate={props.endDate}
                  sx={{ default: { width: '60px' } }}
                />
              </Stack>
            ) : null}
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
                $isToday={false}
                $isWeekend={false}
                type='button'
                $genre={props.genre}
                $size={props.size}
                $row={daysInMonth[0]?.weekOfMonth - 1}
                $column={index + 1}
                key={`${e.label}-${index}`}
              >
                {e.label}
              </DateDropdownDayOfWeek>
            ))}
            {daysInMonth.map((day) =>
              !day.isDisabled ? (
                <DateDropdownDay
                  type='button'
                  $genre={props.genre}
                  $size={props.size}
                  $row={day?.weekOfMonth + 1}
                  $column={day.dayOfWeek}
                  key={day.value}
                  onClick={() => onChangeDate(day.value, true, true)}
                  $isToday={day.isToday}
                  $isWeekend={day.isWeekend}
                  $isChoice={day.value === valueMoment?.valueOf()}
                  $isCurrentMonth={day.isCurrentMonth}
                >
                  <Ripple color={theme.colors.date[props.genre].color.rest} />
                  {day.labelNumber}
                </DateDropdownDay>
              ) : null,
            )}
          </DateDropdownDays>
        </DateDropdownList>
      </Popover>
      {props?.error ? <ErrorMessage {...props?.error} size={props?.error.size ?? props.size} /> : null}
    </>
  );
};
function fixUnderscoreToZero(str: string) {
  if (str.length === 2) {
    return '0' + str[0];
  }
  return str.replace(/_/g, '0');
}

function fixOneToZero(str: string) {
  if (str.length === 1) {
    return '0' + str[0];
  }
  return str;
}
