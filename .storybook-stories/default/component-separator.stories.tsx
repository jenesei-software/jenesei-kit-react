import type { Meta } from '@storybook/react-vite';
import { FC } from 'react';
import 'styled-components';

import { Separator as SeparatorComponent } from '@local/components/separator';
import { Typography } from '@local/index';

import { WrapperBig, WrapperMin } from './untils';

const meta: Meta<typeof SeparatorComponent> = {
  component: SeparatorComponent,
  title: 'Component/Separator',
};

export default meta;

const AllWrapper: FC = () => {
  return (
    <WrapperBig>
      <WrapperMin sx={{ default: { width: '160px', height: '160px', flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Type - horizontal
        </Typography>
        <SeparatorComponent color='black100' type='horizontal' />
      </WrapperMin>
      <WrapperMin sx={{ default: { width: '160px', height: '160px', flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Type - horizontal, thickness - 5px, radius - 4px
        </Typography>
        <SeparatorComponent color='black100' type='horizontal' thickness='5px' radius='4px' />
      </WrapperMin>
      <WrapperMin sx={{ default: { width: '160px', height: '160px', flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Type - vertical
        </Typography>
        <SeparatorComponent color='black100' type='vertical' />
      </WrapperMin>
      <WrapperMin sx={{ default: { width: '160px', height: '160px', flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Type - vertical, color - blueBr
        </Typography>
        <SeparatorComponent color='blueBr' type='vertical' />
      </WrapperMin>
    </WrapperBig>
  );
};

export const All = {
  render: () => <AllWrapper />,
};
