import { addError } from '@local/components/error';
import {
  addDisabled,
  addOutlineChildren,
  addRemoveOutline,
  addSX,
  addSXTypography,
  addTransitionWithoutSize,
} from '@local/styles/add';
import { KEY_SIZE_DATA } from '@local/styles/theme';

import styled, { css } from 'styled-components';

import { StyledTextAreaProps, TextAreaWrapperProps } from './component.types';

/****************************************** Wrapper *************************************************/
const addTextAreaWrapperGenre = css<TextAreaWrapperProps>`
  ${(props) => css`
    background: ${props.theme.colors.input[props.$genre].background.rest};
    border-color: ${props.theme.colors.input[props.$genre].border.rest};
    color: ${props.theme.colors.input[props.$genre].color.rest};

    &:active {
      background: ${props.theme.colors.input[props.$genre].background.rest};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
    &:hover {
      background: ${props.theme.colors.input[props.$genre].background.hover};
      border-color: ${props.theme.colors.input[props.$genre].border.hover};
      color: ${props.theme.colors.input[props.$genre].color.hover};
    }
    &:focus-visible {
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      background: ${props.theme.colors.input[props.$genre].background.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
  `};
`;

const addTextAreaWrapperIsInputEffect = css<Pick<TextAreaWrapperProps, '$isInputEffect'>>`
  ${(props) =>
    props.$isInputEffect &&
    css`
      box-shadow: ${props.theme.effects.input};
    `}
`;
const addTextAreaWrapperSize = css<TextAreaWrapperProps>`
  ${(props) => css`
    padding: ${KEY_SIZE_DATA[props.$size].padding - 4}px ${KEY_SIZE_DATA[props.$size].padding}px ${KEY_SIZE_DATA[props.$size].padding - 4}px ${KEY_SIZE_DATA[props.$size].padding}px;
    border-radius: ${KEY_SIZE_DATA[props.$size].radius}px;
    min-height: ${KEY_SIZE_DATA[props.$size].height}px;
  `};
`;

export const TextAreaWrapper = styled.div<TextAreaWrapperProps>`
  border: 1px solid;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  ${addTransitionWithoutSize};
  ${addTextAreaWrapperSize};
  ${addTextAreaWrapperGenre};
  ${addTextAreaWrapperIsInputEffect};
  ${addDisabled};
  ${addOutlineChildren};
  ${addSX};
`;

/****************************************** TextArea *************************************************/
const addTextAreaPlaceholder = css<StyledTextAreaProps>`
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
const addTextAreaGenre = css<StyledTextAreaProps>`
  ${(props) => css`
    color: ${props.theme.colors.input[props.$genre].color.rest};
    border-color: transparent;
    &:active {
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
    &:hover {
      color: ${props.theme.colors.input[props.$genre].color.hover};
    }
    &:focus-visible {
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
  `};
`;
const addTextAreaIsResize = css<Pick<StyledTextAreaProps, '$isResize'>>`
  ${(props) =>
    !props.$isResize &&
    css`
      resize: none;
    `}
`;
export const addTextArea = css<StyledTextAreaProps>`
  overflow-x: hidden;
  width: -webkit-fill-available;
  padding: 0 !important;
  border: none !important;
  margin: 0 !important;
  white-space: normal;
  text-overflow: ellipsis;
  height: auto;
  background-color: transparent;

  ${addSXTypography};
  ${addTextAreaGenre};
  ${addTextAreaIsResize};
  ${addTextAreaPlaceholder};
  ${addRemoveOutline};
  ${addError};
`;

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  ${addTextArea};
`;
