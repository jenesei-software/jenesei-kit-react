import { IPreviewAdditional, Preview } from '@local/areas/preview';
import { CSS_CLASS, CSS_VARS, IThemePalette } from '@local/styles/utils';
import { setClasses } from '@local/styles/utils/functions';

import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { createContext } from 'use-context-selector';

import {
  getProviderAppOutletChildrenStyle,
  getProviderAppOutletFooterStyle,
  getProviderAppOutletHeaderStyle,
  getProviderAppOutletLeftAsideStyle,
  getProviderAppOutletNavStyle,
  getProviderAppOutletNotificationStyle,
  getProviderAppOutletRightAsideStyle,
  getProviderAppOutletStyle,
  getProviderAppWrapperStyle,
} from './context.styles';
import { IAppContext, IAppProvider, IAppProviderElement, IAppProviderOutletStyled } from './context.types';
import { useScreenWidth } from '../context-screen-width';

export const AppContext = createContext<IAppContext | null>(null);

export const ProviderApp: FC<IAppProvider> = (props) => {
  const { bgColor, changeBgColor, historyBgColor, setDefaultBgColor } = useBgColor(props.defaultBgColor);
  const { statusBarColor, changeStatusBarColor, historyStatusBarColor, setDefaultStatusBarColor } = useStatusBarColor(
    props.defaultStatusBarColor,
  );
  const { bgImage, changeBgImage, historyBgImage, setDefaultBgImage } = useBgImage(props.defaultBgImage || null);
  const { title, changeTitle, setHistoryTitle, setDefaultTitle } = useTitle(props.defaultTitle || null);
  const { description, changeDescription, historyDescription, setDefaultDescription } = useDescription(
    props.defaultDescription,
  );
  const { changePreview, previewProps } = usePreview(props.defaultPreview);

  const { breakpoint, type, orientation } = useScreenWidth(['breakpoint']);

  const getValueByBreakpoint = useCallback(
    (lengthByBreakpoint: IAppProviderElement['length']) => {
      if (!lengthByBreakpoint) return null;
      if (type === 'orientation' && lengthByBreakpoint.orientation) {
        const value = lengthByBreakpoint.orientation?.[orientation];
        return value ?? null;
      }
      if (lengthByBreakpoint.breakpoint && lengthByBreakpoint.breakpoint) {
        if (breakpoint === 'default') return lengthByBreakpoint.default ?? null;
        const value = lengthByBreakpoint.breakpoint?.[breakpoint];
        return value ?? null;
      }
    },
    [breakpoint, orientation, type],
  );

  const outletStyledProps: IAppProviderOutletStyled = useMemo(
    () => ({
      isScrollOutlet: props.isScrollOutlet,
      main: props.main,
      notification: props.notification
        ? {
            component: props.notification.component,
            length: getValueByBreakpoint(props.notification.length),
            zIndex: props.notification.zIndex,
          }
        : undefined,
      header: props.header
        ? {
            component: props.header.component,
            length: getValueByBreakpoint(props.header.length),
            zIndex: props.header.zIndex,
          }
        : undefined,
      nav: props.nav
        ? {
            component: props.nav.component,
            length: getValueByBreakpoint(props.nav.length),
            zIndex: props.nav.zIndex,
          }
        : undefined,
      footer: props.footer
        ? {
            component: props.footer.component,
            length: getValueByBreakpoint(props.footer.length),
            zIndex: props.footer.zIndex,
          }
        : undefined,
      leftAside: props.leftAside
        ? {
            component: props.leftAside.component,
            length: getValueByBreakpoint(props.leftAside.length),
            zIndex: props.leftAside.zIndex,
            isTopHeader: props.leftAside.isTopHeader,
            isTopFooter: props.leftAside.isTopFooter,
            isTopNav: props.leftAside.isTopNav,
          }
        : undefined,
      rightAside: props.rightAside
        ? {
            component: props.rightAside.component,
            length: getValueByBreakpoint(props.rightAside.length),
            zIndex: props.rightAside.zIndex,
            isTopHeader: props.rightAside.isTopHeader,
            isTopFooter: props.rightAside.isTopFooter,
            isTopNav: props.rightAside.isTopNav,
          }
        : undefined,
    }),
    [
      props.footer,
      props.header,
      props.leftAside,
      props.main,
      props.nav,
      props.notification,
      props.rightAside,
      props.isScrollOutlet,
      getValueByBreakpoint,
    ],
  );

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
        setDefaultDescription,
      }}
    >
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='theme-color' content={CSS_VARS.palette[statusBarColor]} />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='mobile-web-app-capable' content='yes' />
      <Preview {...previewProps}>
        <div className={CSS_CLASS.context.app.wrapper} style={getProviderAppWrapperStyle(bgColor, bgImage)}>
          <div
            className={setClasses([CSS_CLASS.context.app.outlet, CSS_CLASS.transition.grid])}
            style={getProviderAppOutletStyle(outletStyledProps)}
          >
            {outletStyledProps.notification?.length ? (
              <section
                className={CSS_CLASS.context.app.outletNotification}
                style={getProviderAppOutletNotificationStyle(outletStyledProps)}
              >
                {props.notification?.component || null}
              </section>
            ) : null}

            {outletStyledProps.header?.length ? (
              <header
                className={CSS_CLASS.context.app.outletHeader}
                style={getProviderAppOutletHeaderStyle(outletStyledProps)}
              >
                {props.header?.component || null}
              </header>
            ) : null}

            {outletStyledProps.nav?.length ? (
              <nav className={CSS_CLASS.context.app.outletNav} style={getProviderAppOutletNavStyle(outletStyledProps)}>
                {props.nav?.component || null}
              </nav>
            ) : null}

            {outletStyledProps.leftAside?.length ? (
              <aside
                className={CSS_CLASS.context.app.outletLeftAside}
                style={getProviderAppOutletLeftAsideStyle(outletStyledProps)}
              >
                {props.leftAside?.component || null}
              </aside>
            ) : null}

            <main
              className={CSS_CLASS.context.app.outletChildren}
              style={getProviderAppOutletChildrenStyle(outletStyledProps)}
            >
              {props.children}
            </main>

            {outletStyledProps.rightAside?.length ? (
              <aside
                className={CSS_CLASS.context.app.outletRightAside}
                style={getProviderAppOutletRightAsideStyle(outletStyledProps)}
              >
                {props.rightAside?.component || null}
              </aside>
            ) : null}

            {outletStyledProps.footer?.length ? (
              <footer
                className={CSS_CLASS.context.app.outletFooter}
                style={getProviderAppOutletFooterStyle(outletStyledProps)}
              >
                {props.footer?.component || null}
              </footer>
            ) : null}
          </div>
        </div>
      </Preview>
    </AppContext.Provider>
  );
};

