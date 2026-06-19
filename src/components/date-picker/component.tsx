/** biome-ignore-all lint/a11y/useKeyWithClickEvents: Date segments mirror the hidden keyboard input. */
import { Button } from '@local/components/button';
import { ErrorMessage } from '@local/components/error';
import { Popover, usePopover } from '@local/components/popover';
import { SelectMonth, SelectYear } from '@local/components/select';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { CSS_CLASS, CSS_VARS, CSS_VARS_RAW, EXTRA_VALUE } from '@local/styles/utils';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import moment, { Moment } from 'moment';
import {
  ChangeEvent,
  CSSProperties,
  Fragment,
  KeyboardEvent,
  RefObject,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

import {
  DatePickerVariant,
  IDatePicker,
  IDatePickerDay,
  IDatePickerMode,
  IDatePickerTranslateWeek,
  IDatePickerType,
} from './component.types';

type DatePickerInput = Record<DatePickerVariant, string>;

type DatePickerPopoverApi = ReturnType<typeof usePopover>;

type DatePickerWeekDay = {
  index: number;
  label: string;
};

type DatePickerInputPlaceholders = Record<DatePickerVariant, string>;

type DatePickerContextValue = {
  activeSegment: DatePickerVariant | null;
  activateSegment: (segment: DatePickerVariant) => void;
  ariaLabel: IDatePicker['ariaLabel'];
  autoComplete: IDatePicker['autoComplete'];
  classNamePopover: string;
  classNameTypography: string;
  classNameTypographyDay: string;
  classNameWrapper: string;
  clearActiveSegment: () => void;
  clearDate: () => void;
  close: DatePickerPopoverApi['close'];
  control: IDatePicker['control'];
  dateMax: IDatePicker['dateMax'];
  dateMin: IDatePicker['dateMin'];
  daysInMonth: IDatePickerDay[];
  daysInWeek: DatePickerWeekDay[];
  error: IDatePicker['error'];
  floatingStyles: DatePickerPopoverApi['floatingStyles'];
  genre: IDatePicker['genre'];
  id: IDatePicker['id'];
  input: DatePickerInput;
  inputPlaceholders: DatePickerInputPlaceholders;
  isBlockNextMonth: boolean;
  isBlockPrevMonth: boolean;
  isDisabled: IDatePicker['isDisabled'];
  isError: boolean;
  isHasInput: boolean;
  isHasValue: boolean;
  isOpen: boolean;
  isReadOnly: IDatePicker['isReadOnly'];
  isShowButtonList: boolean;
  isShowClearButton: IDatePicker['isShowClearButton'];
  isShowPlaceholder: boolean;
  labelPlaceholder: IDatePicker['labelPlaceholder'];
  localeMonths: IDatePicker['locale']['months'];
  mode: IDatePickerMode;
  monthSelectValue: number;
  name: IDatePicker['name'];
  onBlurInput: () => void;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocusInput: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onNextMonth: () => void;
  onPrevMonth: () => void;
  onSelectDay: (timestamp: number) => void;
  onSelectMonthYear: (timestamp: number | null) => void;
  refFloating: DatePickerPopoverApi['refFloating'];
  refHiddenInput: RefObject<HTMLInputElement | null>;
  refReference: DatePickerPopoverApi['refReference'];
  refSelectMonth: RefObject<HTMLElement | null>;
  refSelectYear: RefObject<HTMLElement | null>;
  rows: number;
  size: IDatePicker['size'];
  stylePopover: CSSProperties | undefined;
  styleTypography: CSSProperties | undefined;
  styleTypographyDay: CSSProperties | undefined;
  styleWrapper: CSSProperties | undefined;
  toggle: DatePickerPopoverApi['toggle'];
  type: IDatePickerType;
  yearSelectValue: number;
};

const weekOrder: IDatePickerTranslateWeek['value'][] = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

const inputSegments: IDatePickerMode = [DatePickerVariant.DD, DatePickerVariant.MM, DatePickerVariant.YYYY];

const defaultMode: IDatePickerMode = inputSegments;

const emptyInput: DatePickerInput = {
  [DatePickerVariant.DD]: '',
  [DatePickerVariant.MM]: '',
  [DatePickerVariant.YYYY]: '',
};

const DatePickerContext = createContext<DatePickerContextValue | null>(null);

function useDatePickerSelector<T>(selector: (value: DatePickerContextValue) => T): T {
  return useContextSelector(DatePickerContext, (value) => {
    if (!value) {
      throw new Error('DatePicker context is not available.');
    }

    return selector(value);
  });
}

export const DatePicker = (props: IDatePicker) => {
  const {
    ariaLabel,
    autoComplete,
    className,
    classNamePopover: classNamePopoverProp,
    control,
    dateDefault,
    dateMax,
    dateMin,
    error,
    genre,
    id,
    isBold,
    isDisabled,
    isOnClickClose,
    isReadOnly,
    isShowClearButton,
    labelPlaceholder,
    locale,
    mode: modeProp,
    name,
    onBlur,
    onChange,
    onFocus,
    size,
    style,
    stylePopover: stylePopoverProp,
    sxTypography,
    type: typeProp,
  } = props;

  const [valueMoment, setValueMoment] = useState<null | Moment>(null);
  const [dateDefaultMoment, setDateDefaultMoment] = useState<Moment>(moment(dateDefault).utc());
  const [input, setInput] = useState<DatePickerInput>(emptyInput);
  const [activeSegment, setActiveSegment] = useState<DatePickerVariant | null>(null);
  const [isError, setIsError] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const refInputValue = useRef(input);
  const refIsHasValueOnce = useRef(false);
  const refPrevValue = useRef('');
  const refSelectMonth = useRef<HTMLElement>(null);
  const refSelectYear = useRef<HTMLElement>(null);
  const refHiddenInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    refInputValue.current = input;
  }, [input]);

  const isHasInput = useMemo(
    () =>
      input[DatePickerVariant.DD] !== '' || input[DatePickerVariant.MM] !== '' || input[DatePickerVariant.YYYY] !== '',
    [input],
  );

  const setInputValues = useCallback((value: DatePickerInput) => {
    setInput((prev) => (isSameDatePickerInput(prev, value) ? prev : value));
  }, []);

  const onClearInput = useCallback(() => {
    setInputValues(emptyInput);
  }, [setInputValues]);

  const mode: IDatePickerMode = useMemo(() => {
    if (!modeProp || modeProp.length === 0) {
      return defaultMode;
    }

    const hasDuplicates = new Set(modeProp).size !== modeProp.length;

    if (hasDuplicates) {
      return defaultMode;
    }

    return modeProp;
  }, [modeProp]);

  const type: IDatePickerType = useMemo(() => {
    if (!typeProp) {
      return 'manualAndSelect';
    }

    return typeProp;
  }, [typeProp]);

  const inputPlaceholders = useMemo<DatePickerInputPlaceholders>(
    () => ({
      [DatePickerVariant.DD]: locale.inputs.day,
      [DatePickerVariant.MM]: locale.inputs.month,
      [DatePickerVariant.YYYY]: locale.inputs.year,
    }),
    [locale.inputs.day, locale.inputs.month, locale.inputs.year],
  );

  const setSegmentValue = useCallback((segment: DatePickerVariant, value: string) => {
    setInput((prev) => (prev[segment] === value ? prev : { ...prev, [segment]: value }));
  }, []);

  const activateSegment = useCallback((segment: DatePickerVariant) => {
    setActiveSegment(segment);
  }, []);

  const clearActiveSegment = useCallback(() => {
    setActiveSegment(null);
  }, []);

  const activateNextSegment = useCallback(
    (segment: DatePickerVariant) => {
      setActiveSegment(getNextSegment(segment, mode));
    },
    [mode],
  );

  const activatePrevSegment = useCallback(
    (segment: DatePickerVariant) => {
      setActiveSegment(getPrevSegment(segment, mode));
    },
    [mode],
  );

  const daysInWeek = useMemo<DatePickerWeekDay[]>(() => {
    return weekOrder.map((key, index) => {
      const found = locale.weeks.find((w) => w.value === key);
      return {
        index,
        label: found?.localeShort ?? key.toUpperCase(),
      };
    });
  }, [locale.weeks]);

  const daysInMonth: IDatePickerDay[] = useMemo(() => {
    const dateToday = moment.utc();
    const dateValue = valueMoment ?? dateDefaultMoment;
    const dateStartOfMonth = dateValue.clone().startOf('month');
    const dateEndOfMonth = dateValue.clone().endOf('month');
    const dateMinMoment = dateMin ? moment.utc(dateMin) : null;
    const dateMaxMoment = dateMax ? moment.utc(dateMax) : null;

    const dateVisibleDayFirst = dateStartOfMonth.clone().subtract(dateStartOfMonth.isoWeekday() - 1, 'days');
    const dateVisibleDayLast = dateEndOfMonth.clone().add(7 - dateEndOfMonth.isoWeekday(), 'days');

    const result: IDatePickerDay[] = [];
    const dateCurrent = dateVisibleDayFirst.clone();

    while (dateCurrent <= dateVisibleDayLast) {
      const isCurrentMonth = dateCurrent.isBetween(dateStartOfMonth, dateEndOfMonth, 'day', '[]');
      result.push({
        value: dateCurrent.valueOf(),
        labelString: dateCurrent.format('dd'),
        labelNumber: dateCurrent.date(),
        dayOfWeek: dateCurrent.isoWeekday(),
        isWeekend: [6, 7].includes(dateCurrent.isoWeekday()),
        weekOfMonth: Math.ceil((result.length + 1) / 7),
        isToday: dateCurrent.isSame(dateToday, 'day'),
        isCurrentMonth,
        isChoice: dateCurrent.valueOf() === valueMoment?.valueOf(),
        isDisabled: !!(
          (dateMinMoment && dateCurrent.isBefore(dateMinMoment, 'day')) ||
          (dateMaxMoment && dateCurrent.isAfter(dateMaxMoment, 'day'))
        ),
      });

      dateCurrent.add(1, 'day');
    }

    return result;
  }, [valueMoment, dateDefaultMoment, dateMax, dateMin]);

  const rows = useMemo(() => getCountSevens(daysInMonth.length) + 1, [daysInMonth]);
  const sizeRadius = useMemo(() => CSS_VARS.sizeValue[size].radius, [size]);
  const sizePadding = useMemo(() => CSS_VARS.sizeValue[size].padding, [size]);
  const isHasValue = useMemo(() => valueMoment !== null, [valueMoment]);

  const isBlockNextMonth = useMemo(() => {
    const nextMonth = (valueMoment ?? dateDefaultMoment).clone().add(1, 'month').startOf('month');
    const isBeforeEndDate = dateMax ? nextMonth.isAfter(moment.utc(dateMax), 'month') : false;
    return isBeforeEndDate;
  }, [valueMoment, dateMax, dateDefaultMoment]);

  const isBlockPrevMonth = useMemo(() => {
    const prevMonth = (valueMoment ?? dateDefaultMoment).clone().subtract(1, 'month').startOf('month');
    const isAfterStartDate = dateMin ? prevMonth.isBefore(moment.utc(dateMin), 'month') : false;
    return isAfterStartDate;
  }, [valueMoment, dateMin, dateDefaultMoment]);

  const onFocusPopover = useCallback(() => {
    onFocus?.();
  }, [onFocus]);

  const onBlurPopover = useCallback(() => {
    onBlur?.();
  }, [onBlur]);

  const refsExcludeClickOutside = useMemo(() => [refSelectMonth, refSelectYear], []);

  const { isOpen, refReference, refFloating, floatingStyles, close, toggle } = usePopover({
    isFocusTrap: true,
    placement: 'bottom-start',
    offset: sizePadding,
    mode: 'independence',
    isClickOutside: true,
    refsExcludeClickOutside,
    isDisabled: isDisabled || isReadOnly,
    onFocus: onFocusPopover,
    onBlur: onBlurPopover,
    onBlurReference: clearActiveSegment,
  });

  const isShowPlaceholder = useMemo(() => {
    return !!(
      !isInputFocused &&
      !isHasValue &&
      labelPlaceholder &&
      (type !== 'select' ? !isOpen : true) &&
      !isHasInput &&
      !activeSegment
    );
  }, [isInputFocused, isHasValue, isOpen, labelPlaceholder, isHasInput, activeSegment, type]);

  const onChangeDate = useCallback(
    (timestamp: number, isAddLeadingZeros: boolean, input?: DatePickerInput) => {
      const momentNewDate = moment(timestamp).utc();

      const dd = momentNewDate.clone().date().toString();
      const mm = (momentNewDate.clone().month() + 1).toString();

      const ddWithZero = dd.padStart(2, '0');
      const mmWithZero = mm.padStart(2, '0');

      const yyyy = momentNewDate.clone().year().toString();
      const ddInput = input?.[DatePickerVariant.DD];
      const mmInput = input?.[DatePickerVariant.MM];
      const yyyyInput = input?.[DatePickerVariant.YYYY];

      const isSameInput = ddWithZero === ddInput && mmWithZero === mmInput && yyyyInput === yyyy;
      const isSameMoment = valueMoment?.isSame(momentNewDate, 'day');

      if (!isSameMoment) {
        setValueMoment(momentNewDate);
        onChange(momentNewDate.valueOf());
      }

      const shouldUpdateInput = input ? !isSameInput : !isSameMoment;

      if (shouldUpdateInput) {
        setInputValues({
          [DatePickerVariant.DD]: isAddLeadingZeros ? ddWithZero : dd,
          [DatePickerVariant.MM]: isAddLeadingZeros ? mmWithZero : mm,
          [DatePickerVariant.YYYY]: yyyy,
        });
      }
    },
    [valueMoment, onChange, setInputValues],
  );

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

      if (!activeSegment) {
        return;
      }

      if (isDigit) {
        getDigitKey(key, activeSegment, input, setSegmentValue, activateNextSegment);
        e.preventDefault();
        e.stopPropagation();
      }

      if (key === 'Tab') {
        if (mode[mode.length - 1] !== activeSegment) {
          e.preventDefault();
          activateNextSegment(activeSegment);
        } else {
          refHiddenInput?.current?.blur();
        }
      }

      if (key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
      }

      if (key === 'Backspace' || key === 'Delete') {
        const current = input[activeSegment];

        if (current !== '') {
          setSegmentValue(activeSegment, current.length === 1 ? '' : current.slice(0, -1));
        } else {
          activatePrevSegment(activeSegment);
        }

        e.preventDefault();
        e.stopPropagation();
      }

      if (key === 'ArrowLeft' || key === 'ArrowDown') {
        e.preventDefault();
        activatePrevSegment(activeSegment);
      }

      if (key === 'ArrowRight' || key === 'ArrowUp') {
        e.preventDefault();
        activateNextSegment(activeSegment);
      }
    },
    [activeSegment, activateNextSegment, activatePrevSegment, input, mode, setSegmentValue],
  );

  const onNextMonth = useCallback(() => {
    const newDate = (valueMoment ?? dateDefaultMoment).clone().add(1, 'month');
    onChangeDate(newDate.valueOf(), true);
  }, [valueMoment, onChangeDate, dateDefaultMoment]);

  const onPrevMonth = useCallback(() => {
    const newDate = (valueMoment ?? dateDefaultMoment).clone().subtract(1, 'month');
    onChangeDate(newDate.valueOf(), true);
  }, [valueMoment, onChangeDate, dateDefaultMoment]);

  const onFocusInput = useCallback(() => {
    if (type === 'select') return;
    setIsInputFocused(true);
    setActiveSegment((current) => current ?? DatePickerVariant.DD);
  }, [type]);

  const onBlurInput = useCallback(() => {
    setIsInputFocused(false);

    if (!isOpen) {
      onBlur?.();
    }
  }, [isOpen, onBlur]);

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const result = getParseDateString(value);

      if (result) {
        setInputValues({
          [DatePickerVariant.DD]: String(result.day).padStart(2, '0'),
          [DatePickerVariant.MM]: String(result.month).padStart(2, '0'),
          [DatePickerVariant.YYYY]: String(result.year),
        });
        if (refHiddenInput.current) refHiddenInput.current.value = '';
        return;
      }

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

      if (refHiddenInput.current) refHiddenInput.current.value = '';
    },
    [onKeyDown, setInputValues],
  );

  useEffect(() => {
    if (isHasValue && !refIsHasValueOnce.current) refIsHasValueOnce.current = true;
  }, [isHasValue]);

  useEffect(() => {
    setDateDefaultMoment(moment(dateDefault).utc());
  }, [dateDefault]);

  useEffect(() => {
    setValueMoment(props.value || props.defaultValue ? moment(props.value ?? props.defaultValue).utc() : null);
    if (props.value) {
      const m = moment(props.value).utc();
      setInputValues({
        [DatePickerVariant.DD]: m.date().toString().padStart(2, '0'),
        [DatePickerVariant.MM]: (m.month() + 1).toString().padStart(2, '0'),
        [DatePickerVariant.YYYY]: m.year().toString(),
      });
    }
  }, [props.value, props.defaultValue, setInputValues]);

  useEffect(() => {
    if (!activeSegment)
      getValidateInput(
        input,
        (value) => {
          onChangeDate(value, true, input);
          setIsError(false);
        },
        () => {
          onChange(null);
          setIsError(true);
        },
        (isHasInput) => {
          if (!isHasInput) {
            if (refIsHasValueOnce.current) {
              onChange(null);
              refIsHasValueOnce.current = false;
            }
            setIsError(false);
          }
        },
      );
  }, [onChangeDate, onChange, input, activeSegment]);

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
  }, [onClearInput, input, isOpen, isInputFocused, onChange, isHasInput, activeSegment]);

  useEffect(() => {
    if (!activeSegment) return;
    getValidateInput(
      refInputValue.current,
      (value) => {
        onChangeDate(value, true, refInputValue.current);
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
  }, [onChangeDate, activeSegment]);

  useEffect(() => {
    if (activeSegment) {
      close();
      refHiddenInput?.current?.focus();
    }
  }, [activeSegment, close]);

  const monthSelectValue = useMemo(
    () => (valueMoment ?? dateDefaultMoment).clone().startOf('month').utc().valueOf(),
    [valueMoment, dateDefaultMoment],
  );

  const yearSelectValue = useMemo(
    () => (valueMoment ?? dateDefaultMoment).clone().startOf('year').utc().valueOf(),
    [valueMoment, dateDefaultMoment],
  );

  const clearDate = useCallback(() => {
    onChange(null);
    onClearInput();
    setIsError(false);
  }, [onChange, onClearInput]);

  const onSelectDay = useCallback(
    (timestamp: number) => {
      onChangeDate(timestamp, true);
      if (isOnClickClose) {
        close();
      }
    },
    [onChangeDate, isOnClickClose, close],
  );

  const onSelectMonthYear = useCallback(
    (timestamp: number | null) => {
      if (timestamp) onChangeDate(timestamp, true);
    },
    [onChangeDate],
  );

  const { className: classNameTypographyDay, style: styleTypographyDay } = useTypographyStyles({
    sx: {
      variant: EXTRA_VALUE.sizeToController.small,
      weight: '500',
      ...sxTypography,
    },
  });

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: {
      size: 16,
      weight: isBold ? '700' : '400',
      ...sxTypography,
    },
  });

  const { className: classNameWrapper, style: styleWrapper } = useMemo(() => {
    const classNameWrapper = setClasses([CSS_CLASS.component.datePicker.wrapper, className]);
    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.datePicker.padding] = CSS_VARS.size[size].padding;
    vars[CSS_VARS_RAW.component.datePicker.inputBackground] = CSS_VARS.genre.select[genre].background.index;
    vars[CSS_VARS_RAW.component.datePicker.inputBackgroundHover] = CSS_VARS.genre.input[genre].background;
    vars[CSS_VARS_RAW.component.datePicker.inputSegmentBackgroundActive] = CSS_VARS.palette.fillQuaternaryLight;
    vars[CSS_VARS_RAW.component.datePicker.inputBorderColor] = CSS_VARS.genre.input[genre].border;
    vars[CSS_VARS_RAW.component.datePicker.inputBorderColorHover] = CSS_VARS.genre.input[genre].border;
    vars[CSS_VARS_RAW.component.datePicker.inputColor] = CSS_VARS.genre.input[genre].color;
    vars[CSS_VARS_RAW.component.datePicker.inputColorHover] = CSS_VARS.genre.input[genre].color;
    vars[CSS_VARS_RAW.component.datePicker.inputPadding] = isShowPlaceholder
      ? `0px ${CSS_VARS.size[size].padding}`
      : `0px ${CSS_VARS.size[size].padding} 0px ${CSS_VARS.sizeValue[size].padding - 2}px`;
    vars[CSS_VARS_RAW.component.datePicker.inputHeight] = CSS_VARS.size[size].height;
    vars[CSS_VARS_RAW.component.datePicker.inputRadius] = CSS_VARS.size[size].radius;
    vars[CSS_VARS_RAW.component.datePicker.inputValueColor] = CSS_VARS.genre.input[genre].color;
    vars[CSS_VARS_RAW.component.datePicker.inputPlaceholderColor] = CSS_VARS.genre.input[genre].placeholder;
    vars[CSS_VARS_RAW.component.datePicker.buttonToggleRight] = `${CSS_VARS.size[size].padding}`;
    vars[CSS_VARS_RAW.component.datePicker.buttonClearRight] =
      `${CSS_VARS.sizeValue[size].padding * 2 + CSS_VARS.sizeValue[size].height}px`;

    const styleWrapper = setStyles([Object.keys(vars).length ? vars : undefined, style]);

    return { className: classNameWrapper, style: styleWrapper };
  }, [className, style, isShowPlaceholder, genre, size]);

  const { className: classNamePopover, style: stylePopover } = useMemo(() => {
    const classNamePopover = setClasses([classNamePopoverProp]);
    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.datePicker.dayRadius] = `${sizeRadius}px`;
    vars[CSS_VARS_RAW.component.datePicker.dayBackgroundRest] = CSS_VARS.genre.datepicker[genre].background.index;
    vars[CSS_VARS_RAW.component.datePicker.dayBackgroundHover] = CSS_VARS.genre.datepicker[genre].background.hover;
    vars[CSS_VARS_RAW.component.datePicker.dayBackgroundWeekend] = CSS_VARS.genre.datepicker[genre].background.weekend;
    vars[CSS_VARS_RAW.component.datePicker.dayBackgroundToday] = CSS_VARS.genre.datepicker[genre].background.today;
    vars[CSS_VARS_RAW.component.datePicker.dayBackgroundChoice] = CSS_VARS.genre.datepicker[genre].background.choice;
    vars[CSS_VARS_RAW.component.datePicker.dayBorderRest] = CSS_VARS.genre.datepicker[genre].border.index;
    vars[CSS_VARS_RAW.component.datePicker.dayBorderWeekend] = CSS_VARS.genre.datepicker[genre].border.weekend;
    vars[CSS_VARS_RAW.component.datePicker.dayBorderToday] = CSS_VARS.genre.datepicker[genre].border.today;
    vars[CSS_VARS_RAW.component.datePicker.dayBorderChoice] = CSS_VARS.genre.datepicker[genre].border.choice;
    vars[CSS_VARS_RAW.component.datePicker.dayBorderHover] = CSS_VARS.genre.datepicker[genre].border.hover;
    vars[CSS_VARS_RAW.component.datePicker.dayColorRest] = CSS_VARS.genre.datepicker[genre].color.index;
    vars[CSS_VARS_RAW.component.datePicker.dayColorHover] = CSS_VARS.genre.datepicker[genre].color.hover;
    vars[CSS_VARS_RAW.component.datePicker.dayColorWeekend] = CSS_VARS.genre.datepicker[genre].color.weekend;
    vars[CSS_VARS_RAW.component.datePicker.dayColorToday] = CSS_VARS.genre.datepicker[genre].color.today;
    vars[CSS_VARS_RAW.component.datePicker.dayColorChoice] = CSS_VARS.genre.datepicker[genre].color.choice;

    const stylePopover = setStyles([
      Object.keys(vars).length ? vars : undefined,
      {
        background: CSS_VARS.genre.popover[genre].background,
        border: `solid 1px ${CSS_VARS.genre.input[genre].border}`,
      },
      stylePopoverProp,
    ]);

    return { className: classNamePopover, style: stylePopover };
  }, [classNamePopoverProp, stylePopoverProp, genre, sizeRadius]);

  const isShowButtonList = useMemo(() => {
    return type !== 'manual' || !!(isShowClearButton && (isHasValue || isHasInput) && !isDisabled && !isReadOnly);
  }, [type, isHasInput, isHasValue, isShowClearButton, isDisabled, isReadOnly]);

  const contextValue = useMemo<DatePickerContextValue>(
    () => ({
      activeSegment,
      activateSegment,
      ariaLabel,
      autoComplete,
      classNamePopover,
      classNameTypography,
      classNameTypographyDay,
      classNameWrapper,
      clearActiveSegment,
      clearDate,
      close,
      control,
      dateMax,
      dateMin,
      daysInMonth,
      daysInWeek,
      error,
      floatingStyles,
      genre,
      id,
      input,
      inputPlaceholders,
      isBlockNextMonth,
      isBlockPrevMonth,
      isDisabled,
      isError,
      isHasInput,
      isHasValue,
      isOpen,
      isReadOnly,
      isShowButtonList,
      isShowClearButton,
      isShowPlaceholder,
      labelPlaceholder,
      localeMonths: locale.months,
      mode,
      monthSelectValue,
      name,
      onBlurInput,
      onChangeInput,
      onFocusInput,
      onKeyDown,
      onNextMonth,
      onPrevMonth,
      onSelectDay,
      onSelectMonthYear,
      refFloating,
      refHiddenInput,
      refReference,
      refSelectMonth,
      refSelectYear,
      rows,
      size,
      stylePopover,
      styleTypography,
      styleTypographyDay,
      styleWrapper,
      toggle,
      type,
      yearSelectValue,
    }),
    [
      activeSegment,
      activateSegment,
      ariaLabel,
      autoComplete,
      classNamePopover,
      classNameTypography,
      classNameTypographyDay,
      classNameWrapper,
      clearActiveSegment,
      clearDate,
      close,
      control,
      dateMax,
      dateMin,
      daysInMonth,
      daysInWeek,
      error,
      floatingStyles,
      genre,
      id,
      input,
      inputPlaceholders,
      isBlockNextMonth,
      isBlockPrevMonth,
      isDisabled,
      isError,
      isHasInput,
      isHasValue,
      isOpen,
      isReadOnly,
      isShowButtonList,
      isShowClearButton,
      isShowPlaceholder,
      labelPlaceholder,
      locale.months,
      mode,
      monthSelectValue,
      name,
      onBlurInput,
      onChangeInput,
      onFocusInput,
      onKeyDown,
      onNextMonth,
      onPrevMonth,
      onSelectDay,
      onSelectMonthYear,
      refFloating,
      refReference,
      rows,
      size,
      stylePopover,
      styleTypography,
      styleTypographyDay,
      styleWrapper,
      toggle,
      type,
      yearSelectValue,
    ],
  );

  return (
    <DatePickerContext.Provider value={contextValue}>
      <DatePickerContent />
    </DatePickerContext.Provider>
  );
};

