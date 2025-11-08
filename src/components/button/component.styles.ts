import { addRippleDefault } from '@local/components/ripple/export';
import { addOutline, addSX, addSXTypography, addTransition } from '@local/styles/add/export';
import { KEY_SIZE_DATA } from '@local/styles/theme/export';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { StyledButtonIconsWrapperPropsDollar, StyledButtonPropsDollar } from '.';

/**
 * Add
 */
const addButtonGenre = css<StyledButtonPropsDollar>`
  ${(props) => css`
    background: ${props.theme.colors.button[props.$genre].background.rest};
    border-color: ${props.theme.colors.button[props.$genre].border.rest};
    color: ${props.theme.colors.button[props.$genre].color.rest};
    &:hover {
      ${
        (!props.$isHidden || props.$isNotHoverEffect) &&
        css`
        background: ${props.theme.colors.button[props.$genre].background.hover};
        border-color: ${props.theme.colors.button[props.$genre].border.hover};
        color: ${props.theme.colors.button[props.$genre].color.hover};
      `
      }
    }
  `};
`;
const addButtonDisabled = css<StyledButtonPropsDollar>`
  ${(props) =>
    props.$isHidden
      ? css`
          opacity: 0.5;
          background: ${props.theme.colors.button[props.$genre].background.rest} !important;
          color: ${props.theme.colors.button[props.$genre].color.rest} !important;
        `
      : css`
          opacity: 1;
        `}
`;
const addButtonIsHiddenBorder = css<StyledButtonPropsDollar>`
  ${(props) =>
    props.$isHiddenBorder &&
    css`
      border: 0px transparent !important;
    `}
`;
const addButtonIsRadius = css<StyledButtonPropsDollar>`
  ${(props) =>
    props.$isRadius &&
    css`
      border-radius: 100px;
    `}
`;
const addButtonIsPlaystationEffect = css<StyledButtonPropsDollar>`
  ${(props) =>
    props.$isPlaystationEffect &&
    css`
      box-shadow: ${props.theme.effects.button};
    `}
`;
const addButtonSize = css<StyledButtonPropsDollar>`
  height: fit-content;
  min-height: ${(props) => KEY_SIZE_DATA[props.$size].height}px;
  max-height: fit-content;
  padding: 2px ${(props) => KEY_SIZE_DATA[props.$size].padding}px;
  border-radius: ${(props) => KEY_SIZE_DATA[props.$size].radius}px;
  gap: ${(props) => KEY_SIZE_DATA[props.$size].padding - 2}px;
  ${(props) =>
    props.$isFullSize &&
    css`
    height: 100%;
    width: 100%;
    border-radius: 0px;
  `};
  ${(props) =>
    props.$isWidthAsHeight &&
    css`
  width: ${KEY_SIZE_DATA[props.$size].height}px;
  min-width: ${KEY_SIZE_DATA[props.$size].height}px;
  padding: 0px;
  `};
  ${(props) =>
    props.$isMinWidthAsContent &&
    css`
        min-width: max-content;
      `};
`;
const addButtonBorder = css`
  border: 1px solid transparent;
`;
const addButtonFlex = css<StyledButtonPropsDollar>`
  display: flex;
  align-items: center;
  justify-content: center;
`;
/**
 * Styled
 */
export const StyledButton = styled(motion.button)<StyledButtonPropsDollar>`
  cursor: pointer;
  user-select: none;

  ${addButtonBorder};
  ${addButtonSize};
  ${addButtonGenre};
  ${addButtonDisabled};
  ${addButtonIsHiddenBorder};
  ${addButtonIsRadius};
  ${addButtonIsPlaystationEffect};
  ${addButtonFlex};
  ${addRippleDefault};
  ${addTransition};
  ${addOutline};
  ${addSXTypography};
  ${addSX};
`;

export const StyledButtonIconsWrapper = styled.div<StyledButtonIconsWrapperPropsDollar>`
  ${(props) =>
    props.$isIconGroup
      ? css`
          display: flex;
          gap: ${KEY_SIZE_DATA[props.$size].padding - 2}px;
          align-items: center;
          order: ${props.$iconGroupOrder || 'initial'};
        `
      : css`
          display: contents;
        `}
`;
