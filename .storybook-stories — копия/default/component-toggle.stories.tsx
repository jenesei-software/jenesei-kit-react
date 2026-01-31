import { Toggle as ToggleComponent } from '@local/components/toggle';
import { Typography } from '@local/components/typography';

import type { Meta } from '@storybook/react-vite';
import { FC, useState } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof ToggleComponent> = {
  component: ToggleComponent,
  title: 'Component/Toggle',
};

export default meta;

const ToggleWrapperAll: FC = () => {
  const [value, setValue] = useState<boolean>(false);

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
          List - size
        </Typography>
        <WrapperMin>
          <ToggleComponent genre='product' size='large' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent genre='product' size='largeMedium' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent genre='product' size='medium' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent genre='product' size='mediumSmall' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent genre='product' size='small' value={value} onChange={(checked) => setValue(checked)} />
        </WrapperMin>
      </WrapperBig>
    </WrapperBig>
  );
};

export const Toggle = {
  render: () => <ToggleWrapperAll />,
  args: {
    genre: 'product',
    isDisabled: false,
    value: true,
    size: 'small',
  },
};
