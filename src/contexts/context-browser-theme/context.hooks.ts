import { useContextSelector } from 'use-context-selector';

import { BrowserThemeContext } from './context';
import { BrowserThemeContextProps, useBrowserThemeDependenciesProps } from './context.types';

export const useBrowserTheme = (props: useBrowserThemeDependenciesProps): BrowserThemeContextProps => {
  const context = useContextSelector(BrowserThemeContext, (v) => {
    return v
      ? props.reduce((acc, prop) => {
          acc[prop] = v[prop];
          return acc;
        }, {} as any)
      : null;
  });
  if (!context) {
    throw new Error('useBrowserTheme must be used within an ProviderBrowserTheme');
  }
  return context;
};
