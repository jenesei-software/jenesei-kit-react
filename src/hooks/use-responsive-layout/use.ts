import { useScreenWidth } from '@local/contexts/context-screen-width';
import { useDeepMemo } from '@local/hooks/use-deep-memo';
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
