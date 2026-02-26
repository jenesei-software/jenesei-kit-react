import { useContext } from 'react';

import { PermissionContext } from './context';
import { PermissionContextProps } from './context.types';

/**
 * Custom hook to access the PermissionContext.
 */
export const usePermission = (): PermissionContextProps => {
  const context = useContext(PermissionContext);
  if (!context) {
    throw new Error('usePermission must be used within an PermissionProvider');
  }
  return context;
};