const DatePickerContent = memo(() => {
  const classNameWrapper = useDatePickerSelector((value) => value.classNameWrapper);
  const styleWrapper = useDatePickerSelector((value) => value.styleWrapper);

  return (
    <>
      <div className={classNameWrapper} style={styleWrapper} tabIndex={-1}>
        <DatePickerInputWrapper />
      </div>
      <DatePickerPopover />
      <DatePickerError />
    </>
  );
});

const DatePickerInputWrapper = memo(() => {
  const activeSegment = useDatePickerSelector((value) => value.activeSegment);
  const activateSegment = useDatePickerSelector((value) => value.activateSegment);
  const control = useDatePickerSelector((value) => value.control);
  const isDisabled = useDatePickerSelector((value) => value.isDisabled);
  const isOpen = useDatePickerSelector((value) => value.isOpen);
  const isReadOnly = useDatePickerSelector((value) => value.isReadOnly);
  const refReference = useDatePickerSelector((value) => value.refReference);
  const toggle = useDatePickerSelector((value) => value.toggle);
  const type = useDatePickerSelector((value) => value.type);

  const handleClick = useCallback(() => {
    if (type === 'select') {
      toggle();
      return;
    }

    if (!activeSegment && !isReadOnly) {
      activateSegment(DatePickerVariant.DD);
    }
  }, [activeSegment, activateSegment, isReadOnly, toggle, type]);

  return (
    <div
      ref={refReference as RefObject<HTMLDivElement | null>}
      tabIndex={-1}
      onClick={handleClick}
      className={setClasses([
        CSS_CLASS.component.datePicker.inputWrapper,
        CSS_CLASS.transition.color,
        CSS_CLASS.control[
          isDisabled ? 'none' : (control ?? (isOpen || activeSegment ? 'boxShadowSelect' : 'boxShadowOnlyHover'))
        ],
      ])}
    >
      <DatePickerHiddenInput />
      <DatePickerDisplay />
      <DatePickerButtonList />
    </div>
  );
});

