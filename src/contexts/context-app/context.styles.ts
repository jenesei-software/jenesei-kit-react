import { CSS_VARS, IThemePalette } from '@local/styles/utils';

import { CSSProperties } from 'react';

import { IAppProviderOutletStyled } from './context.types';

type IAppOutletParts = IAppProviderOutletStyled;

const toPx = (value?: number | string | null) => (typeof value === 'number' ? `${value}px` : (value ?? '0px'));

const generateGridTemplateAreas = (props: IAppOutletParts) => {
  return `
    "notification notification notification"
    "${props.leftAside?.isTopHeader ? 'leftAside' : 'header'} header ${props.rightAside?.isTopHeader ? 'rightAside' : 'header'}"
    "${props.leftAside?.isTopHeader ? 'leftAside' : props.leftAside?.isTopNav ? 'leftAside' : 'nav'} nav ${props.rightAside?.isTopHeader ? 'rightAside' : props.rightAside?.isTopNav ? 'rightAside' : 'nav'}"
    "leftAside children rightAside"
    "${props.leftAside?.isTopFooter ? 'leftAside' : 'footer'} footer ${props.rightAside?.isTopFooter ? 'rightAside' : 'footer'}"
  `;
};

export const getProviderAppWrapperStyle = (bgColor: IThemePalette, bgImage: string | null): CSSProperties => ({
  backgroundColor: CSS_VARS.palette[bgColor],
  backgroundImage: bgImage ? `url(${bgImage})` : undefined,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

export const getProviderAppOutletStyle = (props: IAppOutletParts): CSSProperties => ({
  gridTemplateAreas: generateGridTemplateAreas(props),
  gridTemplateColumns: `${toPx(props.leftAside?.length)} 1fr ${toPx(props.rightAside?.length)}`,
  gridTemplateRows: `${toPx(props.notification?.length)} ${toPx(props.header?.length)} ${toPx(props.nav?.length)} 1fr ${toPx(props.footer?.length)}`,
});

export const getProviderAppOutletChildrenStyle = (props: IAppOutletParts): CSSProperties => ({
  zIndex: props.main?.zIndex ?? 'auto',
  overflow: props.isScrollOutlet ? 'auto' : 'visible',
});

export const getProviderAppOutletNotificationStyle = (props: IAppOutletParts): CSSProperties => ({
  zIndex: props.notification?.zIndex ?? 'auto',
});

export const getProviderAppOutletHeaderStyle = (props: IAppOutletParts): CSSProperties => ({
  zIndex: props.header?.zIndex ?? 'auto',
});

export const getProviderAppOutletFooterStyle = (props: IAppOutletParts): CSSProperties => ({
  zIndex: props.footer?.zIndex ?? 'auto',
});

export const getProviderAppOutletNavStyle = (props: IAppOutletParts): CSSProperties => ({
  zIndex: props.nav?.zIndex ?? 'auto',
});

export const getProviderAppOutletLeftAsideStyle = (props: IAppOutletParts): CSSProperties => ({
  zIndex: props.leftAside?.zIndex ?? 'auto',
});

export const getProviderAppOutletRightAsideStyle = (props: IAppOutletParts): CSSProperties => ({
  zIndex: props.rightAside?.zIndex ?? 'auto',
});
