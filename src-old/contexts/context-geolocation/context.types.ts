import { PropsWithChildren } from 'react';

export type ProviderGeolocationProps = PropsWithChildren & {
  isAskEntrance?: boolean;
};

export interface GeolocationContextProps {
  // eslint-disable-next-line no-undef
  geolocationPermission: PermissionState | null;
  requestGeolocationPermission: () => void;
  location: GeolocationPosition | null;
  error: GeolocationPositionError | null;
}
