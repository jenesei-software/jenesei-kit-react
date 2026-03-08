import { createContext, useCallback, useEffect, useState } from 'react';

import { PermissionContextProps, ProviderPermissionProps } from './context.types';

export const PermissionContext = createContext<PermissionContextProps | null>(null);

export const ProviderPermission = (props: ProviderPermissionProps) => {
  const { pushNotificationSupported } = usePushNotificationSupported();
  const { isBiometricSupported } = useBiometricSupported();
  const { notificationPermission, requestNotificationPermission, isNotificationPermissionLoading } =
    useNotificationPermission();
  const { geolocationPermission, requestGeolocationPermission } = useGeolocationPermission();

  return (
    <PermissionContext.Provider
      value={{
        isBiometricSupported,
        geolocationPermission,
        pushNotificationSupported,
        requestGeolocationPermission,
        notificationPermission,
        requestNotificationPermission,
        isNotificationPermissionLoading,
      }}
    >
      {props.children}
    </PermissionContext.Provider>
  );
};

const useBiometricSupported = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    const checkBiometricAvailability = async () => {
      try {
        if (
          window.PublicKeyCredential &&
          typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable === 'function'
        ) {
          const available = await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
          setIsBiometricSupported(available);
        } else {
          setIsBiometricSupported(false);
        }
      } catch (error) {
        console.error('Error checking biometric availability:', error);
        setIsBiometricSupported(false);
      }
    };

    checkBiometricAvailability();
  }, []);

  return { isBiometricSupported };
};

const useGeolocationPermission = () => {
  // eslint-disable-next-line no-undef
  const [geolocationPermission, setGeolocationPermission] = useState<PermissionState | null>(null);

  useEffect(() => {
    if ('permissions' in window.navigator) {
      window.navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
        setGeolocationPermission(permissionStatus.state);
        permissionStatus.onchange = () => {
          setGeolocationPermission(permissionStatus.state);
        };
      });
    }
  }, []);

  const requestGeolocationPermission = useCallback(() => {
    if ('geolocation' in window.navigator) {
      window.navigator.geolocation.getCurrentPosition(
        () => setGeolocationPermission('granted'),
        () => setGeolocationPermission('denied'),
      );
    } else {
      console.warn('Provider Permission. Geolocation is not supported in this browser.');
    }
  }, []);

  return { geolocationPermission, requestGeolocationPermission };
};

const useNotificationPermission = () => {
  // eslint-disable-next-line no-undef
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | null>(null);
  const [isNotificationPermissionLoading, setIsNotificationPermissionLoading] = useState<boolean>(false);

  const requestNotificationPermission = useCallback(async () => {
    setIsNotificationPermissionLoading(true);
    if ('Notification' in window) {
      try {
        setIsNotificationPermissionLoading(true);
        const permission = await window.Notification.requestPermission();
        setNotificationPermission(permission);
        setIsNotificationPermissionLoading(false);
        return permission;
      } catch (error) {
        console.error('Provider Permission. Failed to request notification permission:', error);
      }
    } else {
      console.warn('Provider Permission. Notifications are not supported in this browser.');
    }
    setIsNotificationPermissionLoading(false);
  }, []);

  useEffect(() => {
    if ('Notification' in window) {
      setNotificationPermission(window.Notification.permission);
    }
  }, []);

  return { notificationPermission, requestNotificationPermission, isNotificationPermissionLoading };
};

const usePushNotificationSupported = () => {
  const [pushNotificationSupported, setPushNotificationSupported] = useState<boolean>(false);

  useEffect(() => {
    if ('PushManager' in window) {
      setPushNotificationSupported(true);
    }
  }, []);

  return { pushNotificationSupported };
};
