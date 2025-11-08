import { addSX } from '@local/styles/add/export';

import { css, styled } from 'styled-components';

import { StyledButtonGroupProps } from '.';

/****************************************** Position *************************************************/
const ButtonGroupWrapperPositionHorizontal = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  & #jenesei-button {
    &:not(:only-child) {
      flex-grow: 1;
      &:first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      &:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`;

const ButtonGroupWrapperPositionVertical = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & #jenesei-button {
    &:not(:only-child) {
      &:first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`;

export const ButtonGroupWrapper = styled.div<StyledButtonGroupProps>`
  & #jenesei-button {
    &:focus-visible {
      z-index: 1;
    }
  }
  ${(props) =>
    props.$position === 'horizontal' ? ButtonGroupWrapperPositionHorizontal : ButtonGroupWrapperPositionVertical};
  ${addSX};
`;
