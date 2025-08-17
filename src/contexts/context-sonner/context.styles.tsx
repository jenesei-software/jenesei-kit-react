import { addRemoveScrollbar, addTransition } from '@local/styles/add';

import styled, { css } from 'styled-components';

import {
  SonnerContentDescriptionProps,
  SonnerContentTitleProps,
  SonnerElementWrapperProps,
  SonnerLayoutProps,
} from '.';

export const SonnerLayout = styled.div<SonnerLayoutProps>`
  position: fixed;
  z-index: ${(props) => props.$zIndex};
  max-height: calc(100dvh - 20px);
  width: 320px;
  display: flex;
  margin: 10px;
  gap: ${(props) => props.$gap}px;
  box-sizing: content-box;
  overflow-y: visible;
  overflow-x: visible;
  ${addRemoveScrollbar}
  ${(props) =>
    props.$position === 'bottom-center'
      ? css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          justify-content: flex-start;
          flex-direction: column-reverse;
        `
      : props.$position === 'bottom-left'
        ? css`
            left: 0;
            bottom: 0;
            justify-content: flex-start;
            flex-direction: column-reverse;
          `
        : props.$position === 'bottom-right'
          ? css`
              right: 0;
              bottom: 0;
              justify-content: flex-start;
              flex-direction: column-reverse;
            `
          : props.$position === 'top-right'
            ? css`
                top: 0;
                right: 0;
                justify-content: flex-end;
                flex-direction: column;
              `
            : props.$position === 'top-left'
              ? css`
                  top: 0;
                  left: 0;
                  justify-content: flex-end;
                  flex-direction: column;
                `
              : props.$position === 'top-center'
                ? css`
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    justify-content: flex-end;
                    flex-direction: column;
                  `
                : css``}
`;

export const SonnerElementWrapper = styled.div<SonnerElementWrapperProps>`
  background: ${(props) => props.theme.colors.sonner[props.$genre].wrapper.background};
  color: ${(props) => props.theme.colors.sonner[props.$genre].icon.color};
  border-radius: 12px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.sonner[props.$genre].wrapper.borderColor};
  border-width: 1px;
  padding: 16px 20px 16px 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  flex-shrink: 1;
  min-width: 320px;
  min-height: 64px;
  transform-origin: center center;
  box-shadow: ${(props) => props.theme.colors.sonner[props.$genre].wrapper.boxShadow};
  overflow: visible;
  &:hover {
    box-shadow: ${(props) => props.theme.colors.sonner[props.$genre].wrapper.boxShadowHover};
  }
  ${addTransition};
`;
export const SonnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  flex: 1;
  position: relative;
  overflow: hidden;
`;
export const SonnerIcon = styled.div`
  display: contents;
`;
export const SonnerContentTitle = styled.div<SonnerContentTitleProps>`
  color:  ${(props) => props.theme.colors.sonner[props.$genre].title.color};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const SonnerContentDescription = styled.div<SonnerContentDescriptionProps>`
  color:${(props) => props.theme.colors.sonner[props.$genre].description.color};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const SonnerButtonWrapper = styled.div``;
