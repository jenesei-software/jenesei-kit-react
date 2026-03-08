import Cookies from 'node_modules/@types/js-cookie';
import { PropsWithChildren } from 'react';

export type CookieAttributes = Cookies.CookieAttributes;

export interface ProviderCookieProps extends PropsWithChildren {
  validate?: {
    validateKeys: (keyof ValidCookieObject)[];
    getValidateCookieValue: <K extends keyof ValidCookieObject>(
      key: K,
      value: ValidCookieObject[K],
    ) => value is ValidCookieObject[K];
  };
}

export type ValidCookieObject = {};

export interface CookieContextProps {
  getCookie: <K extends keyof ValidCookieObject>(name: K) => ValidCookieObject[K] | undefined;
  setCookie: <K extends keyof ValidCookieObject>(
    name: K,
    value: ValidCookieObject[K],
    options?: CookieAttributes,
  ) => void;
  removeCookieValue: <K extends keyof ValidCookieObject>(name: K, options?: CookieAttributes) => void;
  removeCookieValues: () => void;
  checkCookie: () => void;
  cookieValues: ValidCookieObject | undefined;
}
