import { logger } from '@local/cores/logger';

export function getFromLocalStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (item) {
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      logger.error(`Error parsing localStorage item "${key}":`, error);
      return null;
    }
  }
  return null;
}

export function setToLocalStorage<T>(key: string, value: T): void {
  try {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  } catch (error) {
    logger.error(`Error setting localStorage item "${key}":`, error);
  }
}
