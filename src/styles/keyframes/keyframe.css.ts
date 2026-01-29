import { globalKeyframes } from '@vanilla-extract/css';

export const keyframeShadowPulse = 'keyframeShadowPulse';

globalKeyframes(keyframeShadowPulse, {
  '0%': {
    textShadow: '0 0 0 rgba(0, 0, 0, 0)',
  },
  '50%': {
    textShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
  },
  '100%': {
    textShadow: '0 0 0 rgba(0, 0, 0, 0)',
  },
});
