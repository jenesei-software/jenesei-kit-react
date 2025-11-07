import { addSXTypographyPropsDollar, TypographyAllProps } from '@local/components/typography';
import { IThemeTypographyHeading, JeneseiPalette } from '@local/theme';

import { CSSObject, css, DefaultTheme } from 'styled-components';

import { keyframeShadowPulse } from '../keyframes';
import { addSXPropsDollar } from '.';

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

export const addSX = css<addSXPropsDollar>`
  ${(props) => {
    const rawSX = props.$sx;
    if (!rawSX) return null;

    const sx = typeof rawSX === 'function' ? rawSX(props.theme) : rawSX;

    return css`
    ${toStyledCSS(sx.default, props.theme)}
    ${Object.entries(sx)
      .filter(([key]) => key !== 'default')
      .map(([deviceKey, value]) => {
        const screenWidth = props.theme.screens[deviceKey as keyof typeof props.theme.screens]?.width;
        if (!screenWidth) return null;
        return css`
          @media (max-width: ${screenWidth}px) {
            ${toStyledCSS(value, props.theme)}
          }
        `;
      })}`;
  }}
`;

export const addSXTypography = css<addSXTypographyPropsDollar>`
  ${(props) => {
    const rawSX = props.$sxTypography;
    if (!rawSX) return null;

    return css`
      ${toStyledCSSTypography(rawSX.default)}
      ${Object.entries(rawSX)
        .filter(([key]) => key !== 'default')
        .map(([deviceKey, value]) => {
          const screenWidth = props.theme.screens[deviceKey as keyof typeof props.theme.screens]?.width;
          if (!screenWidth) return null;
          return css`
          @media (max-width: ${screenWidth}px) {
            ${toStyledCSSTypography(value)}
          }
        `;
        })}`;
  }}
`;
