import { useContext } from 'react';

import { CookieContext } from './context';
import { ICookieContext } from './context.types';

/**
 * Custom hook to access the CookieContext.
 *
 * @remarks
 * You should understand which cookies you are changing and whether you have access to them.
 *
 */
export const useCookie = (): ICookieContext => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookie must be used within an ProviderCookie');
  }
  return context;
};
