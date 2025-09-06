import { addColorTransition } from '@local/styles/add';
import { addSX } from '@local/styles/sx';
import { KEY_SIZE_DATA } from '@local/theme';

import styled, { css } from 'styled-components';

import { StyledIconItemProps } from '.';

export const StyledSVG = styled.svg<StyledIconItemProps>`
  color: ${(props) => (props.$color ? props.theme.palette[props.$color] : 'inherit')};

  ${(props) => css`
    height: ${props.$size !== '100%' ? `${KEY_SIZE_DATA[props.$size].heightIcon}px` : '100%'};
    min-height: ${props.$size !== '100%' ? `${KEY_SIZE_DATA[props.$size].heightIcon}px` : '100%'};

    width: ${props.$size !== '100%' ? `${KEY_SIZE_DATA[props.$size].heightIcon}px` : '100%'};
    min-width: ${props.$size !== '100%' ? `${KEY_SIZE_DATA[props.$size].heightIcon}px` : '100%'};

    transform: rotate(${props.$turn || 0}deg);
  `}
  ${(props) =>
    props.$order !== undefined &&
    css`
      order: ${props.$order};
    `};
  ${addColorTransition};
  & path {
    ${addColorTransition};
  }
  ${addSX};
`;
