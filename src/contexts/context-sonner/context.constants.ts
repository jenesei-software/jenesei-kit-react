import { ITheme } from '@local/styles/theme/export';

import { ProviderSonnerProps } from '.';

export const DEFAULT_PROVIDER_SONNER_Z_INDEX = 100;
export const DEFAULT_PROVIDER_SONNER_SCALE = 0.04;
export const DEFAULT_PROVIDER_SONNER_Y = 100;
export const DEFAULT_PROVIDER_SONNER_DURATION = 0.3;
export const DEFAULT_PROVIDER_SONNER_GENRE: keyof ITheme['colors']['sonner'] = 'black';
export const DEFAULT_PROVIDER_SONNER_MARGIN_BOTTOM = 60;
export const DEFAULT_PROVIDER_SONNER_BUTTON: ProviderSonnerProps['default']['button'] = {
  content: 'Undo',
  onClick: () => {},
};
