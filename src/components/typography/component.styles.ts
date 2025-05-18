import styled, { css } from 'styled-components'

import { JeneseiPalette } from '@local/theme/theme'

import { TypographyAllProps, TypographyCSSProps, addSXTypographyStyleProps } from '.'

function toStyledCSS(value: TypographyAllProps) {
  return css`
    ${value.letterSpacing &&
    css`
      letter-spacing: ${value.letterSpacing};
    `};
    ${value.flex &&
    css`
      flex: ${value.flex};
    `};
    ${value.cursor &&
    css`
      cursor: ${value.cursor};
    `};
    ${value.overflow &&
    css`
      overflow: ${value.overflow};
    `};
    ${value.line !== undefined
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
      : css``};
    ${value.family &&
    css`
      font-family: ${value.family};
    `};
    ${value.weight &&
    css`
      font-weight: ${value.weight};
    `};
    ${value.height &&
    css`
      line-height: ${value.height}px;
    `};
    ${value.color &&
    css`
      color: ${JeneseiPalette[value.color]};
    `};
    ${value.align &&
    css`
      text-align: ${value.align};
    `};
    ${value.wrap &&
    css`
      text-wrap: ${value.wrap};
    `};
    ${value.decoration &&
    css`
      text-decoration: ${value.decoration};
    `};
    ${value.transform &&
    css`
      text-transform: ${value.transform};
    `};
    ${value.isHoverUnderlining &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `};
    ${'size' in value &&
    value.size &&
    css`
      font-size: ${value.size}px;
    `};
    ${'variant' in value && value.variant
      ? value.variant === 'h1'
        ? css`
            font-size: ${props => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.default}px;
            line-height: ${props => props.theme.font.lineHeight};
            margin: 0;
            @media (max-width: ${props => props.theme.screens.tablet.width}) {
              font-size: ${props => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.tablet}px;
            }

            @media (max-width: ${props => props.theme.screens.mobile.width}) {
              font-size: ${props => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.mobile}px;
            }
          `
        : value.variant === 'h2'
          ? css`
              font-size: ${props => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.default}px;
              line-height: ${props => props.theme.font.lineHeight};
              margin: 0;
              @media (max-width: ${props => props.theme.screens.tablet.width}) {
                font-size: ${props => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.tablet}px;
              }

              @media (max-width: ${props => props.theme.screens.mobile.width}) {
                font-size: ${props => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.mobile}px;
              }
            `
          : value.variant === 'h3'
            ? css`
                font-size: ${props => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.default}px;
                line-height: ${props => props.theme.font.lineHeight};
                margin: 0;
                @media (max-width: ${props => props.theme.screens.tablet.width}) {
                  font-size: ${props => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.tablet}px;
                }

                @media (max-width: ${props => props.theme.screens.mobile.width}) {
                  font-size: ${props => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.mobile}px;
                }
              `
            : value.variant === 'h4'
              ? css`
                  font-size: ${props => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.default}px;
                  line-height: ${props => props.theme.font.lineHeight};
                  margin: 0;
                  @media (max-width: ${props => props.theme.screens.tablet.width}) {
                    font-size: ${props => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.tablet}px;
                  }

                  @media (max-width: ${props => props.theme.screens.mobile.width}) {
                    font-size: ${props => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.mobile}px;
                  }
                `
              : value.variant === 'h5'
                ? css`
                    font-size: ${props => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.default}px;
                    line-height: ${props => props.theme.font.lineHeight};
                    margin: 0;
                    @media (max-width: ${props => props.theme.screens.tablet.width}) {
                      font-size: ${props => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.tablet}px;
                    }

                    @media (max-width: ${props => props.theme.screens.mobile.width}) {
                      font-size: ${props => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.mobile}px;
                    }
                  `
                : value.variant === 'h6'
                  ? css`
                      font-size: ${props => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.default}px;
                      line-height: ${props => props.theme.font.lineHeight};
                      margin: 0;
                      @media (max-width: ${props => props.theme.screens.tablet.width}) {
                        font-size: ${props => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.tablet}px;
                      }

                      @media (max-width: ${props => props.theme.screens.mobile.width}) {
                        font-size: ${props => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.mobile}px;
                      }
                    `
                  : value.variant === 'h7'
                    ? css`
                        font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.default}px;
                        line-height: ${props => props.theme.font.lineHeight};
                        margin: 0;
                        @media (max-width: ${props => props.theme.screens.tablet.width}) {
                          font-size: ${props =>
                            props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.tablet}px;
                        }

                        @media (max-width: ${props => props.theme.screens.mobile.width}) {
                          font-size: ${props =>
                            props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.mobile}px;
                        }
                      `
                    : value.variant === 'h8'
                      ? css`
                          font-size: ${props =>
                            props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.default}px;
                          line-height: ${props => props.theme.font.lineHeight};
                          margin: 0;
                          @media (max-width: ${props => props.theme.screens.tablet.width}) {
                            font-size: ${props =>
                              props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.tablet}px;
                          }

                          @media (max-width: ${props => props.theme.screens.mobile.width}) {
                            font-size: ${props =>
                              props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.mobile}px;
                          }
                        `
                      : value.variant === 'h9'
                        ? css`
                            font-size: ${props =>
                              props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.default}px;
                            line-height: ${props => props.theme.font.lineHeight};
                            margin: 0;
                            @media (max-width: ${props => props.theme.screens.tablet.width}) {
                              font-size: ${props =>
                                props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.tablet}px;
                            }

                            @media (max-width: ${props => props.theme.screens.mobile.width}) {
                              font-size: ${props =>
                                props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.mobile}px;
                            }
                          `
                        : null
      : null};
  `
}
const addSX = css<TypographyCSSProps>`
  ${props => {
    const rawSX = props.$sx
    if (!rawSX) return null
    return toStyledCSS(rawSX.default)
  }}

  ${props => {
    const rawSX = props.$sx
    if (!rawSX) return null

    return Object.entries(rawSX)
      .filter(([key]) => key !== 'default')
      .map(([deviceKey, value]) => {
        const screenWidth = props.theme.screens[deviceKey as keyof typeof props.theme.screens]?.width
        if (!screenWidth) return null
        return css`
          @media (max-width: ${screenWidth}) {
            ${toStyledCSS(value)}
          }
        `
      })
  }}
`

const TypographyCSS = css<TypographyCSSProps>`
  font-style: normal;
  position: relative;
  overflow: visible;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  line-height: ${props => props.theme.font.lineHeight};
  ${addSX};
`

export const Title = styled.span<TypographyCSSProps>`
  ${TypographyCSS}
`

export const addSXTypography = css<addSXTypographyStyleProps>`
  ${props => {
    const rawSX = props.$sxTypography
    if (!rawSX) return null
    return toStyledCSS(rawSX.default)
  }}

  ${props => {
    const rawSX = props.$sxTypography
    if (!rawSX) return null

    return Object.entries(rawSX)
      .filter(([key]) => key !== 'default')
      .map(([deviceKey, value]) => {
        const screenWidth = props.theme.screens[deviceKey as keyof typeof props.theme.screens]?.width
        if (!screenWidth) return null
        return css`
          @media (max-width: ${screenWidth}) {
            ${toStyledCSS(value)}
          }
        `
      })
  }}
`
