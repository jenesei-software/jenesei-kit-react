import { IAddIIcon } from '@local/components/icon';
import { IThemeGenreButton, IThemeGenreSonner, ITypography } from '@local/styles/utils/types';

import { PropsWithChildren, ReactNode } from 'react';

export type ISonnerProvider = PropsWithChildren & {
  gap: number;
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'bottom-center' | 'top-center';
  visibleToasts?: number;
  zIndex?: number;
  default: Omit<ISonnerContentStandard, 'index'>;
};

export type ISonnerContext = {
  toast: (content: Omit<ISonnerContentStandard, 'index'>) => void;
  promise: <T>(
    promise: Promise<T>,
    expectation: Omit<ISonnerContentStandard, 'index'>,
    toast: (success: T | undefined, error: any | undefined) => Omit<ISonnerContent, 'index'>,
  ) => void;
  remove: (id: ISonnerContentDefault['id']) => void;
  contentHistory: ISonnerContent[];
};
export type IUseSonnerDependencies = (keyof ISonnerContext)[];

export type ISonnerElement = ISonnerElementDefault;

type ISonnerElementDefault = {
  id: ISonnerContentDefault['id'];
  title: ISonnerContentStandard['title'];
  description: ISonnerContentStandard['description'];
  content: ISonnerContentContent['content'];
  icon?: ISonnerContentDefault['icon'];
  isLoading: ISonnerContentDefault['isLoading'];
  hidingMode: ISonnerContentDefault['hidingMode'];
  button: ISonnerContentDefault['button'];
  index: number;
  handleOnClick: (id: ISonnerContentDefault['id'], hidingMode?: ISonnerContentDefault['hidingMode']) => void;
  isMoreThanLastViewIndexPlusOne: boolean;
  isMoreThanLastViewIndex: boolean;
  isHovered: boolean;
  isLastViewIndex: boolean;
  buttonGenre: IThemeGenreButton;
  isTop: boolean;
} & Required<Pick<ISonnerContentDefault, 'genre'>>;

export type ISonnerContent = ISonnerContentContent | ISonnerContentStandard;

type ISonnerContentDefault = {
  hidingMode?: 'clickOnSonner' | 'clickOnButton';
  hidingTime?: number;
  icon?: IAddIIcon;
  id?: string;
  genre?: IThemeGenreSonner;
  isLoading?: boolean;
  sxTypography?: ITypography;
  button?:
    | {
        content?: string | ReactNode;
        onClick?: () => void;
      }
    | false;
  index: number;
};

type ISonnerContentContent = ISonnerContentDefault & {
  content: ReactNode | false;
};

export type ISonnerContentStandard = ISonnerContentDefault & {
  description?: string | ReactNode;
  title?: string | ReactNode;
};
