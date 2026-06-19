export type IAddDollarSign<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};

export type IImageFormat = 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp' | 'image/avif';
