import { useContext } from 'react';

import { GeolocationContext, GeolocationContextProps } from '.';

export const useGeolocation = (): GeolocationContextProps => {
  const context = useContext(GeolocationContext);
  if (!context) {
    throw new Error('useGeolocation must be used within an ProviderGeolocation');
  }
  return context;
};
