import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useMemo } from 'react';
import 'styled-components';

import { Button } from '@local/components/button/export';
import { Stack } from '@local/components/stack/export';
import { Typography } from '@local/components/typography/export';
import { ProviderDialog, ProviderDialogProps, useDialog, useDialogProps } from '@local/contexts/context-dialog/export';

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
  const propsDialog: useDialogProps<{
    test: string;
  }> = useMemo(
    () => ({
      propsCustom: {
        test: 'test',
      },
      propsDialog: {
        isRemoveOnOutsideClick: false,
      },
      content: (remove, isAnimating, propsCustom) => {
        return (
          <Stack
            sx={{
              default: {
                flexDirection: 'column',
                gap: '10px',
              },
            }}
          >
            <Typography
              sx={{
                default: {
                  variant: 'h6',
                },
              }}
            >
              {propsCustom?.test}
            </Typography>
            <Typography
              sx={{
                default: {
                  variant: 'h6',
                },
              }}
            >
              {isAnimating ? ' animating' : ' not animating'}
            </Typography>
            <Button onClick={() => remove?.()} genre='black' size='medium'>
              Remove Dialog!
            </Button>
          </Stack>
        );
      },
    }),
    [],
  );
  const { add, remove } = useDialog(propsDialog);

  const handleAdd = () => {
    add();
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
