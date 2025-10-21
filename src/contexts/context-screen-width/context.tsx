import { createContext, FC, useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';

import { ProviderScreenWidthProps, Screens, ScreenWidthContextProps } from '.';

export const ScreenWidthContext = createContext<ScreenWidthContextProps | null>(null);

export const ProviderScreenWidth: FC<ProviderScreenWidthProps> = (props) => {
  const theme = useTheme();
  const [screenWidth, setScreenWidth] = useState<Screens>('default');

  const screens: ScreenWidthContextProps['screens'] = useMemo(() => {
    const allSizes = Object.entries(theme.screens).map(([key]) => {
      return {
        isScreen: screenWidth === key,
        value: key as Screens,
      };
    });
    return allSizes;
  }, [screenWidth, theme.screens]);

  const screenActual: ScreenWidthContextProps['screenActual'] = useMemo(() => {
    const find = screens.find((item) => item.isScreen);
    return find?.value ?? 'default';
  }, [screens]);

  useEffect(() => {
    const sortedScreens = Object.entries(theme.screens)
      .map(([key, value]) => ({
        key: key as Screens,
        bp: (value as { width: number }).width,
      }))
      .sort((a, b) => a.bp - b.bp);

    const queries = sortedScreens.map(({ key, bp }) => {
      return { key, mq: window.matchMedia(`(max-width: ${bp}px)`) };
    });
    const updateScreen = () => {
      for (const { key, mq } of queries) {
        if (mq.matches) {
          setScreenWidth(key);
          return;
        }
      }
      // На всякий случай fallback
      setScreenWidth('default');
    };

    queries.forEach(({ mq }) => mq.addEventListener('change', updateScreen));
    updateScreen();

    return () => {
      queries.forEach(({ mq }) => mq.removeEventListener('change', updateScreen));
    };
  }, [theme.screens]);
  return (
    <ScreenWidthContext.Provider
      value={{
        screens,
        screenActual,
        screenWidth,
      }}
    >
      {props.children}
    </ScreenWidthContext.Provider>
  );
};