/**
 * Custom hook to manage preview properties.
 */
const usePreview = (defaultPreview: IAppProvider['defaultPreview']) => {
  const [previewProps, setIPreview] = useState(defaultPreview || { visible: true, defaultVisible: true });

  const changePreview = useCallback((newIPreview: IPreviewAdditional) => {
    setIPreview(newIPreview);
  }, []);

  useEffect(() => {
    if (defaultPreview) setIPreview(defaultPreview);
  }, [defaultPreview]);

  return { previewProps, changePreview };
};

/**
 * Custom hook to manage background color state with history tracking.
 */
type BgColorState = {
  bgColor: IThemePalette;
  bgColorHistory: IThemePalette[];
  bgColorIndex: number;
};

export const useBgColor = (defaultColor: IThemePalette) => {
  const [state, setState] = useState<BgColorState>({
    bgColor: defaultColor,
    bgColorHistory: [defaultColor],
    bgColorIndex: 0,
  });

  const changeBgColor = useCallback((color: IThemePalette) => {
    setState((prev) => {
      const newHistory = [...prev.bgColorHistory.slice(0, prev.bgColorIndex + 1), color];
      return {
        bgColor: color,
        bgColorHistory: newHistory,
        bgColorIndex: newHistory.length - 1,
      };
    });
  }, []);

  const historyBgColor = useCallback((steps: number) => {
    setState((prev) => {
      const newIndex = prev.bgColorIndex + steps;
      if (newIndex >= 0 && newIndex < prev.bgColorHistory.length) {
        return {
          ...prev,
          bgColor: prev.bgColorHistory[newIndex],
          bgColorIndex: newIndex,
        };
      }
      return prev;
    });
  }, []);

  const setDefaultBgColor = useCallback(() => {
    setState({
      bgColor: defaultColor,
      bgColorHistory: [defaultColor],
      bgColorIndex: 0,
    });
  }, [defaultColor]);

  useEffect(() => {
    setState({
      bgColor: defaultColor,
      bgColorHistory: [defaultColor],
      bgColorIndex: 0,
    });
  }, [defaultColor]);

  return {
    bgColor: state.bgColor,
    changeBgColor,
    historyBgColor,
    setDefaultBgColor,
    bgColorIndex: state.bgColorIndex,
  };
};

