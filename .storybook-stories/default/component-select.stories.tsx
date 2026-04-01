import { SelectLanguage, SelectMonth, SelectMonths, SelectYear } from '@local/components/select';
import { Typography } from '@local/components/typography';
import { LOCALE_MONTHS } from '@local/consts';

import type { Meta } from '@storybook/react-vite';
import moment from 'moment';
import { FC, useState } from 'react';

import { WrapperBig } from './tools';

const meta: Meta<typeof SelectLanguage> = {
  component: SelectLanguage,
  title: 'Component/12. Select',
};

export default meta;

const CollectionWrapper: FC = () => {
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
    <WrapperBig sx={{ flexDirection: 'column', minWidth: '340px', maxWidth: '340px' }}>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Single, language
        </Typography>
        <SelectLanguage
          isToggleWhenClickSelectListOption
          isShowDropdownOptionIcon
          size='medium'
          genre='primary'
          value={valueLanguage}
          onChange={handleSelectChangeLanguage}
        />
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Single, Month
        </Typography>
        <SelectMonth
          size='medium'
          genre='secondary'
          value={valueMonth}
          onChange={handleSelectChangeMonth}
          monthsLocale={LOCALE_MONTHS}
        />
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Multiple, Months
        </Typography>
        <SelectMonths
          size='medium'
          genre='primary'
          isShowIconSearchClear
          isShowIconFetching
          isShowIconToggle
          isShowSelectAllLabel
          isShowSelectAll
          isShowAddOption
          isSearch
          isFetching
          labelPlaceholder='Search months'
          isStaySearchAfterSelect
          isShowDropdownOptionIcon
          value={valueMonths}
          onChange={handleSelectChangeMonths}
          monthsLocale={LOCALE_MONTHS}
        />
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Single, Year
        </Typography>
        <SelectYear
          size='medium'
          genre='primary'
          labelPlaceholder='Year'
          value={valueYear}
          onChange={handleSelectChangeYear}
          dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
          dateMax={moment.utc().startOf('day').valueOf()}
        />
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Single, Year, Center
        </Typography>
        <SelectYear
          size='medium'
          genre='primary'
          labelPlaceholder='Year'
          isCenter
          value={valueYear}
          onChange={handleSelectChangeYear}
          dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
          dateMax={moment.utc().startOf('day').valueOf()}
        />
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Single, Year, Error
        </Typography>
        <SelectYear
          size='medium'
          genre='primary'
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

export const Collection = {
  render: () => <CollectionWrapper />,
};
