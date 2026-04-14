import { IThemeGenreSonner } from '@local/styles/utils/types';

import { ISonnerProvider } from './context.types';

export const DEFAULT_PROVIDER_SONNER_Z_INDEX = 100;
export const DEFAULT_PROVIDER_SONNER_SCALE = 0.04;
export const DEFAULT_PROVIDER_SONNER_Y = 100;
export const DEFAULT_PROVIDER_SONNER_DURATION = 0.3;
export const DEFAULT_PROVIDER_SONNER_GENRE: IThemeGenreSonner = 'product';
export const DEFAULT_PROVIDER_SONNER_MARGIN_BOTTOM = 65;
export const DEFAULT_PROVIDER_SONNER_BUTTON: ISonnerProvider['default']['button'] = {
  content: 'Undo',
  onClick: () => {},
};
