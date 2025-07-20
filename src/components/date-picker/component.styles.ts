import { addInputPlaceholderNiceNumber, InputIsInputEffect } from '@local/components/input'
import { getFontSizeStyles } from '@local/components/typography'
import { addNiceNumber, addOutline, addRemoveOutline, addRemoveScrollbar, addTransition } from '@local/styles/add'
import { addError } from '@local/styles/error'
import { addSX } from '@local/styles/sx'
import { KEY_SIZE_DATA } from '@local/theme/theme'
import { IThemeSizePropertyDefault } from '@local/theme/theme.interface'

import { motion } from 'framer-motion'
import { PatternFormat } from 'react-number-format'
import styled, { css } from 'styled-components'

import { DateDropdownDayProps, DateDropdownListProps, DateInputProps, DateStyledListProps, DateWrapperProps } from '.'

export const DateWrapper = styled.div<DateWrapperProps>`
  width: 100%;
  position: relative;
  height: fit-content;
  ${props =>
    props.$isMinWidth &&
    css`
      width: min-content;
    `}
  ${addSX};
  ${addNiceNumber};
`

export const DateDropdownListParent = styled(motion.div)<DateStyledListProps>`
  ${addRemoveScrollbar};
`

export const DateDropdownList = styled.div<DateDropdownListProps>`
  list-style: none;

  position: relative;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  padding-top: 6px;
  transform: translateZ(0);
  ${InputIsInputEffect};
  justify-content: flex-start;
  gap: 10px;
`

export const DateDropdownDays = styled.div<{ $rows: number }>`
  display: grid;
  column-gap: normal;
  row-gap: normal;
  gap: 6px;
  grid-template-columns: repeat(7, 28px);
  grid-template-rows: repeat(${props => props.$rows}, 28px);
  justify-content: space-between;
`

export const DateDropdownDaySize = css<DateDropdownDayProps>`
  ${props =>
    props.$size &&
    DateDropdownDaySizeConstructor({
      ...KEY_SIZE_DATA[props.$size]
    })};
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  background: ${props => props.theme.colors.date[props.$genre].background.rest};
  border-color: ${props => props.theme.colors.date[props.$genre].border.rest};
  color: ${props => props.theme.colors.date[props.$genre].color.rest};
  border: 1px solid transparent;
  grid-row: ${props => props.$row};
  grid-column: ${props => props.$column};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    ${props => css`
      background: ${props.theme.colors.date[props.$genre].background.hover};
      border-color: ${props.theme.colors.date[props.$genre].border.hover};
      color: ${props.theme.colors.date[props.$genre].color.hover};
    `}
  }
  ${addTransition};

  ${props =>
    props.$isWeekend &&
    css`
      background: ${props.theme.colors.date[props.$genre].background.weekend};
      border-color: ${props.theme.colors.date[props.$genre].border.weekend};
      color: ${props.theme.colors.date[props.$genre].color.weekend};
    `}
  ${props =>
    props.$isToday &&
    css`
      background: ${props.theme.colors.date[props.$genre].background.today};
      border-color: ${props.theme.colors.date[props.$genre].border.today};
      color: ${props.theme.colors.date[props.$genre].color.today};
    `}
    ${props =>
    props.$isChoice &&
    css`
      background: ${props.theme.colors.date[props.$genre].background.choice};
      border-color: ${props.theme.colors.date[props.$genre].border.choice};
      color: ${props.theme.colors.date[props.$genre].color.choice};
    `}
    ${props =>
    !props.$isCurrentMonth &&
    css`
      opacity: 0.5;
    `}
  ${params => getFontSizeStyles(12, 700, params.theme.font.family)};

  ${addOutline};
`
export const DateDropdownDaySizeConstructor = (props: IThemeSizePropertyDefault) => css`
  border-radius: ${props.radius}px;
  ${params => getFontSizeStyles(12, 700, params.theme.font.family)};
`

export const DateDropdownDay = styled.button<DateDropdownDayProps>`
  ${DateDropdownDaySize}
`
export const DateDropdownDayOfWeek = styled.button<DateDropdownDayProps>`
  ${DateDropdownDaySize}
  opacity: 1;
  background-color: transparent;
`

/****************************************** Genre *************************************************/
const DateInputGenre = css<DateInputProps>`
  ${props => css`
    color: ${props.theme.colors.input[props.$genre].color.rest};
    &:active {
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
    &:focus-visible {
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
  `};
`
export const DateInput = styled(PatternFormat)<DateInputProps>`
  resize: none;
  overflow: hidden;
  border: 0px solid;
  background: transparent;
  padding: 0px !important;
  margin: 0px !important;
  white-space: nowrap;
  text-align: left;
  ${props => getFontSizeStyles(16, 400, 'Roboto Mono', props.theme.font.lineHeight)};
  ${DateInputGenre};
  ${addInputPlaceholderNiceNumber};
  ${addRemoveOutline};
`

/****************************************** Genre *************************************************/
const DateInputWrapperGenre = css<DateInputProps>`
  ${props => css`
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
    &:has(:focus-visible),
    &:has(:active) {
      background: ${props.theme.colors.input[props.$genre].background.rest};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
      outline: 2px solid ${props => props.theme.states.focus};
    }
    ${props.$isOpen &&
    css`
      background: ${props.theme.colors.input[props.$genre].background.rest};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
      outline: 2px solid ${props => props.theme.states.focus};
    `}
  `};
`

/****************************************** Size *************************************************/
export const DateInputWrapperSize = css<DateInputProps>`
  ${props => DateInputWrapperSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const DateInputWrapperSizeConstructor = (props: IThemeSizePropertyDefault) => css`
  padding: 0px ${props.padding}px;
  height: ${props.height}px;
  min-height: ${props.height}px;
  max-height: ${props.height}px;
  border-radius: ${props.radius}px;
`

export const DateInputWrapper = styled.div<DateInputProps>`
  resize: none;
  overflow: hidden;
  width: 100%;
  border: 1px solid transparent;

  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 0px;

  ${DateInputWrapperSize};
  ${DateInputWrapperGenre};
  ${addTransition};
  ${addError};
`
