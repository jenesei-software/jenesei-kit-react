import { SelectLanguage, SelectMonths, SelectYear } from '@local/components/select';
import { Typography } from '@local/components/typography';
import { LOCALE_MONTHS } from '@local/cores/consts';

import type { Meta } from '@storybook/react-vite';
import moment from 'moment';
import { FC, useState } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof SelectLanguage> = {
  component: SelectLanguage,
  title: 'Component/12. Select',
};

export default meta;

const CollectionWrapper: FC = () => {
  const [valueMonths, setValueMonths] = useState<number[]>([moment.utc().startOf('month').valueOf()]);
  const handleSelectChangeMonths = (value: number[]) => {
    setValueMonths(value);
  };

  const [valueYear, setValueYear] = useState<number | null>(moment.utc().startOf('year').valueOf());
  const handleSelectChangeYear = (value: number | null) => {
    setValueYear(value);
  };
  return (
    <WrapperBig sx={{ flexDirection: 'row', width: '400px' }}>
      <WrapperBig sx={{ flexDirection: 'column', width: '100%' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Genre
        </Typography>
        <WrapperMin sx={{ flexDirection: 'column', width: '100%' }}>
          <SelectYear
            size='large'
            genre='primary'
            labelPlaceholder='Year'
            value={valueYear}
            onChange={handleSelectChangeYear}
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
          />
          <SelectYear
            size='large'
            genre='secondary'
            labelPlaceholder='Year'
            value={valueYear}
            onChange={handleSelectChangeYear}
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
          />
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column', width: '100%' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Size
        </Typography>
        <WrapperMin sx={{ flexDirection: 'column', width: '100%' }}>
          <SelectYear
            size='large'
            genre='primary'
            labelPlaceholder='Year'
            value={valueYear}
            onChange={handleSelectChangeYear}
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
          />
          <SelectYear
            size='largeMedium'
            genre='primary'
            labelPlaceholder='Year'
            value={valueYear}
            onChange={handleSelectChangeYear}
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
          />
          <SelectYear
            size='medium'
            genre='primary'
            labelPlaceholder='Year'
            value={valueYear}
            onChange={handleSelectChangeYear}
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
          />
          <SelectYear
            size='mediumSmall'
            genre='primary'
            labelPlaceholder='Year'
            value={valueYear}
            onChange={handleSelectChangeYear}
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
          />
          <SelectYear
            size='small'
            genre='primary'
            labelPlaceholder='Year'
            value={valueYear}
            onChange={handleSelectChangeYear}
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
          />
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column', width: '100%' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Other
        </Typography>
        <WrapperMin sx={{ flexDirection: 'column', width: '100%' }}>
          <WrapperMin sx={{ flexDirection: 'column' }}>
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
              isShowDropdownOptionIcon
              value={valueMonths}
              onChange={handleSelectChangeMonths}
              monthsLocale={LOCALE_MONTHS}
            />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
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
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
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
          </WrapperMin>
        </WrapperMin>
      </WrapperBig>
    </WrapperBig>
  );
};

export const Collection = {
  render: () => <CollectionWrapper />,
};
