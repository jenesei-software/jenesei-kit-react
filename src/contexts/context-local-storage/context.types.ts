import { PropsWithChildren } from 'react';

export interface ILocalStorageProvider extends PropsWithChildren {
  validate?: {
    validateKeys: (keyof IValidLocalStorageObject)[];
    getValidateLocalStorageValue: <K extends keyof IValidLocalStorageObject>(
      key: K,
      value: IValidLocalStorageObject[K],
    ) => value is IValidLocalStorageObject[K];
  };
}

export type IValidLocalStorageObject = {};

export interface ILocalStorageContext {
  getLocalStorage: <K extends keyof IValidLocalStorageObject>(name: K) => IValidLocalStorageObject[K] | undefined;
  setLocalStorage: <K extends keyof IValidLocalStorageObject>(name: K, value: IValidLocalStorageObject[K]) => void;
  removeLocalStorageValue: <K extends keyof IValidLocalStorageObject>(name: K) => void;
  removeLocalStorageValues: () => void;
  checkLocalStorage: () => void;
  localStorageValues: IValidLocalStorageObject | undefined;
}
