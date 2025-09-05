import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';

import { getIconComponentsProps, Icon } from '.';

export function getIconComponents<T extends keyof DefaultTheme['icon']['map']>(props: getIconComponentsProps<T>) {
  return (props.icons ?? [])
    ?.filter((icon) => !icon.isHidden)
    ?.map((icon, index) =>
      icon?.type === 'id' ? (
        <Icon
          key={`${icon.type}-${icon.name}-${index}`}
          name={icon?.name}
          type='id'
          size={icon?.size ?? props.size}
          turn={icon.turn}
          order={icon.order}
        />
      ) : icon?.type === 'logo' ? (
        <Icon
          key={`${icon.type}-${icon.name}-${index}`}
          name={icon?.name}
          type='logo'
          size={icon?.size ?? props.size}
          turn={icon.turn}
          order={icon.order}
        />
      ) : icon?.type === 'bustmarket' ? (
        <Icon
          key={`${icon.type}-${icon.name}-${index}`}
          name={icon?.name}
          type='bustmarket'
          size={icon?.size ?? props.size}
          turn={icon.turn}
          order={icon.order}
        />
      ) : icon?.type === 'checkbox' ? (
        <Icon
          key={`${icon.type}-${icon.name}-${index}`}
          name={icon?.name}
          type='checkbox'
          size={icon?.size ?? props.size}
          turn={icon.turn}
          order={icon.order}
        />
      ) : icon?.type === 'loading' ? (
        <Icon
          key={`${icon.type}-${icon.name}-${index}`}
          name={icon?.name}
          type='loading'
          size={icon?.size ?? props.size}
          turn={icon.turn}
          order={icon.order}
        />
      ) : icon?.type === 'realebail' ? (
        <Icon
          key={`${icon.type}-${icon.name}-${index}`}
          name={icon?.name}
          type='realebail'
          size={icon?.size ?? props.size}
          turn={icon.turn}
          order={icon.order}
        />
      ) : null,
    );
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
