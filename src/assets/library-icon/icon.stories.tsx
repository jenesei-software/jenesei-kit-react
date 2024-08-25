import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Icon } from '.'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Icon',
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    primaryColor: 'blueGoogle',
    name: 'Folder',
    size: 'large',
    type:'curved'
  },
}
