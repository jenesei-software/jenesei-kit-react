import { IThemeBreakpoint, IThemeOrientation } from '@local/styles/utils';

import { PropsWithChildren } from 'react';

export type IProviderScreenWidth = PropsWithChildren;

export interface IScreenWidthContext {
  breakpoint: IThemeBreakpoint | 'default';
  orientation: IThemeOrientation;
}

export type IUseScreenWidthDependencies = (keyof IScreenWidthContext)[];
