import { Typography as TypographyComponent } from '@local/components/typography';
import { useScreenWidth } from '@local/contexts/context-screen-width';
import { useResponsiveLayout } from '@local/hooks/use-responsive-layout';
import { CSS_VARS } from '@local/styles/utils/constants';
import { ITypography } from '@local/styles/utils/types';

import type { Meta } from '@storybook/react-vite';
import { FC } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof TypographyComponent> = {
  component: TypographyComponent,
  title: 'Component/4. Typography',
};

export default meta;

const CollectionWrapper: FC = () => {
  return (
    <WrapperBig
      sx={{
        flexDirection: 'column',
        color: CSS_VARS.palette.accentBlueLight,
      }}
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
        sx={{
          flexDirection: 'column',
          color: CSS_VARS.palette.accentPinkLight,
        }}
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
        sx={{
          flexDirection: 'column',
          color: CSS_VARS.palette.textPrimaryLight,
        }}
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
            color: 'productPrimaryLight',
          }}
        >
          Typography, variant - title-3, color - productPrimary
        </TypographyComponent>
      </WrapperMin>
      <WrapperMin
        sx={{
          flexDirection: 'column',
          color: CSS_VARS.palette.textPrimaryLight,
        }}
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
        color: 'accentGreenLight',
      }}
    >
      {` ${breakpoint} `}
    </TypographyComponent>
  );
};
const TypographyResponsive: FC = () => {
  const sxTypographyOne = useResponsiveLayout<ITypography>({
    default: {
      size: 20,
      transition: 'fontSize',
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

export const Collection = {
  render: () => <CollectionWrapper />,
};
