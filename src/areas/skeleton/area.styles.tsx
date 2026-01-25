import { Stack } from '@local/components/stack';
import { JeneseiPalette } from '@local/styles/theme';

import styled, { css, keyframes } from 'styled-components';

import { StyledSkeletonProps } from './area.types';

const shimmer = keyframes`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`;

export const StyledSkeleton = styled(Stack)<StyledSkeletonProps>`
  background: transparent;

  ${(props) => css`
    ${
      !props.$visible &&
      css`
      ${
        props.$type === 'secondary'
          ? css`
            background: linear-gradient(
        90deg,
          ${props.$color ? JeneseiPalette[props.$color] : props.$isInheritColor ? 'inherit' : '#f6f7f8'} 25%,
          ${props.$color ? JeneseiPalette[props.$color] : props.$isInheritColor ? 'inherit' : '#edeef1'} 50%,
          ${props.$color ? JeneseiPalette[props.$color] : props.$isInheritColor ? 'inherit' : '#f6f7f8'} 75%
      );
          `
          : css`
            background: linear-gradient(
        90deg,
          ${props.$color ? JeneseiPalette[props.$color] : props.$isInheritColor ? 'inherit' : '#edeef1'} 25%,
          ${props.$color ? JeneseiPalette[props.$color] : props.$isInheritColor ? 'inherit' : '#f6f7f8'} 50%,
          ${props.$color ? JeneseiPalette[props.$color] : props.$isInheritColor ? 'inherit' : '#edeef1'} 75%
      );   
          `
      };
      background-size: 200% 100%;
      animation: ${shimmer} 1.5s infinite linear;

    `
    };
  `}
  & > * {
    opacity: ${(props) => (!props.$visible ? 0 : 1)};
    transition:
      outline 0s,
      opacity ${(props) => props.theme.transition.default};
  }
`;
