
import { THEME_GLOBAL_VALUE } from '@local/theme';

import { createContext, FC, useCallback, useEffect, useRef, useState } from 'react';

import { ProviderScreenWidthProps, ScreenWidthContextProps } from './context.types';

export const ScreenWidthContext = createContext<ScreenWidthContextProps | null>(null);

export const ProviderScreenWidth: FC<ProviderScreenWidthProps> = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState<ScreenWidthContextProps['breakpoint']>('default');
  const [orientation, setOrientation] = useState<ScreenWidthContextProps['orientation']>(
    typeof window !== 'undefined' && window.innerWidth > window.innerHeight ? 'horizontal' : 'vertical',
  );

  const queriesRef = useRef<Array<{
    key: keyof typeof THEME_GLOBAL_VALUE.screen.breakpoint;
    mq: MediaQueryList;
  }> | null>(null);

  if (queriesRef.current === null && typeof window !== 'undefined') {
    queriesRef.current = Object.entries(THEME_GLOBAL_VALUE.screen.breakpoint)
      .map(([key, value]) => {
        const widthValue = (value as { width: string }).width;
        const bp = parseInt(widthValue.replace(/\D/g, ''), 10);
        return {
          key: key as keyof typeof THEME_GLOBAL_VALUE.screen.breakpoint,
          bp,
        };
      })
      .sort((a, b) => a.bp - b.bp)
      .map(({ key, bp }) => ({
        key,
        mq: window.matchMedia(`(max-width: ${bp}px)`),
      }));
  }

  const updateBreakpoint = useCallback(() => {
    if (!queriesRef.current) return;
    const matched = queriesRef.current.find(({ mq }) => mq.matches);
    setBreakpoint(matched?.key ?? 'default');
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newOrientation = newWidth > window.innerHeight ? 'horizontal' : 'vertical';

      setOrientation(newOrientation);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!queriesRef.current) return;

    queriesRef.current.forEach(({ mq }) => {
      mq.addEventListener('change', updateBreakpoint);
    });
    updateBreakpoint();

    return () => {
      queriesRef.current?.forEach(({ mq }) => {
        mq.removeEventListener('change', updateBreakpoint);
      });
    };
  }, [updateBreakpoint]);

  return (
    <ScreenWidthContext.Provider
      value={{
        breakpoint,
        orientation,
      }}
    >
      {children}
    </ScreenWidthContext.Provider>
  );
};
