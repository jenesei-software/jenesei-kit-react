import { IShared } from '@local/areas/shared';
import { Shared as SharedComponent } from '@local/areas/shared/area';
import { CSS_VARS } from '@local/styles/utils';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useEffect, useState } from 'react';

const meta: Meta<typeof SharedComponent> = {
  component: SharedComponent,
  title: 'Area/Shared',
};

export default meta;

type Story = StoryObj<typeof SharedComponent>;

const SharedStackWrapper: FC<IShared> = (props) => {
  const [value, setValue] = useState(props.value ?? '1');
  const onSelected = (tab: string) => {
    setValue(tab);
    props.onSelected?.(tab);
  };
  useEffect(() => {
    setValue(props.value ?? '1');
  }, [props.value]);
  return (
    <SharedComponent
      sx={{
        padding: '16px',
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: CSS_VARS.palette.fillPrimaryDark,
        borderRadius: '8px',
        gap: '8px',
      }}
      {...props}
      onSelected={onSelected}
      value={value}
    />
  );
};

export const Shared: Story = {
  render: (args) => <SharedStackWrapper {...args} />,
  args: {
    isLink: false,
    value: '1',
    option: [
      {
        id: '1',
        selected: {
          genre: 'primary',
        },
        default: {
          icons: [
            {
              order: -1,
              type: 'id',
              name: 'Bag1',
            },
          ],
          genre: 'primary',
          children: 'Выкупы',
          isHiddenBorder: true,
          size: 'medium',
          sxTypography: {
            family: 'Manrope',
            weight: '400',
            size: 14,
          },
        },
      },
      {
        id: '2',
        selected: {
          genre: 'primary',
        },
        default: {
          icons: [
            {
              order: -1,
              type: 'id',
              name: 'Bag1',
            },
          ],
          genre: 'primary',
          isHiddenBorder: true,
          children: 'Доставки',
          size: 'medium',
          sxTypography: {
            family: 'Manrope',
            weight: '400',
            size: 14,
          },
        },
      },
      {
        id: '3',
        selected: {
          genre: 'primary',
        },
        default: {
          icons: [
            {
              order: -1,
              type: 'id',
              name: 'Bag1',
            },
          ],
          genre: 'primary',
          isHiddenBorder: true,
          children: 'Избранное',
          size: 'medium',
          sxTypography: {
            family: 'Manrope',
            weight: '400',
            size: 14,
          },
        },
      },
      {
        id: '4',
        selected: {
          genre: 'primary',
        },
        default: {
          icons: [
            {
              order: -1,
              type: 'id',
              name: 'Bag1',
            },
          ],
          genre: 'primary',
          isHiddenBorder: true,
          children: 'Отзывы',
          size: 'medium',
          sxTypography: {
            family: 'Manrope',
            weight: '400',
            size: 14,
          },
        },
      },
      {
        id: '5',
        selected: {
          genre: 'primary',
        },
        default: {
          icons: [
            {
              order: -1,
              type: 'id',
              name: 'Bag1',
            },
          ],
          genre: 'primary',
          isHiddenBorder: true,
          children: 'Позиции в поиске',
          size: 'medium',
          sxTypography: {
            family: 'Manrope',
            weight: '400',
            size: 14,
          },
        },
      },
      {
        id: '6',
        selected: {
          genre: 'primary',
        },
        default: {
          isOutlineBoxShadow: true,
          icons: [
            {
              order: -1,
              type: 'logo',
              name: 'BustMarket',
            },
          ],
          genre: 'primary',
          isHiddenBorder: true,
          children: 'Тест Лого',
          size: 'medium',
          sxTypography: {
            family: 'Manrope',
            weight: '400',
            size: 14,
          },
        },
      },
    ],
  },
};
