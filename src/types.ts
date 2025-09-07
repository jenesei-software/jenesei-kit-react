import { LIST_IMAGE_SUPPORTED_FORMAT } from '.';

export type AddDollarSign<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};

export type ILanguageKeys = 'eng' | 'rus';
export type ILanguage = Record<
  ILanguageKeys,
  { value: ILanguageKeys; label: string; placeholder: string; search: string }
>;

export type IServiceKeys = 'jenesei_id';
export type IService = Record<
  IServiceKeys,
  { value: IServiceKeys; label: string; placeholder: string; search: string }
>;

export type IImageFormat = (typeof LIST_IMAGE_SUPPORTED_FORMAT)[number];
