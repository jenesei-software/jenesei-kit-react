import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';
import 'styled-components';

import { Button } from '@local/components/button';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { ProviderDialog, ProviderDialogProps, useDialog } from '@local/contexts/context-dialog';

const meta: Meta<typeof ProviderDialog> = {
  component: ProviderDialog,
  title: 'Context/Dialog',
};

export default meta;

type Story = StoryObj<typeof ProviderDialog>;

const ProviderDialogWrapper: FC<ProviderDialogProps> = () => {
  return <ProviderDialogWrapperDouble />;
};
const ProviderDialogWrapperDouble: FC = () => {
  const { add, remove } = useDialog();

  const handleAdd = () => {
    add({
      content: () => {
        return (
          <Stack>
            <Typography
              sx={{
                default: {
                  variant: 'h6',
                },
              }}
            >
              test
            </Typography>
          </Stack>
        );
      },
    });
  };
  return (
    <Stack
      sx={{
        default: {
          padding: '12px',
          gap: '8px',
          minHeight: '200dvh',
        },
      }}
    >
      <Button onClick={handleAdd} genre='black' size='medium'>
        Add Dialog!
      </Button>
      <Button onClick={remove} genre='black' size='medium'>
        Remove Dialog!
      </Button>
    </Stack>
  );
};

export const Dialog: Story = {
  render: (args) => <ProviderDialogWrapper {...args} />,
  args: {
    zIndex: 100,
  },
};
