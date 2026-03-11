import { IInputOTP, InputOTP as InputOTPComponent } from '@local/components/input-otp';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';

const meta: Meta<IInputOTP> = {
  component: InputOTPComponent,
  title: 'Component/10. InputOTP',
};

export default meta;
type Story = StoryObj<IInputOTP>;

const defaultArgs: Partial<IInputOTP> = {
  genre: 'primary',
  size: 'largeMedium',
};

const InputOTPWrapper: FC<IInputOTP> = (props) => {
  return (
    <InputOTPComponent {...props} />
  );
};

export const Index: Story = {
  render: (args) => <InputOTPWrapper {...args} />,
  args: {
    ...defaultArgs,
    length: 6,
    style: {
      width: '320px',
    },
    onComplete(otp) {
      console.log('onComplete', otp);
    },
    onBlur(e) {
      console.log('onBlur', e);
    },
    onChange(value) {
      console.log('onChange', value);
    },
  },
};
