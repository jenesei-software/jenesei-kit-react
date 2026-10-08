import {
  IDatePickerTranslateInput,
  IDatePickerTranslateMonth,
  IDatePickerTranslateWeek,
} from '@local/components/date-picker';

export const LOCALE_INPUT: IDatePickerTranslateInput = {
  day: 'ДД',
  month: 'ММ',
  year: 'ГГГГ',
};

export const LOCALE_MONTHS: IDatePickerTranslateMonth[] = [
  {
    localeLong: 'Январь',
    localeShort: 'Янв',
    value: 'january',
  },
  {
    localeLong: 'February',
    localeShort: 'Feb',
    value: 'february',
  },
  {
    localeLong: 'March',
    localeShort: 'Mar',
    value: 'march',
  },
  {
    localeLong: 'April',
    localeShort: 'Apr',
    value: 'april',
  },
  {
    localeLong: 'May',
    localeShort: 'May',
    value: 'may',
  },
  {
    localeLong: 'June',
    localeShort: 'Jun',
    value: 'june',
  },
  {
    localeLong: 'July',
    localeShort: 'Jul',
    value: 'july',
  },
  {
    localeLong: 'August',
    localeShort: 'Aug',
    value: 'august',
  },
  {
    localeLong: 'September',
    localeShort: 'Sep',
    value: 'september',
  },
  {
    localeLong: 'October',
    localeShort: 'Oct',
    value: 'october',
  },
  {
    localeLong: 'November',
    localeShort: 'Nov',
    value: 'november',
  },
  {
    localeLong: 'December',
    localeShort: 'Dec',
    value: 'december',
  },
];
export const LOCALE_WEEKS: IDatePickerTranslateWeek[] = [
  {
    localeLong: 'Monday',
    localeShort: 'Пн',
    value: 'mo',
  },
  {
    localeLong: 'Tuesday',
    localeShort: 'Tue',
    value: 'tu',
  },
  {
    localeLong: 'Wednesday',
    localeShort: 'Wed',
    value: 'we',
  },
  {
    localeLong: 'Thursday',
    localeShort: 'Thu',
    value: 'th',
  },
  {
    localeLong: 'Friday',
    localeShort: 'Fri',
    value: 'fr',
  },
  {
    localeLong: 'Saturday',
    localeShort: 'Sat',
    value: 'sa',
  },
  {
    localeLong: 'Sunday',
    localeShort: 'Sun',
    value: 'su',
  },
];

/**
 * Release tag of jenesei-software/jenesei-id-assets used to build CDN icon URLs.
 * Bump manually when icons change. Independent of the library version in package.json.
 */
export const ICON_VERSION = '1.4.0';

// export const LIST_TYPOGRAPHY_VARIANTS_DEFAULT: IThemeTypographyHeading[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
