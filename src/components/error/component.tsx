import { addSX, addSXTypography } from '@local/styles/add';
import { MotionWordsPullUp } from '@local/styles/motion';
import { THEME_KEY_SIZE } from '@local/styles/theme';

import { FC } from 'react';
import styled, { css } from 'styled-components';

import { addErrorPropsDollar, ErrorMessageDollarProps, ErrorMessageProps } from './component.types';

const addErrorMessageSize = css<ErrorMessageDollarProps>`
  ${(props) =>
    props.$size
      ? props.$isErrorAbsolute
        ? css`
        position: absolute;
        top: calc(100% + 4px);
        padding-left: ${THEME_KEY_SIZE[props.$size].padding}px;
        color: ${(props) => props.theme.states.danger};
      `
        : css`
        position: static;
        padding: 0px ${THEME_KEY_SIZE[props.$size].padding}px;
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
          <MotionWordsPullUp text={props.errorMessage} />
        </ErrorMessageComponent>
      ) : null}
    </>
  );
};
