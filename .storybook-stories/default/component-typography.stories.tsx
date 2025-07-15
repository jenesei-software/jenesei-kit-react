import type { Meta } from '@storybook/react-vite';
import { FC } from 'react';
import 'styled-components';

import { Stack } from '@local/components/stack';
import { Typography as TypographyComponent } from '@local/components/typography';
import { useScreenWidth } from '@local/contexts/context-screen-width';

import { WrapperBig } from './untils';

const meta: Meta<typeof TypographyComponent> = {
  component: TypographyComponent,
  title: 'Component/Typography',
};

export default meta;

const AllWrapper: FC = () => {
  const { screenActual } = useScreenWidth();

  return (
    <WrapperBig
      sx={(theme) => ({
        default: {
          flexDirection: 'column',
          color: theme.palette.black100,
        },
      })}
    >
      <TypographyComponent
        sx={{
          default: {
            size: 14,
          },
        }}
      >
        Actual screen is
        <TypographyComponent
          sx={{
            default: {
              size: 14,
              color: 'blueGoogle',
            },
          }}
        >
          {' ' + screenActual + ' '}
        </TypographyComponent>
        (size: 14)
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            size: 20,
          },
        }}
      >
        Typography, size - 20
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            size: 20,
            shadow: 'shadowPulse',
          },
        }}
      >
        Typography, size - 20, shadow - shadowPulse
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            size: 20,
          },
          tablet: {
            size: 16,
          },
          mobile: {
            size: 12,
          },
        }}
      >
        Typography, size, default - 20, tablet - 16, mobile - 12
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h1',
          },
        }}
      >
        Typography, variant - H1
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h2',
          },
        }}
      >
        Typography, variant - H2
      </TypographyComponent>
      <TypographyComponent
        isParagraph
        sx={{
          default: {
            variant: 'h2',
          },
        }}
      >
        Typography, variant - H2, isParagraph
      </TypographyComponent>
      <TypographyComponent
        isAnchor
        href='https://google.com'
        sx={{
          default: {
            variant: 'h2',
          },
        }}
      >
        Typography, variant - H2, isAnchor
      </TypographyComponent>
      <TypographyComponent
        isSpan
        sx={{
          default: {
            variant: 'h2',
          },
        }}
      >
        Typography, variant - H2, isSpan
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h3',
          },
        }}
      >
        Typography, variant - H3
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h4',
          },
        }}
      >
        Typography, variant - H4
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h5',
          },
        }}
      >
        Typography, variant - H5
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h6',
          },
        }}
      >
        Typography, variant - H6
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h7',
          },
        }}
      >
        Typography, variant - H7
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h8',
          },
        }}
      >
        Typography, variant - H8
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h9',
          },
        }}
      >
        Typography, variant - H9
      </TypographyComponent>
    </WrapperBig>
  );
};

export const Typography = {
  render: () => <AllWrapper />,
};
