import { addFont } from '@local/styles/add';
import { addSX } from '@local/styles/sx';
import { IThemeSizePropertyDefault, KEY_SIZE_DATA } from '@local/theme';

import styled, { css } from 'styled-components';

import { CheckboxGroupWrapperProps } from '.';

/****************************************** Size *************************************************/
export const CheckboxGroupSize = css<CheckboxGroupWrapperProps>`
  ${(props) => CheckboxGroupSizeConstructor(KEY_SIZE_DATA[props.$size])};
`;
export const CheckboxGroupSizeConstructor = (props: IThemeSizePropertyDefault) => css`
  gap: ${props.padding - 2}px;
`;

/****************************************** Default *************************************************/
export const CheckboxGroupWrapper = styled.div<CheckboxGroupWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${CheckboxGroupSize};
  ${addFont};
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
