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

const IndexWrapper: FC<IPopover> = (props) => {
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
    <WrapperBig sx={{ padding: '100px' }}>
      <Button genre={'primary'} size={'medium'} ref={ref}>
        {isOpen ? 'Open' : 'Close'}
      </Button>
      <PopoverComponent
        {...props}
        genre='primary'
        size='small'
        isOpen={isOpenTop}
        floatingStyles={floatingStylesTop}
        ref={refFloatingTop}
      >
        {isOpen ? 'Open' : 'Close'}
      </PopoverComponent>
      <PopoverComponent
        {...props}
        genre='primary'
        size='small'
        isOpen={isOpen}
        floatingStyles={floatingStyles}
        ref={refFloating}
        style={{
          padding: '4px',
          width: '120px',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'column',
            gap: '4px',
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
    </WrapperBig>
  );
};

export const Index: Story = {
  render: (args) => <IndexWrapper {...args} />,
};
