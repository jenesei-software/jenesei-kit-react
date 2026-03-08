import { PropsWithChildren } from 'react';

export interface PermissionContextProps {
  geolocationPermission: PermissionState | null;

  isBiometricSupported: boolean;

  isNotificationPermissionLoading: boolean;

  notificationPermission: NotificationPermission | null;

  pushNotificationSupported: boolean;

  requestGeolocationPermission: () => void;

  requestNotificationPermission: () => Promise<NotificationPermission | undefined>;
}

export type ProviderPermissionProps = PropsWithChildren;
