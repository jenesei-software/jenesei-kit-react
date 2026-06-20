import { useEffect, useState } from 'react';

import { IUseFps, IUseFpsResult } from './use.types';

const DEFAULT_UPDATE_INTERVAL = 500;
const MIN_UPDATE_INTERVAL = 100;
const MAX_PRECISION = 3;

const INITIAL_RESULT: IUseFpsResult = {
  fps: 0,
  frameTime: 0,
  isSupported: false,
};

export function useFps(props?: IUseFps): IUseFpsResult {
  const isEnabled = props?.isEnabled ?? true;
  const updateInterval = Math.max(props?.updateInterval ?? DEFAULT_UPDATE_INTERVAL, MIN_UPDATE_INTERVAL);
  const precision = Math.min(Math.max(Math.trunc(props?.precision ?? 0), 0), MAX_PRECISION);
  const [result, setResult] = useState<IUseFpsResult>(INITIAL_RESULT);

  useEffect(() => {
    const isSupported =
      typeof window !== 'undefined' &&
      typeof window.requestAnimationFrame === 'function' &&
      typeof window.cancelAnimationFrame === 'function' &&
      typeof performance !== 'undefined' &&
      typeof performance.now === 'function';

    if (!isSupported || !isEnabled) {
      setResult((prev) =>
        prev.fps === 0 && prev.frameTime === 0 && prev.isSupported === isSupported
          ? prev
          : { fps: 0, frameTime: 0, isSupported },
      );
      return;
    }

    const round = (value: number) => {
      const multiplier = 10 ** precision;
      return Math.round(value * multiplier) / multiplier;
    };

    let animationFrameId = 0;
    let frameCount = 0;
    let startedAt = performance.now();

    const update = (timestamp: number) => {
      frameCount += 1;

      const elapsed = timestamp - startedAt;

      if (elapsed >= updateInterval) {
        setResult({
          fps: round((frameCount * 1000) / elapsed),
          frameTime: round(elapsed / frameCount),
          isSupported: true,
        });

        frameCount = 0;
        startedAt = timestamp;
      }

      animationFrameId = window.requestAnimationFrame(update);
    };

    animationFrameId = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled, precision, updateInterval]);

  return result;
}
