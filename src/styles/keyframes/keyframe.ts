import { keyframes } from 'styled-components';

export const keyframeShadowPulse = keyframes`
  0% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  }
  100% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`;