const DatePickerHiddenInput = memo(() => {
  const ariaLabel = useDatePickerSelector((value) => value.ariaLabel);
  const autoComplete = useDatePickerSelector((value) => value.autoComplete);
  const id = useDatePickerSelector((value) => value.id);
  const isDisabled = useDatePickerSelector((value) => value.isDisabled);
  const isReadOnly = useDatePickerSelector((value) => value.isReadOnly);
  const name = useDatePickerSelector((value) => value.name);
  const onBlurInput = useDatePickerSelector((value) => value.onBlurInput);
  const onChangeInput = useDatePickerSelector((value) => value.onChangeInput);
  const onFocusInput = useDatePickerSelector((value) => value.onFocusInput);
  const onKeyDown = useDatePickerSelector((value) => value.onKeyDown);
  const refHiddenInput = useDatePickerSelector((value) => value.refHiddenInput);
  const type = useDatePickerSelector((value) => value.type);

  if (type === 'select') {
    return null;
  }

  return (
    <input
      name={name}
      aria-label={ariaLabel ?? name}
      autoComplete={autoComplete}
      id={id}
      ref={refHiddenInput}
      type='tel'
      inputMode='numeric'
      tabIndex={0}
      disabled={isDisabled || isReadOnly}
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
      onChange={onChangeInput}
      onFocus={onFocusInput}
      onBlur={onBlurInput}
    />
  );
});

