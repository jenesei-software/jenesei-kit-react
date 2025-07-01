import { addSXProps } from '@local/styles/sx'
import { IThemePaletteKeys } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface SeparatorProps {
  sx?: addSXProps['sx']
  radius?: string
  type?: 'horizontal' | 'vertical'
  color?: IThemePaletteKeys
}

export type SeparatorWrapperProps = AddDollarSign<Pick<SeparatorProps, 'sx' | 'radius' | 'color' | 'type'>>
