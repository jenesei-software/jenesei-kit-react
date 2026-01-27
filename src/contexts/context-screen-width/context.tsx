import { ThemeGlobal } from '@local/styles/theme/theme.vanilla-extract';

import { createContext, FC, useCallback, useEffect, useMemo, useState } from 'react';

import { ProviderScreenWidthProps, ScreenWidthContextProps } from './context.types';

export const ScreenWidthContext = createContext<ScreenWidthContextProps | null>(null);

export const ProviderScreenWidth: FC<ProviderScreenWidthProps> = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState<ScreenWidthContextProps['breakpoint']>('default');
  const [orientation, setOrientation] = useState<ScreenWidthContextProps['orientation']>(
    typeof window !== 'undefined' && window.innerWidth > window.innerHeight ? 'horizontal' : 'vertical',
  );

  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  const queries = useMemo(() => {
    if (typeof window === 'undefined') return [];

    return Object.entries(ThemeGlobal.screen.breakpoint)
      .map(([key, value]) => {
        const widthValue = (value as { width: string }).width;
        const bp = parseInt(widthValue.replace(/\D/g, ''), 10);
        return {
          key: key as keyof typeof ThemeGlobal.screen.breakpoint,
          bp,
        };
      })
      .sort((a, b) => a.bp - b.bp)
      .map(({ key, bp }) => ({
        key,
        mq: window.matchMedia(`(max-width: ${bp}px)`),
      }));
  }, []);

  const updateBreakpoint = useCallback(() => {
    if (!queries.length) return;
    const matched = queries.find(({ mq }) => mq.matches);
    setBreakpoint(matched?.key ?? 'default');
  }, [queries.find, queries.length]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setOrientation(window.innerWidth > window.innerHeight ? 'horizontal' : 'vertical');
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!queries.length) return;

    queries.forEach(({ mq }) => {
      mq.addEventListener('change', updateBreakpoint);
    });
    updateBreakpoint();

    return () => {
      queries.forEach(({ mq }) => {
        mq.removeEventListener('change', updateBreakpoint);
      });
    };
  }, [queries, updateBreakpoint]);

  return (
    <ScreenWidthContext.Provider
      value={{
        breakpoint,
        orientation,
        windowWidth,
      }}
    >
      {children}
    </ScreenWidthContext.Provider>
  );
};
