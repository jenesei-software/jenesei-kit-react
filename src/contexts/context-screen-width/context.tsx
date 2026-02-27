import { CSS_VARS, IThemeBreakpoint } from '@local/styles/utils';

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { createContext } from 'use-context-selector';

import { IProviderScreenWidth, IScreenWidthContext } from './context.types';

export const ScreenWidthContext = createContext<IScreenWidthContext | null>(null);

export const ProviderScreenWidth: FC<IProviderScreenWidth> = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState<IScreenWidthContext['breakpoint']>('default');
  const [orientation, setOrientation] = useState<IScreenWidthContext['orientation']>(
    typeof window !== 'undefined' && window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
  );

  const queriesRef = useRef<Array<{
    key: IThemeBreakpoint;
    mq: MediaQueryList;
  }> | null>(null);

  if (queriesRef.current === null && typeof window !== 'undefined') {
    queriesRef.current = Object.entries(CSS_VARS.screen.breakpoint)
      .map(([key, value]) => {
        const bp = parseInt(value.replace(/\D/g, ''), 10);
        return {
          key: key as keyof typeof CSS_VARS.screen.breakpoint,
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
      const newOrientation = newWidth > window.innerHeight ? 'landscape' : 'portrait';

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
