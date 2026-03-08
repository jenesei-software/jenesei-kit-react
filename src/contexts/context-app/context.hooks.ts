import { useContext } from 'react';

import { AppContext } from './context';
import { IAppContext } from './context.types';

/**
 * Custom hook to access the AppContext.
 */
export const useApp = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an ProviderApp');
  }
  return context;
};