const DatePickerDisplay = memo(() => {
  const isShowPlaceholder = useDatePickerSelector((value) => value.isShowPlaceholder);

  return isShowPlaceholder ? <DatePickerPlaceholder /> : <DatePickerInputSegments />;
});

const DatePickerPlaceholder = memo(() => {
  const genre = useDatePickerSelector((value) => value.genre);
  const labelPlaceholder = useDatePickerSelector((value) => value.labelPlaceholder);

  return (
    <Typography
      sx={{ size: 16, line: 1, isNoUserSelect: true }}
      style={{
        color: CSS_VARS.genre.input[genre].placeholder,
      }}
    >
      {labelPlaceholder}
    </Typography>
  );
});

const DatePickerInputSegments = memo(() => {
  const mode = useDatePickerSelector((value) => value.mode);

  return mode.map((segment, index) => (
    <Fragment key={segment}>
      <DatePickerInputSegment segment={segment} />
      {index !== mode.length - 1 && <span style={{ width: '4px', pointerEvents: 'none', textAlign: 'center' }}>.</span>}
    </Fragment>
  ));
});

type DatePickerInputSegmentProps = {
  segment: DatePickerVariant;
};

const DatePickerInputSegment = memo((props: DatePickerInputSegmentProps) => {
  const { segment } = props;
  const activateSegment = useDatePickerSelector((value) => value.activateSegment);
  const classNameTypography = useDatePickerSelector((value) => value.classNameTypography);
  const inputValue = useDatePickerSelector((value) => value.input[segment]);
  const isActive = useDatePickerSelector((value) => value.activeSegment === segment);
  const isDisabled = useDatePickerSelector((value) => value.isDisabled);
  const isReadOnly = useDatePickerSelector((value) => value.isReadOnly);
  const placeholder = useDatePickerSelector((value) => value.inputPlaceholders[segment]);
  const styleTypography = useDatePickerSelector((value) => value.styleTypography);
  const type = useDatePickerSelector((value) => value.type);

  return (
    <div
      className={setClasses([
        CSS_CLASS.component.datePicker.inputSegment,
        CSS_CLASS.transition.color,
        classNameTypography,
        !!inputValue && CSS_CLASS.component.datePicker.inputSegmentHasValue,
        isActive && CSS_CLASS.component.datePicker.inputSegmentIsActive,
      ])}
      style={styleTypography}
      onClick={(e) => {
        if (type === 'select') return;
        e.preventDefault();
        e.stopPropagation();
        if (isDisabled || isReadOnly) return;
        activateSegment(segment);
      }}
    >
      {inputValue || placeholder || ''}
    </div>
  );
});

