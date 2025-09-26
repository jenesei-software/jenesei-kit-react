import { addInputIsInputEffect } from '@local/components/input';
import {
  addDisabled,
  addFont,
  addNiceNumber,
  addOutline,
  addRemoveOutline,
  addRemoveScrollbar,
  addTransition,
} from '@local/styles/add';
import { addError } from '@local/styles/error';
import { addSX } from '@local/styles/sx';
import { KEY_SIZE_DATA } from '@local/theme/theme';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { Button, ButtonProps } from '../button';
import { DateDropdownDayProps, DateDropdownListProps, DateInputProps, DateStyledListProps, DateWrapperProps } from '.';

export const DateWrapper = styled.div<DateWrapperProps>`
  width: 100%;
  position: relative;
  height: fit-content;
  ${(props) =>
    props.$isMinWidth &&
    css`
      width: min-content;
    `}
  ${addSX};
  ${addNiceNumber};
`;

export const DateDropdownListParent = styled(motion.div)<DateStyledListProps>`
  ${addRemoveScrollbar};
`;

export const DateDropdownList = styled.div<DateDropdownListProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 6px;
  transform: translateZ(0);
  justify-content: flex-start;
  gap: 10px;
  ${addInputIsInputEffect};
`;

export const DateDropdownDays = styled.div<{ $rows: number }>`
  display: grid;
  column-gap: normal;
  row-gap: normal;
  gap: 6px;
  grid-template-columns: repeat(7, 28px);
  grid-template-rows: repeat(${(props) => props.$rows}, 28px);
  justify-content: space-between;
`;

export const addDateDropdownDaySize = css<DateDropdownDayProps>`
  ${(props) =>
    props.$size &&
    css`
      border-radius: ${KEY_SIZE_DATA[props.$size].radius}px;
    `};
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  background: ${(props) => props.theme.colors.date[props.$genre].background.rest};
  border-color: ${(props) => props.theme.colors.date[props.$genre].border.rest};
  color: ${(props) => props.theme.colors.date[props.$genre].color.rest};
  border: 1px solid transparent;
  grid-row: ${(props) => props.$row};
  grid-column: ${(props) => props.$column};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    ${(props) =>
      !props.$isDisabled &&
      css`
      background: ${props.theme.colors.date[props.$genre].background.hover};
      border-color: ${props.theme.colors.date[props.$genre].border.hover};
      color: ${props.theme.colors.date[props.$genre].color.hover};
    `}
  }
  ${addTransition};

  ${(props) =>
    props.$isWeekend &&
    css`
      background: ${props.theme.colors.date[props.$genre].background.weekend};
      border-color: ${props.theme.colors.date[props.$genre].border.weekend};
      color: ${props.theme.colors.date[props.$genre].color.weekend};
    `}
  ${(props) =>
    props.$isToday &&
    css`
      background: ${props.theme.colors.date[props.$genre].background.today};
      border-color: ${props.theme.colors.date[props.$genre].border.today};
      color: ${props.theme.colors.date[props.$genre].color.today};
    `}
    ${(props) =>
      props.$isChoice &&
      css`
      background: ${props.theme.colors.date[props.$genre].background.choice};
      border-color: ${props.theme.colors.date[props.$genre].border.choice};
      color: ${props.theme.colors.date[props.$genre].color.choice};
    `}
    ${(props) =>
      props.$isDisabled &&
      css`
        background: ${props.theme.colors.date[props.$genre].background.weekend};
      border-color: ${props.theme.colors.date[props.$genre].border.weekend};
      color: ${props.theme.colors.date[props.$genre].color.weekend};
      opacity: 0.5;
    `}
    ${(props) =>
      !props.$isCurrentMonth &&
      css`
      opacity: 0.5;
    `}
    
  ${addFont};
  ${addOutline};
`;

export const DateDropdownDay = styled.button<DateDropdownDayProps>`
  ${addDateDropdownDaySize}
`;
export const DateDropdownDayOfWeek = styled.button<DateDropdownDayProps>`
  ${addDateDropdownDaySize}
  opacity: 1;
  background-color: transparent;
