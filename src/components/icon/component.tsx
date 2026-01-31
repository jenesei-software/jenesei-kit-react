import { Skeleton } from '@local/areas/skeleton';
import { LIBRARY_VERSION } from '@local/consts';
import { dynamicComponentStyledIcon, dynamicComponentStyledIconSkeleton } from '@local/styles/add/add.dynamic';

import { useMemo } from 'react';

import { useLazyInjectSprite } from './component.hooks';
import { IconProps } from './component.types';

export const Icon = (props: IconProps) => {
  const iconId = useMemo(() => getIconId({ type: props.type, name: props.name }), [props.name, props.type]);
  const spriteUrl = useMemo(() => getSpriteUrl({ type: props.type }), [props.type]);
  const { loaded, error } = useLazyInjectSprite(spriteUrl);

  const configSkeleton = useMemo(() => {
    return {
      className: [dynamicComponentStyledIconSkeleton.className(), props.className].join(' '),
      style: Object.assign(
        dynamicComponentStyledIconSkeleton.style({
          size: props.size,
          order: props.order,
        }),
        props.style,
      ),
    };
  }, [props.className, props.style, props.order, props.size]);

  const configIcon = useMemo(() => {
    return {
      className: [dynamicComponentStyledIcon.className(), props.className].join(' '),
      style: Object.assign(
        dynamicComponentStyledIcon.style({
          size: props.size,
          order: props.order,
          color: props.color,
          turn: props.turn,
        }),
        props.style,
      ),
    };
  }, [props.className, props.style, props.order, props.size, props.color, props.turn]);

  if (!loaded || error)
    return (
      <Skeleton
        color={props.color ?? undefined}
        className={configSkeleton.className}
        style={configSkeleton.style}
        visible
      />
    );

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={configIcon.className}
      style={configIcon.style}
      onClick={props.onClick}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && props.onClick) {
          props.onClick(e as any);
        }
      }}
      tabIndex={props.tabIndex}
      role={props.onClick ? 'button' : undefined}
    >
      <title>{props.name}</title>
      <use href={iconId} />
    </svg>
  );
};

export function getIconId(props: { type: string; name: string }) {
  return `#${props.type}-${props.name}`;
}

export function getSpriteUrl(props: { type: string }) {
  return `https://id.assets.jenesei.ru/icons/${props.type}.svg?v=${LIBRARY_VERSION}`;
}
