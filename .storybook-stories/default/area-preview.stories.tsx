import { PreviewProps } from '@local/areas/preview';
import { Preview as PreviewComponent } from '@local/areas/preview/area';
import { Stack } from '@local/components/stack';
import { MotionTypingEffect } from '@local/styles/motion';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';

const meta: Meta<typeof PreviewComponent> = {
  component: PreviewComponent,
  title: 'Area/Preview',
};

export default meta;

type Story = StoryObj<typeof PreviewComponent>;

export const PreviewMax: Story = {
  args: {
    defaultVisible: false,
    visible: true,
    minTime: 2000,
    content: <MotionTypingEffect text='Loading...' />,
  },
};

const PreviewStackWrapper: FC<PreviewProps> = (props) => {
  return (
    <Stack
      sx={(theme) => ({
        default: {
          position: 'relative',
          width: '200px',
          height: '200px',
          backgroundColor: theme.palette.blueFocus,
          borderRadius: '8px',
        },
      })}
    >
      <PreviewComponent {...props} />
    </Stack>
  );
};

export const PreviewStack: Story = {
  render: (args) => <PreviewStackWrapper {...args} />,
  args: {
    defaultVisible: false,
    time: 2000,
    content: <MotionTypingEffect text='Loading...' />,
  },
};
