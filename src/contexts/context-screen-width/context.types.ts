
import { I_THEME_BREAKPOINT, I_THEME_ORIENTATION } from '@local/theme';

import { PropsWithChildren } from 'react';

export type ProviderScreenWidthProps = PropsWithChildren;

export interface ScreenWidthContextProps {
  breakpoint: I_THEME_BREAKPOINT | 'default';
  orientation: I_THEME_ORIENTATION;
}
