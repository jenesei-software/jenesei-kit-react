import { addError } from '@local/components/error';
import { addSX } from '@local/styles/add';
import { KEY_SIZE_DATA } from '@local/styles/theme';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { ImageSelectWrapperProps } from './component.types';

const addImageSelectListGenre = css<ImageSelectWrapperProps>`
  ${(props) => css`
    background: ${props.theme.colors.imageSelect[props.$genre].background.rest};
    color: ${props.theme.colors.imageSelect[props.$genre].color.rest};
    &:active {
      background: ${props.theme.colors.imageSelect[props.$genre].background.rest};
      color: ${props.theme.colors.imageSelect[props.$genre].color.rest};
    }
    &:focus-visible {
      background: ${props.theme.colors.imageSelect[props.$genre].background.rest};
      color: ${props.theme.colors.imageSelect[props.$genre].color.rest};
    }
  `};
`;

const addImageSelectListSize = css<ImageSelectWrapperProps>`
  ${(props) => css`
    padding: ${KEY_SIZE_DATA[props.$size].padding}px;
    border-radius: ${KEY_SIZE_DATA[props.$size].radius}px;
  `};
`;

const addImageSelectSize = css<ImageSelectWrapperProps>`
  ${(props) => css`
    gap: ${KEY_SIZE_DATA[props.$size].padding - 2}px;
  `};
`;

export const ImageSelectWrapper = styled.div<ImageSelectWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  ${addImageSelectSize};
  ${addError};
  ${addSX};
`;
export const ImageSelectListWrapper = styled(motion.div)<ImageSelectWrapperProps>`
  border: 2px dashed;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${addImageSelectListGenre}
  ${addImageSelectListSize}
`;
