import { useContext } from 'react';

import { SonnerContext } from './context';
import { SonnerContextProps } from './context.types';

export const useSonner = (): SonnerContextProps => {
  const context = useContext(SonnerContext);
  if (!context) {
    throw new Error('useSonner must be used within an ProviderSonner');
  }
  return context;
};
