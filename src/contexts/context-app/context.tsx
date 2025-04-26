import { FC, createContext, useCallback, useEffect, useState } from 'react'

import { Preview, PreviewAdditionalProps } from '@local/areas/preview'
import { JeneseiPalette, JeneseiPaletteKeys } from '@local/theme'

import {
  AppContextProps,
  ProviderAppOutlet,
  ProviderAppOutletChildren,
  ProviderAppOutletFooter,
  ProviderAppOutletHeader,
  ProviderAppOutletLeftAside,
  ProviderAppOutletNav,
  ProviderAppOutletNotification,
  ProviderAppOutletRightAside,
  ProviderAppProps,
  ProviderAppWrapper
} from '.'

export const AppContext = createContext<AppContextProps | null>(null)

/**
 * ProviderApp component is a context context that manages various application-level states
 * such as background color, status bar color, background image, title, and description.
 * It uses several custom hooks to handle these states and provides them via the AppContext.
 *
 * @component
 *
 * @param {ProviderAppProps} props - The properties passed to the ProviderApp component.
 * @param {string} props.defaultBgColor - The default background color.
 * @param {string} props.defaultStatusBarColor - The default status bar color.
 * @param {string} [props.defaultBgImage] - The default background image.
 * @param {string} [props.defaultTitle] - The default title.
 * @param {string} [props.defaultDescription] - The default description.
 * @param {boolean} [props.isScrollOutlet] - Determines if the outlet should be scrollable.
 * @param {object} [props.footer] - The footer component and its properties.
 * @param {object} [props.notification] - The notification component and its properties.
 * @param {object} [props.header] - The header component and its properties.
 * @param {object} [props.nav] - The navigation component and its properties.
 * @param {object} [props.leftAside] - The left aside component and its properties.
 * @param {object} [props.rightAside] - The right aside component and its properties.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the ProviderApp.
 *
 * @returns {JSX.Element} The rendered ProviderApp component.
 */
export const ProviderApp: FC<ProviderAppProps> = props => {
  const { bgColor, changeBgColor, historyBgColor, setDefaultBgColor } = useBgColor(props.defaultBgColor)
  const { statusBarColor, changeStatusBarColor, historyStatusBarColor, setDefaultStatusBarColor } = useStatusBarColor(
    props.defaultStatusBarColor
  )
  const { bgImage, changeBgImage, historyBgImage, setDefaultBgImage } = useBgImage(props.defaultBgImage || null)
  const { title, changeTitle, setHistoryTitle, setDefaultTitle } = useTitle(props.defaultTitle || null)
  const { description, changeDescription, historyDescription, setDefaultDescription } = useDescription(
    props.defaultDescription
  )
  const { changePreview, previewProps } = usePreview(props.defaultPreview)

  return (
    <AppContext.Provider
      value={{
        changePreview,
        changeStatusBarColor,
        changeBgColor,
        changeBgImage,
        changeTitle,
        changeDescription,
        historyStatusBarColor,
        historyBgColor,
        historyBgImage,
        setHistoryTitle,
        historyDescription,
        setDefaultStatusBarColor,
        setDefaultBgColor,
        setDefaultBgImage,
        setDefaultTitle,
        setDefaultDescription
      }}
    >
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={JeneseiPalette[statusBarColor]} />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      <Preview {...previewProps}>
        <ProviderAppWrapper $bgColor={bgColor} $bgImage={bgImage}>
          <ProviderAppOutlet
            $isScrollOutlet={props.isScrollOutlet}
            $footer={props.footer}
            $notification={props.notification}
            $header={props.header}
            $nav={props.nav}
            $leftAside={props.leftAside}
            $rightAside={props.rightAside}
          >
            <ProviderAppOutletNotification $notification={props.notification}>
              {props.notification?.component || null}
            </ProviderAppOutletNotification>
            <ProviderAppOutletHeader $header={props.header}>{props.header?.component || null}</ProviderAppOutletHeader>
            <ProviderAppOutletNav $nav={props.nav}>{props.nav?.component || null}</ProviderAppOutletNav>
            <ProviderAppOutletLeftAside $leftAside={props.leftAside}>
              {props.leftAside?.component || null}
            </ProviderAppOutletLeftAside>
            <ProviderAppOutletChildren>{props.children}</ProviderAppOutletChildren>
            <ProviderAppOutletRightAside $rightAside={props.rightAside}>
              {props.rightAside?.component || null}
            </ProviderAppOutletRightAside>
            <ProviderAppOutletFooter $footer={props.footer}>{props.footer?.component || null}</ProviderAppOutletFooter>
          </ProviderAppOutlet>
        </ProviderAppWrapper>{' '}
      </Preview>
    </AppContext.Provider>
  )
}

