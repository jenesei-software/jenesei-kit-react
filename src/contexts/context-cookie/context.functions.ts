import { logger } from '@local/cores/logger';

import Cookies from 'js-cookie';

import { ICookieAttributes } from './context.types';

export function getFromCookie<T>(key: string): T | null {
  const item = Cookies.get(key);
  if (item) {
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      logger.error(`Error parsing cookie item "${key}":`, error);
      return null;
    }
  }
  return null;
}

export function setToCookie<T>(key: string, value: T, options?: ICookieAttributes): void {
  try {
    const item = JSON.stringify(value);
    Cookies.set(key, item, options);
  } catch (error) {
    logger.error(`Error setting cookie item "${key}":`, error);
  }
}
