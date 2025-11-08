import { SXProps, SXPropsWithoutFunc } from '@local/styles/add/export';

import { useCallback } from 'react';
import { useTheme } from 'styled-components';

export const useResolveSx = () => {
  const theme = useTheme();

  const resolveSX = useCallback(
    (sxProp?: SXProps, sxPropBase?: SXProps): SXPropsWithoutFunc => {
      const base = typeof sxPropBase === 'function' ? sxPropBase(theme) : sxPropBase || {};
      const custom = typeof sxProp === 'function' ? sxProp(theme) : sxProp || {};

      const allKeys = new Set([...Object.keys(base), ...Object.keys(custom)]);

      const merged: SXPropsWithoutFunc = { default: {} };
      allKeys.forEach((keyOne) => {
        const key = keyOne as keyof SXPropsWithoutFunc;
        const baseValue = (base as any)[key];
        const customValue = (custom as any)[key];

        if (baseValue && customValue) {
          merged[key] = { ...baseValue, ...customValue };
        } else {
          merged[key] = baseValue || customValue;
        }
      });

      return merged;
    },
    [theme],
  );

  return { resolveSX };
};
