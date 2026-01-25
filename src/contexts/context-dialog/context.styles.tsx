import { addOutline } from '@local/styles/add';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { DEFAULT_PROVIDER_DIALOG_ELEMENT_BACKGROUND, DEFAULT_PROVIDER_DIALOG_ELEMENT_BORDER_RADIUS, DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_HEIGHT, DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_WIDTH, DEFAULT_PROVIDER_DIALOG_ELEMENT_PADDING } from './context.constants';
import { DialogElementWrapperProps, DialogLayoutProps } from './context.types';



export const DialogLayout = styled(motion.div)<DialogLayoutProps>`
  position: fixed;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.black50};
  z-index: ${(props) => props.$zIndex};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const DialogElementWrapper = styled(motion.dialog)<DialogElementWrapperProps<object>>`
  ${addOutline};
  max-width: ${(props) => props.$propsDialog?.maxWidth || DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_WIDTH};
  max-height: ${(props) => props.$propsDialog?.maxHeight || DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_HEIGHT};
  border-radius: ${(props) => props.$propsDialog?.borderRadius || DEFAULT_PROVIDER_DIALOG_ELEMENT_BORDER_RADIUS};
  background: ${(props) =>
    props.$propsDialog?.background
      ? props.theme.palette[props.$propsDialog.background]
      : props.theme.palette[DEFAULT_PROVIDER_DIALOG_ELEMENT_BACKGROUND]};
  padding: ${(props) => props.$propsDialog?.padding || DEFAULT_PROVIDER_DIALOG_ELEMENT_PADDING};
  width: max-content;
  height: max-content;
  border: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;
export const DialogContent = styled(motion.div)``;
