import { IPreviewAdditional } from '@local/areas/preview';
import { ScreenWidthProps } from '@local/contexts/context-screen-width';
import { IAddDollarSign } from '@local/cores/types';
import { IThemePalette } from '@local/styles/utils';

import { PropsWithChildren, ReactElement } from 'react';

export interface IProviderApp extends PropsWithChildren {
  defaultPreview?: IPreviewAdditional;
  defaultBgColor: IThemePalette;
  defaultStatusBarColor: IThemePalette;
  defaultBgImage?: string;
  defaultTitle: string;
  defaultDescription: string;
  isScrollOutlet?: boolean;
  notification?: {
    component: ReactElement;
    length?: ScreenWidthProps<string | null>;
    zIndex?: number;
  };
  header?: {
    component: ReactElement;
    length?: ScreenWidthProps<string | null>;
    zIndex?: number;
  };
  nav?: {
    component: ReactElement;
    length?: ScreenWidthProps<string | null>;
    zIndex?: number;
  };
  footer?: {
    component: ReactElement;
    length?: ScreenWidthProps<string | null>;
    zIndex?: number;
  };
  leftAside?: {
    component: ReactElement;
    length?: ScreenWidthProps<string | null>;
    isTopHeader?: boolean;
    isTopFooter?: boolean;
    isTopNav?: boolean;
    zIndex?: number;
  };
  rightAside?: {
    component: ReactElement;
    length?: ScreenWidthProps<string | null>;
    isTopHeader?: boolean;
    isTopFooter?: boolean;
    isTopNav?: boolean;
    zIndex?: number;
  };
  main?: {
    zIndex?: number;
  };
}

export interface IAppContext {
  changePreview: (newIPreview: IPreviewAdditional) => void;

  changeStatusBarColor: (color: IThemePalette) => void;
  changeBgColor: (color: IThemePalette) => void;
  changeBgImage: (image: string) => void;
  changeTitle: (title: string) => void;
  changeDescription: (description: string) => void;
  setDefaultStatusBarColor: () => void;
  setDefaultBgColor: () => void;
  setDefaultBgImage: () => void;
  setDefaultTitle: () => void;
  setDefaultDescription: () => void;
  historyStatusBarColor: (step: number) => void;
  historyBgColor: (step: number) => void;
  setHistoryTitle: (step: number) => void;
  historyBgImage: (step: number) => void;
  historyDescription: (step: number) => void;
}

export interface IProviderAppWrapper {
  $bgColor: IProviderApp['defaultBgColor'];
  $bgImage: IProviderApp['defaultBgImage'] | null;
}

export type IProviderAppOutlet = Partial<
  IAddDollarSign<
    Pick<IProviderApp, 'isScrollOutlet' | 'notification' | 'header' | 'nav' | 'footer' | 'leftAside' | 'rightAside'>
  >
>;
export type IProviderAppElement = Partial<
  IAddDollarSign<Pick<IProviderApp, 'notification' | 'header' | 'nav' | 'footer' | 'leftAside' | 'rightAside'>>
>;

export type IProviderAppOutletChildren = IAddDollarSign<Pick<IProviderApp, 'main' | 'isScrollOutlet'>>;
