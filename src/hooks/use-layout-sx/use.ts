import { useScreenWidth } from '@local/contexts/context-screen-width';
import { I_LAYOUT } from '@local/styles/add/add.types';
import { THEME_GLOBAL_VALUE } from '@local/styles/theme';

import { useMemo } from 'react';

export function useLayout<A>(sx: I_LAYOUT<A>) {
  const { breakpoint, orientation } = useScreenWidth();

  const resolvedSXMemo = useMemo(() => {
    return typeof sx === 'function' ? sx(THEME_GLOBAL_VALUE) : sx;
  }, [sx]);

  const result = useMemo(() => {
    if (!resolvedSXMemo) return undefined;

    const params = {
      ...(resolvedSXMemo.default ?? {}),

      ...(resolvedSXMemo.breakpoints?.[breakpoint] ?? {}),

      ...(resolvedSXMemo.orientations?.[orientation] ?? {}),
    };
    return params as A;
  }, [resolvedSXMemo, breakpoint, orientation]);

  return result;
}
