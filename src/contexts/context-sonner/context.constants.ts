import { I_THEME_SONNER_GENRE } from '@local/theme';

import { ProviderSonnerProps } from './context.types';

export const DEFAULT_PROVIDER_SONNER_Z_INDEX = 100;
export const DEFAULT_PROVIDER_SONNER_SCALE = 0.04;
export const DEFAULT_PROVIDER_SONNER_Y = 100;
export const DEFAULT_PROVIDER_SONNER_DURATION = 0.3;
export const DEFAULT_PROVIDER_SONNER_GENRE: I_THEME_SONNER_GENRE = 'black';
export const DEFAULT_PROVIDER_SONNER_MARGIN_BOTTOM = 60;
export const DEFAULT_PROVIDER_SONNER_BUTTON: ProviderSonnerProps['default']['button'] = {
  content: 'Undo',
  onClick: () => {},
};
