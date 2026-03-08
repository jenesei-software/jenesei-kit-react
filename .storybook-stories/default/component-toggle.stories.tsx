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
    <WrapperBig sx={{ flexDirection: 'row' }}>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-4',
            color: 'textPrimaryLight',
          }}
        >
          List - size
        </Typography>
        <WrapperMin>
          <ToggleComponent genre='primary' size='large' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent genre='primary' size='largeMedium' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent genre='primary' size='medium' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent genre='primary' size='mediumSmall' value={value} onChange={(checked) => setValue(checked)} />
          <ToggleComponent genre='primary' size='small' value={value} onChange={(checked) => setValue(checked)} />
        </WrapperMin>
      </WrapperBig>
    </WrapperBig>
  );
};

export const Toggle = {
  render: () => <ToggleWrapperAll />,
  args: {
    genre: 'primary',
    isDisabled: false,
    value: true,
    size: 'small',
  },
};
