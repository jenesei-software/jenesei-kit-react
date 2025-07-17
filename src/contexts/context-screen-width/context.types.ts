import { PropsWithChildren } from 'react'

import { IThemeScreen, IThemeDevice } from '@local/theme'

export type ProviderScreenWidthProps = PropsWithChildren

export type Screens = keyof IThemeScreen

export interface ScreenWidthContextProps {
  screenWidth: Screens
  screens: {
    value: Screens
    isScreen: boolean
  }[]
  screenActual: Screens
}

export type ScreenWidthProps<T> = {
  [K in IThemeDevice]?: T
}
