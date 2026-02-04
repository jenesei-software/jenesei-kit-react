import {
  DatePickerTranslateInputProps,
  DatePickerTranslateMonthProps,
  DatePickerTranslateWeekProps,
} from '@local/components/date-picker';
import { transformObjectToArray, transformObjectValuesToKeys } from '@local/functions';
import { IImageFormat, ILanguage, IService } from '@local/types';
import { I_THEME_TYPOGRAPHY_HEADING } from '@local/theme';

export const OBJECT_LANGUAGE: ILanguage = {
  eng: {
    value: 'eng',
    label: 'English',
    placeholder: 'English',
    search: 'English, eng',
  },
  rus: {
    value: 'rus',
    label: 'Русский',
    placeholder: 'Русский',
    search: 'Русский, rus',
  },
};

export const OBJECT_SERVICE: IService = {
  jenesei_id: {
    value: 'jenesei_id',
    label: 'Jenesei ID',
    placeholder: 'Jenesei ID',
    search: 'Jenesei ID',
  },
};

export const LIST_LANGUAGE = transformObjectToArray(OBJECT_LANGUAGE);
export const LIST_KEY_LANGUAGE = transformObjectValuesToKeys(OBJECT_LANGUAGE);

export const LIST_SERVICE = transformObjectToArray(OBJECT_SERVICE);
export const LIST_KEY_SERVICE = transformObjectValuesToKeys(OBJECT_SERVICE);

export const LOCALE_INPUT: DatePickerTranslateInputProps = {
  day: 'ДД',
  month: 'ММ',
  year: 'ГГГГ',
};
export const LOCALE_MONTHS: DatePickerTranslateMonthProps[] = [
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
export const LOCALE_WEEKS: DatePickerTranslateWeekProps[] = [
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

export const LIST_IMAGE_SUPPORTED_FORMAT: IImageFormat[] = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/avif',
] as const;
export const LIST_IMAGE_SUPPORTED_FORMAT_FOR_INPUT = ['image/*', '.jpeg', '.jpg', '.png', '.webp', 'avif'].join(',');

export const LOREM_IPSUM_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const LIBRARY_VERSION = import.meta.env.VITE_APP_VERSION;

export const LIST_TYPOGRAPHY_VARIANTS_DEFAULT: I_THEME_TYPOGRAPHY_HEADING[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
