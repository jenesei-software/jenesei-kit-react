import { Stack } from '@local/components/stack';
import { CSS_VARS } from '@local/styles/utils';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';

import { WrapperBig } from './tools';

const PaletteWrapper: FC = () => {
  return (
    <WrapperBig>
      {Object.values(CSS_VARS.palette).map((color) => (
        <Stack
          key={color}
          style={{
            backgroundColor: color,
            borderRadius: '4px',
            padding: '8px',
            marginBottom: '8px',
            flex: 1,
            height: '64px',
            minWidth: '160px',
            border: '1px dashed',
            borderColor: CSS_VARS.palette.accentBlueLight,
          }}
        >
          {color}
        </Stack>
      ))}
    </WrapperBig>
  );
};
const meta: Meta = {
  component: PaletteWrapper,
  title: 'Other/1. Palette',
};

export default meta;

type Story = StoryObj;

export const Palette: Story = {};
