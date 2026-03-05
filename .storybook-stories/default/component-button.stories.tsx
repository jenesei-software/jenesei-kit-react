import { Button as ButtonComponent } from '@local/components/button';

import type { Meta } from '@storybook/react-vite';
import { FC } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'Component/Button',
};

export default meta;

const ButtonWrapper: FC = () => {
  return (
    <WrapperBig>
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

      <WrapperMin>
        <ButtonComponent
          isRadius
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
        <ButtonComponent size='medium' genre='product' isNotHoverEffect>
          isNotHoverEffect
        </ButtonComponent>
        <ButtonComponent size='medium' genre='product' isDisabled>
          isDisabled
        </ButtonComponent>
        <ButtonComponent size='medium' genre='product' isHidden>
          isHidden
        </ButtonComponent>
        <ButtonComponent size='medium' genre='product' isDisabledOutline>
          isDisabledOutline
        </ButtonComponent>
        <ButtonComponent size='medium' genre='primary' isHiddenBorder>
          isHiddenBorder
        </ButtonComponent>
      </WrapperMin>
    </WrapperBig>
  );
};

export const Button = {
  render: () => <ButtonWrapper />,
};