/**
 * Custom hook to manage the status bar color with history tracking.
 */
type StatusBarColorState = {
  statusBarColor: IThemePalette;
  statusBarColorHistory: IThemePalette[];
  statusBarColorIndex: number;
};

export const useStatusBarColor = (defaultColor: IThemePalette) => {
  const [state, setState] = useState<StatusBarColorState>({
    statusBarColor: defaultColor,
    statusBarColorHistory: [defaultColor],
    statusBarColorIndex: 0,
  });

  const changeStatusBarColor = useCallback((color: IThemePalette) => {
    setState((prev) => {
      const newHistory = [...prev.statusBarColorHistory.slice(0, prev.statusBarColorIndex + 1), color];
      return {
        statusBarColor: color,
        statusBarColorHistory: newHistory,
        statusBarColorIndex: newHistory.length - 1,
      };
    });
  }, []);

  const historyStatusBarColor = useCallback((steps: number) => {
    setState((prev) => {
      const newIndex = prev.statusBarColorIndex + steps;
      if (newIndex >= 0 && newIndex < prev.statusBarColorHistory.length) {
        return {
          ...prev,
          statusBarColor: prev.statusBarColorHistory[newIndex],
          statusBarColorIndex: newIndex,
        };
      }
      return prev;
    });
  }, []);

  const setDefaultStatusBarColor = useCallback(() => {
    setState({
      statusBarColor: defaultColor,
      statusBarColorHistory: [defaultColor],
      statusBarColorIndex: 0,
    });
  }, [defaultColor]);

  useEffect(() => {
    setState({
      statusBarColor: defaultColor,
      statusBarColorHistory: [defaultColor],
      statusBarColorIndex: 0,
    });
  }, [defaultColor]);

  return {
    statusBarColor: state.statusBarColor,
    changeStatusBarColor,
    historyStatusBarColor,
    setDefaultStatusBarColor,
    statusBarColorIndex: state.statusBarColorIndex,
  };
};

/**
 * Custom hook to manage background images with history.
 */
type BgImageState = {
  bgImage: string | null;
  bgImageHistory: (string | null)[];
  bgImageIndex: number;
};

export const useBgImage = (defaultImage: string | null) => {
  const [state, setState] = useState<BgImageState>({
    bgImage: defaultImage,
    bgImageHistory: [defaultImage],
    bgImageIndex: 0,
  });

  const changeBgImage = useCallback((image: string | null) => {
    setState((prev) => {
      const newHistory = [...prev.bgImageHistory.slice(0, prev.bgImageIndex + 1), image];
      return {
        bgImage: image,
        bgImageHistory: newHistory,
        bgImageIndex: newHistory.length - 1,
      };
    });
  }, []);

  const historyBgImage = useCallback((steps: number) => {
    setState((prev) => {
      const newIndex = prev.bgImageIndex + steps;
      if (newIndex >= 0 && newIndex < prev.bgImageHistory.length) {
        return {
          ...prev,
          bgImage: prev.bgImageHistory[newIndex],
          bgImageIndex: newIndex,
        };
      }
      return prev;
    });
  }, []);

  const setDefaultBgImage = useCallback(() => {
    setState({
      bgImage: defaultImage,
      bgImageHistory: [defaultImage],
      bgImageIndex: 0,
    });
  }, [defaultImage]);

  useEffect(() => {
    setState({
      bgImage: defaultImage,
      bgImageHistory: [defaultImage],
      bgImageIndex: 0,
    });
  }, [defaultImage]);

  return {
    bgImage: state.bgImage,
    changeBgImage,
    historyBgImage,
    setDefaultBgImage,
    bgImageIndex: state.bgImageIndex,
  };
};

