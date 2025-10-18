import { useContext } from 'react';

import { AppContext, AppContextProps } from '.';

/**
 * Custom hook to access the AppContext.
 */
export const useApp = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an ProviderApp');
  }
  return context;
};
