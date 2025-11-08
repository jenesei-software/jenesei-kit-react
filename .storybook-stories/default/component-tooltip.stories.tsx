import type { Meta } from '@storybook/react-vite';
import { FC } from 'react';
import 'styled-components';

import { Button } from '@local/components/button/export';
import { Stack } from '@local/components/stack/export';
import { Tooltip as TooltipComponent } from '@local/components/tooltip/export';
import { Typography, TypographyTooltip } from '@local/components/typography/export';
import { LOREM_IPSUM_TEXT } from '@local/consts';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof TooltipComponent> = {
  component: TooltipComponent,
  title: 'Component/Tooltip',
};

export default meta;

const TooltipWrapper: FC = () => {
  return (
    <WrapperBig>
      <WrapperBig>
        <WrapperMin>
          <TooltipComponent placement='bottom' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              bottom
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='bottom-end' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              bottom-end
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='bottom-start' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              bottom-start
            </Button>
          </TooltipComponent>
        </WrapperMin>
        <WrapperMin>
          <TooltipComponent placement='left' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              left
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='left-end' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              left-end
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='left-start' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              left-start
            </Button>
          </TooltipComponent>
        </WrapperMin>
        <WrapperMin>
          <TooltipComponent placement='right' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              right
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='right-end' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              right-end
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='right-start' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              right-start
            </Button>
          </TooltipComponent>
        </WrapperMin>
        <WrapperMin>
          <TooltipComponent placement='top' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              top
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='top-end' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              top-end
            </Button>
          </TooltipComponent>
          <TooltipComponent placement='top-start' size='medium' genre='black' content={'TooltipComponent'}>
            <Button genre='black' size={'medium'}>
              top-start
            </Button>
          </TooltipComponent>
        </WrapperMin>
      </WrapperBig>
      <WrapperBig>
        <TooltipComponent placement='bottom' size='medium' genre='black' content={'TooltipComponent'}>
          <Button genre='black' size={'medium'}>
            black
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom-end' size='medium' genre='blackBorder' content={'TooltipComponent'}>
          <Button genre='blackBorder' size={'medium'}>
            blackBorder
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom-start' size='medium' genre='gray' content={'TooltipComponent'}>
          <Button genre='gray' size={'medium'}>
            gray
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom-start' size='medium' genre='grayBorder' content={'TooltipComponent'}>
          <Button genre='grayBorder' size={'medium'}>
            grayBorder
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom-start' size='medium' genre='greenTransparent' content={'TooltipComponent'}>
          <Button genre='greenTransparent' size={'medium'}>
            greenTransparent
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom-start' size='medium' genre='product' content={'TooltipComponent'}>
          <Button genre='product' size={'medium'}>
            product
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom-start' size='medium' genre='productBorder' content={'TooltipComponent'}>
          <Button genre='productBorder' size={'medium'}>
            productBorder
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom-start' size='medium' genre='redTransparent' content={'TooltipComponent'}>
          <Button genre='redTransparent' size={'medium'}>
            redTransparent
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom-start' size='medium' genre='white' content={'TooltipComponent'}>
          <Button genre='white' size={'medium'}>
            white
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom-start' size='medium' genre='yellowTransparent' content={'TooltipComponent'}>
          <Button genre='yellowTransparent' size={'medium'}>
            yellowTransparent
          </Button>
        </TooltipComponent>
      </WrapperBig>
      <WrapperBig>
        <TooltipComponent placement='bottom' size='large' genre='black' content={'TooltipComponent'}>
          <Button genre='black' size={'large'}>
            large
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom' size='largeMedium' genre='black' content={'TooltipComponent'}>
          <Button genre='black' size={'largeMedium'}>
            largeMedium
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom' size='medium' genre='black' content={'TooltipComponent'}>
          <Button genre='black' size={'medium'}>
            medium
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom' size='mediumSmall' genre='black' content={'TooltipComponent'}>
          <Button genre='black' size={'mediumSmall'}>
            mediumSmall
          </Button>
        </TooltipComponent>
        <TooltipComponent placement='bottom' size='small' genre='black' content={'TooltipComponent'}>
          <Button genre='black' size={'small'}>
            small
          </Button>
        </TooltipComponent>
      </WrapperBig>
      <WrapperBig>
        <TooltipComponent placement='bottom' size='medium' genre='black' content={'TooltipComponent'}>
          <Stack
            sx={(theme) => ({
              default: {
                backgroundColor: theme.palette.blueGoogle,
                padding: '8px',
                borderRadius: '0px',
                flexDirection: 'column',
              },
            })}
          >
            <Typography
              sx={{
                default: {
                  variant: 'h5',
                  color: 'whiteStandard',
                },
              }}
            >
              Custom component
            </Typography>
            <Typography
              sx={{
                default: {
                  variant: 'h8',
                  color: 'whiteStandard',
                },
              }}
            >
              Description
            </Typography>
          </Stack>
        </TooltipComponent>
        <TooltipComponent placement='bottom' size='medium' genre='black' content={'TooltipComponent'} isWidthAsContent>
          <Button genre='black' size={'medium'}>
            isWidthAsContent
          </Button>
        </TooltipComponent>
        <TooltipComponent
          placement='bottom'
          size='medium'
          genre='blackBorder'
          maxHeight='100px'
          content={LOREM_IPSUM_TEXT}
          isWidthAsContent
        >
          <Button genre='blackBorder' size={'medium'}>
            TooltipComponent with long text
          </Button>
        </TooltipComponent>
      </WrapperBig>
      <WrapperBig>
        <TypographyTooltip
          tooltip={{
            placement: 'bottom-start',
            genre: 'black',
            mode: 'hover',
            size: 'medium',
            maxWidth: '150px',
            sx: {
              default: {
                maxWidth: '150px',
              },
            },
          }}
          typography={{
            sx: {
              default: {
                line: 2,
                family: 'Inter',
                size: 16,
                color: 'black100',
              },
            },
          }}
        >
          Цветная капустаЦветная капустаЦветная капустаЦветная капуста
        </TypographyTooltip>
      </WrapperBig>
    </WrapperBig>
  );
};

export const Tooltip = {
  render: () => <TooltipWrapper />,
};
