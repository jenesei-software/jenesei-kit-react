import { createContext, FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';

import { ProviderScreenWidthProps, Screens, ScreenWidthContextProps } from '.';

export const ScreenWidthContext = createContext<ScreenWidthContextProps | null>(null);

export const ProviderScreenWidth: FC<ProviderScreenWidthProps> = ({ children }) => {
  const theme = useTheme();
  const [screenWidth, setScreenWidth] = useState<Screens>('default');
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const queries = useMemo(() => {
    if (typeof window === 'undefined') return [];

    return Object.entries(theme.screens)
      .map(([key, value]) => ({
        key: key as Screens,
        bp: (value as { width: number }).width,
      }))
      .sort((a, b) => a.bp - b.bp)
      .map(({ key, bp }) => ({
        key,
        mq: window.matchMedia(`(max-width: ${bp}px)`),
      }));
  }, [theme.screens]);

  const updateScreen = useCallback(()=>{
    if (!queries.length) return;
    const matched = queries.find(({ mq }) => mq.matches);
    setScreenWidth(matched?.key ?? 'default');
  },[queries.find, queries.length])

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!queries.length) return;

    queries.forEach(({ mq }) => mq.addEventListener('change', updateScreen));
    updateScreen(); // первичная инициализация

    return () => {
      queries.forEach(({ mq }) => mq.removeEventListener('change', updateScreen));
    };
  }, [queries, updateScreen]);

  const screens = useMemo<ScreenWidthContextProps['screens']>(() => {
    return Object.keys(theme.screens).map((key) => ({
      isScreen: screenWidth === key,
      value: key as Screens,
    }));
  }, [screenWidth, theme.screens]);

  const screenActual = useMemo<ScreenWidthContextProps['screenActual']>(() => {
    return screens.find((s) => s.isScreen)?.value ?? 'default';
  }, [screens]);
  return (
    <ScreenWidthContext.Provider
      value={{
        screens,
        screenActual,
        screenWidth,
        windowWidth,
      }}
    >
      {children}
    </ScreenWidthContext.Provider>
  );
};
