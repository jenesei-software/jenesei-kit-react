import { addAlwaysOutline, addSX, addSXTypography } from '@local/styles/add';
import { KEY_SIZE_DATA } from '@local/styles/theme';

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
  border-radius: ${KEY_SIZE_DATA[props.$size ?? 'medium'].radius}px;
  padding: ${KEY_SIZE_DATA[props.$size ?? 'medium'].padding}px;
  gap: ${KEY_SIZE_DATA[props.$size ?? 'medium'].padding - 2}px;
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