const DatePickerButtonList = memo(() => {
  const isShowButtonList = useDatePickerSelector((value) => value.isShowButtonList);

  if (!isShowButtonList) {
    return null;
  }

  return (
    <div className={setClasses([CSS_CLASS.component.datePicker.listButton])}>
      <DatePickerClearButton />
      <DatePickerCalendarButton />
    </div>
  );
});

const DatePickerClearButton = memo(() => {
  const clearActiveSegment = useDatePickerSelector((value) => value.clearActiveSegment);
  const clearDate = useDatePickerSelector((value) => value.clearDate);
  const genre = useDatePickerSelector((value) => value.genre);
  const isDisabled = useDatePickerSelector((value) => value.isDisabled);
  const isHasInput = useDatePickerSelector((value) => value.isHasInput);
  const isHasValue = useDatePickerSelector((value) => value.isHasValue);
  const isReadOnly = useDatePickerSelector((value) => value.isReadOnly);
  const isShowClearButton = useDatePickerSelector((value) => value.isShowClearButton);

  if (!isShowClearButton || (!isHasValue && !isHasInput) || isDisabled || isReadOnly) {
    return null;
  }

  return (
    <Button
      genre={genre}
      size='small'
      isWidthAsHeight
      isFullRadius
      isFullSize
      isHiddenBorder
      isOnlyIcon
      tabIndex={0}
      icons={[{ name: 'Close', type: 'id' }]}
      isDisabled={isDisabled || isReadOnly}
      onFocus={(e) => {
        e.preventDefault();
        e.stopPropagation();
        clearActiveSegment();
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        clearDate();
      }}
    />
  );
});

