import { useMergeRefs } from '@floating-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FC } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'
import { Popover as PopoverComponent, PopoverProps, usePopover } from '@local/components/popover'
import { Stack } from '@local/components/stack'
import { Typography } from '@local/components/typography'

const meta: Meta<typeof PopoverComponent> = {
  component: PopoverComponent,
  title: 'Component/Popover'
}

export default meta

type Story = StoryObj<typeof PopoverComponent>

const PopoverWrapper: FC<PopoverProps> = props => {
  const { isOpen, refReference, refFloating, floatingStyles } = usePopover({
    placement: 'bottom-start',
    offset: 8,
    mode: 'click'
  })
  const {
    isOpen: isOpenTop,
    refReference: refReferenceTop,
    refFloating: refFloatingTop,
    floatingStyles: floatingStylesTop
  } = usePopover({
    placement: 'top-start',
    offset: 8,
    mode: 'hover',
    isFloatingHover: false
  })
  const ref = useMergeRefs([refReference, refReferenceTop])

  return (
    <Stack sx={{ default: { gap: '8px', padding: '100px' } }}>
      <Button genre={'black'} size={'medium'} ref={ref}>
        Popover
      </Button>
      <PopoverComponent
        {...props}
        size="small"
        isOpen={isOpenTop}
        floatingStyles={floatingStylesTop}
        ref={refFloatingTop}
      >
        Popover
      </PopoverComponent>
      <PopoverComponent
        {...props}
        genre="white"
        size="medium"
        isOpen={isOpen}
        floatingStyles={floatingStyles}
        ref={refFloating}
        sx={{
          default: {
            padding: '0px',
            gap: '0px',
            width: '120px'
          }
        }}
      >
        <Stack
          sx={{
            default: {
              flexDirection: 'column'
            }
          }}
        >
          <Typography
            sxStandard={{
              default: {
                padding: '8px 16px',
                textAlign: 'left'
              }
            }}
            sx={{
              default: {
                variant: 'h6'
              }
            }}
          >
            Menu
          </Typography>
          <Button genre={'gray'} isHiddenBorder isFullSize size={'small'}>
            First
          </Button>
          <Button genre={'gray'} isHiddenBorder isFullSize size={'small'}>
            Second
          </Button>
          <Button genre={'gray'} isHiddenBorder isFullSize size={'small'}>
            Third
          </Button>
        </Stack>
      </PopoverComponent>
    </Stack>
  )
}

export const Popover: Story = {
  render: args => <PopoverWrapper {...args} />
}
