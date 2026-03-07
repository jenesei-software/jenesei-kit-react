import { IPreview } from '@local/areas/preview';
import { Preview as PreviewComponent } from '@local/areas/preview/area';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { MotionTypingEffect } from '@local/styles/motion';
import { CSS_VARS } from '@local/styles/utils/constants';

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
    content: (
      <Typography
        sx={{
          variant: 'headline',
          color: 'textPrimaryLight',
        }}
      >
        <MotionTypingEffect text='Loading...' />
      </Typography>
    ),
  },
};

const PreviewStackWrapper: FC<IPreview> = (props) => {
  return (
    <Stack
      sx={{
        position: 'relative',
        width: '200px',
        height: '200px',
        backgroundColor: CSS_VARS.palette.accentGrayLight,
        color: CSS_VARS.palette.textPrimaryLight,
        borderRadius: '8px',
      }}
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
    content: (
      <Typography
        sx={{
          variant: 'headline',
          color: 'textPrimaryLight',
        }}
      >
        <MotionTypingEffect text='Loading...' />
      </Typography>
    ),
  },
};
