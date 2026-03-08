import { SharedProps } from '@local/areas/shared';
import { Shared as SharedComponent } from '@local/areas/shared/area';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useEffect, useState } from 'react';

const meta: Meta<typeof SharedComponent> = {
  component: SharedComponent,
  title: 'Area/Shared',
};

export default meta;

type Story = StoryObj<typeof SharedComponent>;

const SharedStackWrapper: FC<SharedProps> = (props) => {
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
      sx={(theme) => ({
        default: {
          padding: '16px',
          position: 'relative',
          width: '100%',
          height: '100%',
          backgroundColor: theme.palette.whiteStandard,
          borderRadius: '8px',
          gap: '8px',
        },
      })}
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
          genre: 'bustmarket-gray-violet',
        },
        default: {
          icons: [
            {
              order: -1,
              type: 'bustmarket',
              name: 'Card',
            },
          ],
          genre: 'bustmarket-gray',
          children: 'Выкупы',
          size: 'medium',
          sxTypography: {
            default: {
              family: 'Manrope',
              weight: 400,
              size: 14,
            },
          },
        },
      },
      {
        id: '2',
        selected: {
          genre: 'bustmarket-gray-violet',
        },
        default: {
          icons: [
            {
              order: -1,
              type: 'bustmarket',
              name: 'Delivery',
            },
          ],
          genre: 'bustmarket-gray',
          children: 'Доставки',
          size: 'medium',
          sxTypography: {
            default: {
              family: 'Manrope',
              weight: 400,
              size: 14,
            },
          },
        },
      },
      {
        id: '3',
        selected: {
          genre: 'bustmarket-gray-violet',
        },
        default: {
          icons: [
            {
              order: -1,
              type: 'bustmarket',
              name: 'Heart',
            },
          ],
          genre: 'bustmarket-gray',
          children: 'Избранное',
          size: 'medium',
          sxTypography: {
            default: {
              family: 'Manrope',
              weight: 400,
              size: 14,
            },
          },
        },
      },
      {
        id: '4',
        selected: {
          genre: 'bustmarket-gray-violet',
        },
        default: {
          icons: [
            {
              order: -1,
              type: 'bustmarket',
              name: 'Reviews',
            },
          ],
          genre: 'bustmarket-gray',
          children: 'Отзывы',
          size: 'medium',
          sxTypography: {
            default: {
              family: 'Manrope',
              weight: 400,
              size: 14,
            },
          },
        },
      },
      {
        id: '5',
        selected: {
          genre: 'bustmarket-gray-violet',
        },
        default: {
          icons: [
            {
              order: -1,
              type: 'bustmarket',
              name: 'Search',
            },
          ],
          genre: 'bustmarket-gray',
          children: 'Позиции в поиске',
          size: 'medium',
          sxTypography: {
            default: {
              family: 'Manrope',
              weight: 400,
              size: 14,
            },
          },
        },
      },
      {
        id: '6',
        selected: {
          genre: 'bustmarket-gray-violet',
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
          genre: 'bustmarket-gray',
          children: 'Тест Лого',
          size: 'medium',
          sxTypography: {
            default: {
              family: 'Manrope',
              weight: 400,
              size: 14,
            },
          },
        },
      },
    ],
  },
};
