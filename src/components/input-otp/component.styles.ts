import styled, { css } from 'styled-components';

import { addSX } from '@local/styles/sx';
import { IThemeSizePropertyDefault, KEY_SIZE_DATA } from '@local/theme';

import { InputOTPWrapperProps } from '.';

/****************************************** Size *************************************************/
export const InputOTPSize = css<InputOTPWrapperProps>`
  ${(props) => InputOTPSizeConstructor({ ...KEY_SIZE_DATA[props.$size], ...props })};
`;
export const InputOTPSizeConstructor = (props: IThemeSizePropertyDefault & InputOTPWrapperProps) => css`
  gap: ${props.padding - 2}px;
  width: 100%;
`;

export const InputOTPWrapper = styled.div<InputOTPWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${InputOTPSize};
  ${addSX};
`;
