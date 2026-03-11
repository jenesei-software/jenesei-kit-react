import { Button as ButtonComponent, IButton } from '@local/components/button';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<IButton> = {
  component: ButtonComponent,
  title: 'Component/1. Button',
};

export default meta;

const CollectionWrapper: FC = () => {
  return (
    <WrapperBig>
      <WrapperBig>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Genre
        </Typography>
        <WrapperMin>
          <ButtonComponent size='medium' genre='primary'>
            Primary
          </ButtonComponent>
          <ButtonComponent size='medium' genre='secondary'>
            Secondary
          </ButtonComponent>
          <ButtonComponent size='medium' genre='product'>
            Product
          </ButtonComponent>
          <ButtonComponent size='medium' genre='blue'>
            Blue
          </ButtonComponent>
          <ButtonComponent size='medium' genre='green'>
            Green
          </ButtonComponent>
          <ButtonComponent size='medium' genre='red'>
            Red
          </ButtonComponent>
          <ButtonComponent size='medium' genre='yellow'>
            Yellow
          </ButtonComponent>
        </WrapperMin>
      </WrapperBig>

      <WrapperBig>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Size
        </Typography>
        <WrapperMin>
          <ButtonComponent size='large' genre='primary'>
            large
          </ButtonComponent>
          <ButtonComponent size='largeMedium' genre='primary'>
            largeMedium
          </ButtonComponent>
          <ButtonComponent size='medium' genre='primary'>
            medium
          </ButtonComponent>
          <ButtonComponent size='mediumSmall' genre='primary'>
            mediumSmall
          </ButtonComponent>
          <ButtonComponent size='small' genre='primary'>
            small
          </ButtonComponent>
        </WrapperMin>
      </WrapperBig>

      <WrapperBig>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Other
        </Typography>
        <WrapperMin>
          <ButtonComponent
            isFullRadius
            isOnlyIcon
            isWidthAsHeight
            icons={[{ type: 'logo', name: 'Jenesei', size: '100%' }]}
            size='medium'
            genre='product'
            isWhileTapEffect
          />
          <ButtonComponent
            size='medium'
            genre='product'
            icons={[
              {
                type: 'id',
                name: 'Biometry',
                order: 1,
              },
              {
                type: 'loading',
                name: 'Blocks',
                order: -1,
              },
            ]}
            isWhileTapEffect
            isIconGroup
            iconGroupOrder={1}
          >
            2 Icons, isWhileTapEffect
          </ButtonComponent>
          <ButtonComponent size='medium' genre='product' isZeroRadius>
            isZeroRadius
          </ButtonComponent>
          <ButtonComponent size='medium' genre='product' isDisabled>
            isDisabled
          </ButtonComponent>
          <ButtonComponent size='medium' genre='product' isHidden>
            isHidden
          </ButtonComponent>
          <ButtonComponent size='medium' genre='primary' isHiddenBorder>
            isHiddenBorder
          </ButtonComponent>
          <ButtonComponent size='medium' genre='product' control='default'>
            Control - default
          </ButtonComponent>
          <ButtonComponent size='medium' genre='product' control='onlyActive'>
            Control - onlyActive
          </ButtonComponent>
          <Stack
            style={{
              width: '100px',
              height: '100px',
            }}
          >
            <ButtonComponent isZeroRadius size='large' isFullSize genre='primary'>
              100%
            </ButtonComponent>
          </Stack>
        </WrapperMin>
      </WrapperBig>
    </WrapperBig>
  );
};

type Story = StoryObj<IButton>;

export const Collection = {
  render: () => <CollectionWrapper />,
};

export const Index: Story = {
  args: {
    genre: 'primary',
    size: 'medium',
    children: 'Example',
  },
};
