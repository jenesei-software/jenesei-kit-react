import { addError } from '@local/components/error';
import { addRippleDefault } from '@local/components/ripple';
import { addDisabled, addOutline, addSX, addSXTypography, addTransition } from '@local/styles/add';
import { THEME_KEY_SIZE } from '@local/styles/theme';

import styled, { css } from 'styled-components';

import { StyledCheckboxProps } from './component.types';

/****************************************** Size *************************************************/
export const CheckboxSize = css<StyledCheckboxProps>`
  ${(props) => css`
  height: ${THEME_KEY_SIZE[props.$size].height}px;
  min-height: ${THEME_KEY_SIZE[props.$size].height}px;
  border-radius: ${THEME_KEY_SIZE[props.$size].radius}px;
  gap: ${THEME_KEY_SIZE[props.$size].padding - 2}px;
  padding: ${THEME_KEY_SIZE[props.$size].padding - 4}px;
  ${
    props.$isWidthAsHeight &&
    css`
    width: ${THEME_KEY_SIZE[props.$size].height}px;
    min-width: ${THEME_KEY_SIZE[props.$size].height}px;
    padding: 0px;
  `
  };
  `};
`;

/****************************************** Genre *************************************************/
export const CheckboxGenre = css<StyledCheckboxProps>`
  ${(props) => css`
    background: ${props.theme.colors.checkbox[props.$genre].background.rest};
    border-color: ${props.theme.colors.checkbox[props.$genre].border.rest};
    color: ${props.theme.colors.checkbox[props.$genre].color.rest};
    &:hover {
      background: ${props.theme.colors.checkbox[props.$genre].background.hover};
      border-color: ${props.theme.colors.checkbox[props.$genre].border.hover};
      color: ${props.theme.colors.checkbox[props.$genre].color.hover};
    }
  `};
`;

/****************************************** Disabled *************************************************/
const addCheckboxDisabled = css<StyledCheckboxProps>`
  ${addDisabled};
  ${(props) =>
    props.$isDisabled
      ? css`
          background: ${props.theme.colors.checkbox[props.$genre].background.rest} !important;
          border-color: ${props.theme.colors.checkbox[props.$genre].border.rest} !important;
          color: ${props.theme.colors.checkbox[props.$genre].color.rest} !important;
        `
      : ''}
`;

/****************************************** HiddenBorder *************************************************/
const CheckboxHiddenBorder = css<StyledCheckboxProps>`
  ${(props) =>
    props.$isHiddenBorder &&
    css`
      border-color: transparent !important;
    `}
`;

/****************************************** Default *************************************************/
export const CheckboxWrapper = styled.button<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  background-color: ${(props) => props.$isNotBackground && 'transparent'};

  ${addRippleDefault};
  ${addTransition};
  ${CheckboxGenre};
  ${CheckboxHiddenBorder};
  ${CheckboxSize};
  ${addCheckboxDisabled}
  ${addOutline};
  ${addError};
  ${addSXTypography};
  ${addSX};
`;