`;

/****************************************** Genre *************************************************/
const addDateInputGenre = css<DateInputProps>`
  background-color: ${(props) => (props.$isActive ? props.theme.palette.black10 : 'transparent')};
  ${(props) =>
    props.$isHaveValue
      ? css`
        color: ${props.theme.colors.input[props.$genre].color.rest};
        &:focus-visible {
          color: ${props.theme.colors.input[props.$genre].color.rest};
        }
    `
      : css`
          color: ${props.theme.colors.input[props.$genre].color.placeholder};
        `};
`;
const addDateInputSize = css<DateInputProps>`
  border-radius: 4px;
  padding: 2px;
  min-width: 10px;
`;
export const DateInput = styled.div<DateInputProps>`
  text-align: center;
  resize: none;
  overflow: hidden;
  border: 0px solid;
  background: transparent;
  margin: 0px !important;
  white-space: nowrap;
  ${addFont};
  ${addDateInputSize};
  ${addDateInputGenre};
  ${addRemoveOutline};
`;

/****************************************** Genre *************************************************/
const addDateInputWrapperGenre = css<DateInputProps>`
  ${(props) => css`
    background: ${props.theme.colors.input[props.$genre].background.rest};
    border-color: ${props.theme.colors.input[props.$genre].border.rest};
    color: ${props.theme.colors.input[props.$genre].color.rest};
    outline: 2px solid transparent;
    outline-offset: 1px;
    &:hover {
      background: ${props.theme.colors.input[props.$genre].background.hover};
      border-color: ${props.theme.colors.input[props.$genre].border.hover};
      color: ${props.theme.colors.input[props.$genre].color.hover};
    }
    ${
      props.$isOpen && !props.$isReadOnly && !props.$isDisabledOutline
        ? props.$isOutlineBoxShadow
          ? css`
          outline: 1px solid transparent;
          outline-offset: 0px;
          outline: 1px solid #83b7e8;
          box-shadow: 0 1px 1px rgba(24,36,51, .06), 0 0 0 .25rem rgba(6,111,209, .25);
      `
          : css`
            background: ${props.theme.colors.input[props.$genre].background.rest};
            border-color: ${props.theme.colors.input[props.$genre].border.rest};
            color: ${props.theme.colors.input[props.$genre].color.rest};
            outline: 2px solid ${(props) => props.theme.states.focus};
    `
        : null
    }
  `};
`;

/****************************************** Size *************************************************/
export const addDateInputWrapperSize = css<DateInputProps>`
  ${(props) => css`
    padding: ${props.$isShowPlaceholder ? `0px ${KEY_SIZE_DATA[props.$size].padding}px` : `0px ${KEY_SIZE_DATA[props.$size].padding}px 0px ${KEY_SIZE_DATA[props.$size].padding - 2}px`};
    height: ${KEY_SIZE_DATA[props.$size].height}px;
    min-height: ${KEY_SIZE_DATA[props.$size].height}px;
    max-height: ${KEY_SIZE_DATA[props.$size].height}px;
    border-radius: ${KEY_SIZE_DATA[props.$size].radius}px;
  `}
`;

export const DateInputWrapper = styled.div<DateInputProps>`
  resize: none;
  overflow: hidden;
  width: 100%;
  border: 1px solid transparent;

  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 0px;

  ${addDisabled};
  ${addDateInputWrapperSize};
  ${addDateInputWrapperGenre};
  ${addTransition};
  ${addError};
`;

export const addDateInputButtonSize = css<ButtonProps>`
  ${(props) => css`
    right:${KEY_SIZE_DATA[props.size].padding}px;
  `}
`;
export const DateInputButton = styled(Button)`
    position: absolute;
    height: max-content !important;
    ${addDateInputButtonSize};
`;
export const addDateInputButtonClearSize = css<ButtonProps>`
  ${(props) => css`
    right:${KEY_SIZE_DATA[props.size].padding * 2 + KEY_SIZE_DATA[props.size].height}px;
  `}
`;
export const DateInputButtonClear = styled(Button)`
    position: absolute;
    height: max-content !important;
    ${addDateInputButtonClearSize};
`;
