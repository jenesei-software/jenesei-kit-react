import styled, { css } from 'styled-components';

import { DEFAULT_RIPPLE_ID, RippleContainerProps } from '.';

export const RippleContainer = styled.div<RippleContainerProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const RippleSpan = styled.span<RippleContainerProps>`
  transform: scale(0);
  border-radius: 100%;
  position: absolute;
  opacity: 0.75;
  background-color: ${(props) => props.$color};
  animation-name: ripple;
  animation-duration: ${(props) => props.$duration}ms;

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export const addRipple = css<{ $isRipple?: boolean }>`
  ${(props) =>
    props.$isRipple &&
    css`
      position: relative;
      overflow: hidden;
      isolation: isolate;

      & *:not(#${DEFAULT_RIPPLE_ID}) {
        user-select: none;
        pointer-events: none;
      }
    `}
`;
export const addRippleDefault = css`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  & *:not(#${DEFAULT_RIPPLE_ID}) {
    user-select: none;
    pointer-events: none;
  }
`;