/**
 * Custom hook to manage preview properties.
 */
const usePreview = (defaultPreview: ProviderAppProps['defaultPreview']) => {
  const [previewProps, setPreviewProps] = useState(defaultPreview || { visible: false })

  const changePreview = useCallback((newPreviewProps: PreviewAdditionalProps) => {
    setPreviewProps(newPreviewProps)
  }, [])

  useEffect(() => {
    if (defaultPreview) setPreviewProps(defaultPreview)
  }, [defaultPreview])

  return { previewProps, changePreview }
}

/**
 * Custom hook to manage background color state with history tracking.
 */
type BgColorState = {
  bgColor: JeneseiPaletteKeys
  bgColorHistory: JeneseiPaletteKeys[]
  bgColorIndex: number
}

export const useBgColor = (defaultColor: JeneseiPaletteKeys) => {
  const [state, setState] = useState<BgColorState>({
    bgColor: defaultColor,
    bgColorHistory: [defaultColor],
    bgColorIndex: 0
  })

  const changeBgColor = useCallback((color: JeneseiPaletteKeys) => {
    setState(prev => {
      const newHistory = [...prev.bgColorHistory.slice(0, prev.bgColorIndex + 1), color]
      return {
        bgColor: color,
        bgColorHistory: newHistory,
        bgColorIndex: newHistory.length - 1
      }
    })
  }, [])

  const historyBgColor = useCallback((steps: number) => {
    setState(prev => {
      const newIndex = prev.bgColorIndex + steps
      if (newIndex >= 0 && newIndex < prev.bgColorHistory.length) {
        return {
          ...prev,
          bgColor: prev.bgColorHistory[newIndex],
          bgColorIndex: newIndex
        }
      }
      return prev
    })
  }, [])

  const setDefaultBgColor = useCallback(() => {
    setState({
      bgColor: defaultColor,
      bgColorHistory: [defaultColor],
      bgColorIndex: 0
    })
  }, [defaultColor])

  useEffect(() => {
    setState({
      bgColor: defaultColor,
      bgColorHistory: [defaultColor],
      bgColorIndex: 0
    })
  }, [defaultColor])

  return {
    bgColor: state.bgColor,
    changeBgColor,
    historyBgColor,
    setDefaultBgColor,
    bgColorIndex: state.bgColorIndex
  }
}

/**
 * Custom hook to manage the status bar color with history tracking.
 */
type StatusBarColorState = {
  statusBarColor: JeneseiPaletteKeys
  statusBarColorHistory: JeneseiPaletteKeys[]
  statusBarColorIndex: number
}

export const useStatusBarColor = (defaultColor: JeneseiPaletteKeys) => {
  const [state, setState] = useState<StatusBarColorState>({
    statusBarColor: defaultColor,
    statusBarColorHistory: [defaultColor],
    statusBarColorIndex: 0
  })

  const changeStatusBarColor = useCallback((color: JeneseiPaletteKeys) => {
    setState(prev => {
      const newHistory = [...prev.statusBarColorHistory.slice(0, prev.statusBarColorIndex + 1), color]
      return {
        statusBarColor: color,
        statusBarColorHistory: newHistory,
        statusBarColorIndex: newHistory.length - 1
      }
    })
  }, [])

  const historyStatusBarColor = useCallback((steps: number) => {
    setState(prev => {
      const newIndex = prev.statusBarColorIndex + steps
      if (newIndex >= 0 && newIndex < prev.statusBarColorHistory.length) {
        return {
          ...prev,
          statusBarColor: prev.statusBarColorHistory[newIndex],
          statusBarColorIndex: newIndex
        }
      }
      return prev
    })
  }, [])

  const setDefaultStatusBarColor = useCallback(() => {
    setState({
      statusBarColor: defaultColor,
      statusBarColorHistory: [defaultColor],
      statusBarColorIndex: 0
    })
  }, [defaultColor])

  useEffect(() => {
    setState({
      statusBarColor: defaultColor,
      statusBarColorHistory: [defaultColor],
      statusBarColorIndex: 0
    })
  }, [defaultColor])

  return {
    statusBarColor: state.statusBarColor,
    changeStatusBarColor,
    historyStatusBarColor,
    setDefaultStatusBarColor,
    statusBarColorIndex: state.statusBarColorIndex
  }
}

/**
 * Custom hook to manage background images with history.
 */
type BgImageState = {
  bgImage: string | null
  bgImageHistory: (string | null)[]
  bgImageIndex: number
}

