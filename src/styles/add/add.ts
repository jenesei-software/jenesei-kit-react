import { keyframeShadowPulseOld } from '@local/styles/keyframes';
import { IThemeDevice, IThemeTypographyHeading, JeneseiPalette, ThemeDevice } from '@local/styles/theme';

import { CSSObject, css, DefaultTheme } from 'styled-components';

import { addOutlinePropsDollar, addSXPropsDollar, addSXTypographyPropsDollar, TypographyAllProps } from './add.types';

function toStyledCSS(value: CSSObject | ((theme: DefaultTheme) => CSSObject), theme: DefaultTheme) {
  const styles = typeof value === 'function' ? value(theme) : value;
  return css(styles);
}

export function toStyledCSSTypographyHeading(heading: IThemeTypographyHeading) {
  return css`
    font-size: ${(props) => props.theme.font.sizeHeading[heading] * props.theme.font.sizeDevice.default}px;
    @media (max-width: ${(props) => props.theme.screens.tablet.width}px) {
      font-size: ${(props) => props.theme.font.sizeHeading[heading] * props.theme.font.sizeDevice.tablet}px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile.width}px) {
      font-size: ${(props) => props.theme.font.sizeHeading[heading] * props.theme.font.sizeDevice.mobile}px;
    }
  `;
}

const toStyledCSSTypography = (value: TypographyAllProps) =>
  css`
    ${
      value.shadow &&
      value.shadow === 'shadowPulse' &&
      css`
      animation: ${keyframeShadowPulseOld} 2s infinite;
    `
    };
    ${
      value.letterSpacing &&
      css`
      letter-spacing: ${value.letterSpacing};
    `
    };
    ${
      value.flex &&
      css`
      flex: ${value.flex};
    `
    };
    ${
      value.cursor &&
      css`
      cursor: ${value.cursor};
    `
    };
    ${
      value.overflow &&
      css`
      overflow: ${value.overflow};
    `
    };
    ${
      value.line !== undefined
        ? value.line === 1
          ? css`
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: -webkit-fill-available;
            max-width: fit-content;
          `
          : css`
            word-break: break-word;
            white-space: normal;
            text-overflow: ellipsis;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${value.line};
            width: fit-content;
            overflow-wrap: anywhere;
          `
        : css``
    };
    ${
      value.family &&
      css`
      font-family: ${value.family};
    `
    };
    ${
      value.weight &&
      css`
      font-weight: ${value.weight};
    `
    };
    line-height: ${(props) => value.height ?? props.theme.font.lineHeight};
    ${
      value.color &&
      css`
      color: ${JeneseiPalette[value.color]};
    `
    };
    ${
      value.align &&
      css`
      text-align: ${value.align};
    `
    };
    ${
      value.wrap &&
      css`
      text-wrap: ${value.wrap};
    `
    };
    ${
      value.decoration &&
      css`
      text-decoration: ${value.decoration};
    `
    };
    ${
      value.transform &&
      css`
      text-transform: ${value.transform};
    `
    };
    ${
      value.isHoverUnderlining &&
      css`
      &:hover {
        text-decoration: underline;
      }
    `
    };
    ${
      value.isNoUserSelect &&
      css`
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    `
    };
    ${
      'size' in value &&
      value.size &&
      css`
        font-size: ${typeof value.size === 'number' ? `${value.size}px` : value.size};
      `
    };
    ${'variant' in value && value.variant ? toStyledCSSTypographyHeading(value.variant) : null};
  `;

export const addSX = css<addSXPropsDollar>`
  ${(props) => {
    const sx = typeof props.$sx === 'function' ? props.$sx(props.theme) : props.$sx;
    if (!sx || Object.keys(sx).length === 0) return null;

    return css`
      ${sx.default && toStyledCSS(sx.default, props.theme)}

      ${
        sx.breakpoints &&
        Object.entries(sx.breakpoints).map((item) => {
          const [breakpoint, style] = item;
          const isThemeDevice = ThemeDevice.find((device) => device === breakpoint);
          const isDefaultThemeDevice = breakpoint === 'default';
          const query = isThemeDevice
            ? `@media (max-width: ${props.theme.screens[breakpoint as IThemeDevice].width}px)`
            : breakpoint;
          return isDefaultThemeDevice
            ? toStyledCSS(style, props.theme)
            : css`
            ${query} {
              ${toStyledCSS(style, props.theme)}
            }
          `;
        })
      }

      ${
        sx.horizontal &&
        css`
          @media (orientation: landscape) {
            ${toStyledCSS(sx.horizontal, props.theme)}
          }
        `
      }

      ${
        sx.vertical &&
        css`
          @media (orientation: portrait) {
            ${toStyledCSS(sx.vertical, props.theme)}
          }
        `
      }
    `;
  }}
`;

export const addSXTypography = css<addSXTypographyPropsDollar>`
  ${(props) => {
    const sx = typeof props.$sxTypography === 'function' ? props.$sxTypography(props.theme) : props.$sxTypography;
    if (!sx || Object.keys(sx).length === 0) return null;

    return css`
      ${sx.default && toStyledCSSTypography(sx.default)}

      ${
        sx.breakpoints &&
        Object.entries(sx.breakpoints).map((item) => {
          const [breakpoint, style] = item;
          const isThemeDevice = ThemeDevice.find((device) => device === breakpoint);
          const query = isThemeDevice
            ? `@media (max-width: ${props.theme.screens[breakpoint as IThemeDevice].width}px)`
            : breakpoint;
          return css`
            ${query} {
              ${toStyledCSSTypography(style)}
            }
          `;
        })
      }

      ${
        sx.horizontal &&
        css`
          @media (orientation: landscape) {
            ${toStyledCSSTypography(sx.horizontal)}
          }
        `
      }

      ${
        sx.vertical &&
        css`
          @media (orientation: portrait) {
            ${toStyledCSSTypography(sx.vertical)}
          }
        `
      }
    `;
  }}
`;

