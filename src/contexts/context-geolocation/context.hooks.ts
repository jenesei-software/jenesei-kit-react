import { useContext } from 'react';

import { GeolocationContext } from './context';
import { IGeolocationContext } from './context.types';

export const useGeolocation = (): IGeolocationContext => {
  const context = useContext(GeolocationContext);
  if (!context) {
    throw new Error('useGeolocation must be used within an ProviderGeolocation');
  }
  return context;
};
