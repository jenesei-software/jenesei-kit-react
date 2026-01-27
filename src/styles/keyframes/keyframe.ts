import { globalKeyframes } from '@vanilla-extract/css';
import { keyframes } from 'styled-components';

export const keyframeShadowPulseOld = keyframes`
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

export const keyframeShadowPulse = 'keyframeShadowPulse';

globalKeyframes(keyframeShadowPulse, {
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});