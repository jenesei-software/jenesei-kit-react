import { PropsWithChildren } from 'react';

export type IProviderBrowserTheme = PropsWithChildren & {
  defaultMode?: IBrowserThemeMode;
};

export type IBrowserTheme = 'light' | 'dark';
export type IBrowserThemeMode = IBrowserTheme | 'auto';

export interface IBrowserThemeContext {
  theme: IBrowserTheme;
  mode: IBrowserThemeMode;
  setMode: (mode: IBrowserThemeMode) => void;
}

export type IUseIBrowserThemeDependencies = (keyof IBrowserThemeContext)[];
