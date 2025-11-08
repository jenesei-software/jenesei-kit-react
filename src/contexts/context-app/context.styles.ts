import { ScreenWidthProps } from '@local/components/context-screen-width';
import { addGridTransition } from '@local/styles/add/export';
import { JeneseiPalette } from '@local/styles/theme/export';

import { css, styled } from 'styled-components';

import { ProviderAppOutletChildrenProps, ProviderAppOutletProps, ProviderAppWrapperProps } from '.';

export const ProviderAppWrapper = styled.div<ProviderAppWrapperProps>`
  display: flex;
  flex-direction: column;
  max-width: 100dvw;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  position: relative;

  background-color: ${(props) => JeneseiPalette[props.$bgColor]};
  background-image: url(${(props) => props.$bgImage});
`;

const generateGridTemplateAreas = (props: ProviderAppOutletProps) => {
  let templateAreas = `
    "notification notification notification"
    "header header header"
    "nav nav nav"
    "leftAside children rightAside"
    "footer footer footer"
  `;

  templateAreas = `
      "notification notification notification"
      "${props.$leftAside?.isTopHeader ? 'leftAside' : 'header'} header ${props.$rightAside?.isTopHeader ? 'rightAside' : 'header'}"
      "${props.$leftAside?.isTopHeader ? 'leftAside' : props.$leftAside?.isTopNav ? 'leftAside' : 'nav'} nav ${props.$rightAside?.isTopHeader ? 'rightAside' : props.$rightAside?.isTopNav ? 'rightAside' : 'nav'}"
      "leftAside children rightAside"
      "${props.$leftAside?.isTopFooter ? 'leftAside' : 'footer'} footer ${props.$rightAside?.isTopFooter ? 'rightAside' : 'footer'}"
    `;

  return templateAreas;
};

function toStyledAppOutletCSS(props: {
  leftAsideWidth: string;
  rightAsideWidth: string;
  notificationHeight: string;
  headerHeight: string;
  navHeight: string;
  footerHeight: string;
}) {
  return css`
    grid-template-columns: ${() => `${props.leftAsideWidth} 1fr ${props.rightAsideWidth}`};
    grid-template-rows: ${() =>
      `${props.notificationHeight} ${props.headerHeight} ${props.navHeight} 1fr ${props.footerHeight}`};
  `;
}
const addSXAppOutlet = css<ProviderAppOutletProps>`
  ${(props) => {
    const leftAsideWidth = props.$leftAside?.length?.default;
    const rightAsideWidth = props.$rightAside?.length?.default;
    const notificationHeight = props.$notification?.length?.default;
    const headerHeight = props.$header?.length?.default;
    const navHeight = props.$nav?.length?.default;
    const footerHeight = props.$footer?.length?.default;
    return toStyledAppOutletCSS({
      leftAsideWidth: leftAsideWidth ?? '0px',
      rightAsideWidth: rightAsideWidth ?? '0px',
      notificationHeight: notificationHeight ?? '0px',
      headerHeight: headerHeight ?? '0px',
      navHeight: navHeight ?? '0px',
      footerHeight: footerHeight ?? '0px',
    });
  }}
  ${(props) => {
    const leftAsideWidth = props.$leftAside?.length;
    const rightAsideWidth = props.$rightAside?.length;
    const notificationHeight = props.$notification?.length;
    const headerHeight = props.$header?.length;
    const navHeight = props.$nav?.length;
    const footerHeight = props.$footer?.length;

    return Object.entries(props.theme.screens)
      .filter(([key]) => key !== 'default')
      .map(([key]) => {
        const deviceKey = key as keyof ScreenWidthProps<string | null>;
        const screenWidth = props.theme.screens[deviceKey]?.width;
        if (!screenWidth) return null;
        return css`
          @media (max-width: ${screenWidth}px) {
            ${toStyledAppOutletCSS({
              leftAsideWidth: leftAsideWidth && leftAsideWidth[deviceKey] ? leftAsideWidth[deviceKey] : '0px',
              rightAsideWidth: rightAsideWidth && rightAsideWidth[deviceKey] ? rightAsideWidth[deviceKey] : '0px',
              notificationHeight:
                notificationHeight && notificationHeight[deviceKey] ? notificationHeight[deviceKey] : '0px',
              headerHeight: headerHeight && headerHeight[deviceKey] ? headerHeight[deviceKey] : '0px',
              navHeight: navHeight && navHeight[deviceKey] ? navHeight[deviceKey] : '0px',
              footerHeight: footerHeight && footerHeight[deviceKey] ? footerHeight[deviceKey] : '0px',
            })}
          }
        `;
      });
  }}
`;
export const ProviderAppOutlet = styled.div<ProviderAppOutletProps>`
  display: grid;
  width: 100%;
  height: 100%;

  overflow-y: auto;
  overflow-x: hidden;
  
  min-height: 100dvh;
  max-height: 100dvh;
  
  ${addGridTransition};

  ${(props) => `
    grid-template-areas: ${generateGridTemplateAreas(props)};
  `}

  ${addSXAppOutlet};
`;

export const ProviderAppOutletChildren = styled.main<ProviderAppOutletChildrenProps>`
  z-index: ${(props) => props?.$main?.zIndex ?? 'auto'};
  display: flex;
  grid-area: children;
  max-width: 100%;
  max-height: 100%;
  overflow: ${(props) => (props.$isScrollOutlet ? 'auto' : 'visible')};
  scrollbar-gutter: stable;
`;

export const ProviderAppOutletNotification = styled.section<ProviderAppOutletProps>`
  z-index: ${(props) => props?.$notification?.zIndex ?? 'auto'};
  grid-area: notification;
  display: flex;
`;

export const ProviderAppOutletHeader = styled.header<ProviderAppOutletProps>`
  z-index: ${(props) => props?.$header?.zIndex ?? 'auto'};
  grid-area: header;
  display: flex;
`;

export const ProviderAppOutletFooter = styled.footer<ProviderAppOutletProps>`
  z-index: ${(props) => props?.$footer?.zIndex ?? 'auto'};
  grid-area: footer;
  display: flex;
`;

export const ProviderAppOutletNav = styled.nav<ProviderAppOutletProps>`
  z-index: ${(props) => props?.$nav?.zIndex ?? 'auto'};
  grid-area: nav;
  display: flex;
`;

export const ProviderAppOutletLeftAside = styled.aside<ProviderAppOutletProps>`
  z-index: ${(props) => props?.$leftAside?.zIndex ?? 'auto'};
  grid-area: leftAside;
  display: flex;
`;

export const ProviderAppOutletRightAside = styled.aside<ProviderAppOutletProps>`
  z-index: ${(props) => props?.$rightAside?.zIndex ?? 'auto'};
  grid-area: rightAside;
  display: flex;
`;
