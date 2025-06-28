import { AnimatePresence } from 'framer-motion'
import moment, { Moment } from 'moment'
import { KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import { Outside } from '@local/areas/outside'
import { Button } from '@local/components/button'
import { Ripple } from '@local/components/ripple'
import { SelectMonth, SelectYear } from '@local/components/select'
import { Stack } from '@local/components/stack'
import { ErrorMessage } from '@local/styles/error'
import { KEY_SIZE_DATA } from '@local/theme'

import {
  DateDayProps,
  DateDropdownDay,
  DateDropdownDayOfWeek,
  DateDropdownDays,
  DateDropdownList,
  DateDropdownListParent,
  DateInput,
  DateInputWrapper,
  DatePickerProps,
  DateWrapper,
  WeekItem
} from '.'

function countSevens(number: number) {
  const divisor = 7
  const count = Math.floor(number / divisor)
  const remainder = number % divisor

  return remainder > 0 ? count + 1 : count
}

export const DatePicker = (props: DatePickerProps) => {
  const { onChange, onBlur } = props
  const theme = useTheme()

  const [valueMoment, setValueMoment] = useState<null | Moment>(null)
  const [currentMonth, setCurrentMonth] = useState<null | number>(null)
  const [currentYear, setCurrentYear] = useState<null | number>(null)
  const [currentDay, setCurrentDay] = useState<null | number>(null)

  const [inputDay, setInputDay] = useState<string | null>(null)
  const [inputMonth, setInputMonth] = useState<string | null>(null)
  const [inputYear, setInputYear] = useState<string | null>(null)

  const refDay = useRef<HTMLInputElement>(null)
  const refMonth = useRef<HTMLInputElement>(null)
  const refYear = useRef<HTMLInputElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  const [activeSegment, setActiveSegment] = useState<'day' | 'month' | 'year' | null>(null)

  const daysInWeek = useMemo(() => {
    const weekOrder: WeekItem['value'][] = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su']

    return weekOrder.map((key, index) => {
      const found = props.locale.weeks.find(w => w.value === key)
      return {
        index,
        label: found?.localeShort ?? key.toUpperCase()
      }
    })
  }, [props.locale.weeks])

  const daysInMonth: DateDayProps[] = useMemo(() => {
    if (currentYear === null || currentMonth === null) return []
    const today = moment.utc()

    const startOfMonth = moment.utc().year(currentYear).month(currentMonth).startOf('month')
    const endOfMonth = moment.utc().year(currentYear).month(currentMonth).endOf('month')

    const days = []

    const startDate = props.startDate ? moment.utc(props.startDate) : null
    const endDate = props.endDate ? moment.utc(props.endDate) : null

    const daysToAddBefore = startOfMonth.isoWeekday() - 1
    if (daysToAddBefore > 0) {
      for (let i = daysToAddBefore; i > 0; i--) {
        const day = startOfMonth.clone().subtract(i, 'days')
        days.push({
          value: day.valueOf(),
          labelString: day.format('dd'),
          labelNumber: day.date(),
          dayOfWeek: day.isoWeekday(),
          isWeekend: day.isoWeekday() === 6 || day.isoWeekday() === 7,
          weekOfMonth: Math.ceil((days.length + 1) / 7),
          isToday: day.isSame(today, 'day'),
          isCurrentMonth: false,
          isDisabled: day.isBefore(startDate, 'day') || day.isAfter(endDate, 'day')
        })
      }
    }

    const currentDate = startOfMonth.clone()
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
        isDisabled: currentDate.isBefore(startDate, 'day') || currentDate.isAfter(endDate, 'day')
      })
      currentDate.add(1, 'day')
    }

    const daysToAddAfter = 7 - endOfMonth.isoWeekday()
    if (daysToAddAfter > 0) {
      for (let i = 1; i <= daysToAddAfter; i++) {
        const day = endOfMonth.clone().add(i, 'days').startOf('day')
        days.push({
          value: day.valueOf(),
          labelString: day.format('dd'),
          labelNumber: day.date(),
          dayOfWeek: day.isoWeekday(),
          isWeekend: day.isoWeekday() === 6 || day.isoWeekday() === 7,
          weekOfMonth: Math.ceil((days.length + 1) / 7),
          isToday: day.isSame(today, 'day'),
          isCurrentMonth: false,
          isDisabled: day.isBefore(startDate, 'day') || day.isAfter(endDate, 'day')
        })
      }
    }

    days.sort((a, b) => a.value - b.value)
    return days
  }, [currentMonth, currentYear, props.endDate, props.startDate])

  const rows = useMemo(() => countSevens(daysInMonth.length) + 1, [daysInMonth])
  const height = useMemo(
    () => 40 + rows * 28 + (rows - 1) * 6 + KEY_SIZE_DATA[props.size].padding * 2,
    [props.size, rows]
  )
  const radius = useMemo(() => KEY_SIZE_DATA[props.size].radius, [props.size])

  const isBlockNextMonth = useMemo(() => {
    if (currentYear === null || currentMonth === null || currentDay === null) return true
    const nextMonth = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .add(1, 'month')
      .startOf('month')

    const isBeforeEndDate = props.endDate ? nextMonth.isAfter(moment.utc(props.endDate), 'month') : false
    return isBeforeEndDate
  }, [currentYear, currentMonth, currentDay, props.endDate])

  const isBlockPrevMonth = useMemo(() => {
    if (currentYear === null || currentMonth === null || currentDay === null) return true
    const prevMonth = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .subtract(1, 'month')
      .startOf('month')

    const isAfterStartDate = props.startDate ? prevMonth.isBefore(moment.utc(props.startDate), 'month') : false
    return isAfterStartDate
  }, [currentYear, currentMonth, currentDay, props.startDate])

  const handleOnOpen = useCallback(() => {
    setIsOpen(true)
  }, [])
  const handleOnClose = useCallback(
    (isCheck?: boolean) => {
      setIsOpen(false)
      if (isCheck)
        if (!inputDay || !inputMonth || !inputYear) {
          onChange(null)
        }
    },
    [inputDay, inputMonth, inputYear, onChange]
  )
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (
        !/^\d$/.test(e.key) &&
        !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace', 'Delete', 'Tab'].includes(e.key) &&
        !e.ctrlKey &&
        !e.metaKey
      ) {
        e.preventDefault()
        return
      }
      if (e.key === 'Backspace' || e.key === 'Delete') {
        if (
          (activeSegment === 'day' && (!inputDay || inputDay === '')) ||
          (activeSegment === 'month' && (!inputMonth || inputMonth === '')) ||
          (activeSegment === 'year' && (!inputYear || inputYear === ''))
        ) {
          if (activeSegment === 'day') {
            setInputDay(null)
          } else if (activeSegment === 'month') {
            setInputMonth(null)
          } else if (activeSegment === 'year') {
            setInputYear(null)
          }
          const nextSegment = activeSegment === 'day' ? 'day' : activeSegment === 'month' ? 'day' : 'month'
          setActiveSegment(nextSegment)
          e.preventDefault()
        }
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        const nextSegment = activeSegment === 'day' ? 'year' : activeSegment === 'month' ? 'day' : 'month'
        setActiveSegment(nextSegment)
        e.preventDefault()
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        const nextSegment = activeSegment === 'day' ? 'month' : activeSegment === 'month' ? 'year' : 'day'
        setActiveSegment(nextSegment)
        e.preventDefault()
      }
    },
    [activeSegment, inputDay, inputMonth, inputYear]
  )

  const onChangeDate = useCallback(
    (timestamp: number, isBlur?: boolean, isChange?: boolean) => {
      const momentStartDate = props.startDate ? moment(props.startDate).utc() : null
      const momentEndDate = props.endDate ? moment(props.endDate).utc() : null
      const momentCheckDate = moment(timestamp).utc()
      let momentNewDate = moment(timestamp).utc()

      if (momentStartDate && momentCheckDate.isBefore(momentStartDate, 'day')) {
        momentNewDate = momentStartDate.startOf('day')
      } else if (momentEndDate && momentCheckDate.isAfter(momentEndDate, 'day')) {
        momentNewDate = momentEndDate.startOf('day')
      }
      if (valueMoment && valueMoment.isSame(momentNewDate, 'day')) return
      setValueMoment(momentNewDate)
      setCurrentDay(momentNewDate.date())
      setCurrentMonth(momentNewDate.month())
      setCurrentYear(momentNewDate.year())
      if (isChange) onChange(momentNewDate.valueOf())
      if (props.isOnClickClose && isBlur) {
        onBlur?.()
        handleOnClose()
      }
    },
    [props.startDate, props.endDate, props.isOnClickClose, valueMoment, onChange, onBlur, handleOnClose]
  )
  const onNextMonth = useCallback(() => {
    if (currentYear === null || currentMonth === null || currentDay === null) return
    const newDate = moment.utc().year(currentYear).month(currentMonth).date(currentDay).add(1, 'month')
    onChangeDate(newDate.valueOf(), false, false)
  }, [currentDay, currentMonth, currentYear, onChangeDate])

  const onPrevMonth = useCallback(() => {
    if (currentYear === null || currentMonth === null || currentDay === null) return
    const newDate = moment.utc().year(currentYear).month(currentMonth).date(currentDay).subtract(1, 'month')
    onChangeDate(newDate.valueOf(), false, false)
  }, [currentDay, currentMonth, currentYear, onChangeDate])

  useEffect(() => {
    const valueMoment = props.value ? moment(props.value).utc() : moment.utc()
    if (props.value !== null && props.value !== undefined) {
      setInputDay(fixOneToZero(valueMoment.date().toString()))
      setInputMonth(fixOneToZero((valueMoment.month() + 1).toString()))
      setInputYear(valueMoment.year().toString())
    } else {
      setInputDay(null)
      setInputMonth(null)
      setInputYear(null)
    }
    onChangeDate(valueMoment.valueOf(), false, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value, isOpen])

  useEffect(() => {
    if (activeSegment !== null) {
      setTimeout(() => {
        if (activeSegment === 'day') {
          refDay.current?.focus()
        } else if (activeSegment === 'month') {
          refMonth.current?.focus()
        } else if (activeSegment === 'year') {
          refYear.current?.focus()
        }
      }, 0)
    }
  }, [activeSegment])

  useEffect(() => {
    if (isOpen) {
      setActiveSegment('day')
    } else {
      setActiveSegment(null)
    }
  }, [isOpen])

  return (
    <Outside
      onOutsideClick={event => {
        if (isOpen) props?.onBlur?.(event)
        handleOnClose(true)
      }}
    >
      <DateWrapper
        $size={props.size}
        $genre={props.genre}
        $sx={props.sx}
        $isDisabled={props?.isDisabled}
        $isMinWidth={props?.isMinWidth}
        $radius={radius}
        $parentListHeight={height}
        onFocus={event => {
          if (props?.isDisabled) return
          if (props.onFocus) props.onFocus?.(event)
          handleOnOpen()
        }}
      >
        <DateInputWrapper tabIndex={0} $genre={props.genre} $size={props.size} $error={props.error}>
          <DateInput
            $genre={props.genre}
            $size={props.size}
            onKeyDown={handleKeyDown}
            value={inputDay ?? ''}
            onValueChange={(values, sourceInfo) => {
              if (sourceInfo.source !== 'event') return
              const value = values.formattedValue
              setInputMonth(null)
              setInputYear(null)

              if (Number(value) && Number(value) > 31) {
                setInputDay('31')
              } else {
                setInputDay(value)
              }
              if (value !== '' && !value.includes('_')) {
                setActiveSegment('month')
              }
            }}
            getInputRef={(ref: HTMLInputElement | null) => {
              if (ref && !refDay.current) {
                refDay.current = ref
              }
            }}
            onFocus={e => {
              setActiveSegment('day')
              e.target.select()
            }}
            onBlur={() => {
              if (inputDay && inputDay.includes('_')) setInputDay(fixUnderscoreToZero(inputDay))
            }}
            placeholder={props.locale.inputs.day}
            type="text"
            format="##"
            mask="_"
            style={{ width: '20px' }}
          />
          <span style={{ width: '4px', pointerEvents: 'none', textAlign: 'center' }}>.</span>
          <DateInput
            $genre={props.genre}
            $size={props.size}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              if (inputMonth && inputMonth.includes('_')) setInputMonth(fixUnderscoreToZero(inputMonth))
            }}
            value={inputMonth ?? ''}
            placeholder={props.locale.inputs.month}
            onValueChange={(values, sourceInfo) => {
              if (sourceInfo.source !== 'event') return
              const value = values.formattedValue
              setInputYear(null)
              if (Number(value) > 12) {
                setInputMonth('12')
              } else {
                setInputMonth(value)
              }
              if (value !== '' && !value.includes('_')) {
                setActiveSegment('year')
              }
            }}
            getInputRef={(ref: HTMLInputElement | null) => {
              if (ref && !refMonth.current) {
                refMonth.current = ref
              }
            }}
            onFocus={e => {
              setActiveSegment('month')
              e.target.select()
            }}
            type="text"
            format="##"
            mask="_"
            style={{ width: '20px' }}
          />
          <span style={{ width: '6px', pointerEvents: 'none', textAlign: 'center' }}>.</span>
          <DateInput
            placeholder={props.locale.inputs.year}
            $genre={props.genre}
            $size={props.size}
            onKeyDown={handleKeyDown}
            value={inputYear ?? ''}
            onValueChange={(values, sourceInfo) => {
              if (sourceInfo.source !== 'event') return
              const value = values.formattedValue
              setInputYear(value)

              if (value !== '' && !value.includes('_')) {
                const day = inputDay ? Number(inputDay) : NaN
                const month = inputMonth ? Number(inputMonth) : NaN
                const year = value ? Number(value) : NaN
                if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                  const m = moment.utc(`${day}.${month}.${year}`, 'D.M.YYYY', true).startOf('day')
                  if (m.isValid()) {
                    onChangeDate(m.valueOf(), false, true)
                  }
                }
              }
            }}
            getInputRef={(ref: HTMLInputElement | null) => {
              if (ref && !refYear.current) {
                refYear.current = ref
              }
            }}
            onFocus={e => {
              setActiveSegment('year')
              e.target.select()
            }}
            type="text"
            format="####"
            mask="_"
            style={{ width: '44px' }}
          />
        </DateInputWrapper>

        <AnimatePresence>
          {isOpen ? (
            <DateDropdownListParent
              initial={{ opacity: 0, height: 0 }}
              animate={{
                height: `${height}px`,
                display: 'flex',
                opacity: 1,
                zIndex: '1'
              }}
              exit={{
                height: '0px',
                display: 'none',
                opacity: 0,
                zIndex: 'auto'
              }}
              transition={{ duration: 0.2 }}
              $genre={props.genre}
              $size={props.size}
              style={{
                height: `${height}px`
              }}
            >
              <DateDropdownList $isInputEffect={props.isInputEffect} $genre={props.genre} $size={props.size}>
                <Stack
                  sx={{
                    default: {
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }
                  }}
                >
                  <Button
                    type="button"
                    isRadius
                    icons={[
                      {
                        name: 'Arrow2',
                        type: 'id',
                        turn: 90
                      }
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
                          .startOf('day')
                          .utc()
                          .valueOf()}
                        onChange={(timestamp: number) => {
                          onChangeDate(timestamp, false, true)
                        }}
                        startDate={props.startDate}
                        endDate={props.endDate}
                        sx={{ default: { width: '90px' } }}
                      />
                      <SelectYear
                        genre={props.genre}
                        size={'small'}
                        value={moment
                          .utc()
                          .year(currentYear)
                          .month(currentMonth)
                          .date(currentDay)
                          .startOf('day')
                          .utc()
                          .valueOf()}
                        onChange={(timestamp: number) => {
                          onChangeDate(timestamp, false, true)
                        }}
                        startDate={props.startDate}
                        endDate={props.endDate}
                        sx={{ default: { width: '70px' } }}
                      />
                    </Stack>
                  ) : null}
                  <Button
                    type="button"
                    onClick={() => !isBlockNextMonth && onNextMonth()}
                    isWidthAsHeight
                    isRadius
                    icons={[
                      {
                        name: 'Arrow2',
                        type: 'id',
                        turn: -90
                      }
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
                      type="button"
                      $genre={props.genre}
                      $size={props.size}
                      $row={daysInMonth[0].weekOfMonth - 1}
                      $column={index + 1}
                      key={index}
                    >
                      {e.label}
                    </DateDropdownDayOfWeek>
                  ))}
                  {daysInMonth.map(day =>
                    !day.isDisabled ? (
                      <DateDropdownDay
                        type="button"
                        $genre={props.genre}
                        $size={props.size}
                        $row={day.weekOfMonth + 1}
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
                    ) : null
                  )}
                </DateDropdownDays>
              </DateDropdownList>
            </DateDropdownListParent>
          ) : null}
        </AnimatePresence>
      </DateWrapper>
      {props?.error ? <ErrorMessage {...props?.error} size={props?.error.size ?? props.size} /> : null}
    </Outside>
  )
}
function fixUnderscoreToZero(str: string) {
  if (str.length === 2) {
    return '0' + str[0]
  }
  return str.replace(/_/g, '0')
}

function fixOneToZero(str: string) {
  if (str.length === 1) {
    return '0' + str[0]
  }
  return str
}
