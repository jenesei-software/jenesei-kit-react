import { FC, createContext, useEffect, useState } from 'react';

import { usePermission } from '@local/contexts/context-permission';

import { GeolocationContextProps, ProviderGeolocationProps } from '.';

export const GeolocationContext = createContext<GeolocationContextProps | null>(null);

export const ProviderGeolocation: FC<ProviderGeolocationProps> = (props) => {
  const { geolocationPermission, requestGeolocationPermission } = usePermission();

  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);

  useEffect(() => {
    const handleSuccess = (position: GeolocationPosition) => {
      setLocation(position);
    };

    const handleError = (error: GeolocationPositionError) => {
      setError(error);
    };

    if (geolocationPermission === 'granted') {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }, [geolocationPermission, props.isAskEntrance, requestGeolocationPermission]);

  useEffect(() => {
    if (props.isAskEntrance) {
      if (geolocationPermission !== 'granted') {
        requestGeolocationPermission();
      }
    }
  }, [geolocationPermission, props.isAskEntrance, requestGeolocationPermission]);
  return (
    <GeolocationContext.Provider
      value={{
        requestGeolocationPermission,
        geolocationPermission,
        location,
        error,
      }}
    >
      {props.children}
    </GeolocationContext.Provider>
  );
};
