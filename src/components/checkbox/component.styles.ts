import { Icon } from '@local/components/icon';
import { addSXTypography } from '@local/components/typography';
import { addDisabled, addFont, addOutline, addTransition } from '@local/styles/add';
import { addError } from '@local/styles/error';
import { addSX } from '@local/styles/sx';
import { IThemeSizePropertyDefault, KEY_SIZE_DATA } from '@local/theme';

import styled, { css } from 'styled-components';

import { addRippleDefault } from '../ripple';
import { StyledCheckboxProps, StyledIconProps } from '.';

/****************************************** Size *************************************************/
export const CheckboxSize = css<StyledCheckboxProps>`
  ${(props) => CheckboxSizeConstructor({ ...KEY_SIZE_DATA[props.$size], isWidthAsHeight: props.$isWidthAsHeight })};
`;
export const CheckboxSizeConstructor = (
  props: IThemeSizePropertyDefault & {
    isWidthAsHeight?: boolean;
  },
) => css`
  height: ${props.height}px;
  min-height: ${props.height}px;
  border-radius: ${props.radius}px;
  gap: ${props.padding - 2}px;
  padding: ${props.padding - 4}px;
  ${
    props.isWidthAsHeight &&
    css`
    width: ${props.height}px;
    min-width: ${props.height}px;
    padding: 0px;
  `
  };
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
  ${addFont};
  ${addError};
  ${addSXTypography};
  ${addSX};
`;

/****************************************** Styled *************************************************/
export const StyledIcon = styled(Icon)<StyledIconProps>`
  ${(props) =>
    props.$checked
      ? css`
          & #check {
            color: inherit;
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
            color: inherit;
          }
        `}
`;
