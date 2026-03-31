import { Button } from '@local/components/button';
import { Stack } from '@local/components/stack';
import { ITooltip, Tooltip as TooltipComponent } from '@local/components/tooltip';
import { Typography, TypographyTooltip } from '@local/components/typography';
import { LOREM_IPSUM_TEXT } from '@local/consts';
import { CSS_VARS } from '@local/styles/utils';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<ITooltip> = {
  component: TooltipComponent,
  title: 'Component/11. Tooltip',
};

export default meta;

const CollectionWrapper: FC = () => {
  return (
    <WrapperBig>
      <WrapperBig>
        <WrapperMin>
          <TooltipComponent placement='bottom' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              bottom
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='bottom-end' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              bottom-end
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='bottom-start' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              bottom-start
            </Button>
          </TooltipComponent>
        </WrapperMin>
        <WrapperMin>
          <TooltipComponent placement='left' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              left
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='left-end' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              left-end
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='left-start' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              left-start
            </Button>
          </TooltipComponent>
        </WrapperMin>
        <WrapperMin>
          <TooltipComponent placement='right' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              right
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='right-end' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              right-end
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='right-start' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              right-start
            </Button>
          </TooltipComponent>
        </WrapperMin>
        <WrapperMin>
          <TooltipComponent placement='top' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              top
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='top-end' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              top-end
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='top-start' size='medium' genre='primary' content={'TooltipComponent'}>
            <Button genre='primary' size={'medium'}>
              top-start
            </Button>
          </TooltipComponent>
        </WrapperMin>
      </WrapperBig>
      <WrapperBig>
        <TooltipComponent placement='bottom' size='medium' genre='primary' content={'TooltipComponent'}>
          <Button genre='primary' size={'medium'}>
            black
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom-end' size='medium' genre='secondary' content={'TooltipComponent'}>
          <Button genre='secondary' size={'medium'}>
            secondary
          </Button>
        </TooltipComponent>
      </WrapperBig>
      <WrapperBig>
        <TooltipComponent placement='bottom' size='large' genre='primary' content={'TooltipComponent'}>
          <Button genre='primary' size={'large'}>
            large
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom' size='largeMedium' genre='primary' content={'TooltipComponent'}>
          <Button genre='primary' size={'largeMedium'}>
            largeMedium
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom' size='medium' genre='primary' content={'TooltipComponent'}>
          <Button genre='primary' size={'medium'}>
            medium
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom' size='mediumSmall' genre='primary' content={'TooltipComponent'}>
          <Button genre='primary' size={'mediumSmall'}>
            mediumSmall
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom' size='small' genre='primary' content={'TooltipComponent'}>
          <Button genre='primary' size={'small'}>
            small
          </Button>
        </TooltipComponent>
      </WrapperBig>
      <WrapperBig>
        <TooltipComponent placement='bottom' size='medium' genre='primary' content={'TooltipComponent'}>
          <Stack
            sx={{
              backgroundColor: CSS_VARS.palette.accentBlueLight,
              padding: '8px',
              borderRadius: '0px',
              flexDirection: 'column',
            }}
          >
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              Custom component
            </Typography>
            <Typography
              sx={{
                variant: 'body',
                color: 'fillPrimaryDark',
              }}
            >
              Description
            </Typography>
          </Stack>
        </TooltipComponent>
        <TooltipComponent
          placement='bottom'
          size='medium'
          genre='primary'
          content={'TooltipComponent'}
          isWidthAsContent
        >
          <Button genre='primary' size={'medium'}>
            isWidthAsContent
          </Button>
        </TooltipComponent>
        <TooltipComponent
          placement='bottom'
          size='medium'
          genre='primary'
          maxHeight='100px'
          content={LOREM_IPSUM_TEXT}
          isWidthAsContent
          // hoverCloseDelay={10000}
        >
          <Button genre='primary' size={'medium'}>
            TooltipComponent with long text
          </Button>
        </TooltipComponent>
      </WrapperBig>
      <WrapperBig>
        <TypographyTooltip
          tooltip={{
            placement: 'bottom-start',
            genre: 'primary',
            mode: 'hover',
            size: 'medium',
            maxWidth: '200px',
          }}
          typography={{
            sx: {
              line: 2,
              family: 'Inter',
              size: 16,
              color: 'textPrimaryLight',
            },
            style: {
              maxWidth: '50px',
            },
          }}
        >
          Цветная капустаЦветная капустаЦветная капустаЦветная капуста
        </TypographyTooltip>
      </WrapperBig>
    </WrapperBig>
  );
};

type Story = StoryObj<ITooltip>;

export const Collection = {
  render: () => <CollectionWrapper />,
};

export const Index: Story = {
  args: {
    genre: 'primary',
    size: 'medium',
    children: 'Example',
    content: 'TooltipComponent',
  },
};
