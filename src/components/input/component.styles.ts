import { addError } from '@local/components/error';
import { addDisabled, addNiceNumber, addOutline, addSX, addSXTypography, addTransition } from '@local/styles/add';
import { THEME_KEY_SIZE } from '@local/styles/theme';

import { motion } from 'framer-motion';
import { NumericFormat, PatternFormat } from 'react-number-format';
import styled, { css } from 'styled-components';

import { StyledInputChildrenProps, StyledInputProps, StyledInputWrapperProps } from './component.types';

/****************************************** Wrapper *************************************************/
export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  ${(props) =>
    props.$isWidthAsHeight
      ? css`
          width: ${THEME_KEY_SIZE[props.$size].height}px;
          min-width: ${THEME_KEY_SIZE[props.$size].height}px;
          & input {
            text-align: center;
          }
        `
      : null};
  ${addSX};
`;

/****************************************** Placeholder *************************************************/
export const addInputPlaceholder = css<StyledInputProps>`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${addSXTypography};
    color: ${(props) => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    ${addSXTypography};
    color: ${(props) => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
  }
`;
export const addInputPlaceholderNiceNumber = css<StyledInputProps>`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${addSXTypography};
    color: ${(props) => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
    ${addNiceNumber};
    background: transparent;
  }
  &:-ms-input-placeholder {
    ${addSXTypography};
    color: ${(props) => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
    ${addNiceNumber};
    background: transparent;
  }
`;

/****************************************** Genre *************************************************/
const addInputGenre = css<StyledInputProps>`
  ${(props) => css`
    background: ${props.theme.colors.input[props.$genre].background.rest};
    border-color: ${props.theme.colors.input[props.$genre].border.rest};
    color: ${props.theme.colors.input[props.$genre].color.rest};
    &:active {
      background: ${props.theme.colors.input[props.$genre].background.rest};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
    ${
      !props.$isNotShowHoverStyle &&
      css`
      &:hover {
        background: ${props.theme.colors.input[props.$genre].background.hover};
        border-color: ${props.theme.colors.input[props.$genre].border.hover};
        color: ${props.theme.colors.input[props.$genre].color.hover};
      }
    `
    }
    &:focus-visible {
      background: ${props.theme.colors.input[props.$genre].background.rest};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
  `};
`;

/****************************************** Size *************************************************/
export const addInputSize = css<StyledInputProps>`
  ${(props) => css`
      padding: 0px ${THEME_KEY_SIZE[props.$size].padding}px;
    height: ${THEME_KEY_SIZE[props.$size].height}px;
    min-height: ${THEME_KEY_SIZE[props.$size].height}px;
    max-height: ${THEME_KEY_SIZE[props.$size].height}px;
    border-radius: ${THEME_KEY_SIZE[props.$size].radius}px;
  `};
`;

/****************************************** is isInputEffect *************************************************/
export const addInputIsInputEffect = css<Pick<StyledInputProps, '$isInputEffect'>>`
  ${(props) =>
    props.$isInputEffect &&
    css`
      box-shadow: ${props.theme.effects.input};
    `}
`;

/****************************************** Default *************************************************/
export const StyledInputCSS = css<StyledInputProps>`
  resize: none;
  overflow: hidden;
  width: 100%;
  border: 1px solid;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${addSXTypography};
  ${addInputSize};
  ${addInputGenre};
  ${addInputPlaceholder};
  ${addDisabled};
  ${addInputIsInputEffect};
  ${addOutline};
  ${addTransition};
  ${addError};

  ${(props) =>
    props.$isNiceNumber &&
    css`
      ${addNiceNumber};
    `};
  ${(props) =>
    props.$isCenter &&
    css`
      text-align: center;
      justify-content: center;
    `};

  ${(props) =>
    props.$prefixChildren &&
    css`
      padding-left: ${`calc(${props.$prefixChildren.width} + ${props.$prefixChildren.right} + ${props.$prefixChildren.left})`};
    `};

  ${(props) =>
    props.$postfixChildren &&
    css`
      padding-right: ${`calc(${props.$postfixChildren.width} + ${props.$postfixChildren.right} + ${props.$postfixChildren.left})`};
    `};
`;

export const StyledInput = styled.input<StyledInputProps>`
  ${StyledInputCSS};
`;

export const StyledMotionInput = styled(motion.input)<StyledInputProps>`
  ${StyledInputCSS};
`;

export const StyledInputPattern = styled(PatternFormat)<StyledInputProps>`
  ${StyledInputCSS};
`;
export const StyledInputNumeric = styled(NumericFormat)<StyledInputProps>`
  ${StyledInputCSS};
`;

/****************************************** Children *************************************************/
export const InputPrefixChildren = styled.div<StyledInputChildrenProps>`
  position: absolute;
  display: flex;
  left: ${(props) => props.$left};
  width: ${(props) => props.$width};
  height: 100%;
  ${addDisabled};
  ${addTransition};
`;

export const InputPostfixChildren = styled.div<StyledInputChildrenProps>`
  position: absolute;
  display: flex;
  right: ${(props) => props.$right};
  width: ${(props) => props.$width};
  height: 100%;
  ${addDisabled};
  ${addTransition};
`;
