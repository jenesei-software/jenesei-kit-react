import { useContext } from 'react';

import { SonnerContext, SonnerContextProps } from '.';

export const useSonner = (): SonnerContextProps => {
  const context = useContext(SonnerContext);
  if (!context) {
    throw new Error('useSonner must be used within an ProviderSonner');
  }
  return context;
};
