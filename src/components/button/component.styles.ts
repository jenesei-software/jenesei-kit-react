import { addRippleDefault } from '@local/components/ripple';
import { addSXTypography } from '@local/components/typography';
import { addFont, addOutline, addTransition } from '@local/styles/add';
import { addSX } from '@local/styles/sx';
import { IThemeSizePropertyDefault, KEY_SIZE_DATA } from '@local/theme';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { StyledDollarButtonIconsWrapperProps, StyledDollarButtonProps } from '.';

/****************************************** Genre *************************************************/
const ButtonGenre = css<StyledDollarButtonProps>`
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

/****************************************** Disabled *************************************************/
const ButtonDisabled = css<StyledDollarButtonProps>`
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
/****************************************** is HiddenBorder *************************************************/
const ButtonIsHiddenBorder = css<StyledDollarButtonProps>`
  ${(props) =>
    props.$isHiddenBorder &&
    css`
      border: 0px transparent !important;
    `}
`;
/****************************************** is Radius *************************************************/
const ButtonIsRadius = css<StyledDollarButtonProps>`
  ${(props) =>
    props.$isRadius &&
    css`
      border-radius: 100px;
    `}
`;
/****************************************** is PlaystationEffect *************************************************/
const ButtonIsPlaystationEffect = css<StyledDollarButtonProps>`
  ${(props) =>
    props.$isPlaystationEffect &&
    css`
      box-shadow: ${props.theme.effects.button};
    `}
`;
/****************************************** Icons Wrapper *************************************************/
export const StyledButtonIconsWrapper = styled.div<StyledDollarButtonIconsWrapperProps>`
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

/****************************************** Size *************************************************/
export const ButtonSize = css<StyledDollarButtonProps>`
  ${(props) =>
    ButtonSizeConstructor({
      ...KEY_SIZE_DATA[props.$size],
      isFullSize: props.$isFullSize,
      isWidthAsHeight: props.$isWidthAsHeight,
      isMinWidthAsContent: props.$isMinWidthAsContent,
    })};
`;
export const ButtonSizeConstructor = (
  props: IThemeSizePropertyDefault & {
    isFullSize?: boolean;
    isWidthAsHeight?: boolean;
    isMinWidthAsContent?: boolean;
  },
) => css`
  height: fit-content;
  min-height: ${props.height}px;
  max-height: fit-content;
  padding: 2px ${props.padding}px;
  border-radius: ${props.radius}px;
  gap: ${props.padding - 2}px;
  ${() =>
    props.isFullSize &&
    css`
      height: 100%;
      width: 100%;
      border-radius: 0px;
    `};
  ${
    props.isWidthAsHeight &&
    css`
    width: ${props.height}px;
    min-width: ${props.height}px;
    padding: 0px;
  `
  };
  ${
    props.isMinWidthAsContent &&
    css`
    min-width: max-content;
  `
  };
`;
/****************************************** Border *************************************************/
const ButtonBorder = css`
  border: 1px solid transparent;
`;

/****************************************** Flex *************************************************/
const ButtonFlex = css<StyledDollarButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
`;
/****************************************** Styled *************************************************/
export const StyledButton = styled(motion.button)<StyledDollarButtonProps>`
  cursor: pointer;
  user-select: none;

  ${ButtonBorder};
  ${ButtonSize};
  ${ButtonGenre};
  ${ButtonDisabled};
  ${ButtonIsHiddenBorder};
  ${ButtonIsRadius};
  ${ButtonIsPlaystationEffect};
  ${ButtonFlex};
  ${addRippleDefault};
  ${addTransition};
  ${addFont};
  ${addOutline};
  ${addSXTypography};
  ${addSX};
`;
