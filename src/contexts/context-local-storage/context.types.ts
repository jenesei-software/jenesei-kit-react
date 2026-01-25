import { PropsWithChildren } from 'react';

export interface ProviderLocalStorageProps extends PropsWithChildren {
  validate?: {
    validateKeys: (keyof ValidLocalStorageObject)[];
    getValidateLocalStorageValue: <K extends keyof ValidLocalStorageObject>(
      key: K,
      value: ValidLocalStorageObject[K],
    ) => value is ValidLocalStorageObject[K];
  };
}

export type ValidLocalStorageObject = {}

export interface LocalStorageContextProps {
  getLocalStorage: <K extends keyof ValidLocalStorageObject>(name: K) => ValidLocalStorageObject[K] | undefined;
  setLocalStorage: <K extends keyof ValidLocalStorageObject>(name: K, value: ValidLocalStorageObject[K]) => void;
  removeLocalStorageValue: <K extends keyof ValidLocalStorageObject>(name: K) => void;
  removeLocalStorageValues: () => void;
  checkLocalStorage: () => void;
  localStorageValues: ValidLocalStorageObject | undefined;
}
