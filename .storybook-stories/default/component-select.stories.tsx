import type { Meta } from '@storybook/react-vite';
import { FC, useState } from 'react';
import 'styled-components';

import { SelectLanguage, SelectMonth, SelectMonths, SelectYear } from '@local/components/select';
import { LOCALE_MONTHS, Typography } from '@local/index';

import moment from 'moment';

import { WrapperBig } from './tools';

const meta: Meta<typeof SelectLanguage> = {
  component: SelectLanguage,
  title: 'Component/Select',
};

export default meta;

const SelectWrapperAll: FC = () => {
  const [valueLanguage, setValueLanguage] = useState<string | null>(null);
  const handleSelectChangeLanguage = (language: string | null) => {
    setValueLanguage(language);
  };

  const [valueMonth, setValueMonth] = useState<number | null>(moment.utc().startOf('month').valueOf());
  const handleSelectChangeMonth = (value: number | null) => {
    setValueMonth(value);
  };

  const [valueMonths, setValueMonths] = useState<number[]>([moment.utc().startOf('month').valueOf()]);
  const handleSelectChangeMonths = (value: number[]) => {
    setValueMonths(value);
  };

  const [valueYear, setValueYear] = useState<number | null>(moment.utc().startOf('year').valueOf());
  const handleSelectChangeYear = (value: number | null) => {
    setValueYear(value);
  };
  return (
    <WrapperBig sx={{ default: { flexDirection: 'column', minWidth: '500px', maxWidth: '500px' } }}>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Single, language
        </Typography>
        <SelectLanguage
          isShowDropdownOptionIcon
          size='medium'
          genre='grayBorder'
          value={valueLanguage}
          onChange={handleSelectChangeLanguage}
        />
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Single, Month
        </Typography>
        <SelectMonth
          size='medium'
          genre='grayBorder'
          value={valueMonth}
          onChange={handleSelectChangeMonth}
          monthsLocale={LOCALE_MONTHS}
        />
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Multiple, Months
        </Typography>
        <SelectMonths
          size='medium'
          genre='grayBorder'
          isShowIconSearchClear
          isShowIconFetching
          isShowIconToggle
          isShowSelectAllLabel
          isShowSelectAll
          isShowAddOption
          isSearch
          labelPlaceholder='Select or search months'
          value={valueMonths}
          onChange={handleSelectChangeMonths}
          monthsLocale={LOCALE_MONTHS}
        />
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Single, Year
        </Typography>
        <SelectYear
          size='medium'
          genre='grayBorder'
          labelPlaceholder='Year'
          value={valueYear}
          onChange={handleSelectChangeYear}
          dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
          dateMax={moment.utc().startOf('day').valueOf()}
        />
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Single, Year, Center
        </Typography>
        <SelectYear
          size='medium'
          genre='grayBorder'
          labelPlaceholder='Year'
          isCenter
          value={valueYear}
          onChange={handleSelectChangeYear}
          dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
          dateMax={moment.utc().startOf('day').valueOf()}
        />
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Single, Year, Error
        </Typography>
        <SelectYear
          size='medium'
          genre='grayBorder'
          labelPlaceholder='Year'
          error={{
            errorMessage: 'This field is required',
            isError: true,
            isErrorAbsolute: false,
          }}
          value={valueYear}
          onChange={handleSelectChangeYear}
          dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
          dateMax={moment.utc().startOf('day').valueOf()}
        />
      </WrapperBig>
    </WrapperBig>
  );
};

export const Select = {
  render: () => <SelectWrapperAll />,
};
