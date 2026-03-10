import { IPreview, Preview as PreviewComponent } from '@local/areas/preview';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { MotionTypingEffect } from '@local/styles/motion';
import { CSS_VARS } from '@local/styles/utils/constants';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';

import { WrapperBig } from './tools';

const meta: Meta<IPreview> = {
  component: PreviewComponent,
  title: 'Area/1. Preview',
};

export default meta;

type Story = StoryObj<IPreview>;

export const Index: Story = {
  args: {
    defaultVisible: false,
    visible: true,
    minTime: 2000,
    content: (
      <Typography
        sx={{
          variant: 'title-3',
          color: 'textPrimaryLight',
        }}
      >
        <MotionTypingEffect text='Loading...' />
      </Typography>
    ),
  },
};

const CollectionWrapper: FC = () => {
  return (
    <WrapperBig>
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
        <PreviewComponent
          time={2000}
          defaultVisible={false}
          content={
            <Typography
              sx={{
                variant: 'title-3',
                color: 'textPrimaryLight',
              }}
            >
              <MotionTypingEffect text='Loading...' />
            </Typography>
          }
        />
      </Stack>
      <Stack
        sx={{
          position: 'relative',
          width: '160px',
          height: '200px',
          backgroundColor: CSS_VARS.palette.accentBlueLight,
          color: CSS_VARS.palette.textPrimaryLight,
          borderRadius: '8px',
        }}
      >
        <PreviewComponent
          time={2000}
          defaultVisible={false}
          content={
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              <MotionTypingEffect text='Loading...' />
            </Typography>
          }
        />
      </Stack>
    </WrapperBig>
  );
};

export const Collection: Story = {
  render: () => <CollectionWrapper />,
};
