import { Button } from '@local/components/button';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { IDialogProvider, IUseDialog, ProviderDialog, useDialog } from '@local/contexts/context-dialog';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useMemo } from 'react';

const meta: Meta<typeof ProviderDialog> = {
  component: ProviderDialog,
  title: 'Context/2. Dialog',
};

export default meta;

type Story = StoryObj<typeof ProviderDialog>;

const ProviderDialogWrapper: FC<IDialogProvider> = () => {
  return <ProviderDialogWrapperDouble />;
};
const ProviderDialogWrapperDouble: FC = () => {
  const propsDialog: IUseDialog<{
    test: string;
  }> = useMemo(
    () => ({
      propsCustom: {
        test: 'test',
      },
      propsDialog: {
        background:'fillLight',
        isRemoveOnOutsideClick: false,
      },
      content: (params) => {
        return (
          <Stack
            sx={{
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Typography
              sx={{
                variant: 'title-5',
              }}
            >
              {params.propsCustom?.test}
            </Typography>
            <Typography
              sx={{
                variant: 'title-5',
              }}
            >
              {params.isAnimating ? ' animating' : ' not animating'}
            </Typography>
            <Button onClick={() => params.remove?.()} genre='primary' size='medium'>
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
        padding: '12px',
        gap: '8px',
        minHeight: '200dvh',
      }}
    >
      <Button onClick={handleAdd} genre='primary' size='medium'>
        Add Dialog!
      </Button>
      <Button onClick={remove} genre='primary' size='medium'>
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
