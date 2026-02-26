import { Typography as TypographyComponent } from '@local/components/typography';
import { useScreenWidth } from '@local/contexts/context-screen-width';
import { useResponsiveLayout } from '@local/hooks/use-responsive-layout';

import type { Meta } from '@storybook/react-vite';
import { FC } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof TypographyComponent> = {
  component: TypographyComponent,
  title: 'Component/Typography',
};

export default meta;

const AllWrapper: FC = () => {
  return (
    <WrapperBig
      sx={(theme) => ({
        flexDirection: 'column',
        color: theme.palette.accentBlue,
      })}
    >
      <TypographyComponent
        sx={{
          size: 14,
        }}
      >
        Actual screen is
        <TypographyBreakpoint />
        (size: 14)
      </TypographyComponent>
      <WrapperMin
        sx={(theme) => ({
          flexDirection: 'column',
          color: theme.palette.accentPink,
        })}
      >
        <TypographyComponent
          sx={{
            size: 20,
          }}
        >
          Typography, size, default - 20
        </TypographyComponent>
        <TypographyResponsive />
      </WrapperMin>
      <WrapperMin
        sx={(theme) => ({
          flexDirection: 'column',
          color: theme.palette.accentBrown,
        })}
      >
        <TypographyComponent
          isParagraph
          sx={{
            variant: 'headline',
          }}
        >
          Typography, variant - headline, isParagraph
        </TypographyComponent>
        <TypographyComponent
          isAnchor
          href='https://google.com'
          sx={{
            variant: 'sub-headline',
          }}
        >
          Typography, variant - sub-headline, isAnchor
        </TypographyComponent>
        <TypographyComponent
          isSpan
          sx={{
            variant: 'title-1',
          }}
        >
          Typography, variant - title-1, isSpan
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'title-2',
            shadow: 'shadowPulse',
          }}
        >
          Typography, variant - title-2, shadow - shadowPulse
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'title-3',
            color: 'productPrimary',
          }}
        >
          Typography, variant - title-3, color - productPrimary
        </TypographyComponent>
      </WrapperMin>
      <WrapperMin
        sx={(theme) => ({
          flexDirection: 'column',
          color: theme.palette.accentBrown,
        })}
      >
        <TypographyComponent
          sx={{
            variant: 'headline',
          }}
        >
          Headline
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'sub-headline',
          }}
        >
          Subheadline
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'title-1',
          }}
        >
          Title 1
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'title-2',
          }}
        >
          Title 2
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'title-3',
          }}
        >
          Title 3
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'title-4',
          }}
        >
          Title 4
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'title-5',
          }}
        >
          Title 5
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'body',
          }}
        >
          Body
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'callout',
          }}
        >
          Callout
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'caption-1',
          }}
        >
          Caption 1
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'caption-2',
          }}
        >
          Caption 2
        </TypographyComponent>
        <TypographyComponent
          sx={{
            variant: 'footnote',
          }}
        >
          Footnote
        </TypographyComponent>
        <h1>H1, true</h1>
      </WrapperMin>
    </WrapperBig>
  );
};
const TypographyBreakpoint: FC = () => {
  const { breakpoint } = useScreenWidth(['breakpoint']);
  return (
    <TypographyComponent
      sx={{
        size: 14,
        color: 'accentGreen',
      }}
    >
      {` ${breakpoint} `}
    </TypographyComponent>
  );
};
const TypographyResponsive: FC = () => {
  const sxTypographyOne = useResponsiveLayout({
    default: {
      size: 20,
      isTransitionFontSize: true,
    },
    breakpoints: {
      tablet: {
        size: 16,
      },
      mobile: {
        size: 12,
      },
    },
  });
  const sxTypographyTwo = useResponsiveLayout({
    default: {
      size: 18,
    },
    breakpoints: {
      tablet: {
        size: 16,
      },
      mobile: {
        size: 20,
      },
    },
  });
  return (
    <>
      <TypographyComponent sx={sxTypographyOne}>
        Typography, size, default - 20, tablet - 16, mobile - 12, isTransitionFontSize
      </TypographyComponent>
      <TypographyComponent sx={sxTypographyTwo}>
        Typography, size, default - 18, tablet - 16, mobile - 20
      </TypographyComponent>
    </>
  );
};

export const Typography = {
  render: () => <AllWrapper />,
};
