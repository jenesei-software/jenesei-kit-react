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

  const [inputDay, setInputDay] = useState<string | null>(null);
  const [inputMonth, setInputMonth] = useState<string | null>(null);
  const [inputYear, setInputYear] = useState<string | null>(null);

  const refDay = useRef<HTMLInputElement>(null);
  const refMonth = useRef<HTMLInputElement>(null);
  const refYear = useRef<HTMLInputElement>(null);

  const [activeSegment, setActiveSegment] = useState<'day' | 'month' | 'year' | null>(null);
  const [isError, setIsError] = useState(false);
  const dataDate = useMemo(() => {
    const mode: DatePickerMode = props.mode ?? 'DD.MM.YYYY';
    const result = {
      MM: {
        type: 'MM',
        width: '20px',
        ref: refMonth,
        value: inputMonth,
        setValue: setInputMonth,
        setActive: () => setActiveSegment('month'),
        valueInput: inputMonth,
        setValueInput: setInputMonth,
        placeholder: props.locale.inputs.month,
      },
      DD: {
        type: 'DD',
        width: '20px',
        ref: refDay,
        value: inputDay,
        setValue: setInputDay,
        setActive: () => setActiveSegment('day'),
        valueInput: inputDay,
        setValueInput: setInputDay,
        placeholder: props.locale.inputs.day,
      },
      YYYY: {
        type: 'YYYY',
        width: '40px',
        ref: refYear,
        value: inputYear,
        setValue: setInputYear,
        setActive: () => setActiveSegment('year'),
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
    return resultSort;
  }, [
    inputDay,
    inputMonth,
    inputYear,
    props.locale.inputs.day,
    props.locale.inputs.month,
    props.locale.inputs.year,
    props.mode,
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
  });

  const handleOnClose = useCallback(
    (isCheck?: boolean) => {
      close();
      if (isCheck)
        if (!inputDay || !inputMonth || !inputYear) {
          onChange(null);
        }
    },
    [close, inputDay, inputMonth, inputYear, onChange],
  );
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (
        !/^\d$/.test(e.key) &&
        !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace', 'Delete', 'Tab'].includes(e.key) &&
        !e.ctrlKey &&
        !e.metaKey
      ) {
        e.preventDefault();
        return;
      }
      if (e.key === 'Backspace' || e.key === 'Delete') {
        if (
          (activeSegment === 'day' && (!inputDay || inputDay === '')) ||
          (activeSegment === 'month' && (!inputMonth || inputMonth === '')) ||
          (activeSegment === 'year' && (!inputYear || inputYear === ''))
        ) {
          if (activeSegment === 'day') {
            setInputDay(null);
          } else if (activeSegment === 'month') {
            setInputMonth(null);
          } else if (activeSegment === 'year') {
            setInputYear(null);
          }
          const nextSegment = activeSegment === 'day' ? 'day' : activeSegment === 'month' ? 'day' : 'month';
          setActiveSegment(nextSegment);
          e.preventDefault();
        }
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        const nextSegment = activeSegment === 'day' ? 'year' : activeSegment === 'month' ? 'day' : 'month';
        setActiveSegment(nextSegment);
        e.preventDefault();
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        const nextSegment = activeSegment === 'day' ? 'month' : activeSegment === 'month' ? 'year' : 'day';
        setActiveSegment(nextSegment);
        e.preventDefault();
      }
    },
    [activeSegment, inputDay, inputMonth, inputYear],
  );

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
        handleOnClose();
      }
    },
    [props.startDate, props.endDate, props.isOnClickClose, valueMoment, onChange, onBlur, handleOnClose],
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
    const valueMoment = props.value ? moment(props.value).utc() : moment.utc();
    if (props.value !== null && props.value !== undefined) {
      setInputDay(fixOneToZero(valueMoment.date().toString()));
      setInputMonth(fixOneToZero((valueMoment.month() + 1).toString()));
      setInputYear(valueMoment.year().toString());
    } else {
      setInputDay(null);
      setInputMonth(null);
      setInputYear(null);
    }
    onChangeDate(valueMoment.valueOf(), false, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value, isOpen]);

  useEffect(() => {
    if (activeSegment !== null) {
      setTimeout(() => {
        if (activeSegment === 'day') {
          refDay.current?.focus();
        } else if (activeSegment === 'month') {
          refMonth.current?.focus();
        } else if (activeSegment === 'year') {
          refYear.current?.focus();
        }
      }, 0);
    }
  }, [activeSegment]);

  useEffect(() => {
    if (isOpen) {
      setActiveSegment('day');
    } else {
      setActiveSegment(null);
    }
  }, [isOpen]);
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
        // onFocus={event => {
        //   if (props?.isDisabled) return
        //   if (props.onFocus) props.onFocus?.(event)
        //   // handleOnOpen()
        // }}
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
            dataDate.map((date, index) => (
              <Fragment key={date.type}>
                <DateInput
                  onValueChange={(values, sourceInfo) => {
                    if (date.type === 'DD') {
                      if (sourceInfo.source !== 'event') return;
                      const value = values.formattedValue;
                      setInputMonth(null);
                      setInputYear(null);

                      if (Number(value) && Number(value) > 31) {
                        setInputDay('31');
                      } else {
                        setInputDay(value);
                      }
                      if (value !== '' && !value.includes('_')) {
                        setActiveSegment('month');
                      }
                    } else if (date.type === 'MM') {
                      if (sourceInfo.source !== 'event') return;
                      const value = values.formattedValue;
                      setInputYear(null);
                      if (Number(value) > 12) {
                        setInputMonth('12');
                      } else {
                        setInputMonth(value);
                      }
                      if (value !== '' && !value.includes('_')) {
                        setActiveSegment('year');
                      }
                    } else if (date.type === 'YYYY') {
                      if (sourceInfo.source !== 'event') return;
                      const value = values.formattedValue;
                      setInputYear(value);

                      if (value !== '' && !value.includes('_')) {
                        const day = inputDay ? Number(inputDay) : NaN;
                        const month = inputMonth ? Number(inputMonth) : NaN;
                        const year = value ? Number(value) : NaN;
                        if (!Number.isNaN(day) && !Number.isNaN(month) && !Number.isNaN(year)) {
                          const m = moment.utc(`${day}.${month}.${year}`, 'D.M.YYYY', true).startOf('day');
                          if (m.isValid()) {
                            onChangeDate(m.valueOf(), false, true);
                          } else {
                            setIsError(true);
                            setTimeout(() => {
                              setIsError(false);
                              setInputDay(null);
                              setInputMonth(null);
                              setInputYear(null);
                              setActiveSegment('day');
                            }, 1000);
                          }
                        }
                      }
                    }
                  }}
                  $genre={props.genre}
                  $size={props.size}
                  getInputRef={(ref: HTMLInputElement | null) => {
                    if (ref && !date.ref.current) {
                      date.ref.current = ref;
                    }
                  }}
                  onFocus={(e) => {
                    // date.setActive();
                    e.target.select();
                  }}
                  onBlur={() => {
                    if (index !== dataDate.length - 1)
                      if (date.valueInput?.includes('_')) date.setValueInput(fixUnderscoreToZero(date.valueInput));
                  }}
                  onKeyDown={handleKeyDown}
                  value={date.valueInput ?? ''}
                  placeholder={date.placeholder}
                  format={'#'.repeat(date.type.length)}
                  style={{ width: date.width }}
                  readOnly={isError}
                  type='text'
                  mask='_'
                />
                {index !== dataDate.length - 1 && (
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
