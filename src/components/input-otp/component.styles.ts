import { addSX } from '@local/styles/add/export';
import { KEY_SIZE_DATA } from '@local/styles/theme/export';

import styled, { css } from 'styled-components';

import { InputOTPWrapperProps } from '.';

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
