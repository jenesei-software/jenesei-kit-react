import styled, { css } from 'styled-components';

import { DEFAULT_RIPPLE_ID } from './component.constants';
import { RippleContainerProps } from './component.types';

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