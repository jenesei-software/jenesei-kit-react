import { Separator as SeparatorComponent } from '@local/components/separator';
import { Typography } from '@local/components/typography';

import type { Meta } from '@storybook/react-vite';
import { FC } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof SeparatorComponent> = {
  component: SeparatorComponent,
  title: 'Component/Separator',
};

export default meta;

const AllWrapper: FC = () => {
  return (
    <WrapperBig>
      <WrapperMin sx={{ width: '160px', height: '160px', flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-4',
            color: 'textPrimaryLight',
          }}
        >
          Type - horizontal
        </Typography>
        <SeparatorComponent color='fillPrimaryLight' type='horizontal' />
      </WrapperMin>
      <WrapperMin sx={{ width: '160px', height: '160px', flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-4',
            color: 'textPrimaryLight',
          }}
        >
          Type - horizontal, thickness - 5px, radius - 4px
        </Typography>
        <SeparatorComponent color='fillPrimaryLight' type='horizontal' thickness='5px' radius='4px' />
      </WrapperMin>
      <WrapperMin sx={{ width: '160px', height: '160px', flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-4',
            color: 'textPrimaryLight',
          }}
        >
          Type - vertical
        </Typography>
        <SeparatorComponent color='fillPrimaryLight' type='vertical' />
      </WrapperMin>
      <WrapperMin sx={{ width: '160px', height: '160px', flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-4',
            color: 'textPrimaryLight',
          }}
        >
          Type - vertical, color - productPrimary
        </Typography>
        <SeparatorComponent color='productPrimaryLight' type='vertical' thickness='5px' radius='4px'/>
      </WrapperMin>
    </WrapperBig>
  );
};

export const Separator = {
  render: () => <AllWrapper />,
};
