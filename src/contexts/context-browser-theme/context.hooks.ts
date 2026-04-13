import { useContextSelector } from 'use-context-selector';

import { BrowserThemeContext } from './context';
import { IBrowserThemeContext, IUseBrowserThemeDependencies } from './context.types';

export const useIBrowserTheme = (props: IUseBrowserThemeDependencies): IBrowserThemeContext => {
  const context = useContextSelector(BrowserThemeContext, (v) => {
    return v
      ? props.reduce((acc, prop) => {
          acc[prop] = v[prop];
          return acc;
        }, {} as any)
      : null;
  });
  if (!context) {
    throw new Error('useIBrowserTheme must be used within an ProviderBrowserTheme');
  }
  return context;
};
