import { PreviewAdditionalProps } from '@local/areas/preview';
import { ScreenWidthProps } from '@local/contexts/context-screen-width';
import { I_THEME_PALETTE } from '@local/theme';
import { AddDollarSign } from '@local/types';

import { PropsWithChildren, ReactElement } from 'react';

export interface ProviderAppProps extends PropsWithChildren {
  defaultPreview?: PreviewAdditionalProps;
  defaultBgColor: I_THEME_PALETTE;
  defaultStatusBarColor: I_THEME_PALETTE;
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

export interface AppContextProps {
  changePreview: (newPreviewProps: PreviewAdditionalProps) => void;

  changeStatusBarColor: (color: I_THEME_PALETTE) => void;
  changeBgColor: (color: I_THEME_PALETTE) => void;
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

export interface ProviderAppWrapperProps {
  $bgColor: ProviderAppProps['defaultBgColor'];
  $bgImage: ProviderAppProps['defaultBgImage'] | null;
}

export type ProviderAppOutletProps = Partial<
  AddDollarSign<
    Pick<ProviderAppProps, 'isScrollOutlet' | 'notification' | 'header' | 'nav' | 'footer' | 'leftAside' | 'rightAside'>
  >
>;
export type ProviderAppElementProps = Partial<
  AddDollarSign<Pick<ProviderAppProps, 'notification' | 'header' | 'nav' | 'footer' | 'leftAside' | 'rightAside'>>
>;

export type ProviderAppOutletChildrenProps = AddDollarSign<Pick<ProviderAppProps, 'main' | 'isScrollOutlet'>>;