const DatePickerCalendarButton = memo(() => {
  const clearActiveSegment = useDatePickerSelector((value) => value.clearActiveSegment);
  const genre = useDatePickerSelector((value) => value.genre);
  const isDisabled = useDatePickerSelector((value) => value.isDisabled);
  const isReadOnly = useDatePickerSelector((value) => value.isReadOnly);
  const toggle = useDatePickerSelector((value) => value.toggle);
  const type = useDatePickerSelector((value) => value.type);

  if (type === 'manual') {
    return null;
  }

  return (
    <Button
      genre={genre}
      size='small'
      isWidthAsHeight
      isFullRadius
      isFullSize
      isHiddenBorder
      isOnlyIcon
      icons={[{ name: 'Calendar', type: 'id' }]}
      isDisabled={isDisabled || isReadOnly}
      tabIndex={0}
      onFocus={(e) => {
        e.preventDefault();
        e.stopPropagation();
        clearActiveSegment();
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle();
      }}
    />
  );
});

const DatePickerPopover = memo(() => {
  const classNamePopover = useDatePickerSelector((value) => value.classNamePopover);
  const floatingStyles = useDatePickerSelector((value) => value.floatingStyles);
  const genre = useDatePickerSelector((value) => value.genre);
  const isOpen = useDatePickerSelector((value) => value.isOpen);
  const refFloating = useDatePickerSelector((value) => value.refFloating);
  const size = useDatePickerSelector((value) => value.size);
  const stylePopover = useDatePickerSelector((value) => value.stylePopover);

  return (
    <Popover
      style={stylePopover}
      className={classNamePopover}
      size={size}
      genre={genre}
      isOpen={isOpen}
      floatingStyles={floatingStyles}
      ref={refFloating}
      control='boxShadowSelect'
      isDisabledBoxShadow
    >
      <DatePickerDropdownList />
    </Popover>
  );
});

