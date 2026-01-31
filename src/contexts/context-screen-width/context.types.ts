import { I_THEME_BREAKPOINT, I_THEME_ORIENTATION } from '@local/styles/theme/theme.types';

import { PropsWithChildren } from 'react';

export type ProviderScreenWidthProps = PropsWithChildren;

export interface ScreenWidthContextProps {
  breakpoint: I_THEME_BREAKPOINT;
  orientation: I_THEME_ORIENTATION;
}
