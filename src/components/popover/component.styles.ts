import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { addSXTypography, getFontSizeStyles } from '@local/components/typography'
import { addOutline } from '@local/styles/add'
import { addSX } from '@local/styles/sx'
import { IThemeSizePropertyDefault, KEY_SIZE_DATA } from '@local/theme'

import { StyledPopoverProps } from '.'

/****************************************** Popover Genre *************************************************/
const addPopoverGenre = css<StyledPopoverProps>`
  ${props => css`
    background: ${props.theme.colors.button[props.$genre].background.rest};
    border-color: ${props.theme.colors.button[props.$genre].border.rest};
    color: ${props.theme.colors.button[props.$genre].color.rest};
    /* box-shadow: ${props.theme.effects.button}; */
  `};
`

/****************************************** Popover Size *************************************************/
export const addPopoverSize = css<StyledPopoverProps>`
  ${props =>
    addPopoverSizeConstructor({
      ...KEY_SIZE_DATA[props.$size ?? 'medium']
    })};
`
export const addPopoverSizeConstructor = (props: IThemeSizePropertyDefault) => css`
  display: flex;
  border-radius: ${props.radius}px;
  padding: ${props.padding}px;
  gap: ${props.padding - 2}px;
  ${params => getFontSizeStyles(props.font, 500, params.theme.font.family)};
`

/****************************************** Default *************************************************/
export const PopoverWrapper = styled(motion.div)<StyledPopoverProps>`
  max-width: ${props => props.$maxWidth || '100%'};
  max-height: ${props => props.$maxHeight || '100%'};
  overflow: auto;
  flex-direction: column;
  ${addPopoverSize};
  ${addOutline};
  ${addSXTypography};
  ${addPopoverGenre};
  ${addSX};
`
