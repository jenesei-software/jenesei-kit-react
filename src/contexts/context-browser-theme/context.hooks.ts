import { useContext } from 'react';

import { BrowserThemeContext, BrowserThemeContextProps } from '.';

export const useBrowserTheme = (): BrowserThemeContextProps => {
  const context = useContext(BrowserThemeContext);
  if (!context) {
    throw new Error('useGeolocation must be used within an ProviderGeolocation');
  }
  return context;
};
