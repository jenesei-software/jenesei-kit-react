import type { Meta } from '@storybook/react-vite';
import moment from 'moment';
import { FC, useState } from 'react';
import 'styled-components';

import { DatePicker as DatePickerComponent } from '@local/components/date-picker';
import { Typography } from '@local/components/typography';
import { LOCALE_INPUT, LOCALE_MONTHS, LOCALE_WEEKS } from '@local/consts';

import { WrapperBig } from './tools';

const meta: Meta<typeof DatePickerComponent> = {
  component: DatePickerComponent,
  title: 'Component/DatePicker',
};

export default meta;

const DatePickerWrapperAll: FC = () => {
  const [valueOne, setValueOne] = useState<number | null>(moment.utc().startOf('day').valueOf());
  const [valueTwo, setValueTwo] = useState<number | null>(null);
  const [valueThree, setValueThree] = useState<number | null>(null);
  return (
    <WrapperBig sx={{ default: { flexDirection: 'row' } }}>
      <WrapperBig sx={{ default: { flexDirection: 'column', color: 'black' } }}>
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
        valueOne : {valueOne}
        <DatePickerComponent
          isOutlineBoxShadow
          genre='blackBorder'
          notValidDate={{
            errorMessage: 'Not valid date',
          }}
          locale={{
            months: LOCALE_MONTHS,
            weeks: LOCALE_WEEKS,
            inputs: LOCALE_INPUT,
          }}
          value={valueOne}
          size='medium'
          labelPlaceholder='Select date please'
          dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
          dateMax={moment.utc().startOf('day').valueOf()}
          dateDefault={moment.utc().startOf('day').valueOf()}
          onChange={(timestamp) => {
            console.log('onChange', timestamp);
            setValueOne(timestamp);
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
          genre='gray'
          notValidDate={{
            errorMessage: 'Not valid date',
          }}
          locale={{
            months: LOCALE_MONTHS,
            weeks: LOCALE_WEEKS,
            inputs: LOCALE_INPUT,
          }}
          value={valueTwo}
          size='medium'
          labelPlaceholder='Select date please'
          dateMin={moment.utc().subtract(118, 'years').startOf('year').valueOf()}
          dateMax={moment.utc().subtract(18, 'years').valueOf()}
          dateDefault={moment.utc().subtract(18, 'years').valueOf()}
          onChange={(timestamp) => {
            console.log('onChange', timestamp);
            setValueTwo(timestamp);
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
          genre='grayBorder'
          notValidDate={{
            errorMessage: 'Not valid date',
          }}
          locale={{
            months: LOCALE_MONTHS,
            weeks: LOCALE_WEEKS,
            inputs: LOCALE_INPUT,
          }}
          value={valueThree}
          size='medium'
          labelPlaceholder='Select date please'
          dateMin={moment.utc().startOf('day').valueOf()}
          dateMax={moment.utc().add(3, 'months').startOf('day').valueOf()}
          dateDefault={moment.utc().startOf('day').valueOf()}
          onChange={(timestamp) => {
            console.log('onChange', timestamp);
            setValueThree(timestamp);
          }}
        />
      </WrapperBig>
    </WrapperBig>
  );
};

export const DatePicker = {
  render: () => <DatePickerWrapperAll />,
};
