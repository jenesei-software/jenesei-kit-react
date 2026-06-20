import { logger } from '@local/cores/logger';

import { useEffect, useState } from 'react';

export function useInjectSprites(urls: string[]) {
  useEffect(() => {
    const containers: HTMLDivElement[] = [];

    urls.forEach(async (url) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          logger.error(`Failed to load sprite: ${url}`);
          return;
        }
        const text = await res.text();

        const div = document.createElement('div');
        div.style.display = 'none';
        div.innerHTML = text;

        document.body.prepend(div);
        containers.push(div);
      } catch (err) {
        logger.error(`Error loading sprite ${url}`, err);
      }
    });

    return () => {
      containers.forEach((div) => {
        div.remove();
      });
    };
  }, [urls]);
}

type SpriteStatus = {
  promise: Promise<void>;
  loaded: boolean;
  error?: Error;
};

type SpriteState = {
  loaded: boolean;
  error: Error | null;
};

const loadedSprites = new Map<string, SpriteStatus>();

const getSpriteState = (url: string): SpriteState => {
  const status = loadedSprites.get(url);

  return {
    loaded: status?.loaded ?? false,
    error: status?.error ?? null,
  };
};

const isSameSpriteState = (stateA: SpriteState, stateB: SpriteState) =>
  stateA.loaded === stateB.loaded && stateA.error === stateB.error;

const setSpriteStatus = (url: string, status: SpriteStatus) => {
  loadedSprites.set(url, status);
};

const ensureSprite = (url: string) => {
  const status = loadedSprites.get(url);
  if (status) return status.promise;

  const promise = (async () => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load sprite: ${url}`);
    const text = await res.text();
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = text;
    document.body.prepend(div);
  })();

  setSpriteStatus(url, { promise, loaded: false });

  promise.then(
    () => {
      setSpriteStatus(url, { promise, loaded: true });
    },
    (err) => {
      const error = err instanceof Error ? err : new Error(String(err));
      setSpriteStatus(url, { promise, loaded: true, error });
    },
  );

  return promise;
};

export function useLazyInjectSprite(url: string) {
  const [state, setState] = useState<SpriteState>(() => getSpriteState(url));

  useEffect(() => {
    let isMounted = true;
    const currentState = getSpriteState(url);

    if (currentState.loaded) {
      setState((prevState) => (isSameSpriteState(prevState, currentState) ? prevState : currentState));
      return;
    }

    ensureSprite(url).then(
      () => {
        if (!isMounted) return;
        const nextState = getSpriteState(url);
        setState((prevState) => (isSameSpriteState(prevState, nextState) ? prevState : nextState));
      },
      () => {
        if (!isMounted) return;
        const nextState = getSpriteState(url);
        setState((prevState) => (isSameSpriteState(prevState, nextState) ? prevState : nextState));
      },
    );

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
}
