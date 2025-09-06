import { useContext } from 'react';

import { PermissionContext, PermissionContextProps } from '.';

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
