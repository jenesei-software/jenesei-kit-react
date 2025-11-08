import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';
import 'styled-components';

import { Stack } from '@local/components/stack/export';
import { JeneseiPalette } from '@local/styles/theme/export';

import { WrapperBig } from './tools';

const PaletteWrapper: FC = () => {
  return (
    <WrapperBig>
      {Object.entries(JeneseiPalette).map(([key, color]) => (
        <Stack
          key={key}
          sx={(theme) => ({
            default: {
              backgroundColor: color,
              borderRadius: '4px',
              padding: '8px',
              marginBottom: '8px',
              color: color.startsWith('#') ? theme.getContrastYIQ(color) : theme.palette.black100,
              flex: 1,
              height: '64px',
              minWidth: '160px',
              border: '1px dashed',
              borderColor: theme.palette.blueHover,
            },
          })}
        >
          {color}
          <br />
          {key}
        </Stack>
      ))}
    </WrapperBig>
  );
};
const meta: Meta = {
  component: PaletteWrapper,
  title: 'List/Palette',
};

export default meta;

type Story = StoryObj;

export const Palette: Story = {};