export const addRemoveScrollbar = css`
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-horizontal {
    display: none;
  }

  &::-webkit-scrollbar-vertical {
    display: none;
  }
  
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const addTransition = css`
  transition:
    outline 0s,
    opacity ${(props) => props.theme.transition.default},
    transform ${(props) => props.theme.transition.default},
    background-color ${(props) => props.theme.transition.default},
    height ${(props) => props.theme.transition.default},
    max-height ${(props) => props.theme.transition.default},
    width ${(props) => props.theme.transition.default},
    color ${(props) => props.theme.transition.default},
    visibility ${(props) => props.theme.transition.default},
    box-shadow ${(props) => props.theme.transition.default},
    border-color ${(props) => props.theme.transition.default},
    left ${(props) => props.theme.transition.default},
    right ${(props) => props.theme.transition.default},
    grid-template-areas ${(props) => props.theme.transition.default},
    grid-template-rows ${(props) => props.theme.transition.default},
    grid-template-columns ${(props) => props.theme.transition.default};
`;

export const addTransitionWithoutSize = css`
  transition:
    outline 0s,
    opacity ${(props) => props.theme.transition.default},
    transform ${(props) => props.theme.transition.default},
    background-color ${(props) => props.theme.transition.default},
    color ${(props) => props.theme.transition.default},
    visibility ${(props) => props.theme.transition.default},
    box-shadow ${(props) => props.theme.transition.default},
    border-color ${(props) => props.theme.transition.default},
    left ${(props) => props.theme.transition.default},
    right ${(props) => props.theme.transition.default},
    grid-template-areas ${(props) => props.theme.transition.default},
    grid-template-rows ${(props) => props.theme.transition.default},
    grid-template-columns ${(props) => props.theme.transition.default};
`;

export const addGridTransition = css`
  transition:
    grid-template-areas ${(props) => props.theme.transition.default},
    grid-template-rows ${(props) => props.theme.transition.default},
    grid-template-columns ${(props) => props.theme.transition.default};
`;

export const addFontSizeTransition = css<{ $isTransitionFontSize?: boolean }>`
  ${(props) =>
    props.$isTransitionFontSize &&
    css`
      transition: font-size ${(props) => props.theme.transition.default};
    `}
`;

export const addColorTransition = css`
  transition:
    outline 0s,
    opacity ${(props) => props.theme.transition.default},
    background-color ${(props) => props.theme.transition.default},
    color ${(props) => props.theme.transition.default},
    box-shadow ${(props) => props.theme.transition.default},
    border-color ${(props) => props.theme.transition.default};
`;

export const addOutline = css<addOutlinePropsDollar>`
  outline: 0px solid transparent;
  ${(props) =>
    !props.$isReadOnly &&
    !props.$isDisabledOutline &&
    !props.$isOutlineBoxShadow &&
    css`
      outline: 2px solid transparent;
      outline-offset: 1px;
      &:focus-visible {
      outline: 2px solid ${(props) => props.theme.states.focus};
      }
  `};
    ${(props) =>
      !props.$isReadOnly &&
      !props.$isDisabledOutline &&
      props.$isOutlineBoxShadow &&
      css`
      outline: 1px solid transparent;
      outline-offset: 0px;
      &:focus-visible {
        outline: 1px solid #83b7e8;
        box-shadow: 0 1px 1px rgba(24,36,51, .06), 0 0 0 .25rem rgba(6,111,209, .25);
      }
  `};
`;

export const addOutlineChildren = css<addOutlinePropsDollar>`
  outline: 0px solid transparent;
  ${(props) =>
    (!props.$isReadOnly && !props.$isDisabledOutline && !props.$isOutlineBoxShadow) &&
    css`
      outline: 2px solid transparent;
      outline-offset: 1px;
      &:has(:focus-visible) {
        outline: 2px solid ${(props) => props.theme.states.focus};
        outline-offset: 1px;
      }
    `};
      ${(props) =>
        (!props.$isReadOnly && !props.$isDisabledOutline && props.$isOutlineBoxShadow) &&
        css`
      outline: 1px solid transparent;
      outline-offset: 0px;
      &:has(:focus-visible) {
       outline: 1px solid #83b7e8;
        box-shadow: 0 1px 1px rgba(24,36,51, .06), 0 0 0 .25rem rgba(6,111,209, .25);
      }
    `}
`;

export const addAlwaysOutline = css<{ $isShowAlwaysOutline?: boolean }>`
  ${(props) =>
    props.$isShowAlwaysOutline &&
    css`
      outline: 2px solid ${(props) => props.theme.states.focus};
      outline-offset: 1px;
    `}
`;

export const addRemoveOutline = css`
  outline: 0px solid transparent !important;
  outline-offset: 0px !important;
  &:focus-visible {
    outline: 0px solid ${(props) => props.theme.states.focus} !important;
  }
`;

export const addNiceNumber = css`
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum';
`;

export const addDisabled = css<{ $isDisabled?: boolean }>`
 ${(props) =>
   props.$isDisabled
     ? css`
          opacity: 0.5;
        `
     : css`
          opacity: 1;
        `};
`;
