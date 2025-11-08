import { keyframeShadowPulse } from '@local/styles/keyframes/export';
import { IThemeTypographyHeading, JeneseiPalette } from '@local/styles/theme/export';

import { CSSObject, css, DefaultTheme } from 'styled-components';

import { addOutlinePropsDollar, addSXPropsDollar, addSXTypographyPropsDollar, NormalizedSX, NormalizedSXTypography, SXProps, TypographyAllProps, TypographySXProps } from './add.types';

function toStyledCSS(value: CSSObject | ((theme: DefaultTheme) => CSSObject), theme: DefaultTheme) {
  const styles = typeof value === 'function' ? value(theme) : value;
  return css(styles);
}

const toStyledCSSTypography = (value: TypographyAllProps) =>
  css`
    ${
      value.shadow &&
      value.shadow === 'shadowPulse' &&
      css`
      animation: ${keyframeShadowPulse} 2s infinite;
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

export const toStyledCSSTypographyHeading = (heading: IThemeTypographyHeading) =>
  css`
    font-size: ${(props) => props.theme.font.sizeHeading[heading] * props.theme.font.sizeDefault.default}px;
    @media (max-width: ${(props) => props.theme.screens.tablet.width}px) {
      font-size: ${(props) => props.theme.font.sizeHeading[heading] * props.theme.font.sizeDefault.tablet}px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile.width}px) {
      font-size: ${(props) => props.theme.font.sizeHeading[heading] * props.theme.font.sizeDefault.mobile}px;
    }
  `;

function normalizeSX(raw: SXProps | undefined, theme: DefaultTheme): NormalizedSX {
  if (!raw) return {};

  const sx = typeof raw === 'function' ? raw(theme) : raw;
  const result: NormalizedSX = {};

  // базовые стили
  if (sx.default) {
    result.default = sx.default;
  }

  // горизонтально/вертикально
  // if ('horizontal' in sx) {
  //   result.horizontal = sx.horizontal;
  // }

  // if ('vertical' in sx) {
  //   result.vertical = sx.vertical;
  // }

  const bp = Object.entries(sx).filter(([key]) => key !== 'default' && key !== 'horizontal' && key !== 'vertical');
  if (bp.length) {
    result.breakpoints = {};
    for (const [keyOne, value] of bp) {
      const key = keyOne as keyof typeof theme.screens;
      const width = theme.screens?.[key]?.width;
      if (!width) continue;
      result.breakpoints[`@media (max-width: ${width}px)`] = value;
    }
  }

  return result;
}

function normalizeSxTypography(sx: TypographySXProps, theme: DefaultTheme) {
  const result: NormalizedSXTypography = {};

  if (sx.default) {
    result.default = sx.default;
  }

  // if ('horizontal' in sx) {
  //   result.horizontal = sx.horizontal;
  // }

  // if ('vertical' in sx) {
  //   result.vertical = sx.vertical;
  // }

  const bp = Object.entries(sx).filter(([key]) => key !== 'default' && key !== 'horizontal' && key !== 'vertical');
  if (bp.length) {
    result.breakpoints = {};
    for (const [keyOne, value] of bp) {
      const key = keyOne as keyof typeof theme.screens;
      const width = theme.screens[key]?.width;
      if (!width) continue;
      result.breakpoints[`@media (max-width: ${width}px)`] = value;
    }
  }

  return result;
}

export const addSX = css<addSXPropsDollar>`
  ${(props) => {
    const n = normalizeSX(props.$sx, props.theme);
    if (!n || Object.keys(n).length === 0) return null;

    return css`
      ${n.default && toStyledCSS(n.default, props.theme)}

      ${
        n.breakpoints &&
        Object.entries(n.breakpoints).map(
          ([query, style]) => css`
            ${query} {
              ${toStyledCSS(style, props.theme)}
            }
          `,
        )
      }

      ${
        n.horizontal &&
        css`
          @media (orientation: landscape) {
            ${toStyledCSS(n.horizontal, props.theme)}
          }
        `
      }

      ${
        n.vertical &&
        css`
          @media (orientation: portrait) {
            ${toStyledCSS(n.vertical, props.theme)}
          }
        `
      }
    `;
  }}
`;

export const addSXTypography = css<addSXTypographyPropsDollar>`
  ${(props) => {
    const raw = props.$sxTypography;
    if (!raw) return null;

    const n = normalizeSxTypography(raw, props.theme);

    if (!n || Object.keys(n).length === 0) return null;

    return css`
      ${n.default && toStyledCSSTypography(n.default)}

      ${
        n.breakpoints &&
        Object.entries(n.breakpoints).map(
          ([query, style]) => css`
            ${query} {
              ${toStyledCSSTypography(style)}
            }
          `,
        )
      }

      ${
        n.horizontal &&
        css`
          @media (orientation: landscape) {
            ${toStyledCSSTypography(n.horizontal)}
          }
        `
      }

      ${
        n.vertical &&
        css`
          @media (orientation: portrait) {
            ${toStyledCSSTypography(n.vertical)}
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
