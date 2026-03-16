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
    visible: false,
    minTime: 2000,
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
          backgroundColor: CSS_VARS.palette.fillQuaternaryLight,
          color: CSS_VARS.palette.textPrimaryLight,
          borderRadius: '8px',
        }}
      >
        <PreviewComponent time={2000} defaultVisible={false} />
      </Stack>
      <Stack
        sx={{
          position: 'relative',
          width: '200px',
          height: '200px',
          backgroundColor: CSS_VARS.palette.accentBlueLight,
          color: CSS_VARS.palette.textPrimaryDark,
          borderRadius: '8px',
        }}
      >
        <PreviewComponent time={2000} defaultVisible={false} />
      </Stack>
    </WrapperBig>
  );
};

export const Collection: Story = {
  render: () => <CollectionWrapper />,
};
