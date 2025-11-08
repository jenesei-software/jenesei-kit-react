import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';
import 'styled-components';

import { ButtonGroup, ButtonGroupProps } from '@local/components/button-group/export';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Component/ButtonGroup',
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

const ButtonGroupWrapper: FC<ButtonGroupProps> = (props) => {
  return (
    <ButtonGroup
      {...props}
      value={[
        {
          sx: {
            default: { justifyContent: 'flex-start' },
          },
          children: 'First',
          icons: [
            {
              type: 'id',
              name: 'CallMissed',
              order: -1,
            },
          ],
          type: 'button',
          genre: 'black',
          size: 'medium',
        },
        {
          sx: {
            default: { justifyContent: 'space-between' },
          },
          children: 'Third',
          icons: [
            {
              type: 'id',
              name: 'Filter2',
              order: -1,
            },
          ],
          type: 'button',
          genre: 'gray',
          size: 'medium',
        },
        {
          sx: {
            default: { justifyContent: 'space-between' },
          },
          children: 'Second',
          icons: [
            {
              type: 'id',
              name: 'Graph',
              order: 1,
            },
          ],
          type: 'button',
          genre: 'blackBorder',
          size: 'medium',
        },
      ]}
    />
  );
};

export const Horizontal: Story = {
  render: (args) => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'horizontal',
  },
};

export const Vertical: Story = {
  render: (args) => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'vertical',
  },
};
