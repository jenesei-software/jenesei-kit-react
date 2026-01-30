import { useScreenWidth } from '@local/contexts/context-screen-width';
import { stringifyCssObject } from '@local/functions';
import { addSXPropsNew, addSXPropsNew2 } from '@local/styles/add/add.types';
import { ThemeGlobalValue } from '@local/styles/theme/theme.vanilla-extract.css';

import { CSSProperties, useMemo } from 'react';

export function useResponsiveSX(sx: addSXPropsNew['sx']) {
  const { breakpoint, orientation } = useScreenWidth();

  const resolvedSXMemo = useMemo(() => {
    return typeof sx === 'function' ? sx(ThemeGlobalValue) : sx;
  }, [sx]);

  const result = useMemo(() => {
    if (!resolvedSXMemo) return undefined;
    const styles: CSSProperties = {
      ...(resolvedSXMemo.default ?? {}),

      ...(resolvedSXMemo.breakpoints?.[breakpoint] ?? {}),

      ...(orientation === 'horizontal' ? (resolvedSXMemo.horizontal ?? {}) : (resolvedSXMemo.vertical ?? {})),
    };
    return { css: stringifyCssObject(styles), styles: styles };
  }, [resolvedSXMemo, breakpoint, orientation]);

  return result;
}

export function useResponsiveParams<A>(sx: addSXPropsNew2<A>['sx']) {
  const { breakpoint, orientation } = useScreenWidth();

  const resolvedSXMemo = useMemo(() => {
    return typeof sx === 'function' ? sx(ThemeGlobalValue) : sx;
  }, [sx]);

  const result = useMemo(() => {
    if (!resolvedSXMemo) return undefined;

    const params = {
      ...(resolvedSXMemo.default ?? {}),

      ...(resolvedSXMemo.breakpoints?.[breakpoint] ?? {}),

      ...(orientation === 'horizontal' ? (resolvedSXMemo.horizontal ?? {}) : (resolvedSXMemo.vertical ?? {})),
    };
    return { params: params as A };
  }, [resolvedSXMemo, breakpoint, orientation]);

  return result;
}
