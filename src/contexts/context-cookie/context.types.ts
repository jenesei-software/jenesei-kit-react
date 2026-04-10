import Cookies from 'node_modules/@types/js-cookie';
import { PropsWithChildren } from 'react';

export type ICookieAttributes = Cookies.CookieAttributes;

export interface ICookieProvider extends PropsWithChildren {
  validate?: {
    validateKeys: (keyof IValidCookieObject)[];
    getValidateCookieValue: <K extends keyof IValidCookieObject>(
      key: K,
      value: IValidCookieObject[K],
    ) => value is IValidCookieObject[K];
  };
}

export type IValidCookieObject = {};

export interface ICookieContext {
  getCookie: <K extends keyof IValidCookieObject>(name: K) => IValidCookieObject[K] | undefined;
  setCookie: <K extends keyof IValidCookieObject>(
    name: K,
    value: IValidCookieObject[K],
    options?: ICookieAttributes,
  ) => void;
  removeCookieValue: <K extends keyof IValidCookieObject>(name: K, options?: ICookieAttributes) => void;
  removeCookieValues: () => void;
  checkCookie: () => void;
  cookieValues: IValidCookieObject | undefined;
}
