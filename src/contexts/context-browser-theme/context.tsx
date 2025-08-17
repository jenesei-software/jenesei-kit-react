import { createContext, FC, useCallback, useEffect, useState } from 'react'

import { BrowserTheme, BrowserThemeContextProps, BrowserThemeMode, ProviderBrowserThemeProps } from '.'

export const BrowserThemeContext = createContext<BrowserThemeContextProps | null>(null)

export const ProviderBrowserTheme: FC<ProviderBrowserThemeProps> = props => {
  const [mode, setMode] = useState<BrowserThemeMode>(props.defaultMode || 'auto')
  const [theme, setTheme] = useState<BrowserTheme>(() => {
    if (props.defaultMode === 'auto') {
      return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return props.defaultMode || 'light'
  })

  const handleMediaChange = useCallback(
    (e: MediaQueryListEvent) => {
      if (mode === 'auto') {
        setTheme(e.matches ? 'dark' : 'light')
      }
    },
    [mode]
  )

  useEffect(() => {
    if (mode === 'auto') {
      const media = matchMedia('(prefers-color-scheme: dark)')
      setTheme(media.matches ? 'dark' : 'light')
      media.addEventListener('change', handleMediaChange)
      return () => media.removeEventListener('change', handleMediaChange)
    } else {
      setTheme(mode)
    }
  }, [mode, handleMediaChange])
  return <BrowserThemeContext.Provider value={{ theme, mode, setMode }}>{props.children}</BrowserThemeContext.Provider>
}
