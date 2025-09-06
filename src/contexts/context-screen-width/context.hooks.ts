import { useContext } from 'react';

import { ScreenWidthContext, ScreenWidthContextProps } from '.';

export const useScreenWidth = (): ScreenWidthContextProps => {
  const context = useContext(ScreenWidthContext);
  if (!context) {
    throw new Error('useScreenWidth must be used within an ProviderScreenWidth');
  }
  return context;
};
