import type { Meta, StoryObj } from '@storybook/react-vite';
import 'styled-components';

import { Button } from '@local/components/button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'RealEbail/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Product: Story = {
  args: {
    children: 'Click',
    type: 'button',
    genre: 'realebail-product',
    size: 'medium',
    sx: {
      default: {
        width: 'auto',
      },
    },
    sxTypography: {
      default: {
        weight: 400,
        family: 'Work Sans',
      },
    },
  },
};
export const Gray: Story = {
  args: {
    children: 'Click',
    type: 'button',
    genre: 'realebail-gray',
    size: 'medium',
    sx: {
      default: {
        width: 'auto',
      },
    },
    sxTypography: {
      default: {
        weight: 400,
        family: 'Work Sans',
      },
    },
  },
};
