import { PropsWithChildren } from 'react';

export type ProviderBrowserThemeProps = PropsWithChildren & {
  defaultMode?: BrowserThemeMode;
};

export type BrowserTheme = 'light' | 'dark';
export type BrowserThemeMode = BrowserTheme | 'auto';

export interface BrowserThemeContextProps {
  theme: BrowserTheme;
  mode: BrowserThemeMode;
  setMode: (mode: BrowserThemeMode) => void;
}
