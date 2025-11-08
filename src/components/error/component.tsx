import { addSX, addSXTypography } from '@local/styles/add/export';
import { WordsPullUp } from '@local/styles/motion/export';
import { KEY_SIZE_DATA } from '@local/styles/theme/export';

import { FC } from 'react';
import styled, { css } from 'styled-components';

import { addErrorPropsDollar, ErrorMessageDollarProps, ErrorMessageProps } from '.';

const addErrorMessageSize = css<ErrorMessageDollarProps>`
  ${(props) =>
    props.$size
      ? props.$isErrorAbsolute
        ? css`
        position: absolute;
        top: calc(100% + 4px);
        padding-left: ${KEY_SIZE_DATA[props.$size].padding}px;
        color: ${(props) => props.theme.states.danger};
      `
        : css`
        position: static;
        padding: 0px ${KEY_SIZE_DATA[props.$size].padding}px;
        color: ${(props) => props.theme.states.danger};
      `
      : null}
`;

const ErrorMessageComponent = styled.div<ErrorMessageDollarProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  ${addErrorMessageSize};
  ${addSX};
  ${addSXTypography};
`;

export const addError = css<addErrorPropsDollar>`
  ${(props) =>
    props.$error?.isError &&
    css`
      border-color: ${(props) => props.theme.states.danger};
      &:focus,
      &:active,
      &:hover,
      &:focus-visible {
        border-color: ${(props) => props.theme.states.danger};
      }
    `};
`;

export const ErrorMessage: FC<ErrorMessageProps> = (props) => {
  return (
    <>
      {props.errorMessage && props.isError ? (
        <ErrorMessageComponent
          $size={props.size}
          $sxTypography={props.sxTypography}
          $sx={props.sx}
          $isErrorAbsolute={props.isErrorAbsolute}
        >
          <WordsPullUp text={props.errorMessage} />
        </ErrorMessageComponent>
      ) : null}
    </>
  );
};
