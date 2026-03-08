import { useContext } from 'react';

import { LocalStorageContext } from './context';
import { ILocalStorageContext } from './context.types';

/**
 * Custom hook to access the LocalStorageContext.
 */
export const useLocalStorage = (): ILocalStorageContext => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error('useLocalStorage must be used within an ProviderLocalStorage');
  }
  return context;
};
