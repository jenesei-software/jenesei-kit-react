import { Checkbox as CheckboxComponent, ICheckbox } from '@local/components/checkbox';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useEffect, useState } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<ICheckbox> = {
  component: CheckboxComponent,
  title: 'Component/2. Checkbox',
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
    isHiddenBorder: true,
    isFullRadius: true,
  },
};

const CollectionWrapper: FC = () => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <WrapperBig>
      <WrapperBig>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Icon Type
        </Typography>
        <WrapperMin>
          <CheckboxComponent
            size='medium'
            genre='primary'
            checked={value}
            onChange={(checked) => setValue(checked)}
            isFullRadius
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
            isFullRadius
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
            isFullRadius
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
      </WrapperBig>
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
          <CheckboxComponent
            view={{
              true: { type: 'checkbox', name: 'Square-true' },
              false: { type: 'checkbox', name: 'Square-false' },
            }}
            size='medium'
            isFullRadius
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
            isFullRadius
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
            isFullRadius
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
            isFullRadius
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
            isFullRadius
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
            isFullRadius
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
            isFullRadius
            checked={value}
            onChange={(checked) => setValue(checked)}
          >
            Yellow
          </CheckboxComponent>
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
            isFullRadius
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
            isFullRadius
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
            isFullRadius
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
            isFullRadius
            checked={value}
            onChange={(checked) => setValue(checked)}
          >
            small
          </CheckboxComponent>
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
          <CheckboxComponent
            size='medium'
            genre='primary'
            isFullRadius
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
            genre='product'
            isFullRadius
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
            isFullRadius
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
            genre='product'
            isZeroRadius
            checked={value}
            onChange={(checked) => setValue(checked)}
            view={{
              true: { type: 'checkbox', name: 'Square-true' },
              false: { type: 'checkbox', name: 'Square-false' },
            }}
          >
            isZeroRadius
          </CheckboxComponent>
          <CheckboxComponent
            size='medium'
            genre='primary'
            isOnlyIcon
            checked={value}
            onChange={(checked) => setValue(checked)}
            view={{
              true: { type: 'checkbox', name: 'Heart-true' },
              false: { type: 'checkbox', name: 'Heart-false' },
            }}
          >
            isOnlyIcon
          </CheckboxComponent>
          <CheckboxComponent
            size='medium'
            genre='primary'
            isFullRadius
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
              isFullRadius
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
          <CheckboxComponent
            size='medium'
            isFullRadius
            genre='product'
            control='default'
            checked={value}
            onChange={(checked) => setValue(checked)}
            view={{
              true: { type: 'checkbox', name: 'Square-true' },
              false: { type: 'checkbox', name: 'Square-false' },
            }}
          >
            Control - default
          </CheckboxComponent>
          <CheckboxComponent
            size='medium'
            isFullRadius
            genre='product'
            control='onlyActive'
            checked={value}
            onChange={(checked) => setValue(checked)}
            view={{
              true: { type: 'checkbox', name: 'Square-true' },
              false: { type: 'checkbox', name: 'Square-false' },
            }}
          >
            Control - onlyActive
          </CheckboxComponent>
        </WrapperMin>
      </WrapperBig>
    </WrapperBig>
  );
};

export const Collection = {
  render: () => <CollectionWrapper />,
};