type TitleState = {
  title: string | null;
  titleHistory: (string | null)[];
  titleIndex: number;
};
/**
 * Custom hook to manage the document title with history tracking.
 */
const useTitle = (defaultTitle: string | null) => {
  const [state, setState] = useState<TitleState>({
    title: defaultTitle,
    titleHistory: [defaultTitle],
    titleIndex: 0,
  });

  const changeTitle = useCallback((newTitle: string | null) => {
    setState((prev) => {
      const newHistory = [...prev.titleHistory.slice(0, prev.titleIndex + 1), newTitle];
      return {
        title: newTitle,
        titleHistory: newHistory,
        titleIndex: newHistory.length - 1,
      };
    });
  }, []);

  const setHistoryTitle = useCallback((steps: number) => {
    setState((prev) => {
      const newIndex = prev.titleIndex + steps;
      if (newIndex >= 0 && newIndex < prev.titleHistory.length) {
        return {
          ...prev,
          title: prev.titleHistory[newIndex],
          titleIndex: newIndex,
        };
      }
      return prev;
    });
  }, []);

  const setDefaultTitle = useCallback(() => {
    setState({
      title: defaultTitle,
      titleHistory: [defaultTitle],
      titleIndex: 0,
    });
  }, [defaultTitle]);

  useEffect(() => {
    setState({
      title: defaultTitle,
      titleHistory: [defaultTitle],
      titleIndex: 0,
    });
  }, [defaultTitle]);

  return {
    title: state.title,
    titleIndex: state.titleIndex,
    titleHistory: state.titleHistory,
    changeTitle,
    setHistoryTitle,
    setDefaultTitle,
  };
};

/**
 * Custom hook to manage a description with history tracking.
 */
type DescriptionState = {
  description: string;
  descriptionHistory: string[];
  descriptionIndex: number;
};

export const useDescription = (defaultDescription: string) => {
  const [state, setState] = useState<DescriptionState>({
    description: defaultDescription,
    descriptionHistory: [defaultDescription],
    descriptionIndex: 0,
  });

  const changeDescription = useCallback((newDescription: string) => {
    setState((prev) => {
      const newHistory = [...prev.descriptionHistory.slice(0, prev.descriptionIndex + 1), newDescription];
      return {
        description: newDescription,
        descriptionHistory: newHistory,
        descriptionIndex: newHistory.length - 1,
      };
    });
  }, []);

  const historyDescription = useCallback((steps: number) => {
    setState((prev) => {
      const newIndex = prev.descriptionIndex + steps;
      if (newIndex >= 0 && newIndex < prev.descriptionHistory.length) {
        return {
          ...prev,
          description: prev.descriptionHistory[newIndex],
          descriptionIndex: newIndex,
        };
      }
      return prev;
    });
  }, []);

  const setDefaultDescription = useCallback(() => {
    setState({
      description: defaultDescription,
      descriptionHistory: [defaultDescription],
      descriptionIndex: 0,
    });
  }, [defaultDescription]);

  useEffect(() => {
    setState({
      description: defaultDescription,
      descriptionHistory: [defaultDescription],
      descriptionIndex: 0,
    });
  }, [defaultDescription]);

  return {
    description: state.description,
    changeDescription,
    historyDescription,
    setDefaultDescription,
    descriptionIndex: state.descriptionIndex,
  };
};
