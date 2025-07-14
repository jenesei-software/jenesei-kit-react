import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useState } from 'react';
import 'styled-components';

import { Input } from '@local/components/input';
import { TextArea, TextAreaProps } from '@local/components/textarea';
import { Typography } from '@local/components/typography';

import { WrapperBig, WrapperMin } from './untils';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'Component/TextArea',
};

export default meta;
type Story = StoryObj<typeof TextArea>;

const defaultArgs: Partial<TextAreaProps> = {
  genre: 'blackBorder',
  size: 'largeMedium',
  error: {
    errorMessage: 'Error',
    isError: false,
    isErrorAbsolute: false,
  },
  isDisabled: false,
  isRequired: false,
  isReadOnly: false,
  isLoading: false,
  isAutoHeight: true,
  sx: {
    default: {
      width: '300px',
    },
  },
  maxRows: 8,
};

const TextAreaStringWrapper: FC<TextAreaProps> = (props) => {
  const [value, setValue] = useState<string>('');

  return <TextArea {...props} value={value} onChange={(newValue) => setValue(newValue)} />;
};

export const Default: Story = {
  render: (args) => <TextAreaStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    placeholder: 'Default',
  },
};

const AllWrapper: FC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
      <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Input
        </Typography>
        <Input
          variety='standard'
          genre='blackBorder'
          size='medium'
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </WrapperMin>
      <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Fix Size, minRows = 1
        </Typography>
        <TextArea
          minRows={1}
          genre='blackBorder'
          size='medium'
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </WrapperMin>
      <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Fix Size, minRows = 4
        </Typography>
        <TextArea
          minRows={4}
          genre='blackBorder'
          size='medium'
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </WrapperMin>
      <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Auto Size, minRows = 1, maxRows = 4
        </Typography>
        <TextArea
          minRows={1}
          maxRows={4}
          isAutoHeight
          genre='blackBorder'
          size='medium'
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </WrapperMin>
      <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Auto Size, minRows = 2, maxRows = 4
        </Typography>
        <TextArea
          minRows={2}
          maxRows={4}
          isAutoHeight
          genre='blackBorder'
          size='medium'
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </WrapperMin>
      <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Auto Size, minRows = 3, maxRows = 6
        </Typography>
        <TextArea
          minRows={3}
          maxRows={6}
          isAutoHeight
          genre='blackBorder'
          size='medium'
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </WrapperMin>
    </WrapperBig>
  );
};

export const All = {
  render: () => <AllWrapper />,
};
