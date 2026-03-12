import { Input } from '@local/components/input';
import { Stack } from '@local/components/stack/component';
import { ITextArea, TextArea as TextAreaComponent } from '@local/components/textarea';
import { Typography } from '@local/components/typography';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useState } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof TextAreaComponent> = {
  component: TextAreaComponent,
  title: 'Component/9. TextArea',
};

export default meta;

type Story = StoryObj<ITextArea>;

const CollectionWrapper: FC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <WrapperBig sx={{ flexDirection: 'row', width: '400px' }}>
      <WrapperBig sx={{ flexDirection: 'column', width: '100%' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Genre
        </Typography>
        <WrapperMin sx={{ flexDirection: 'column', width: '100%' }}>
          <TextAreaComponent
            placeholder='Primary'
            genre='primary'
            size='large'
            value={value}
            minRows={1}
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Secondary'
            genre='secondary'
            size='large'
            value={value}
            minRows={1}
            onChange={(newValue) => setValue(newValue)}
          />
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column', width: '100%' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Size
        </Typography>
        <WrapperMin sx={{ flexDirection: 'column', width: '100%' }}>
          <TextAreaComponent
            placeholder='Large'
            genre='primary'
            size='large'
            value={value}
            minRows={2}
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Large medium'
            genre='primary'
            size='largeMedium'
            value={value}
            minRows={2}
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Medium'
            genre='primary'
            size='medium'
            value={value}
            minRows={2}
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Medium small'
            genre='primary'
            size='mediumSmall'
            value={value}
            minRows={2}
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Small'
            genre='primary'
            size='small'
            value={value}
            minRows={2}
            onChange={(newValue) => setValue(newValue)}
          />
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column', width: '100%' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Variety
        </Typography>
        <WrapperMin sx={{ flexDirection: 'column', width: '100%' }}>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              Input
            </Typography>
            <Input
              variety='standard'
              placeholder='Type here...'
              genre='primary'
              size='small'
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              TextAreaComponent, fix size, minRows = 1
            </Typography>
            <TextAreaComponent
              minRows={1}
              placeholder='Type here...'
              genre='primary'
              size='small'
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              TextAreaComponent, fix size, minRows = 4
            </Typography>
            <TextAreaComponent
              minRows={4}
              genre='primary'
              placeholder='Type here...'
              size='small'
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              TextAreaComponent, auto size, minRows = 1, maxRows = 4
            </Typography>
            <TextAreaComponent
              minRows={1}
              maxRows={4}
              isAutoHeight
              genre='primary'
              placeholder='Type here...'
              size='small'
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              TextAreaComponent, auto size, minRows = 2, maxRows = 4
            </Typography>
            <TextAreaComponent
              minRows={2}
              maxRows={4}
              isAutoHeight
              genre='primary'
              placeholder='Type here...'
              size='small'
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              TextAreaComponent, auto size, minRows = 3, maxRows = 6
            </Typography>
            <TextAreaComponent
              minRows={3}
              maxRows={6}
              isAutoHeight
              genre='primary'
              size='small'
              placeholder='Type here...'
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </WrapperMin>
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column', width: '100%' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Other
        </Typography>
        <WrapperMin sx={{ flexDirection: 'column', width: '100%' }}>
          <TextAreaComponent
            placeholder='Is bold'
            genre='primary'
            size='large'
            value={value}
            minRows={2}
            isBold
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Is disabled'
            genre='primary'
            size='large'
            value={value}
            minRows={2}
            isDisabled
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Is full radius'
            genre='primary'
            size='large'
            value={value}
            minRows={2}
            isFullRadius
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Is hidden'
            genre='primary'
            size='large'
            value={value}
            minRows={2}
            isHidden
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Is hidden border'
            genre='primary'
            size='large'
            value={value}
            minRows={2}
            isHiddenBorder
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Is nice number'
            genre='primary'
            size='large'
            value={value}
            minRows={2}
            isNiceNumber
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Is no spaces'
            genre='primary'
            size='large'
            value={value}
            minRows={2}
            isNoSpaces
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Is readonly'
            genre='primary'
            size='large'
            value={value}
            minRows={2}
            isReadOnly
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Is zero radius'
            genre='primary'
            size='large'
            value={value}
            minRows={2}
            isZeroRadius
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Default value'
            genre='primary'
            size='large'
            defaultValue={value}
            minRows={2}
            onChange={(newValue) => setValue(newValue)}
          />
          <Stack
            style={{
              position: 'relative',
            }}
          >
            <TextAreaComponent
              placeholder='Error'
              genre='primary'
              size='large'
              value={value}
              minRows={2}
              onChange={(newValue) => setValue(newValue)}
              error={{
                isError: true,
                errorMessage: 'Error?',
                isErrorAbsolute: true,
              }}
            />
          </Stack>
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column', width: '100%' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Control
        </Typography>
        <WrapperMin sx={{ flexDirection: 'column', width: '100%' }}>
          <TextAreaComponent
            placeholder='Box shadow'
            genre='primary'
            size='medium'
            value={value}
            minRows={2}
            control='boxShadow'
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='Default'
            genre='primary'
            size='medium'
            value={value}
            minRows={2}
            control='default'
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='OnlyActive'
            genre='primary'
            size='medium'
            value={value}
            minRows={2}
            control='onlyActive'
            onChange={(newValue) => setValue(newValue)}
          />
          <TextAreaComponent
            placeholder='None'
            genre='primary'
            size='medium'
            value={value}
            minRows={2}
            control='none'
            onChange={(newValue) => setValue(newValue)}
          />
        </WrapperMin>
      </WrapperBig>
    </WrapperBig>
  );
};

export const Collection = {
  render: () => <CollectionWrapper />,
};

export const Index: Story = {
  args: {
    genre: 'primary',
    size: 'large',
    placeholder: 'Placeholder',
  },
};
