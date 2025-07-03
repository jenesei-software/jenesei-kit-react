import { Placement } from '@floating-ui/react'
import { CSSProperties, PropsWithChildren, Ref } from 'react'

import { addErrorStylesProps } from '@local/styles/error'
import { addSXProps, addSXStyleProps } from '@local/styles/sx'
import { IThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { TButtonGenre } from '../button'
import { addSXTypographyProps, addSXTypographyStyleProps } from '../typography'

export type PopoverProps = PropsWithChildren & {
  className?: string
  maxWidth?: string
  maxHeight?: string
  isOpen: boolean
  floatingStyles: CSSProperties
  onClose?: () => void
  ref?: Ref<HTMLElement | null>
  size?: IThemeSize
  genre?: TButtonGenre
} & addSXProps &
  addSXTypographyProps

export type StyledPopoverProps = AddDollarSign<
  Pick<PopoverProps, 'maxWidth' | 'maxHeight' | 'size'> & Required<Pick<PopoverProps, 'genre'>>
> &
  addSXStyleProps &
  addErrorStylesProps &
  addSXTypographyStyleProps

export type UsePopoverProps = {
  hoverCloseDelay?: number

  hoverOffset?: number

  isClickOutside?: boolean

  isDisabled?: boolean

  isFloatingHover?: boolean

  isWidthAsContent?: boolean

  mode?: 'click' | 'hover' | 'clickOpen' | 'independence'

  offset?: number

  placement: Placement
}
