import { useScreenWidth } from '@local/contexts/context-screen-width';
import { useDeepMemo } from '@local/hooks/use-deep-memo';
import { CSS_VARS, ILayout } from '@local/styles/utils';
import { ILayoutResponsive } from '@local/styles/utils/types';

export function useResponsiveLayout<A>(sx: ILayoutResponsive<A>): A | undefined {
  const { breakpoint, orientation } = useScreenWidth(['breakpoint', 'orientation']);

  const result = useDeepMemo(() => {
    if (!sx) return undefined;

    return {
      ...(sx.default ?? {}),
      ...(breakpoint !== 'default' ? (sx.breakpoints?.[breakpoint] ?? {}) : {}),
      ...(sx.orientations?.[orientation] ?? {}),
    } as A;
  }, [sx, breakpoint, orientation]);

  return result;
}

export function useSX<A>(sx: ILayout<A>): A | undefined {
  const resolvedSX = useDeepMemo(() => {
    return typeof sx === 'function' ? (sx as Function)(CSS_VARS) : sx;
  }, [sx]);

  return resolvedSX;
}
