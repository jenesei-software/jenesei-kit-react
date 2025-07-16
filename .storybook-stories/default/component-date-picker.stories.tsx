import type { Meta, StoryObj } from '@storybook/react-vite'
import moment from 'moment'
import { FC, useEffect, useState } from 'react'
import 'styled-components'

import { DatePicker, DatePickerProps } from '@local/components/date-picker'
import { Stack } from '@local/components/stack'
import { localeInput, localeMonths, localeWeeks } from '@local/consts'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Component/DatePicker'
}

export default meta
type Story = StoryObj<typeof DatePicker>

const DatePickerWrapper: FC<DatePickerProps> = props => {
  const [value, setValue] = useState<number | null>(null)
  const handleSelectChange = (value: number | null) => {
    setValue(value)
  }

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  return (
    <Stack
      sx={{
        default: {
          width: '300px',
          height: '500px'
        }
      }}
    >
      <DatePicker {...props} value={value} onChange={handleSelectChange} />
    </Stack>
  )
}

const PastHundredYearsStartDate = moment.utc().subtract(100, 'years').startOf('year').valueOf()
const PastHundredYearsEndDate = moment.utc().startOf('day').valueOf()

export const PastHundredYears: Story = {
  render: args => <DatePickerWrapper {...args} />,
  args: {
    locale: {
      months: localeMonths,
      weeks: localeWeeks,
      inputs: localeInput
    },
    size: 'medium',
    isMinWidth: true,
    genre: 'blackBorder',
    startDate: PastHundredYearsStartDate,
    endDate: PastHundredYearsEndDate,
    labelPlaceholder: 'Select date please',
    sx: {
      default: {
        width: '300px'
      }
    },
    value: null,
    onBlur(event) {
      console.log('onBlur', event)
    },
    isOnClickClose: true
  }
}

const LastHundredYear18YearsAgoStartDate = moment.utc().subtract(118, 'years').startOf('year').valueOf()
const LastHundredYear18YearsAgoEndDate = moment.utc().subtract(18, 'years').valueOf()
const LastHundredYear18YearsAgoValue = moment.utc().subtract(18, 'years').startOf('day').valueOf()

export const LastHundredYear18YearsAgo: Story = {
  render: args => <DatePickerWrapper {...args} />,
  args: {
    locale: {
      months: localeMonths,
      weeks: localeWeeks,
      inputs: localeInput
    },
    size: 'medium',
    genre: 'gray',
    sx: {
      default: {
        width: '300px'
      }
    },
    startDate: LastHundredYear18YearsAgoStartDate,
    endDate: LastHundredYear18YearsAgoEndDate,
    value: LastHundredYear18YearsAgoValue
  }
}

const LastHundredYear21YearsAgoStartDate = moment.utc().subtract(121, 'years').startOf('year').valueOf()
const LastHundredYear21YearsAgoEndDate = moment.utc().subtract(21, 'years').valueOf()
const LastHundredYear21YearsAgoValue = moment.utc().subtract(21, 'years').startOf('day').valueOf()

export const LastHundredYear21YearsAgo: Story = {
  render: args => <DatePickerWrapper {...args} />,
  args: {
    locale: {
      months: localeMonths,
      weeks: localeWeeks,
      inputs: localeInput
    },
    size: 'medium',
    genre: 'gray',
    sx: {
      default: {
        width: '300px'
      }
    },
    startDate: LastHundredYear21YearsAgoStartDate,
    endDate: LastHundredYear21YearsAgoEndDate,
    value: LastHundredYear21YearsAgoValue
  }
}

const NextThreeMonthsStartDate = moment.utc().startOf('day').valueOf()
const NextThreeMonthsEndDate = moment.utc().add(3, 'months').startOf('day').valueOf()
const NextThreeMonthsValue = moment.utc().startOf('day').valueOf()

export const NextThreeMonths: Story = {
  render: args => <DatePickerWrapper {...args} />,
  args: {
    locale: {
      months: localeMonths,
      weeks: localeWeeks,
      inputs: localeInput
    },
    size: 'medium',
    genre: 'gray',
    sx: {
      default: {
        width: '300px'
      }
    },
    startDate: NextThreeMonthsStartDate,
    endDate: NextThreeMonthsEndDate,
    value: NextThreeMonthsValue
  }
}
