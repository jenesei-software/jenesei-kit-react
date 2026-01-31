import { addSX } from '@local/styles/add';
import { THEME_KEY_SIZE } from '@local/styles/theme';

import styled, { css } from 'styled-components';

import { InputOTPWrapperProps } from './component.types';

/****************************************** Size *************************************************/
export const addInputOTPSize = css<InputOTPWrapperProps>`
  ${(props) => css`
  gap: ${THEME_KEY_SIZE[props.$size].padding - 2}px;
  width: 100%;
  `}
`;

export const InputOTPWrapper = styled.div<InputOTPWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${addInputOTPSize};
  ${addSX};
`;
