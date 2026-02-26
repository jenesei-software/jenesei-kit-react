import { addSX, addSXTypography, THEME_KEY_SIZE } from '@local/theme';

import styled, { css } from 'styled-components';

import { CheckboxGroupWrapperProps } from './component.types';

/****************************************** Size *************************************************/
export const addCheckboxGroupSize = css<CheckboxGroupWrapperProps>`
  ${(props) => css`
  gap: ${THEME_KEY_SIZE[props.$size].padding - 2}px;`};
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
