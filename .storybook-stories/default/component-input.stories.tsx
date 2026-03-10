import { Icon } from '@local/components/icon';
import { IInput, Input as InputComponent } from '@local/components/input';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { CSS_VARS } from '@local/styles/utils';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useState } from 'react';

import { WrapperBig, WrapperMin } from './tools';

type Story = StoryObj<IInput>;

const meta: Meta<typeof InputComponent> = {
  component: InputComponent,
  title: 'Component/8. Input',
};

export default meta;

const CollectionWrapper: FC = () => {
  const [valueStandard, setValueStandard] = useState<string>('');
  const [valuePhone, setValuePhone] = useState<string>('');
  const [valueCost, setValueCost] = useState<number | null>(null);

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
          <InputComponent
            placeholder='Primary'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Secondary'
            genre='secondary'
            size='large'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
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
          <InputComponent
            placeholder='Large'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Large medium'
            genre='primary'
            size='largeMedium'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Medium'
            genre='primary'
            size='medium'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Medium small'
            genre='primary'
            size='mediumSmall'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Small'
            genre='primary'
            size='small'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
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
          variety
        </Typography>
        <WrapperMin sx={{ flexDirection: 'column', width: '100%' }}>
          <InputComponent
            placeholder='Standard'
            genre='secondary'
            size='medium'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Password'
            genre='primary'
            type='password'
            size='medium'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Phone'
            propsPattern={{
              format: '+7 (9##) ###-##-##',
              mask: '_',
              type: 'tel',
            }}
            genre='primary'
            size='medium'
            value={valuePhone}
            variety='pattern'
            onChange={(newValue) => setValuePhone(newValue.formattedValue)}
          />
          <InputComponent
            placeholder='Code'
            propsPattern={{
              format: '# # # #',
              mask: '_',
              type: 'text',
            }}
            genre='primary'
            size='medium'
            value={valueStandard}
            variety='pattern'
            onChange={(newValue) => setValuePhone(newValue.formattedValue)}
          />
          <InputComponent
            placeholder='Cost'
            propsNumeric={{
              allowLeadingZeros: false,
              thousandSeparator: ' ',
              allowNegative: false,
              allowedDecimalSeparators: ['.'],
              decimalScale: 2,
              decimalSeparator: ',',
              fixedDecimalScale: true,
              prefix: '$',
              suffix: ' USD',
              thousandsGroupStyle: 'thousand',
              isAllowed: (values) => {
                const { floatValue } = values;
                return (floatValue ?? 0) >= 0 && (floatValue ?? 0) <= 10000;
              },
            }}
            genre='secondary'
            size='medium'
            value={valueCost}
            variety='numeric'
            onChange={(newValue) => setValueCost(newValue.floatValue ?? null)}
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
          Other
        </Typography>
        <WrapperMin sx={{ flexDirection: 'column', width: '100%' }}>
          <InputComponent
            placeholder='Is bold'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isBold
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Is center'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isCenter
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Is disabled'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isDisabled
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Is full radius'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isFullRadius
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Is hidden'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isHidden
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Is hidden border'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isHiddenBorder
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Is min width as content'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isMinWidthAsContent
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Is nice number'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isNiceNumber
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Is no spaces'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isNoSpaces
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Is readonly'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isReadOnly
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Is width as height'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isWidthAsHeight
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Is zero radius'
            genre='primary'
            size='large'
            value={valueStandard}
            variety='standard'
            isZeroRadius
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <Stack
            style={{
              position: 'relative',
            }}
          >
            <InputComponent
              placeholder='Error'
              genre='primary'
              size='large'
              value={valueStandard}
              variety='standard'
              onChange={(newValue) => setValueStandard(newValue)}
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
          <InputComponent
            placeholder='Box shadow'
            genre='primary'
            size='medium'
            value={valueStandard}
            variety='standard'
            control='boxShadow'
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='Default'
            genre='primary'
            size='medium'
            value={valueStandard}
            variety='standard'
            control='default'
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='OnlyActive'
            genre='primary'
            size='medium'
            value={valueStandard}
            variety='standard'
            control='onlyActive'
            onChange={(newValue) => setValueStandard(newValue)}
          />
          <InputComponent
            placeholder='None'
            genre='primary'
            size='medium'
            value={valueStandard}
            variety='standard'
            control='none'
            onChange={(newValue) => setValueStandard(newValue)}
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
          Prefix and Postfix
        </Typography>
        <WrapperMin sx={{ flexDirection: 'column', width: '100%' }}>
          <InputComponent
            placeholder='Prefix'
            genre='primary'
            size='medium'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
            prefixChildren={{
              left: '0px',
              right: '0px',
              width: '20px',
              children: (
                <Stack sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Typography sx={{ variant: 'title-3', color: 'textPrimaryLight' }}>$</Typography>
                </Stack>
              ),
            }}
          />
          <InputComponent
            placeholder='Postfix'
            genre='primary'
            size='medium'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
            postfixChildren={{
              left: '0px',
              right: '0px',
              width: '24px',
              children: (
                <Stack sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon type={'logo'} name={'Jenesei'} size={'large'} color='textPrimaryLight' />
                </Stack>
              ),
            }}
          />
          <InputComponent
            placeholder='Prefix and Postfix'
            genre='primary'
            size='medium'
            value={valueStandard}
            variety='standard'
            onChange={(newValue) => setValueStandard(newValue)}
            prefixChildren={{
              left: '0px',
              right: '4px',
              width: '28px',
              children: (
                <Stack
                  sx={{
                    paddingLeft: '2px',
                    paddingRight: '2px',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: CSS_VARS.palette.fillPrimaryLight,
                  }}
                >
                  <Icon type={'loading'} name={'Circle'} size={'largeMedium'} color='textPrimaryDark' />
                </Stack>
              ),
            }}
            postfixChildren={{
              left: '0px',
              right: '0px',
              width: '24px',
              children: (
                <Stack sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon type={'logo'} name={'Jenesei'} size={'large'} color='textPrimaryLight' />
                </Stack>
              ),
            }}
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
  },
};
