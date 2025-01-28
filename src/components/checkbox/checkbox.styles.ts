import styled, { css } from 'styled-components'

import { Icon } from '@local/components/icon'
import { getFontSizeStyles } from '@local/components/typography'
import { addError, addOutline, addTransition } from '@local/styles/base'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { StyledCheckboxProps, StyledIconProps } from '.'

/****************************************** Size *************************************************/
export const CheckboxSize = css<StyledCheckboxProps>`
  ${props => CheckboxSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const CheckboxSizeConstructor = (props: IJeneseiThemeSize) => css`
  height: ${props.height}px;
  min-height: ${props.height}px;
  border-radius: ${props.radius}px;
  gap: ${props.padding - 2}px;
  ${getFontSizeStyles(props.font, 700, 'Inter')};
  padding: ${props.padding - 4}px;
`

/****************************************** Genre *************************************************/
export const CheckboxGenre = css<StyledCheckboxProps>`
  ${props => css`
    background: ${props.theme.colors.checkbox[props.$genre].background.rest};
    border-color: ${props.theme.colors.checkbox[props.$genre].border.rest};
    color: ${props.theme.colors.checkbox[props.$genre].color.rest};
    &:hover {
      background: ${props.theme.colors.checkbox[props.$genre].background.hover};
      border-color: ${props.theme.colors.checkbox[props.$genre].border.hover};
      color: ${props.theme.colors.checkbox[props.$genre].color.hover};
    }
  `};
`

/****************************************** Disabled *************************************************/
const CheckboxDisabled = css<StyledCheckboxProps>`
  ${props =>
    props.$isDisabled
      ? css`
          opacity: 0.5;
          background: ${props.theme.colors.checkbox[props.$genre].background.rest} !important;
          border-color: ${props.theme.colors.checkbox[props.$genre].border.rest} !important;
          color: ${props.theme.colors.checkbox[props.$genre].color.rest} !important;
        `
      : css`
          opacity: 1;
        `}
`

/****************************************** HiddenBorder *************************************************/
const CheckboxHiddenBorder = css<StyledCheckboxProps>`
  ${props =>
    props.$isHiddenBorder &&
    css`
      border-color: transparent !important;
    `}
`

/****************************************** Default *************************************************/
export const CheckboxWrapper = styled.button<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;

  & *:not(#Ripple):not(:has(a)):not(a) {
    user-select: none;
    pointer-events: none;
  }
  cursor: pointer;

  ${addTransition};
  ${CheckboxGenre};
  ${CheckboxDisabled}
  ${CheckboxHiddenBorder};
  ${CheckboxSize};
  ${addOutline};
  ${addError};

  font-family: ${props => props.$customFontFamily};
  font-size: ${props => props.$customFontSize};
  font-weight: ${props => props.$customFontWeight};
  width: ${props => props.$width ?? 'max-content'};
  min-width: ${props => props.$width ?? 'max-content'};
  background-color: ${props => props.$isNotBackground && 'transparent'};
`

/****************************************** Styled *************************************************/
export const StyledIcon = styled(Icon)<StyledIconProps>`
  ${props =>
    props.$checked
      ? css`
          & #check {
            color: ${props.theme.colors.checkbox[props.$genre].color.rest};
          }
          & #uncheck {
            color: transparent;
          }
        `
      : css`
          & #check {
            color: transparent;
          }
          & #uncheck {
            color: ${props.theme.colors.checkbox[props.$genre].color.rest};
          }
        `}
`
