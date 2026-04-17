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

const loadedSprites = new Map<string, SpriteStatus>();

export function useLazyInjectSprite(url: string) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Проверяем актуальный статус прямо здесь
    const status = loadedSprites.get(url);
    if (status?.loaded) {
      setLoaded(true);
      setError(status.error ?? null);
      return;
    }

    let promise: Promise<void>;

    if (!status) {
      const p = (async () => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load sprite: ${url}`);
        const text = await res.text();
        const div = document.createElement('div');
        div.style.display = 'none';
        div.innerHTML = text;
        document.body.prepend(div);
      })();

      loadedSprites.set(url, { promise: p, loaded: false });

      p.then(() => {
        const prev = loadedSprites.get(url);
        loadedSprites.set(url, { ...(prev as any), promise: p, loaded: true });
      }).catch((err) => {
        const errorObj = err instanceof Error ? err : new Error(String(err));
        const prev = loadedSprites.get(url);
        loadedSprites.set(url, { ...(prev as any), promise: p, loaded: true, error: errorObj });
      });

      promise = p;
    } else {
      promise = status.promise;
    }

    promise
      .then(() => {
        if (!isMounted) return;
        const s = loadedSprites.get(url);
        setLoaded(s?.loaded ?? true);
        setError(s?.error ?? null);
      })
      .catch(() => {}); // Ошибка уже сохранена в статусе

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { loaded, error };
}