const DatePickerDropdownList = memo(() => {
  return (
    <div className={setClasses([CSS_CLASS.component.datePicker.dropdownList])}>
      <DatePickerNavigation />
      <DatePickerDayGrid />
    </div>
  );
});

const DatePickerNavigation = memo(() => {
  const dateMax = useDatePickerSelector((value) => value.dateMax);
  const dateMin = useDatePickerSelector((value) => value.dateMin);
  const genre = useDatePickerSelector((value) => value.genre);
  const isBlockNextMonth = useDatePickerSelector((value) => value.isBlockNextMonth);
  const isBlockPrevMonth = useDatePickerSelector((value) => value.isBlockPrevMonth);
  const localeMonths = useDatePickerSelector((value) => value.localeMonths);
  const monthSelectValue = useDatePickerSelector((value) => value.monthSelectValue);
  const onNextMonth = useDatePickerSelector((value) => value.onNextMonth);
  const onPrevMonth = useDatePickerSelector((value) => value.onPrevMonth);
  const onSelectMonthYear = useDatePickerSelector((value) => value.onSelectMonthYear);
  const refSelectMonth = useDatePickerSelector((value) => value.refSelectMonth);
  const refSelectYear = useDatePickerSelector((value) => value.refSelectYear);
  const yearSelectValue = useDatePickerSelector((value) => value.yearSelectValue);

  return (
    <Stack
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button
        type='button'
        isFullRadius
        icons={[
          {
            name: 'Arrow2',
            type: 'id',
            turn: 90,
          },
        ]}
        isWidthAsHeight
        genre={genre}
        size='small'
        onClick={onPrevMonth}
        isHidden={isBlockPrevMonth}
        isDisabled={isBlockPrevMonth}
      />
      <Stack style={{ gap: '8px' }}>
        <SelectMonth
          isToggleWhenClickSelectListOption
          monthsLocale={localeMonths}
          genre={genre}
          size='small'
          value={monthSelectValue}
          isOnClickOptionClose
          isStayValueAfterSelect
          isOnlyColorInSelectListOption
          isCenter
          isShortLabel
          refFloating={refSelectMonth}
          onChange={onSelectMonthYear}
          dateMin={dateMin}
          dateMax={dateMax}
          style={{ width: '60px' }}
        />
        <SelectYear
          isToggleWhenClickSelectListOption
          genre={genre}
          size='small'
          refFloating={refSelectYear}
          value={yearSelectValue}
          onChange={onSelectMonthYear}
          isOnClickOptionClose
          isStayValueAfterSelect
          isOnlyColorInSelectListOption
          isCenter
          dateMin={dateMin}
          dateMax={dateMax}
          style={{ width: '60px' }}
        />
      </Stack>
      <Button
        type='button'
        onClick={onNextMonth}
        isWidthAsHeight
        isFullRadius
        icons={[
          {
            name: 'Arrow2',
            type: 'id',
            turn: -90,
          },
        ]}
        genre={genre}
        size='small'
        isDisabled={isBlockNextMonth}
        isHidden={isBlockNextMonth}
      />
    </Stack>
  );
});

