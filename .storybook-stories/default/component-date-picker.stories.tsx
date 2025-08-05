import type { Meta } from '@storybook/react-vite';
import moment from 'moment';
import { FC, useState } from 'react';
import 'styled-components';

import { DatePicker as DatePickerComponent } from '@local/components/date-picker';
import { Typography } from '@local/components/typography';
import { localeInput, localeMonths, localeWeeks } from '@local/consts';

import { WrapperBig } from './tools';

const meta: Meta<typeof DatePickerComponent> = {
  component: DatePickerComponent,
  title: 'Component/DatePicker',
};

export default meta;

const DatePickerWrapperAll: FC = () => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <WrapperBig sx={{ default: { flexDirection: 'row' } }}>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Other - Past hundred years, blackBorder
        </Typography>
        <DatePickerComponent
          genre='blackBorder'
          locale={{
            months: localeMonths,
            weeks: localeWeeks,
            inputs: localeInput,
          }}
          value={value}
          size='medium'
          labelPlaceholder='Select date please'
          startDate={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
          endDate={moment.utc().startOf('day').valueOf()}
          onChange={(timestamp) => {
            console.log('onChange', timestamp);
            setValue(timestamp);
          }}
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
          Other - Past hundred years, gray
        </Typography>
        <DatePickerComponent
          genre='gray'
          locale={{
            months: localeMonths,
            weeks: localeWeeks,
            inputs: localeInput,
          }}
          value={value}
          size='medium'
          labelPlaceholder='Select date please'
          startDate={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
          endDate={moment.utc().startOf('day').valueOf()}
          onChange={(timestamp) => {
            console.log('onChange', timestamp);
            setValue(timestamp);
          }}
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
          Other - Past hundred years, gray border
        </Typography>
        <DatePickerComponent
          genre='grayBorder'
          locale={{
            months: localeMonths,
            weeks: localeWeeks,
            inputs: localeInput,
          }}
          value={value}
          size='medium'
          labelPlaceholder='Select date please'
          startDate={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
          endDate={moment.utc().startOf('day').valueOf()}
          onChange={(timestamp) => {
            console.log('onChange', timestamp);
            setValue(timestamp);
          }}
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
          Other - Last hundred year 18 years ago
        </Typography>
        <DatePickerComponent
          genre='blackBorder'
          locale={{
            months: localeMonths,
            weeks: localeWeeks,
            inputs: localeInput,
          }}
          value={value}
          size='medium'
          labelPlaceholder='Select date please'
          startDate={moment.utc().subtract(118, 'years').startOf('year').valueOf()}
          endDate={moment.utc().subtract(18, 'years').valueOf()}
          onChange={(timestamp) => {
            console.log('onChange', timestamp);
            setValue(timestamp);
          }}
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
          Other - Next three months
        </Typography>
        <DatePickerComponent
          genre='blackBorder'
          locale={{
            months: localeMonths,
            weeks: localeWeeks,
            inputs: localeInput,
          }}
          value={value}
          size='medium'
          labelPlaceholder='Select date please'
          startDate={moment.utc().startOf('day').valueOf()}
          endDate={moment.utc().add(3, 'months').startOf('day').valueOf()}
          onChange={(timestamp) => {
            console.log('onChange', timestamp);
            setValue(timestamp);
          }}
        />
      </WrapperBig>
    </WrapperBig>
  );
};

export const DatePicker = {
  render: () => <DatePickerWrapperAll />,
};
