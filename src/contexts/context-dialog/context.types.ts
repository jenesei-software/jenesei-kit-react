import { PropsWithChildren, ReactNode } from 'react'

import { IThemePaletteKeys } from '@local/theme'
import { AddDollarSign } from '@local/types'

export type ProviderDialogProps = PropsWithChildren & {
  zIndex: number
}

export type DialogLayoutProps = AddDollarSign<Pick<ProviderDialogProps, 'zIndex'>>

export type DialogElementWrapperProps = AddDollarSign<useDialogProps<object>>

export type DialogContextProps<T extends object> = {
  add: (dialog: DialogContentProps<useDialogProps<T>>) => void
  remove: (id: DialogContentProps<useDialogProps<T>>['id']) => void
  update: (dialog: DialogContentProps<useDialogProps<T>>) => void
  dialogHistory: DialogContentProps<useDialogProps<T>>[]
}

export type DialogContextItemProps<T extends object> = {
  add: (dialog: DialogContentProps<useDialogProps<T>>) => void
  remove: () => void
  id: string | null
}

export type DialogElementProps = Pick<DialogContentProps<object>, 'id' | 'index' | 'content' | 'props'> &
  Pick<DialogContextItemProps<object>, 'remove'>

export type DialogContentProps<T extends object> = {
  content?: (props?: useDialogProps<T>, remove?: () => void, isAnimating?: boolean) => ReactNode
  props?: useDialogProps<T>
  id?: string
  index?: number
}
export type DialogContentObjectProps = {
  propsDialog?: {
    maxWidth?: string
    maxHeight?: string
    padding?: string
    borderRadius?: string
    background?: IThemePaletteKeys
  }
}

export type useDialogProps<T extends object> = DialogContentObjectProps & T
