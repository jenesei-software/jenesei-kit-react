import { IThemeSizePropertyDefault, KEY_SIZE_DATA } from '@local/theme';

import { FC } from 'react';
import styled, { css } from 'styled-components';

import { WordsPullUp } from '../motion';
import { addSX, addSXTypography } from '../sx';
import { addErrorPropsDollar, ErrorMessageDollarProps, ErrorMessageProps } from '.';

const ErrorMessageSize = css<ErrorMessageDollarProps>`
  ${(props) =>
    props.$size
      ? ErrorMessageSizeConstructor({ ...KEY_SIZE_DATA[props.$size], $isErrorAbsolute: props.$isErrorAbsolute })
      : null};
`;
const ErrorMessageSizeConstructor = (
  props: IThemeSizePropertyDefault & { $isErrorAbsolute: ErrorMessageProps['isErrorAbsolute'] },
) => css`
  ${
    props.$isErrorAbsolute
      ? css`
        position: absolute;
        top: calc(100% + 4px);
        padding-left: ${props.padding}px;
        color: ${(props) => props.theme.states.danger};
      `
      : css`
        position: static;
        padding: 0px ${props.padding}px;
        color: ${(props) => props.theme.states.danger};
      `
  }
`;

export const ErrorMessageComponent = styled.div<ErrorMessageDollarProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  ${ErrorMessageSize}
  ${addSXTypography};
  ${addSX}
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
          $font={props.font}
          $sx={props.sx}
          $isErrorAbsolute={props.isErrorAbsolute}
        >
          <WordsPullUp text={props.errorMessage} />
        </ErrorMessageComponent>
      ) : null}
    </>
  );
};
