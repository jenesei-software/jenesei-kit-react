import { Button } from '@local/components/button';
import { Stack } from '@local/components/stack';
import { ISonnerProvider, ProviderSonner, useSonner } from '@local/contexts/context-sonner';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';

const meta: Meta<typeof ProviderSonner> = {
  component: ProviderSonner,
  title: 'Context/3. Sonner',
};

export default meta;

type Story = StoryObj<typeof ProviderSonner>;

const ProviderSonnerWrapper: FC<ISonnerProvider> = (props) => {
  return (
    <ProviderSonner {...props}>
      <ProviderSonnerWrapperDouble />
    </ProviderSonner>
  );
};
const ProviderSonnerWrapperDouble: FC = () => {
  const { toast, promise } = useSonner(['toast', 'promise']);

  const handlePromise = () => {
    promise(
      new Promise<string>((resolve) => setTimeout(() => resolve('Data loaded successfully!'), 3000)),
      {
        title: 'ЗАГРУЗКА',
        description: 'Подождите, данные загружаются...',
        genre: 'primary',
        button: false,
      },
      () => ({
        title: 'Офигенчик! Офигенчик! Офигенчик!',
        description: 'Данные загрузились! Данные загрузились! Данные загрузились! Данные загрузились!',
        genre: 'green',
        icon: {
          type: 'loading',
          name: 'Blocks',
        },
      }),
    );
  };
  const handleToastBlack = () => {
    toast({
      title: 'Обычный тост',
      description: 'Или чебурашка?',
      genre: 'secondary',
    });
  };
  const handleToastWithoutButton = () => {
    toast({
      title: 'Не обычный тост',
      description: 'Да оно же без кнопки!',
      genre: 'secondary',
      button: false,
      hidingMode: 'clickOnSonner',
    });
  };
  const handleToastWarning = () => {
    toast({
      title: 'Предупреждение!',
      description: 'Или чебурашка?',
      genre: 'yellow',
    });
  };
  const handleToastError = () => {
    toast({
      title: 'Ошибка!',
      description: 'Или чебурашка?',
      genre: 'red',
    });
  };
  const handleToastSuccess = () => {
    toast({
      title: 'Успех!',
      description: 'Или чебурашка?',
      genre: 'green',
    });
  };
  const handleToastWithHidingTime = () => {
    toast({
      title: 'Обычный тост?',
      description: 'Да оно ж само исчезнет!',
      genre: 'secondary',
      hidingTime: 3000,
    });
  };
  return (
    <Stack
      sx={{
        padding: '12px',
        gap: '8px',
      }}
    >
      <Button onClick={handlePromise} genre='primary' size='medium'>
        Promise Toast!
      </Button>
      <Button onClick={handleToastBlack} genre='secondary' size='medium'>
        Black Toast!
      </Button>
      <Button onClick={handleToastWithoutButton} genre='secondary' size='medium'>
        Without Button Toast!
      </Button>
      <Button onClick={handleToastWithHidingTime} genre='secondary' size='medium'>
        With Hiding Time Toast!
      </Button>
      <Button onClick={handleToastError} genre='red' size='medium'>
        Error Toast!
      </Button>
      <Button onClick={handleToastWarning} genre='yellow' size='medium'>
        Warning Toast!
      </Button>
      <Button onClick={handleToastSuccess} genre='green' size='medium'>
        Success Toast!
      </Button>
    </Stack>
  );
};

export const Sonner: Story = {
  render: (args) => <ProviderSonnerWrapper {...args} />,
  args: {
    visibleToasts: 3,
    position: 'bottom-left',
    gap: 12,
  },
};
