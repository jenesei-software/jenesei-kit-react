import { addFontSizeTransition, addOutline } from '@local/styles/add';
import { addSX as addSXStandard } from '@local/styles/sx';
import { JeneseiPalette } from '@local/theme/theme';

import styled, { css, keyframes } from 'styled-components';

import { addSXTypographyStyleProps, TypographyAllProps, TypographyCSSProps } from '.';

const shadowPulse = keyframes`
  0% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  }
  100% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`;

function toStyledCSS(value: TypographyAllProps) {
  return css`
    ${
      value.shadow &&
      value.shadow === 'shadowPulse' &&
      css`
      animation: ${shadowPulse} 2s infinite;
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
      font-size: ${value.size}px;
    `
    };
    ${
      'variant' in value && value.variant
        ? value.variant === 'h1'
          ? css`
            font-size: ${(props) => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.default}px;
            margin: 0;
            @media (max-width: ${(props) => props.theme.screens.tablet.width}px) {
              font-size: ${(props) => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.tablet}px;
            }

            @media (max-width: ${(props) => props.theme.screens.mobile.width}px) {
              font-size: ${(props) => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.mobile}px;
            }
          `
          : value.variant === 'h2'
            ? css`
              font-size: ${(props) => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.default}px;
              margin: 0;
              @media (max-width: ${(props) => props.theme.screens.tablet.width}px) {
                font-size: ${(props) => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.tablet}px;
              }

              @media (max-width: ${(props) => props.theme.screens.mobile.width}px) {
                font-size: ${(props) => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.mobile}px;
              }
            `
            : value.variant === 'h3'
              ? css`
                font-size: ${(props) => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.default}px;
                margin: 0;
                @media (max-width: ${(props) => props.theme.screens.tablet.width}px) {
                  font-size: ${(props) => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.tablet}px;
                }

                @media (max-width: ${(props) => props.theme.screens.mobile.width}px) {
                  font-size: ${(props) => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.mobile}px;
                }
              `
              : value.variant === 'h4'
                ? css`
                  font-size: ${(props) => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.default}px;
                  margin: 0;
                  @media (max-width: ${(props) => props.theme.screens.tablet.width}px) {
                    font-size: ${(props) => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.tablet}px;
                  }

                  @media (max-width: ${(props) => props.theme.screens.mobile.width}px) {
                    font-size: ${(props) => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.mobile}px;
                  }
                `
                : value.variant === 'h5'
                  ? css`
                    font-size: ${(props) => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.default}px;
                    margin: 0;
                    @media (max-width: ${(props) => props.theme.screens.tablet.width}px) {
                      font-size: ${(props) => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.tablet}px;
                    }

                    @media (max-width: ${(props) => props.theme.screens.mobile.width}px) {
                      font-size: ${(props) => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.mobile}px;
                    }
                  `
                  : value.variant === 'h6'
                    ? css`
                      font-size: ${(props) => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.default}px;
                      margin: 0;
                      @media (max-width: ${(props) => props.theme.screens.tablet.width}px) {
                        font-size: ${(props) => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.tablet}px;
                      }

                      @media (max-width: ${(props) => props.theme.screens.mobile.width}px) {
                        font-size: ${(props) => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.mobile}px;
                      }
                    `
                    : value.variant === 'h7'
                      ? css`
                        font-size: ${(props) => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.default}px;
                        margin: 0;
                        @media (max-width: ${(props) => props.theme.screens.tablet.width}px) {
                          font-size: ${(props) =>
                            props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.tablet}px;
                        }

                        @media (max-width: ${(props) => props.theme.screens.mobile.width}px) {
                          font-size: ${(props) =>
                            props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.mobile}px;
                        }
                      `
                      : value.variant === 'h8'
                        ? css`
                          font-size: ${(props) =>
                            props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.default}px;
                          margin: 0;
                          @media (max-width: ${(props) => props.theme.screens.tablet.width}px) {
                            font-size: ${(props) =>
                              props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.tablet}px;
                          }

                          @media (max-width: ${(props) => props.theme.screens.mobile.width}px) {
                            font-size: ${(props) =>
                              props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.mobile}px;
                          }
                        `
                        : value.variant === 'h9'
                          ? css`
                            font-size: ${(props) =>
                              props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.default}px;
                            margin: 0;
                            @media (max-width: ${(props) => props.theme.screens.tablet.width}px) {
                              font-size: ${(props) =>
                                props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.tablet}px;
                            }

                            @media (max-width: ${(props) => props.theme.screens.mobile.width}px) {
                              font-size: ${(props) =>
                                props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.mobile}px;
                            }
                          `
                          : null
        : null
    };
  `;
}

export const addSXTypography = css<addSXTypographyStyleProps>`
  ${(props) => {
    const rawSX = props.$sxTypography;
    if (!rawSX) return null;
    return toStyledCSS(rawSX.default);
  }}

  ${(props) => {
    const rawSX = props.$sxTypography;
    if (!rawSX) return null;

    return Object.entries(rawSX)
      .filter(([key]) => key !== 'default')
      .map(([deviceKey, value]) => {
        const screenWidth = props.theme.screens[deviceKey as keyof typeof props.theme.screens]?.width;
        if (!screenWidth) return null;
        return css`
          @media (max-width: ${screenWidth}px) {
            ${toStyledCSS(value)}
          }
        `;
      });
  }}
`;

const TypographyCSS = css<TypographyCSSProps>`
  font-style: normal;
  position: relative;
  overflow: visible;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  ${addFontSizeTransition};
  ${addSXTypography};
  ${addSXStandard}
`;

export const Title = styled.span<TypographyCSSProps>`
  ${TypographyCSS}
  ${addOutline}
`;
