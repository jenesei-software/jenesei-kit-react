import { Icon } from '@local/components/icon';
import { getFontSizeStyles } from '@local/components/typography';
import { addRemoveOutline } from '@local/styles/add';
import { addError } from '@local/styles/error';
import { addSX } from '@local/styles/sx';
import { KEY_SIZE_DATA } from '@local/theme/theme';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { TextArea } from '../textarea';
import {
  ButtonListProps,
  DropdownListOptionIconProps,
  DropdownListOptionProps,
  DropdownListParentProps,
  SelectListOptionProps,
  SelectListProps,
  SelectWrapperProps,
} from '.';

const addSelectWrapperGenre = css<SelectWrapperProps>`
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
const addSelectWrapperSize = css<SelectWrapperProps>`
  border: 1px solid;
  width: 100%;
  padding: ${(props) => KEY_SIZE_DATA[props.$size].padding / 4}px
    ${(props) => KEY_SIZE_DATA[props.$size].padding - KEY_SIZE_DATA[props.$size].padding / 2.8}px;
  gap: ${(props) => KEY_SIZE_DATA[props.$size].padding / 2.8}px;
  height: fit-content;
  min-height: ${(props) => KEY_SIZE_DATA[props.$size].height}px;
  border-radius: ${(props) => KEY_SIZE_DATA[props.$size].radius}px;
  justify-content: ${(props) => (props.$isCenter ? 'center' : 'flex-start')};
  ${(props) =>
    props.$isOpen &&
    css`
      outline: 2px ${(props) => props.theme.states.focus} solid;
      outline-offset: 1px;
    `}
`;
export const SelectWrapper = styled(motion.div)<SelectWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  ${addSelectWrapperGenre};
  ${addSelectWrapperSize};
  ${addError};
  ${addSX};
`;
const addDropdownListParentSize = css<DropdownListParentProps>`
  gap: ${(props) => KEY_SIZE_DATA[props.$size].padding / 2.8}px;
`;
export const DropdownListParent = styled(motion.div)<DropdownListParentProps>`
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  ${addDropdownListParentSize};
`;
export const DropdownList = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translateZ(0);
  flex-shrink: 0;
`;

const addDropdownListOptionGenre = css<DropdownListOptionProps>`
  ${(props) => css`
    background: ${props.theme.colors.select[props.$genre].background.rest};
    border-color: ${props.theme.colors.select[props.$genre].border.rest};
    color: ${props.theme.colors.select[props.$genre].color.rest};
    &:active {
      background: ${props.theme.colors.select[props.$genre].background.rest};
      border-color: ${props.theme.colors.select[props.$genre].border.rest};
      color: ${props.theme.colors.select[props.$genre].color.rest};
    }
    ${
      !props.$isNotShowHoverStyle &&
      css`
      &:hover {
        background: ${props.theme.colors.select[props.$genre].background.hover};
        border-color: ${props.theme.colors.select[props.$genre].border.hover};
        color: ${props.theme.colors.select[props.$genre].color.hover};
      }
    `
    }
    &:focus-visible {
      background: ${props.theme.colors.select[props.$genre].background.rest};
      border-color: ${props.theme.colors.select[props.$genre].border.rest};
      color: ${props.theme.colors.select[props.$genre].color.rest};
    }
  `};
`;
const addDropdownListOptionSize = css<DropdownListOptionProps>`
  padding: 0px ${(props) => KEY_SIZE_DATA[props.$size].padding}px;
  width: 100%;
  border: 1px solid;
  border-radius: 0;
  justify-content: ${(props) => (props.$isCenter ? 'center' : 'flex-start')};
  &:first-child {
    ${(props) =>
      props.$isShowScroll
        ? css`
            border-radius: ${KEY_SIZE_DATA[props.$size].radius}px 0px 0px 0px;
          `
        : css`
            border-radius: ${KEY_SIZE_DATA[props.$size].radius}px ${KEY_SIZE_DATA[props.$size].radius}px 0px 0px;
          `}
  }
  &:last-child {
    ${(props) =>
      props.$isShowScroll
        ? css`
            border-radius: 0px 0px 0px ${KEY_SIZE_DATA[props.$size].radius}px;
          `
        : css`
            border-radius: 0px 0px ${KEY_SIZE_DATA[props.$size].radius}px ${KEY_SIZE_DATA[props.$size].radius}px;
          `}
  }
  &:not(:first-child):not(:last-child) {
    border-radius: 0px;
  }
  &:first-child:last-child {
    ${(props) =>
      props.$isShowScroll
        ? css`
            border-radius: ${KEY_SIZE_DATA[props.$size].radius}px 0px 0px ${KEY_SIZE_DATA[props.$size].radius}px;
          `
        : css`
            border-radius: ${KEY_SIZE_DATA[props.$size].radius}px;
          `}
  }
