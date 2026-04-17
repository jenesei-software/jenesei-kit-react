import { DatePicker as DatePickerComponent } from '@local/components/date-picker';
import { Typography } from '@local/components/typography';
import { LOCALE_INPUT, LOCALE_MONTHS, LOCALE_WEEKS } from '@local/cores/consts';
import { logger } from '@local/cores/logger';

import type { Meta } from '@storybook/react-vite';
import moment from 'moment';
import { FC, useState } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof DatePickerComponent> = {
  component: DatePickerComponent,
  title: 'Component/14. DatePicker',
};

export default meta;

const CollectionWrapper: FC = () => {
  const [valueOne, setValueOne] = useState<number | null>(moment.utc().startOf('day').valueOf());
  const [valueTwo, setValueTwo] = useState<number | null>(null);
  const [valueThree, setValueThree] = useState<number | null>(null);
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
          <DatePickerComponent
            genre='primary'
            size='large'
            notValidDate={{
              errorMessage: 'Not valid date',
            }}
            locale={{
              months: LOCALE_MONTHS,
              weeks: LOCALE_WEEKS,
              inputs: LOCALE_INPUT,
            }}
            type='select'
            value={valueOne}
            labelPlaceholder='Select date please'
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
            dateDefault={moment.utc().startOf('day').valueOf()}
            onChange={(timestamp) => {
              logger.info('onChange', timestamp);
              setValueOne(timestamp);
            }}
          />
          <DatePickerComponent
            genre='secondary'
            size='large'
            notValidDate={{
              errorMessage: 'Not valid date',
            }}
            locale={{
              months: LOCALE_MONTHS,
              weeks: LOCALE_WEEKS,
              inputs: LOCALE_INPUT,
            }}
            type='select'
            value={valueOne}
            labelPlaceholder='Select date please'
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
            dateDefault={moment.utc().startOf('day').valueOf()}
            onChange={(timestamp) => {
              logger.info('onChange', timestamp);
              setValueOne(timestamp);
            }}
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
          <DatePickerComponent
            genre='primary'
            notValidDate={{
              errorMessage: 'Not valid date',
            }}
            locale={{
              months: LOCALE_MONTHS,
              weeks: LOCALE_WEEKS,
              inputs: LOCALE_INPUT,
            }}
            type='select'
            value={valueOne}
            labelPlaceholder='Select date please'
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
            dateDefault={moment.utc().startOf('day').valueOf()}
            onChange={(timestamp) => {
              logger.info('onChange', timestamp);
              setValueOne(timestamp);
            }}
            size='large'
          />
          <DatePickerComponent
            genre='primary'
            notValidDate={{
              errorMessage: 'Not valid date',
            }}
            locale={{
              months: LOCALE_MONTHS,
              weeks: LOCALE_WEEKS,
              inputs: LOCALE_INPUT,
            }}
            type='select'
            value={valueOne}
            labelPlaceholder='Select date please'
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
            dateDefault={moment.utc().startOf('day').valueOf()}
            onChange={(timestamp) => {
              logger.info('onChange', timestamp);
              setValueOne(timestamp);
            }}
            size='largeMedium'
          />
          <DatePickerComponent
            genre='primary'
            notValidDate={{
              errorMessage: 'Not valid date',
            }}
            locale={{
              months: LOCALE_MONTHS,
              weeks: LOCALE_WEEKS,
              inputs: LOCALE_INPUT,
            }}
            type='select'
            value={valueOne}
            labelPlaceholder='Select date please'
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
            dateDefault={moment.utc().startOf('day').valueOf()}
            onChange={(timestamp) => {
              logger.info('onChange', timestamp);
              setValueOne(timestamp);
            }}
            size='medium'
          />
          <DatePickerComponent
            genre='primary'
            notValidDate={{
              errorMessage: 'Not valid date',
            }}
            locale={{
              months: LOCALE_MONTHS,
              weeks: LOCALE_WEEKS,
              inputs: LOCALE_INPUT,
            }}
            type='select'
            value={valueOne}
            labelPlaceholder='Select date please'
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
            dateDefault={moment.utc().startOf('day').valueOf()}
            onChange={(timestamp) => {
              logger.info('onChange', timestamp);
              setValueOne(timestamp);
            }}
            size='mediumSmall'
          />
          <DatePickerComponent
            genre='primary'
            notValidDate={{
              errorMessage: 'Not valid date',
            }}
            locale={{
              months: LOCALE_MONTHS,
              weeks: LOCALE_WEEKS,
              inputs: LOCALE_INPUT,
            }}
            type='select'
            value={valueOne}
            labelPlaceholder='Select date please'
            dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
            dateMax={moment.utc().startOf('day').valueOf()}
            dateDefault={moment.utc().startOf('day').valueOf()}
            onChange={(timestamp) => {
              logger.info('onChange', timestamp);
              setValueOne(timestamp);
            }}
            size='small'
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
              Other - Past hundred years, primary
            </Typography>
            valueOne : {valueOne}
            <DatePickerComponent
              genre='primary'
              notValidDate={{
                errorMessage: 'Not valid date',
              }}
              locale={{
                months: LOCALE_MONTHS,
                weeks: LOCALE_WEEKS,
                inputs: LOCALE_INPUT,
              }}
              type='select'
              value={valueOne}
              size='medium'
              labelPlaceholder='Select date please'
              dateMin={moment.utc().subtract(100, 'years').startOf('year').valueOf()}
              dateMax={moment.utc().startOf('day').valueOf()}
              dateDefault={moment.utc().startOf('day').valueOf()}
              onChange={(timestamp) => {
                logger.info('onChange', timestamp);
                setValueOne(timestamp);
              }}
            />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              Other - Last hundred year 18 years ago
            </Typography>
            <DatePickerComponent
              genre='primary'
              notValidDate={{
                errorMessage: 'Not valid date',
              }}
              locale={{
                months: LOCALE_MONTHS,
                weeks: LOCALE_WEEKS,
                inputs: LOCALE_INPUT,
              }}
              type='manual'
              value={valueTwo}
              size='medium'
              labelPlaceholder='Select date please'
              dateMin={moment.utc().subtract(118, 'years').startOf('year').valueOf()}
              dateMax={moment.utc().subtract(18, 'years').valueOf()}
              dateDefault={moment.utc().subtract(18, 'years').valueOf()}
              onChange={(timestamp) => {
                logger.info('onChange', timestamp);
                setValueTwo(timestamp);
              }}
            />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              Other - Next three months
            </Typography>
            <DatePickerComponent
              genre='secondary'
              notValidDate={{
                errorMessage: 'Not valid date',
              }}
              locale={{
                months: LOCALE_MONTHS,
                weeks: LOCALE_WEEKS,
                inputs: LOCALE_INPUT,
              }}
              isShowClearButton
              value={valueThree}
              type='select'
              size='medium'
              labelPlaceholder='Select date please'
              dateMin={moment.utc().startOf('day').valueOf()}
              dateMax={moment.utc().add(3, 'months').startOf('day').valueOf()}
              dateDefault={moment.utc().startOf('day').valueOf()}
              onChange={(timestamp) => {
                logger.info('onChange', timestamp);
                setValueThree(timestamp);
              }}
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
