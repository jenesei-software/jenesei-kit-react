import type { Meta, StoryObj } from '@storybook/react-vite'
import 'styled-components'

import { InputOTP as InputOTPComponent, InputOTPProps } from '@local/components/input-otp'

const meta: Meta<typeof InputOTPComponent> = {
  component: InputOTPComponent,
  title: 'Component/InputOTP'
}

export default meta
type Story = StoryObj<typeof InputOTPComponent>

const defaultArgs: Partial<InputOTPProps> = {
  genre: 'blackBorder',
  size: 'largeMedium'
}

export const InputOTP: Story = {
  args: {
    ...defaultArgs,
    length: 6,
    sx: {
      default: {
        width: '320px'
      }
    },
    onComplete(otp) {
      console.log('onComplete', otp)
    },
    onBlur(e) {
      console.log('onBlur', e)
    },
    onChange(value) {
      console.log('onChange', value)
    }
  }
}
