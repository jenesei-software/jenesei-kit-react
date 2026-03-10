import { Stack } from '@local/components/stack';
import { IToggle, Toggle as ToggleComponent } from '@local/components/toggle';
import { Typography } from '@local/components/typography';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useEffect, useState } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof ToggleComponent> = {
  component: ToggleComponent,
  title: 'Component/3. Toggle',
};

export default meta;

type Story = StoryObj<IToggle>;

const ToggleWrapper: FC<IToggle> = (props) => {
  const [value, setValue] = useState<boolean>(props.value ?? false);

  useEffect(() => {
    setValue(props.value ?? false);
  }, [props.value]);

  return <ToggleComponent {...props} value={value} onChange={(value) => setValue(value)} />;
};

export const Index: Story = {
  render: (args) => <ToggleWrapper {...args} />,
  args: {
    genre: 'primary',
    value: false,
    size: 'medium',
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
          Size
        </Typography>
        <WrapperMin>
          <ToggleComponent size='large' genre='primary' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent size='largeMedium' genre='primary' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent size='medium' genre='primary' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent size='mediumSmall' genre='primary' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent size='small' genre='primary' value={value} onChange={(checked) => setValue(checked)} />
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
          <ToggleComponent size='medium' genre='primary' value={value} onChange={(checked) => setValue(checked)} />
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
          <ToggleComponent
            size='medium'
            genre='primary'
            isDisabled
            value={value}
            onChange={(checked) => setValue(checked)}
          />
          <ToggleComponent
            size='medium'
            genre='primary'
            isHidden
            value={value}
            onChange={(checked) => setValue(checked)}
          />
          <ToggleComponent
            size='medium'
            genre='primary'
            isHiddenBorder
            value={value}
            onChange={(checked) => setValue(checked)}
          />
          <Stack
            style={{
              position: 'relative',
            }}
          >
            <ToggleComponent
              size='medium'
              genre='primary'
              error={{
                isError: true,
                errorMessage: 'Error?',
                isErrorAbsolute: true,
              }}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Stack>
          <ToggleComponent
            size='medium'
            genre='primary'
            control='default'
            value={value}
            onChange={(checked) => setValue(checked)}
          />
          <ToggleComponent
            size='medium'
            genre='primary'
            control='onlyActive'
            value={value}
            onChange={(checked) => setValue(checked)}
          />
        </WrapperMin>
      </WrapperBig>
    </WrapperBig>
  );
};

export const Collection = {
  render: () => <CollectionWrapper />,
};