export const useBgImage = (defaultImage: string | null) => {
  const [state, setState] = useState<BgImageState>({
    bgImage: defaultImage,
    bgImageHistory: [defaultImage],
    bgImageIndex: 0
  })

  const changeBgImage = useCallback((image: string | null) => {
    setState(prev => {
      const newHistory = [...prev.bgImageHistory.slice(0, prev.bgImageIndex + 1), image]
      return {
        bgImage: image,
        bgImageHistory: newHistory,
        bgImageIndex: newHistory.length - 1
      }
    })
  }, [])

  const historyBgImage = useCallback((steps: number) => {
    setState(prev => {
      const newIndex = prev.bgImageIndex + steps
      if (newIndex >= 0 && newIndex < prev.bgImageHistory.length) {
        return {
          ...prev,
          bgImage: prev.bgImageHistory[newIndex],
          bgImageIndex: newIndex
        }
      }
      return prev
    })
  }, [])

  const setDefaultBgImage = useCallback(() => {
    setState({
      bgImage: defaultImage,
      bgImageHistory: [defaultImage],
      bgImageIndex: 0
    })
  }, [defaultImage])

  useEffect(() => {
    setState({
      bgImage: defaultImage,
      bgImageHistory: [defaultImage],
      bgImageIndex: 0
    })
  }, [defaultImage])

  return {
    bgImage: state.bgImage,
    changeBgImage,
    historyBgImage,
    setDefaultBgImage,
    bgImageIndex: state.bgImageIndex
  }
}

type TitleState = {
  title: string | null
  titleHistory: (string | null)[]
  titleIndex: number
}
/**
 * Custom hook to manage the document title with history tracking.
 */
const useTitle = (defaultTitle: string | null) => {
  const [state, setState] = useState<TitleState>({
    title: defaultTitle,
    titleHistory: [defaultTitle],
    titleIndex: 0
  })

  const changeTitle = useCallback((newTitle: string | null) => {
    setState(prev => {
      const newHistory = [...prev.titleHistory.slice(0, prev.titleIndex + 1), newTitle]
      return {
        title: newTitle,
        titleHistory: newHistory,
        titleIndex: newHistory.length - 1
      }
    })
  }, [])

  const setHistoryTitle = useCallback((steps: number) => {
    setState(prev => {
      const newIndex = prev.titleIndex + steps
      if (newIndex >= 0 && newIndex < prev.titleHistory.length) {
        return {
          ...prev,
          title: prev.titleHistory[newIndex],
          titleIndex: newIndex
        }
      }
      return prev
    })
  }, [])

  const setDefaultTitle = useCallback(() => {
    setState({
      title: defaultTitle,
      titleHistory: [defaultTitle],
      titleIndex: 0
    })
  }, [defaultTitle])

  useEffect(() => {
    setState({
      title: defaultTitle,
      titleHistory: [defaultTitle],
      titleIndex: 0
    })
  }, [defaultTitle])

  return {
    title: state.title,
    titleIndex: state.titleIndex,
    titleHistory: state.titleHistory,
    changeTitle,
    setHistoryTitle,
    setDefaultTitle
  }
}

/**
 * Custom hook to manage a description with history tracking.
 */
type DescriptionState = {
  description: string
  descriptionHistory: string[]
  descriptionIndex: number
}

export const useDescription = (defaultDescription: string) => {
  const [state, setState] = useState<DescriptionState>({
    description: defaultDescription,
    descriptionHistory: [defaultDescription],
    descriptionIndex: 0
  })

  const changeDescription = useCallback((newDescription: string) => {
    setState(prev => {
      const newHistory = [...prev.descriptionHistory.slice(0, prev.descriptionIndex + 1), newDescription]
      return {
        description: newDescription,
        descriptionHistory: newHistory,
        descriptionIndex: newHistory.length - 1
      }
    })
  }, [])

  const historyDescription = useCallback((steps: number) => {
    setState(prev => {
      const newIndex = prev.descriptionIndex + steps
      if (newIndex >= 0 && newIndex < prev.descriptionHistory.length) {
        return {
          ...prev,
          description: prev.descriptionHistory[newIndex],
          descriptionIndex: newIndex
        }
      }
      return prev
    })
  }, [])

  const setDefaultDescription = useCallback(() => {
    setState({
      description: defaultDescription,
      descriptionHistory: [defaultDescription],
      descriptionIndex: 0
    })
  }, [defaultDescription])

  useEffect(() => {
    setState({
      description: defaultDescription,
      descriptionHistory: [defaultDescription],
      descriptionIndex: 0
    })
  }, [defaultDescription])

  return {
    description: state.description,
    changeDescription,
    historyDescription,
    setDefaultDescription,
    descriptionIndex: state.descriptionIndex
  }
}
