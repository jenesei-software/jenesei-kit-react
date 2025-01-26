import { PropsWithChildren, ReactNode } from 'react'

import { TLibraryIconIdNameString } from '@local/components/icon'
import { IJeneseiTheme, TJeneseiThemeGenre } from '@local/theme/theme.interface'
import { AddDollarSign } from '@local/types'

export type ProviderSonnerProps = PropsWithChildren & {
  gap: number
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'bottom-center' | 'top-center'
  visibleToasts?: number
  default: Omit<SonnerContentStandardProps, 'index'>
}

export type SonnerLayoutProps = Required<AddDollarSign<Pick<ProviderSonnerProps, 'position' | 'gap'>>>
export type SonnerElementWrapperProps = Required<AddDollarSign<Pick<SonnerContentStandardProps, 'genre'>>>
export type SonnerContentTitleProps = Required<AddDollarSign<Pick<SonnerContentStandardProps, 'genre'>>>
export type SonnerContentDescriptionProps = Required<AddDollarSign<Pick<SonnerContentStandardProps, 'genre'>>>

export type SonnerContextProps = {
  toast: (content: Omit<SonnerContentStandardProps, 'index'>) => void
  promise: <T>(
    promise: Promise<T>,
    expectation: Omit<SonnerContentStandardProps, 'index'>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toast: (success: T | undefined, error: any | undefined) => Omit<SonnerContentProps, 'index'>
  ) => void
  remove: (id: SonnerContentDefaultProps['id']) => void
  contentHistory: SonnerContentProps[]
}

export type SonnerElementProps = SonnerElementDefaultProps

type SonnerElementDefaultProps = {
  id: SonnerContentDefaultProps['id']
  title: SonnerContentStandardProps['title']
  description: SonnerContentStandardProps['description']
  content: SonnerContentContentProps['content']
  icon?: SonnerContentDefaultProps['icon']
  isLoading: SonnerContentDefaultProps['isLoading']
  hidingMode: SonnerContentDefaultProps['hidingMode']
  button: SonnerContentDefaultProps['button']
  index: number
  handleOnClick: (id: SonnerContentDefaultProps['id'], hidingMode?: SonnerContentDefaultProps['hidingMode']) => void
  isMoreThanLastViewIndexPlusOne: boolean
  isMoreThanLastViewIndex: boolean
  isHovered: boolean
  isLastViewIndex: boolean
  buttonGenre: keyof TJeneseiThemeGenre
  isTop: boolean
} & Required<Pick<SonnerContentDefaultProps, 'genre'>>

export type SonnerContentProps = SonnerContentContentProps | SonnerContentStandardProps

type SonnerContentDefaultProps = {
  hidingMode?: 'clickOnSonner' | 'clickOnButton'
  hidingTime?: number
  icon?: TLibraryIconIdNameString
  id?: string
  genre?: keyof IJeneseiTheme['colors']['sonner']
  isLoading?: boolean
  button?:
    | {
        content?: string | ReactNode
        onClick?: () => void
      }
    | false
  index: number
}

type SonnerContentContentProps = SonnerContentDefaultProps & {
  content: ReactNode | false
}

export type SonnerContentStandardProps = SonnerContentDefaultProps & {
  description?: string | ReactNode
  title?: string | ReactNode
}
