import { FC, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';

import { IBrowserTheme, IBrowserThemeContext, IBrowserThemeMode, IProviderBrowserTheme } from './context.types';

export const BrowserThemeContext = createContext<IBrowserThemeContext | null>(null);

export const ProviderBrowserTheme: FC<IProviderBrowserTheme> = (props) => {
  const [mode, setMode] = useState<IBrowserThemeMode>(props.defaultMode || 'auto');
  const [theme, setTheme] = useState<IBrowserTheme>(() => {
    if (props.defaultMode === 'auto') {
      return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return props.defaultMode || 'light';
  });

  const handleMediaChange = useCallback(
    (e: MediaQueryListEvent) => {
      if (mode === 'auto') {
        setTheme(e.matches ? 'dark' : 'light');
      }
    },
    [mode],
  );

  useEffect(() => {
    if (mode === 'auto') {
      const media = matchMedia('(prefers-color-scheme: dark)');
      setTheme(media.matches ? 'dark' : 'light');
      media.addEventListener('change', handleMediaChange);
      return () => media.removeEventListener('change', handleMediaChange);
    } else {
      setTheme(mode);
    }
  }, [mode, handleMediaChange]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (props.defaultMode) setMode(props.defaultMode);
  }, [props.defaultMode]);

  return <BrowserThemeContext.Provider value={{ theme, mode, setMode }}>{props.children}</BrowserThemeContext.Provider>;
};
