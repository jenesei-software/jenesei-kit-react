import { useEffect, useState } from 'react';

export function useInjectSprites(urls: string[]) {
  useEffect(() => {
    const containers: HTMLDivElement[] = [];

    urls.forEach(async (url) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          console.error(`Failed to load sprite: ${url}`);
          return;
        }
        const text = await res.text();

        const div = document.createElement('div');
        div.style.display = 'none';
        div.innerHTML = text;

        document.body.prepend(div);
        containers.push(div);
      } catch (err) {
        console.error(`Error loading sprite ${url}`, err);
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
      // Создаём новый промис
      promise = (async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error(`Failed to load sprite: ${url}`);
          const text = await res.text();
          const div = document.createElement('div');
          div.style.display = 'none';
          div.innerHTML = text;
          document.body.prepend(div);

          //@ts-ignore
          loadedSprites.set(url, { promise, loaded: true });
        } catch (err) {
          const errorObj = err instanceof Error ? err : new Error(String(err));
          //@ts-ignore
          loadedSprites.set(url, { promise, loaded: true, error: errorObj });
          if (isMounted) setError(errorObj);
          throw err;
        }
      })();

      loadedSprites.set(url, { promise, loaded: false });
    } else {
      // Уже есть промис — берём его
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