`;
export const DropdownListOption = styled.li<DropdownListOptionProps>`
  ${(props) => getFontSizeStyles(16, props.$isBold ? 500 : 400, props.theme.font.family, props.theme.font.lineHeight)};
  display: flex;
  align-items: center;
  cursor: pointer;
  top: 0;
  left: 0;
  user-select: none;
  flex-shrink: 0;
  opacity: ${(props) => (props.$item?.isDisabled ? 0.5 : 1)};
  ${addDropdownListOptionGenre};
  ${addDropdownListOptionSize};
  ${addRemoveOutline};
`;

const addDropdownOptionIconSize = css<DropdownListOptionIconProps>`
  right: ${(props) => KEY_SIZE_DATA[props.$size].padding - 6}px;
  height: ${(props) => KEY_SIZE_DATA[props.$size].height}px;
`;
export const DropdownListOptionIcon = styled(Icon)<DropdownListOptionIconProps>`
  position: absolute;
  right: 0;
  height: 100%;
  align-items: center;
  ${addDropdownOptionIconSize};
  ${addRemoveOutline};
  color: ${(props) =>
    props.$checked
      ? props.theme.colors.select[props.$genre].border.select
      : props.theme.colors.input[props.$genre].border.rest};
`;

const addSelectListSize = css<SelectListProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${(props) => (props.$isWrapSelectOption ? 'wrap' : 'nowrap')};
  gap: ${(props) => KEY_SIZE_DATA[props.$size].padding / 2.8}px;
`;
export const SelectList = styled.ul<SelectListProps>`
  list-style: none;
  position: relative;
  overflow: hidden;
  ${addSelectListSize};
`;
const addButtonListSize = css<ButtonListProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => KEY_SIZE_DATA[props.$size].padding / 2.8}px;
  padding: ${(props) => KEY_SIZE_DATA[props.$size].padding / 2.8}px ${(props) => KEY_SIZE_DATA[props.$size].padding}px;
`;
export const ButtonList = styled.div<ButtonListProps>`
  position: absolute;
  right: 0;
  ${addButtonListSize};
`;
const addSelectListOptionGenre = css<SelectListOptionProps>`
  ${(props) => css`
    background: ${props.theme.colors.select[props.$genre].background.rest};
    border-color: ${props.theme.colors.select[props.$genre].border.rest};
    color: ${props.theme.colors.select[props.$genre].color.rest};
    &:active {
      background: ${props.theme.colors.select[props.$genre].background.rest};
      border-color: ${props.theme.colors.select[props.$genre].border.rest};
      color: ${props.theme.colors.select[props.$genre].color.rest};
    }
    ${
      !props.$isNotShowHoverStyle &&
      css`
      &:hover {
        background: ${props.theme.colors.select[props.$genre].background.hover};
        border-color: ${props.theme.colors.select[props.$genre].border.hover};
        color: ${props.theme.colors.select[props.$genre].color.hover};
      }
    `
    }
    &:focus-visible {
      background: ${props.theme.colors.select[props.$genre].background.rest};
      border-color: ${props.theme.colors.select[props.$genre].border.rest};
      color: ${props.theme.colors.select[props.$genre].color.rest};
    }
  `};
`;
const addSelectListOptionSize = css<SelectListOptionProps>`
  padding: ${(props) => KEY_SIZE_DATA[props.$size].padding / 2.8}px;
  border: 1px solid;
  border-radius: ${(props) => KEY_SIZE_DATA[props.$size].radius}px;
`;
export const SelectListOption = styled(motion.li)<SelectListOptionProps>`
  display: flex;
  align-items: center;
  opacity: 1;
  cursor: ${(props) => (props.$isClearWhenClickSelectListOption ? 'pointer' : 'default')};
  flex-shrink: 0;
  overflow: hidden;
  width: fit-content;
  ${addSelectListOptionGenre};
  ${addSelectListOptionSize};
  ${addRemoveOutline};
`;

export const SelectTextArea = styled(TextArea)`
  border: 0 !important;
  background-color: transparent !important;
  min-height: initial !important;
  width: 100%;
  flex-grow: 1;
  padding: ${(props) => KEY_SIZE_DATA[props.size].padding / 2.8}px 0px;
  ${addRemoveOutline};
`;