const DatePickerDayGrid = memo(() => {
  const classNameTypographyDay = useDatePickerSelector((value) => value.classNameTypographyDay);
  const daysInMonth = useDatePickerSelector((value) => value.daysInMonth);
  const daysInWeek = useDatePickerSelector((value) => value.daysInWeek);
  const rows = useDatePickerSelector((value) => value.rows);
  const styleTypographyDay = useDatePickerSelector((value) => value.styleTypographyDay);

  return (
    <div
      className={setClasses([CSS_CLASS.component.datePicker.dropdownListDays])}
      style={setStyles([
        {
          [CSS_VARS_RAW.component.datePicker.rows]: rows,
        },
      ])}
    >
      {daysInWeek.map((day) => (
        <div
          className={setClasses([
            CSS_CLASS.component.datePicker.dayOfWeek,
            classNameTypographyDay,
            CSS_CLASS.transition.color,
          ])}
          style={setStyles([
            styleTypographyDay,
            {
              [CSS_VARS_RAW.component.datePicker.row]: daysInMonth[0]?.weekOfMonth - 1,
              [CSS_VARS_RAW.component.datePicker.column]: day.index + 1,
            },
          ])}
          tabIndex={-1}
          key={`${day.label}-${day.index}`}
        >
          {day.label}
        </div>
      ))}
      {daysInMonth.map((day) => (
        <DatePickerDayCell
          day={day}
          classNameTypographyDay={classNameTypographyDay}
          styleTypographyDay={styleTypographyDay}
          key={day.value}
        />
      ))}
    </div>
  );
});

type DatePickerDayCellProps = {
  classNameTypographyDay: string;
  day: IDatePickerDay;
  styleTypographyDay: CSSProperties | undefined;
};

const DatePickerDayCell = memo((props: DatePickerDayCellProps) => {
  const { classNameTypographyDay, day, styleTypographyDay } = props;
  const onSelectDay = useDatePickerSelector((value) => value.onSelectDay);

  return (
    <div
      className={setClasses([
        CSS_CLASS.component.datePicker.day,
        classNameTypographyDay,
        CSS_CLASS.control[day.isDisabled || day.isChoice ? 'none' : 'boxShadow'],
        CSS_CLASS.transition.color,
        day.isDisabled && CSS_CLASS.component.datePicker.dayIsHidden,
        day.isToday && CSS_CLASS.component.datePicker.dayIsToday,
        day.isWeekend && CSS_CLASS.component.datePicker.dayIsWeekend,
        day.isChoice && CSS_CLASS.component.datePicker.dayIsChoice,
        !day.isCurrentMonth && CSS_CLASS.component.datePicker.dayIsNotCurrentMonth,
      ])}
      style={setStyles([
        styleTypographyDay,
        {
          [CSS_VARS_RAW.component.datePicker.row]: day.weekOfMonth + 1,
          [CSS_VARS_RAW.component.datePicker.column]: day.dayOfWeek,
        },
      ])}
      onClick={() => {
        if (!day.isDisabled) {
          onSelectDay(day.value);
        }
      }}
      tabIndex={day.isDisabled ? -1 : 0}
    >
      {day.labelNumber}
    </div>
  );
});

const DatePickerError = memo(() => {
  const error = useDatePickerSelector((value) => value.error);
  const isError = useDatePickerSelector((value) => value.isError);
  const size = useDatePickerSelector((value) => value.size);

  if (!error?.isError && !isError) {
    return null;
  }

  return (
    <ErrorMessage
      size={error?.size ?? size}
      sxTypography={{ size: 16, weight: '400', ...error?.sxTypography }}
      {...(error ?? {})}
    />
  );
});

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const SLASH_DATE_REGEX = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

function getDigitKey(
  key: string,
  activeSegment: DatePickerVariant,
  input: DatePickerInput,
  setValue: (segment: DatePickerVariant, value: string) => void,
  onNextSegment: (segment: DatePickerVariant) => void,
) {
  const current = input[activeSegment] ?? '';

  if (activeSegment === DatePickerVariant.YYYY) {
    setValue(activeSegment, current.length >= 4 ? key : current + key);
    return;
  }

  if (current.length >= 2 || current === '') {
    setValue(activeSegment, key);
    return;
  }

  const maxValue = activeSegment === DatePickerVariant.DD ? 31 : 12;
  const potential = current + key;
  const potentialNumber = Number(potential);

  if (potentialNumber > maxValue || potentialNumber === 0) {
    setValue(activeSegment, key);
    return;
  }

  setValue(activeSegment, potential);
  onNextSegment(activeSegment);
}

function getParseDateString(value: string) {
  if (ISO_DATE_REGEX.test(value)) {
    const [year, month, day] = value.split('-').map(Number);
    return getValidateDate(year, month, day);
  }

  const match = SLASH_DATE_REGEX.exec(value);
  if (match) {
    const p1 = match[1];
    const p2 = match[2];
    const p3 = match[3];
    const num1 = Number(p1);
    const num2 = Number(p2);
    const year = Number(p3);

    let month: number;
    let day: number;

    if (num1 > 12) {
      day = num1;
      month = num2;
    } else {
      month = num1;
      day = num2;
    }

    return getValidateDate(year, month, day);
  }

  return null;
}

function getValidateDate(year: number, month: number, day: number) {
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
    return { year, month, day };
  }
  return null;
}

function getCountSevens(number: number) {
  const divisor = 7;
  const count = Math.floor(number / divisor);
  const remainder = number % divisor;

  return remainder > 0 ? count + 1 : count;
}

function getNextSegment(currentSegment: DatePickerVariant, mode: IDatePickerMode): DatePickerVariant | null {
  const currentIndex = mode.indexOf(currentSegment);
  return currentIndex < mode.length - 1 ? mode[currentIndex + 1] : mode[0];
}

function getPrevSegment(currentSegment: DatePickerVariant, mode: IDatePickerMode): DatePickerVariant | null {
  const currentIndex = mode.indexOf(currentSegment);
  return currentIndex > 0 ? mode[currentIndex - 1] : mode[mode.length - 1];
}

function getValidateInput(
  input: DatePickerInput,
  onSuccess?: (value: number) => void,
  onFailure?: () => void,
  onNan?: (isHasInput: boolean) => void,
) {
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
}

function isSameDatePickerInput(left: DatePickerInput, right: DatePickerInput) {
  return (
    left[DatePickerVariant.DD] === right[DatePickerVariant.DD] &&
    left[DatePickerVariant.MM] === right[DatePickerVariant.MM] &&
    left[DatePickerVariant.YYYY] === right[DatePickerVariant.YYYY]
  );
}
