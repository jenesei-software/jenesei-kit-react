import { PropsWithChildren } from 'react'

import { IconItemProps, TIconCheckboxNameString } from '@local/components/icon'
import { addErrorProps, addErrorStylesProps } from '@local/styles/error'
import { addSXProps, addSXStyleProps } from '@local/styles/sx'
import { IThemeGenre, IThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { addSXTypographyProps, addSXTypographyStyleProps } from '../typography'

export type CheckboxProps = PropsWithChildren & {
  checked?: boolean

  genre: TCheckboxGenre

  view: TIconCheckboxNameString

  isDisabled?: boolean

  isOnlyLoading?: boolean

  isLoading?: boolean

  isHiddenBorder?: boolean

  isNotBackground?: boolean

  iconOrder?: IconItemProps<'checkbox'>['order']

  sizeIcon?: IThemeSize

  onChange?: (checked: boolean) => void

  isWidthAsHeight?: boolean

  size: IThemeSize
} & addSXProps &
  addErrorProps &
  addSXTypographyProps

export type StyledCheckboxProps = AddDollarSign<
  Pick<
    CheckboxProps,
    'checked' | 'genre' | 'view' | 'isWidthAsHeight' | 'size' | 'isDisabled' | 'isNotBackground' | 'isHiddenBorder'
  >
> &
  addSXStyleProps &
  addErrorStylesProps &
  addSXTypographyStyleProps

export type TCheckboxGenre = keyof IThemeGenre

export type StyledIconProps = AddDollarSign<Pick<CheckboxProps, 'genre' | 'checked'>>
