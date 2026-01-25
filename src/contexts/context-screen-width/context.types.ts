import { IThemeDevice, IThemeScreen } from '@local/styles/theme';

import { PropsWithChildren } from 'react';

export type ProviderScreenWidthProps = PropsWithChildren;

export type Screens = keyof IThemeScreen;

export interface ScreenWidthContextProps {
  windowWidth: number;
  screenWidth: Screens;
  screens: {
    value: Screens;
    isScreen: boolean;
  }[];
  screenActual: Screens;
}

export type ScreenWidthProps<T> = {
  [K in IThemeDevice]?: T;
};
