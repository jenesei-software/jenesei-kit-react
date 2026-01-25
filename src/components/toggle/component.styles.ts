import { addError } from '@local/components/error';
import { addDisabled, addOutline, addTransition } from '@local/styles/add';
import { KEY_SIZE_DATA_TOGGLE } from '@local/styles/theme';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { StyledToggleProps } from './component.types';

/****************************************** Add *************************************************/
const addToggleWrapperSize = css<StyledToggleProps>`
  ${(props) => css`
    height: ${KEY_SIZE_DATA_TOGGLE[props.$size].height}px;
    width: ${KEY_SIZE_DATA_TOGGLE[props.$size].width}px;
    padding: ${KEY_SIZE_DATA_TOGGLE[props.$size].padding}px;
    border-radius: 100px;
  `};
`;

const addToggleCenterSize = css<StyledToggleProps>`
  ${(props) => css`
  height: ${KEY_SIZE_DATA_TOGGLE[props.$size].thumb}px;
  width: ${KEY_SIZE_DATA_TOGGLE[props.$size].thumb}px;
  border-radius: 100px;
  `}
`;
/****************************************** Standard *************************************************/
export const ToggleWrapper = styled(motion.div)<StyledToggleProps>`
  cursor: pointer;
  border: 1px solid transparent;

  display: flex;
  align-items: center;

  ${addToggleWrapperSize};
  ${addTransition};
  ${addOutline};
  ${addDisabled};

  ${(props) =>
    props.$value
      ? css`
          background: ${props.theme.colors.toggle[props.$genre].active.rest.track};
          border-color: ${props.theme.colors.toggle[props.$genre].active.rest.border};
          justify-content: flex-start;
          &:hover {
            background: ${props.theme.colors.toggle[props.$genre].active.hover.track};
            border-color: ${props.theme.colors.toggle[props.$genre].active.hover.border};
          }
        `
      : css`
          background: ${props.theme.colors.toggle[props.$genre].unActive.rest.track};
          border-color: ${props.theme.colors.toggle[props.$genre].unActive.rest.border};
          justify-content: flex-start;
          &:hover {
            background: ${props.theme.colors.toggle[props.$genre].unActive.hover.track};
            border-color: ${props.theme.colors.toggle[props.$genre].unActive.hover.border};
          }
        `};

  ${addError};
`;

export const ToggleCenter = styled(motion.div)<StyledToggleProps>`
  ${addToggleCenterSize};
  ${addTransition};

  ${(props) =>
    props.$value
      ? css`
          background: ${props.theme.colors.toggle[props.$genre].active.rest.thumb};
          box-shadow: ${props.theme.colors.toggle[props.$genre].active.rest.thumbBoxShadow};
          &:hover {
            background: ${props.theme.colors.toggle[props.$genre].active.hover.thumb};
            box-shadow: ${props.theme.colors.toggle[props.$genre].active.hover.thumbBoxShadow};
          }
        `
      : css`
          background: ${props.theme.colors.toggle[props.$genre].unActive.rest.thumb};
          box-shadow: ${props.theme.colors.toggle[props.$genre].unActive.rest.thumbBoxShadow};
          &:hover {
            background: ${props.theme.colors.toggle[props.$genre].unActive.hover.thumb};
            box-shadow: ${props.theme.colors.toggle[props.$genre].unActive.hover.thumbBoxShadow};
          }
        `}
`;
