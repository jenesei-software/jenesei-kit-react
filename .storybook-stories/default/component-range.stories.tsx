import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useState } from 'react';
import 'styled-components';

import { Input } from '@local/components/input/export';
import { Range as RangeComponent, RangeProps } from '@local/components/range/export';

import { WrapperBig } from './tools';

const meta: Meta<typeof RangeComponent> = {
  component: RangeComponent,
  title: 'Component/Range',
};

export default meta;

type Story = StoryObj<typeof RangeComponent>;

const RangeWrapper: FC<RangeProps> = (props) => {
  const [min, setMin] = useState<number>(100);
  const [max, setMax] = useState<number>(1000000);

  return (
    <WrapperBig sx={{ default: { flexDirection: 'column', minWidth: '500px' } }}>
      <Input
        propsNumeric={{
          allowLeadingZeros: false,
          thousandSeparator: ' ',
          allowNegative: false,
          allowedDecimalSeparators: ['.'],
          decimalScale: 2,
          decimalSeparator: ',',
          suffix: ' $',
          isAllowed: (values) => {
            const { floatValue } = values;
            return (floatValue ?? 0) >= 0 && (floatValue ?? 0) <= (max ?? 10000000);
          },
        }}
        isReadOnly
        variety='numeric'
        placeholder='От'
        value={min.toString()}
        onChange={(e) => {
          const newValue = e.floatValue;
          console.log(newValue);
          if (newValue !== undefined) setMin(newValue);
        }}
        genre='realebail-white'
        size='small'
      />
      <Input
        propsNumeric={{
          allowLeadingZeros: false,
          thousandSeparator: ' ',
          allowNegative: false,
          allowedDecimalSeparators: ['.'],
          decimalScale: 2,
          decimalSeparator: ',',
          suffix: ' $',
          isAllowed: (values) => {
            const { floatValue } = values;
            return (floatValue ?? 0) >= (min ?? 0) && (floatValue ?? 0) <= 10000000;
          },
        }}
        isReadOnly
        variety='numeric'
        placeholder='От'
        value={max.toString()}
        onChange={(e) => {
          const newValue = e.floatValue;
          console.log(newValue);
          if (newValue !== undefined) setMax(newValue);
        }}
        genre='realebail-white'
        size='small'
      />
      <RangeComponent
        {...props}
        min={0}
        max={1000000}
        values={[min, max]}
        onChange={(newValue) => {
          setMin(newValue[0]);
          setMax(newValue[1]);
        }}
      />
    </WrapperBig>
  );
};

export const Range: Story = {
  render: (args) => <RangeWrapper {...args} />,
  args: {
    genre: 'realebail-white',
    size: 'medium',
    step: 1000,
  },
};
