import type { Meta, StoryObj } from '@storybook/react-vite'
import moment from 'moment'
import { FC, useState } from 'react'
import 'styled-components'

import { SelectMonth, SelectMonthProps } from '@local/components/select'
import { Stack } from '@local/components/stack'
import { localeMonths } from '@local/consts'

const meta: Meta<typeof SelectMonth> = {
  component: SelectMonth,
  title: 'Component/Select'
}

export default meta
type Story = StoryObj<typeof SelectMonth>

const defaultArgs: Partial<SelectMonthProps> = {
  size: 'medium',
  genre: 'gray',
  monthsLocale: localeMonths
}

const SelectMonthWrapper: FC<SelectMonthProps> = props => {
  const [value, setValue] = useState<number | null>(moment.utc().startOf('month').valueOf())
  const handleSelectChange = (value: number | null) => {
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
      <SelectMonth {...props} labelPlaceholder="Month" value={value} onChange={handleSelectChange} />
    </Stack>
  )
}

export const Month: Story = {
  render: args => <SelectMonthWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}
