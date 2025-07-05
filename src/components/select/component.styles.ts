import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { Icon } from '@local/components/icon'
import { getFontSizeStyles } from '@local/components/typography'
import { addRemoveOutline, addTransition } from '@local/styles/add'
import { addSX } from '@local/styles/sx'
import { IThemeSizePropertyDefault } from '@local/theme'
import { KEY_SIZE_DATA } from '@local/theme/theme'

import {
  ButtonListProps,
  DropdownListOptionIconProps,
  DropdownListOptionProps,
  SelectListOptionProps,
  SelectListProps,
  SelectWrapperProps
} from '.'

const addSelectWrapperGenre = css<SelectWrapperProps>`
  ${props => css`
    background: ${props.theme.colors.input[props.$genre].background.rest};
    border-color: ${props.theme.colors.input[props.$genre].border.rest};
    color: ${props.theme.colors.input[props.$genre].color.rest};
    &:active {
      background: ${props.theme.colors.input[props.$genre].background.rest};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
    ${!props.$isNotShowHoverStyle &&
    css`
      &:hover {
        background: ${props.theme.colors.input[props.$genre].background.hover};
        border-color: ${props.theme.colors.input[props.$genre].border.hover};
        color: ${props.theme.colors.input[props.$genre].color.hover};
      }
    `}
    &:focus-visible {
      background: ${props.theme.colors.input[props.$genre].background.rest};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
  `};
`
const addSelectWrapperSize = css<SelectWrapperProps>`
  border: 1px solid;
  width: 100%;
  padding: ${props => KEY_SIZE_DATA[props.$size].padding / 4}px ${props => KEY_SIZE_DATA[props.$size].padding}px;
  height: fit-content;
  min-height: ${props => KEY_SIZE_DATA[props.$size].height}px;
  border-radius: ${props => KEY_SIZE_DATA[props.$size].radius}px;
  ${props =>
    props.$isOpen &&
    css`
      &:after {
        pointer-events: none;
        user-select: none;
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        outline: 2px ${props => props.theme.states.focus} solid;
        outline-offset: 1px;
        border-radius: ${KEY_SIZE_DATA[props.$size].radius}px;
        height: calc(100% + var(--after-height) + 2px);
        z-index: 1;
      }
    `}
`
export const SelectWrapper = styled(motion.div)<SelectWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  ${addRemoveOutline};
  ${addSelectWrapperGenre};
  ${addSelectWrapperSize};
  ${addSX};
`

export const DropdownListParent = styled(motion.div)`
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  margin: 0;
  padding: 0;
`
export const DropdownList = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translateZ(0);
`

const addDropdownListOptionGenre = css<DropdownListOptionProps>`
  ${props => css`
    background: ${props.theme.colors.select[props.$genre].background.rest};
    border-color: ${props.theme.colors.select[props.$genre].border.rest};
    color: ${props.theme.colors.select[props.$genre].color.rest};
    &:active {
      background: ${props.theme.colors.select[props.$genre].background.rest};
      border-color: ${props.theme.colors.select[props.$genre].border.rest};
      color: ${props.theme.colors.select[props.$genre].color.rest};
    }
    ${!props.$isNotShowHoverStyle &&
    css`
      &:hover {
        background: ${props.theme.colors.select[props.$genre].background.hover};
        border-color: ${props.theme.colors.select[props.$genre].border.hover};
        color: ${props.theme.colors.select[props.$genre].color.hover};
      }
    `}
    &:focus-visible {
      background: ${props.theme.colors.select[props.$genre].background.rest};
      border-color: ${props.theme.colors.select[props.$genre].border.rest};
      color: ${props.theme.colors.select[props.$genre].color.rest};
    }
  `};
`
const addDropdownListOptionSize = css<DropdownListOptionProps>`
  padding: 0px ${props => KEY_SIZE_DATA[props.$size].padding}px;
  width: 100%;
  border: 1px solid;
  border-radius: 0;
  &:last-child {
    ${props =>
      props.$isShowScroll
        ? css`
            border-radius: 0px 0px 0px ${KEY_SIZE_DATA[props.$size].radius}px;
          `
        : css`
            border-radius: 0px 0px ${KEY_SIZE_DATA[props.$size].radius}px ${KEY_SIZE_DATA[props.$size].radius}px;
          `}
  }
`
export const DropdownListOption = styled.li<DropdownListOptionProps>`
  ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, props.theme.font.family, props.theme.font.lineHeight)};
  display: flex;
  align-items: center;
  opacity: 1;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  ${addDropdownListOptionGenre};
  ${addDropdownListOptionSize};
  ${addRemoveOutline};
`

const addDropdownOptionIconSize = css<DropdownListOptionIconProps>`
  right: ${props => KEY_SIZE_DATA[props.$size].padding - 6}px;
  height: ${props => KEY_SIZE_DATA[props.$size].height}px;
`
export const DropdownListOptionIcon = styled(Icon)<DropdownListOptionIconProps>`
  position: absolute;
  right: 0;
  height: 100%;
  align-items: center;
  ${addDropdownOptionIconSize};
  ${addRemoveOutline};
  color: ${props =>
    props.$checked
      ? props.theme.colors.select[props.$genre].border.select
      : props.theme.colors.input[props.$genre].border.rest};
`

const addSelectListSize = css<SelectListProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => (props.$isWrapSelectOption ? 'wrap' : 'nowrap')};
  gap: ${props => KEY_SIZE_DATA[props.$size].padding / 2.8}px;
`
export const SelectList = styled.ul<SelectListProps>`
  list-style: none;
  position: relative;
  overflow: hidden;
  ${addSelectListSize};
`
const addButtonListSize = css<ButtonListProps>`
  display: flex;
  flex-direction: row;
  gap: ${props => KEY_SIZE_DATA[props.$size].padding / 2.8}px;
  padding: ${props => KEY_SIZE_DATA[props.$size].padding / 2.8}px ${props => KEY_SIZE_DATA[props.$size].padding}px;
`
export const ButtonList = styled.div<ButtonListProps>`
  position: absolute;
  right: 0;
  ${addButtonListSize};
`
const addSelectListOptionGenre = css<SelectListOptionProps>`
  ${props => css`
    background: ${props.theme.colors.select[props.$genre].background.rest};
    border-color: ${props.theme.colors.select[props.$genre].border.rest};
    color: ${props.theme.colors.select[props.$genre].color.rest};
    &:active {
      background: ${props.theme.colors.select[props.$genre].background.rest};
      border-color: ${props.theme.colors.select[props.$genre].border.rest};
      color: ${props.theme.colors.select[props.$genre].color.rest};
    }
    ${!props.$isNotShowHoverStyle &&
    css`
      &:hover {
        background: ${props.theme.colors.select[props.$genre].background.hover};
        border-color: ${props.theme.colors.select[props.$genre].border.hover};
        color: ${props.theme.colors.select[props.$genre].color.hover};
      }
    `}
    &:focus-visible {
      background: ${props.theme.colors.select[props.$genre].background.rest};
      border-color: ${props.theme.colors.select[props.$genre].border.rest};
      color: ${props.theme.colors.select[props.$genre].color.rest};
    }
  `};
`
const addSelectListOptionSize = css<SelectListOptionProps>`
  padding: ${props => KEY_SIZE_DATA[props.$size].padding / 2.8}px;
  border: 1px solid;
  border-radius: ${props => KEY_SIZE_DATA[props.$size].radius}px;
  background: ${props => (props.$isOverflowing ? 'red' : '')};
`
export const SelectListOption = styled(motion.li)<SelectListOptionProps>`
  display: flex;
  align-items: center;
  opacity: 1;
  cursor: pointer;
  flex-shrink: 0;
  overflow: hidden;
  width: fit-content;
  ${addSelectListOptionGenre};
  ${addSelectListOptionSize};
  ${addRemoveOutline};
`
