import { Checkbox as CheckboxComponent, ICheckbox } from '@local/components/checkbox';
import { Stack } from '@local/components/stack';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useEffect, useState } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<ICheckbox> = {
  component: CheckboxComponent,
  title: 'Component/Checkbox',
};

export default meta;

type Story = StoryObj<ICheckbox>;

const CheckboxWrapper: FC<ICheckbox> = (props) => {
  const [value, setValue] = useState<boolean>(props.checked ?? false);

  useEffect(() => {
    setValue(props.checked ?? false);
  }, [props.checked]);

  return <CheckboxComponent {...props} checked={value} onChange={(checked) => setValue(checked)} />;
};

export const Index: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    genre: 'product',
    view: {
      true: { type: 'checkbox', name: 'Square-true' },
      false: { type: 'checkbox', name: 'Square-false' },
    },
    checked: true,
    children: 'First',
    size: 'medium',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isHiddenBorder: true,
    isRadius: true,
  },
};

const CollectionWrapper: FC = () => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <WrapperBig>
      <WrapperMin>
        <CheckboxComponent
          size='medium'
          genre='primary'
          checked={value}
          onChange={(checked) => setValue(checked)}
          isRadius
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
        >
          Square
        </CheckboxComponent>
        <CheckboxComponent
          size='medium'
          genre='primary'
          checked={value}
          onChange={(checked) => setValue(checked)}
          isRadius
          view={{
            true: { type: 'checkbox', name: 'Radio-true' },
            false: { type: 'checkbox', name: 'Radio-false' },
          }}
        >
          Radio
        </CheckboxComponent>
        <CheckboxComponent
          size='medium'
          genre='primary'
          isRadius
          checked={value}
          onChange={(checked) => setValue(checked)}
          view={{
            true: { type: 'checkbox', name: 'Heart-true' },
            false: { type: 'checkbox', name: 'Heart-false' },
          }}
        >
          Heart
        </CheckboxComponent>
      </WrapperMin>

      <WrapperMin>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          size='medium'
          isRadius
          genre='primary'
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          Primary
        </CheckboxComponent>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          isRadius
          size='medium'
          genre='secondary'
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          Secondary
        </CheckboxComponent>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          size='medium'
          genre='product'
          isRadius
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          Product
        </CheckboxComponent>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          size='medium'
          genre='blue'
          isRadius
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          Blue
        </CheckboxComponent>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          size='medium'
          genre='green'
          isRadius
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          Green
        </CheckboxComponent>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          size='medium'
          isRadius
          genre='red'
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          Red
        </CheckboxComponent>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          size='medium'
          genre='yellow'
          isRadius
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          Yellow
        </CheckboxComponent>
      </WrapperMin>

      <WrapperMin>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          size='large'
          genre='primary'
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          large
        </CheckboxComponent>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          size='largeMedium'
          genre='primary'
          isRadius
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          largeMedium
        </CheckboxComponent>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          size='medium'
          genre='primary'
          isRadius
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          medium
        </CheckboxComponent>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          size='mediumSmall'
          genre='primary'
          isRadius
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          mediumSmall
        </CheckboxComponent>
        <CheckboxComponent
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
          size='small'
          genre='primary'
          isRadius
          checked={value}
          onChange={(checked) => setValue(checked)}
        >
          small
        </CheckboxComponent>
      </WrapperMin>

      <WrapperMin>
        <CheckboxComponent
          size='medium'
          genre='primary'
          isRadius
          checked={value}
          onChange={(checked) => setValue(checked)}
          view={{
            true: { type: 'checkbox', name: 'Heart-true' },
            false: { type: 'checkbox', name: 'Heart-false' },
          }}
          isWidthAsHeight
        />
        <CheckboxComponent
          size='medium'
          isRadius
          genre='product'
          isNotHoverEffect
          checked={value}
          onChange={(checked) => setValue(checked)}
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
        >
          isNotHoverEffect
        </CheckboxComponent>
        <CheckboxComponent
          size='medium'
          genre='product'
          isRadius
          isDisabled
          checked={value}
          onChange={(checked) => setValue(checked)}
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
        >
          isDisabled
        </CheckboxComponent>
        <CheckboxComponent
          size='medium'
          genre='product'
          isHidden
          isRadius
          checked={value}
          onChange={(checked) => setValue(checked)}
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
        >
          isHidden
        </CheckboxComponent>
        <CheckboxComponent
          size='medium'
          isRadius
          genre='product'
          isDisabledOutline
          checked={value}
          onChange={(checked) => setValue(checked)}
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
        >
          isDisabledOutline
        </CheckboxComponent>
        <CheckboxComponent
          size='medium'
          genre='primary'
          isRadius
          isHiddenBorder
          checked={value}
          onChange={(checked) => setValue(checked)}
          view={{
            true: { type: 'checkbox', name: 'Square-true' },
            false: { type: 'checkbox', name: 'Square-false' },
          }}
        >
          isHiddenBorder
        </CheckboxComponent>
        <Stack
          style={{
            position: 'relative',
          }}
        >
          <CheckboxComponent
            size='medium'
            isRadius
            genre='product'
            error={{
              isError: true,
              errorMessage: 'Error?',
              isErrorAbsolute: true,
            }}
            checked={value}
            onChange={(checked) => setValue(checked)}
            view={{
              true: { type: 'checkbox', name: 'Square-true' },
              false: { type: 'checkbox', name: 'Square-false' },
            }}
          >
            Error
          </CheckboxComponent>
        </Stack>
      </WrapperMin>
    </WrapperBig>
  );
};

export const Collection = {
  render: () => <CollectionWrapper />,
};
