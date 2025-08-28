import Cookies from 'js-cookie';

import { CookieAttributes } from '.';

export function getFromCookie<T>(key: string): T | null {
  const item = Cookies.get(key);
  if (item) {
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Error parsing cookie item "${key}":`, error);
      return null;
    }
  }
  return null;
}

export function setToCookie<T>(key: string, value: T, options?: CookieAttributes): void {
  try {
    const item = JSON.stringify(value);
    Cookies.set(key, item, options);
  } catch (error) {
    console.error(`Error setting cookie item "${key}":`, error);
  }
}
