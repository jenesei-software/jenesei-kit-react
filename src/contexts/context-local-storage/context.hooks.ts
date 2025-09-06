import { useContext } from 'react';

import { LocalStorageContext, LocalStorageContextProps } from '.';

/**
 * Custom hook to access the LocalStorageContext.
 */
export const useLocalStorage = (): LocalStorageContextProps => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error('useLocalStorage must be used within an ProviderLocalStorage');
  }
  return context;
};
