import type { Meta, StoryObj } from '@storybook/react-vite'
import moment from 'moment'
import { FC, useEffect, useState } from 'react'
import 'styled-components'

import { SelectYear, SelectYearProps } from '@local/components/select'
import { Stack } from '@local/components/stack'

const meta: Meta<typeof SelectYear> = {
  component: SelectYear,
  title: 'Component/Select'
}

export default meta
type Story = StoryObj<typeof SelectYear>

const startDate = moment.utc().subtract(100, 'years').startOf('year').valueOf()
const endDate = moment.utc().startOf('day').valueOf()
const value = moment.utc().valueOf()

const defaultArgs: Partial<SelectYearProps> = {
  size: 'medium',
  genre: 'gray',
  sx: {
    default: {
      width: '300px'
    }
  },
  startDate: startDate,
  endDate: endDate,
  value: value
}

const SelectYearWrapper: FC<SelectYearProps> = props => {
  const [value, setValue] = useState<number | null>(moment.utc().startOf('year').valueOf())
  const handleSelectChange = (value: number | null) => {
    console.log('Selected year:', value)
    setValue(value)
  }
  return (
    <Stack
      sx={{
        default: {
          width: '300px',
          height: '500px',
          padding: '10px'
        }
      }}
    >
      <SelectYear {...props} labelPlaceholder='Year' value={value} onChange={handleSelectChange} />
    </Stack>
  )
}

export const Year: Story = {
  render: args => <SelectYearWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}
