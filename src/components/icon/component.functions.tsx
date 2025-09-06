import { useEffect, useState } from 'react';

import { getIconComponentsProps, Icon } from '.';

export function getIconComponents(props: getIconComponentsProps) {
  return (props.icons ?? [])
    ?.filter((icon) => !icon.isHidden)
    ?.map((icon, index) => (
      <Icon key={`${icon.type}-${icon.name}-${index}`} size={icon?.size ?? props.size} {...icon} />
    ));
}
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
      containers.forEach((div) => div.remove());
    };
  }, [urls]);
}

const loadedSprites = new Map<string, Promise<void>>();
export function useLazyInjectSprite(url: string) {
  const [loaded, setLoaded] = useState(loadedSprites.has(url));

  useEffect(() => {
    if (loaded) return;

    let isMounted = true;

    if (!loadedSprites.has(url)) {
      const promise = (async () => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load sprite: ${url}`);
        const text = await res.text();
        const div = document.createElement('div');
        div.style.display = 'none';
        div.innerHTML = text;
        document.body.prepend(div);
      })();
      loadedSprites.set(url, promise);
    }

    loadedSprites.get(url)?.then(() => {
      if (isMounted) setLoaded(true);
    });

    return () => {
      isMounted = false;
    };
  }, [url, loaded]);

  return loaded;
}
