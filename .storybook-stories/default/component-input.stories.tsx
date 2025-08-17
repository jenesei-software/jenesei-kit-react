import type { Meta } from '@storybook/react-vite';
import { FC, useState } from 'react';
import 'styled-components';

import { Input as InputComponent } from '@local/components/input';
import { Typography } from '@local/components/typography';

import { WrapperBig } from './tools';

const meta: Meta<typeof InputComponent> = {
  component: InputComponent,
  title: 'Component/Input',
};

export default meta;

const InputWrapperAll: FC = () => {
  const [valueStandard, setValueStandard] = useState<string>('');
  const [valuePhone, setValuePhone] = useState<string>('');
  const [valueCost, setValueCost] = useState<number | null>(null);

  return (
    <WrapperBig sx={{ default: { flexDirection: 'row', width: '400px' } }}>
      <WrapperBig sx={{ default: { flexDirection: 'column', width: '100%' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Variety - standard
        </Typography>
        <InputComponent
          isOutlineBoxShadow
          placeholder='Дмитрий Петров'
          genre='bustmarket-gray'
          size='medium'
          value={valueStandard}
          variety='standard'
          onChange={(newValue) => setValueStandard(newValue)}
        />
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column', width: '100%' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Variety - standard, password
        </Typography>
        <InputComponent
          placeholder='Password'
          genre='blackBorder'
          type='password'
          size='medium'
          value={valueStandard}
          variety='standard'
          onChange={(newValue) => setValueStandard(newValue)}
        />
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column', width: '100%' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Variety - pattern, phone
        </Typography>
        <InputComponent
          placeholder='Phone'
          propsPattern={{
            format: '+7 (9##) ###-##-##',
            mask: '_',
            type: 'tel',
          }}
          genre='blackBorder'
          size='medium'
          value={valuePhone}
          variety='pattern'
          onChange={(newValue) => setValuePhone(newValue.formattedValue)}
        />
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column', width: '100%' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Variety - pattern, code
        </Typography>
        <InputComponent
          placeholder='Code'
          propsPattern={{
            format: '# # # #',
            mask: '_',
            type: 'text',
          }}
          genre='blackBorder'
          size='medium'
          value={valueStandard}
          variety='pattern'
          onChange={(newValue) => setValuePhone(newValue.formattedValue)}
        />
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column', width: '100%' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Variety - numeric, cost
        </Typography>
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
          genre='blackBorder'
          size='medium'
          value={valueCost}
          variety='numeric'
          onChange={(newValue) => setValueCost(newValue.floatValue ?? null)}
        />
      </WrapperBig>
    </WrapperBig>
  );
};

export const Input = {
  render: () => <InputWrapperAll />,
};
