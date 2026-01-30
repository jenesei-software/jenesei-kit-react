import { IThemeScreen } from '@local/styles/theme/theme.vanilla-extract.types';

import { PropsWithChildren } from 'react';

export type ProviderScreenWidthProps = PropsWithChildren;

export type Screens = keyof IThemeScreen;

export interface ScreenWidthContextProps {
  breakpoint: keyof IThemeScreen['breakpoint'];
  orientation: keyof IThemeScreen['orientation'];
}
