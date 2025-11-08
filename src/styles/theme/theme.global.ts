

import { LIST_TYPOGRAPHY_VARIANTS_DEFAULT } from '@local/consts';

import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import { toStyledCSSTypographyHeading } from '../add/add';

export const JeneseiGlobalStyles = createGlobalStyle`
  ${reset};   
  #storybook-root {
    overflow: hidden;
    display: flex;
    max-height: 100dvh;
    max-width: 100dvw;
    overflow:auto;
  }
  .sb-show-main.sb-main-padded {
    padding:0;
  }

  * {
    box-sizing: border-box;
  }

  html {
    display: flex;
    overflow-x: hidden;
    max-width: 100dvw;
    min-height: 100dvh;
    height: 100%;
    font-size: ${(props) => props.theme.font.sizeDefault.default}px;
    font-family: ${(props) => props.theme.font.family}, Inter, system-ui, sans-serif;
    font-weight: ${(props) => props.theme.font.weight};
    font-feature-settings: 'kern' normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    line-height: ${(props) => props.theme.font.lineHeight};
    transition: font-size ${(props) => props.theme.transition.default};
  }

  html, body, #root {
    font-synthesis: none;
    touch-action: manipulation; 
    -ms-touch-action: manipulation; 
    overscroll-behavior: none; 
    text-rendering: optimizeLegibility;
    margin: 0;
    padding: 0;
    color: inherit;
  } 

  body {
    flex:1;
  }

  @media screen and (max-width: 1024px) {
    body:has(.LayoutModal) {
      overflow: hidden !important;
    }
  }

  input[type='checkbox'],
  input[type='radio'] {
    appearance: none;
    transform: translate(0px);
  }

  input[type='time']::-webkit-calendar-picker-indicator {
    background: none;
  }

  ::-webkit-scrollbar {
    width: ${(props) => props.theme.scrollbar.width}px;
    height: ${(props) => props.theme.scrollbar.width}px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.scrollbar.background};
  }

  ::-webkit-scrollbar-thumb {
    background:  ${(props) => props.theme.scrollbar.thumb};
    border: ${(props) => props.theme.scrollbar.thumbBorder};
    background-clip: padding-box;
  }

  ${LIST_TYPOGRAPHY_VARIANTS_DEFAULT.map(
  (tag) => css`
    ${tag} {
      ${toStyledCSSTypographyHeading(tag)}
    }
  `,
)}
`;
