import { addSX } from '@local/styles/add';
import { KEY_SIZE_DATA } from '@local/styles/theme';

import styled, { css } from 'styled-components';

import { InputOTPWrapperProps } from './component.types';

/****************************************** Size *************************************************/
export const addInputOTPSize = css<InputOTPWrapperProps>`
  ${(props) => css`
  gap: ${KEY_SIZE_DATA[props.$size].padding - 2}px;
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
