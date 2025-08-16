import type { Meta, StoryObj } from '@storybook/react-vite'
import 'styled-components'

import { Button } from '@local/components/button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'BustMarket/Button'
}

export default meta

type Story = StoryObj<typeof Button>

export const Gray: Story = {
  args: {
    children: 'Gray',
    type: 'button',
    genre: 'bustmarket-gray',
    size: 'medium',
    sx: {
      default: {
        width: 'auto'
      }
    },
    sxTypography: {
      default: {
        family: 'Manrope',
        weight: 400,
        size: 14,
      }
    }
  }
}
export const Violet: Story = {
  args: {
    children: 'Violet',
    type: 'button',
    genre: 'bustmarket-violet',
    size: 'medium',
    sx: {
      default: {
        width: 'auto'
      }
    },
    sxTypography: {
      default: {
        family: 'Manrope',
        weight: 400,
        size: 14,
      }
    }
  }
}
export const WhiteViolet: Story = {
  args: {
    children: 'White Violet',
    type: 'button',
    genre: 'bustmarket-white-violet',
    size: 'medium',
    sx: {
      default: {
        width: 'auto'
      }
    },
    sxTypography: {
      default: {
        family: 'Manrope',
        weight: 400,
        size: 14,
      }
    }
  }
}
