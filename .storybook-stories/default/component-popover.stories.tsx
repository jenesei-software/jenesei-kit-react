import { Button } from '@local/components/button';
import { IPopover, Popover as PopoverComponent, usePopover } from '@local/components/popover';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';

import { useMergeRefs } from '@floating-ui/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';

import { WrapperBig } from './tools';

const meta: Meta<typeof PopoverComponent> = {
  component: PopoverComponent,
  title: 'Component/13. Popover',
};

export default meta;

type Story = StoryObj<IPopover>;

const Default = () => {
  const { isOpen, refReference, refFloating, floatingStyles } = usePopover({
    placement: 'bottom-start',
    offset: 8,
    mode: 'click',
  });
  const {
    isOpen: isOpenTop,
    refReference: refReferenceTop,
    refFloating: refFloatingTop,
    floatingStyles: floatingStylesTop,
  } = usePopover({
    placement: 'top-start',
    offset: 8,
    mode: 'hover',
    isFloatingHover: true,
  });
  const ref = useMergeRefs([refReference, refReferenceTop]);

  return (
    <>
      <Button genre={'primary'} size={'medium'} ref={ref}>
        {isOpen ? 'Open' : 'Close'}
      </Button>
      <PopoverComponent
        genre='primary'
        size='small'
        isOpen={isOpenTop}
        floatingStyles={floatingStylesTop}
        ref={refFloatingTop}
      >
        {isOpen ? 'Open' : 'Close'}
      </PopoverComponent>
      <PopoverComponent
        genre='primary'
        size='small'
        isOpen={isOpen}
        floatingStyles={floatingStyles}
        ref={refFloating}
        style={{
          padding: '0px',
          width: '120px',
          borderRadius: '12px',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'column',
            gap: '5px',
            padding: '5px',
          }}
        >
          <Typography
            style={{
              padding: '8px 16px',
              textAlign: 'left',
            }}
            sx={{
              variant: 'controller-medium',
            }}
          >
            Menu
          </Typography>
          <Button genre={'primary'} isHiddenBorder isFullSize size={'small'}>
            First
          </Button>
          <Button genre={'primary'} isHiddenBorder isFullSize size={'small'}>
            Second
          </Button>
          <Button genre={'primary'} isHiddenBorder isFullSize size={'small'}>
            Third
          </Button>
        </Stack>
      </PopoverComponent>
    </>
  );
};
const Control = () => {
  const { isOpen, refReference, refFloating, floatingStyles } = usePopover({
    placement: 'bottom-start',
    offset: 8,
    mode: 'click',
  });
  const {
    isOpen: isOpenTop,
    refReference: refReferenceTop,
    refFloating: refFloatingTop,
    floatingStyles: floatingStylesTop,
  } = usePopover({
    placement: 'top-start',
    offset: 8,
    mode: 'hover',
    isFloatingHover: true,
  });
  const ref = useMergeRefs([refReference, refReferenceTop]);

  return (
    <>
      <Button genre={'primary'} size={'medium'} ref={ref}>
        {isOpen ? 'Open' : 'Close'}
      </Button>
      <PopoverComponent
        genre='primary'
        size='small'
        isOpen={isOpenTop}
        floatingStyles={floatingStylesTop}
        ref={refFloatingTop}
        control='boxShadow'
      >
        {isOpen ? 'Open' : 'Close'}
      </PopoverComponent>
      <PopoverComponent
        genre='primary'
        size='small'
        isOpen={isOpen}
        floatingStyles={floatingStyles}
        ref={refFloating}
        style={{
          padding: '0px',
          width: '120px',
          borderRadius: '12px',
        }}
        control='boxShadowSelect'
      >
        <Stack
          sx={{
            flexDirection: 'column',
            gap: '5px',
            padding: '5px',
          }}
        >
          <Typography
            style={{
              padding: '8px 16px',
              textAlign: 'left',
            }}
            sx={{
              variant: 'controller-medium',
            }}
          >
            Menu
          </Typography>
          <Button genre={'primary'} isHiddenBorder isFullSize size={'small'}>
            First
          </Button>
          <Button genre={'primary'} isHiddenBorder isFullSize size={'small'}>
            Second
          </Button>
          <Button genre={'primary'} isHiddenBorder isFullSize size={'small'}>
            Third
          </Button>
        </Stack>
      </PopoverComponent>
    </>
  );
};
const CollectionWrapper = () => {
  return (
    <WrapperBig sx={{ padding: '100px' }}>
      <Default />
      <Control />
    </WrapperBig>
  );
};

export const Collection: Story = {
  render: () => <CollectionWrapper />,
};
