import { PropsWithChildren } from 'react';

export type IProviderGeolocation = PropsWithChildren & {
  isAskEntrance?: boolean;
};

export interface IGeolocationContext {
  // eslint-disable-next-line no-undef
  geolocationPermission: PermissionState | null;
  requestGeolocationPermission: () => void;
  location: GeolocationPosition | null;
  error: GeolocationPositionError | null;
}
