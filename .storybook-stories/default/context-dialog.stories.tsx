import { Button } from '@local/components/button';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import {
  IDialogContentNodeProps,
  IDialogProvider,
  IUseDialog,
  ProviderDialog,
  useDialog,
} from '@local/contexts/context-dialog';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useMemo } from 'react';

const meta: Meta<typeof ProviderDialog> = {
  component: ProviderDialog,
  title: 'Context/2. Dialog',
};

export default meta;

type Story = StoryObj<typeof ProviderDialog>;

export const Dialog: Story = {
  render: (args) => <ProviderDialogWrapper {...args} />,
  args: {
    zIndex: 100,
  },
};

const ProviderDialogWrapper: FC<IDialogProvider> = (props) => {
  return (
    <ProviderDialog {...props}>
      <DialogControls />
    </ProviderDialog>
  );
};

const DialogControls: FC = () => {
  const propsDialog = useMemo<
    IUseDialog<{
      test: string;
    }>
  >(
    () => ({
      propsCustom: {
        test: 'first dialog',
      },
      propsDialog: {
        isRemoveOnOutsideClick: true,
      },
      content: DialogOne,
    }),
    [],
  );
  const { add, remove, isOpen } = useDialog(propsDialog);

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
      <Button onClick={remove} genre='primary' size='medium' isDisabled={!isOpen} isHidden={!isOpen}>
        Remove Dialog!
      </Button>
    </Stack>
  );
};

const DialogOne = (
  params: IDialogContentNodeProps<{
    test: string;
  }>,
) => {
  const propsDialog = useMemo<
    IUseDialog<{
      test: string;
    }>
  >(
    () => ({
      propsCustom: {
        test: 'nested dialog',
      },
      propsDialog: {
        isRemoveOnOutsideClick: true,
      },
      content: DialogOne,
    }),
    [],
  );
  const { add, isOpen } = useDialog(propsDialog);

  return (
    <Stack
      sx={{
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Typography
        sx={{
          variant: 'title-1',
          color: 'accentBlueDark',
        }}
      >
        {params.propsCustom?.test}
      </Typography>
      <Typography
        sx={{
          variant: 'title-1',
          color: 'accentBlueDark',
        }}
      >
        id: {params.id}
      </Typography>
      <Typography
        sx={{
          variant: 'title-3',
          color: 'accentBlueDark',
        }}
      >
        {params.isAnimating ? ' animating' : ' not animating'}
      </Typography>
      <Button
        onClick={() => params.remove?.()}
        genre='primary'
        size='medium'
        isDisabled={params.isAnimating}
        isHidden={params.isAnimating}
      >
        Remove Dialog!
      </Button>

      <Button onClick={add} genre='primary' size='medium' isDisabled={isOpen} isHidden={isOpen}>
        Add Dialog!
      </Button>
    </Stack>
  );
};
