import { IThemeScreen } from '@local/styles/theme/theme.vanilla-extract.css';

import { PropsWithChildren } from 'react';

export type ProviderScreenWidthProps = PropsWithChildren;

export type Screens = keyof IThemeScreen;

export interface ScreenWidthContextProps {
  windowWidth: number;
  breakpoint: keyof IThemeScreen['breakpoint'];
  orientation: keyof IThemeScreen['orientation'];
}
