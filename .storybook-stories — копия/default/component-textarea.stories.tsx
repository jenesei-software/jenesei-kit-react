import { Input } from '@local/components/input';
import { TextArea as TextAreaComponent } from '@local/components/textarea';
import { Typography } from '@local/components/typography';

import type { Meta } from '@storybook/react-vite';
import { FC, useState } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof TextAreaComponent> = {
  component: TextAreaComponent,
  title: 'Component/TextArea',
};

export default meta;

const AllWrapper: FC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <WrapperBig sx={{ default: { flexDirection: 'row' } }}>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Size - small
        </Typography>
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
            placeholder='Type here...'
            genre='blackBorder'
            size='small'
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
            TextAreaComponent, fix size, minRows = 1
          </Typography>
          <TextAreaComponent
            isOutlineBoxShadow
            minRows={1}
            placeholder='Type here...'
            genre='blackBorder'
            size='small'
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
            TextAreaComponent, fix size, minRows = 4
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='blackBorder'
            placeholder='Type here...'
            size='small'
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
            TextAreaComponent, auto size, minRows = 1, maxRows = 4
          </Typography>
          <TextAreaComponent
            minRows={1}
            maxRows={4}
            isAutoHeight
            genre='blackBorder'
            placeholder='Type here...'
            size='small'
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
            TextAreaComponent, auto size, minRows = 2, maxRows = 4
          </Typography>
          <TextAreaComponent
            minRows={2}
            maxRows={4}
            isAutoHeight
            genre='blackBorder'
            placeholder='Type here...'
            size='small'
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
            TextAreaComponent, auto size, minRows = 3, maxRows = 6
          </Typography>
          <TextAreaComponent
            minRows={3}
            maxRows={6}
            isAutoHeight
            genre='blackBorder'
            size='small'
            placeholder='Type here...'
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          TextAreaComponent - List of genre
        </Typography>
        <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
          <Typography
            sx={{
              default: {
                variant: 'h5',
                color: 'black100',
              },
            }}
          >
            TextAreaComponent, blackBorder
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='blackBorder'
            placeholder='Type here...'
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
            TextAreaComponent, gray
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='gray'
            placeholder='Type here...'
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
            TextAreaComponent, grayBorder
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='grayBorder'
            placeholder='Type here...'
            size='medium'
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          TextAreaComponent - List of other
        </Typography>
        <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
          <Typography
            sx={{
              default: {
                variant: 'h5',
                color: 'black100',
              },
            }}
          >
            TextAreaComponent, isResize
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='blackBorder'
            placeholder='Type here...'
            size='medium'
            value={value}
            isResize
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
            TextAreaComponent, isBold
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='blackBorder'
            placeholder='Type here...'
            size='medium'
            value={value}
            isBold
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
            TextAreaComponent, isDisabled
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='blackBorder'
            placeholder='Type here...'
            size='medium'
            value={value}
            isDisabled
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
            TextAreaComponent, isInputEffect
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='blackBorder'
            placeholder='Type here...'
            size='medium'
            value={value}
            isInputEffect
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
            TextAreaComponent, isNoSpaces
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='blackBorder'
            placeholder='Type here...'
            size='medium'
            value={value}
            isNoSpaces
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
            TextAreaComponent, isReadOnly
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='blackBorder'
            placeholder='Type here...'
            size='medium'
            value={value}
            isReadOnly
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
            TextAreaComponent, error
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='blackBorder'
            placeholder='Type here...'
            size='medium'
            value={value}
            error={{
              errorMessage: 'Super error',
              isError: true,
              isErrorAbsolute: false,
            }}
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
            TextAreaComponent, defaultValue
          </Typography>
          <TextAreaComponent
            minRows={4}
            genre='blackBorder'
            placeholder='Type here...'
            size='medium'
            // value={value}
            defaultValue='This is default value'
            onChange={(newValue) => setValue(newValue)}
          />
        </WrapperMin>
      </WrapperBig>
    </WrapperBig>
  );
};

export const TextArea = {
  render: () => <AllWrapper />,
};
