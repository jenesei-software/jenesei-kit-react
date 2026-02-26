import { addAlwaysOutline, addSX, addSXTypography, THEME_KEY_SIZE } from '@local/theme';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { StyledPopoverProps } from './component.types';

/****************************************** Popover Genre *************************************************/
const addPopoverGenre = css<StyledPopoverProps>`
  ${(props) => css`
    background: ${props.theme.colors.button[props.$genre].background.rest};
    border-color: ${props.theme.colors.button[props.$genre].border.rest};
    color: ${props.theme.colors.button[props.$genre].color.rest};
    /* box-shadow: ${props.theme.effects.button}; */
  `};
`;

/****************************************** Popover Size *************************************************/
export const addPopoverSize = css<StyledPopoverProps>`
  ${(props) =>
    css`
  display: flex;
  border-radius: ${THEME_KEY_SIZE[props.$size ?? 'medium'].radius}px;
  padding: ${THEME_KEY_SIZE[props.$size ?? 'medium'].padding}px;
  gap: ${THEME_KEY_SIZE[props.$size ?? 'medium'].padding - 2}px;
  `};
`;

/****************************************** Default *************************************************/
export const PopoverWrapper = styled(motion.div)<StyledPopoverProps>`
  max-width: ${(props) => props.$maxWidth || '100%'};
  max-height: ${(props) => props.$maxHeight || '100%'};
  overflow: auto;
  flex-direction: column;
  ${addPopoverSize};
  ${addAlwaysOutline};
  ${addSXTypography};
  ${addPopoverGenre};
  ${addSX};
`;
