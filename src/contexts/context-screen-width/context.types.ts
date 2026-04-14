import { IThemeBreakpoint, IThemeOrientation } from '@local/styles/utils';

import { PropsWithChildren } from 'react';

export type IScreenWidthProvider = PropsWithChildren & {
  type?: 'breakpoint' | 'orientation';
};

export interface IScreenWidthContext {
  breakpoint: IThemeBreakpoint | 'default';
  orientation: IThemeOrientation;
  type?: 'breakpoint' | 'orientation';
}

export type IUseScreenWidthDependencies = (keyof IScreenWidthContext)[];
