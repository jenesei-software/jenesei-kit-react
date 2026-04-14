import { IPreviewAdditional } from '@local/areas/preview';
import { IThemeBreakpoint, IThemeOrientation, IThemePalette } from '@local/styles/utils';

import { PropsWithChildren, ReactElement } from 'react';

export interface IAppProviderElement {
  component: ReactElement;
  length?: {
    default?: number | string | null;
    breakpoint?: Partial<Record<IThemeBreakpoint, number | string | null | undefined>>;
    orientation?: Partial<Record<IThemeOrientation, number | string | null | undefined>>;
  };
  zIndex?: number;
}

interface IAppProviderElementStyled {
  component: ReactElement;
  length?: number | string | null;
  zIndex?: number;
}

export type IAppProviderOutletStyled = {
  notification?: IAppProviderElementStyled;
  header?: IAppProviderElementStyled;
  nav?: IAppProviderElementStyled;
  footer?: IAppProviderElementStyled;
  leftAside?: IAppProviderElementStyled & {
    isTopHeader?: boolean;
    isTopFooter?: boolean;
    isTopNav?: boolean;
  };
  rightAside?: IAppProviderElementStyled & {
    isTopHeader?: boolean;
    isTopFooter?: boolean;
    isTopNav?: boolean;
  };
  main?: {
    zIndex?: number;
  };
  isScrollOutlet?: boolean;
};
export interface IAppProvider extends PropsWithChildren {
  defaultPreview?: IPreviewAdditional;
  defaultBgColor: IThemePalette;
  defaultStatusBarColor: IThemePalette;
  defaultBgImage?: string;
  defaultTitle: string;
  defaultDescription: string;
  isScrollOutlet?: boolean;
  notification?: IAppProviderElement;
  header?: IAppProviderElement;
  nav?: IAppProviderElement;
  footer?: IAppProviderElement;
  leftAside?: IAppProviderElement & {
    isTopHeader?: boolean;
    isTopFooter?: boolean;
    isTopNav?: boolean;
  };
  rightAside?: IAppProviderElement & {
    isTopHeader?: boolean;
    isTopFooter?: boolean;
    isTopNav?: boolean;
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
export type IUseAppDependencies = (keyof IAppContext)[];

export interface IAppProviderWrapper {
  $bgColor: IAppProvider['defaultBgColor'];
  $bgImage: IAppProvider['defaultBgImage'] | null;
}
