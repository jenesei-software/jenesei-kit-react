import { addSX, addSXTypography } from '@local/styles/add/export';
import { KEY_SIZE_DATA } from '@local/styles/theme/export';

import styled, { css } from 'styled-components';

import { CheckboxGroupWrapperProps } from '.';

/****************************************** Size *************************************************/
export const addCheckboxGroupSize = css<CheckboxGroupWrapperProps>`
  ${(props) => css`
  gap: ${KEY_SIZE_DATA[props.$size].padding - 2}px;`};
`;

/****************************************** Default *************************************************/
export const CheckboxGroupWrapper = styled.div<CheckboxGroupWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${addCheckboxGroupSize};
  ${addSXTypography};
  ${addSX};
`;

export const CheckboxGroupItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckboxGroupLabel = styled.div`
  user-select: none;
`;

export const CheckboxChildren = styled.div`
  user-select: none;
`;
