import { PropsWithChildren } from 'react';

export interface IPermissionContext {
  geolocationPermission: PermissionState | null;

  isBiometricSupported: boolean;

  isNotificationPermissionLoading: boolean;

  notificationPermission: NotificationPermission | null;

  pushNotificationSupported: boolean;

  requestGeolocationPermission: () => void;

  requestNotificationPermission: () => Promise<NotificationPermission | undefined>;
}

export type IPermissionProvider = PropsWithChildren;
