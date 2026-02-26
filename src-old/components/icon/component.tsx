import { Skeleton } from '@local/areas/skeleton';
import { LIBRARY_VERSION } from '@local/consts';
import { CSS_VARS } from '@local/styles/utils';

import clsx from 'clsx';
import { useMemo } from 'react';

import { useLazyInjectSprite } from './component.hooks';
import styles from './component.styles.module.css';
import { IconProps } from './component.types';

export const Icon = (props: IconProps) => {
  const iconId = useMemo(() => getIconId({ type: props.type, name: props.name }), [props.name, props.type]);
  const spriteUrl = useMemo(() => getSpriteUrl({ type: props.type }), [props.type]);
  const { loaded, error } = useLazyInjectSprite(spriteUrl);

  const configSkeleton = useMemo(() => {
    return {
      className: clsx(styles['icon-skeleton'], props.className),
      style: Object.assign(
        {
          [CSS_VARS.component.icon.skeleton.heightIcon]:
            props.size !== '100%' ? CSS_VARS.size[props.size].heightIcon : '100%',
          [CSS_VARS.component.icon.skeleton.order]: props.order ? String(props.order) : 'initial',
        },
        props.style,
      ),
    };
  }, [props.className, props.style, props.order, props.size]);

  const configIcon = useMemo(() => {
    return {
      className: clsx(styles.icon, props.className),

      style: Object.assign(
        {
          [CSS_VARS.component.icon.index.color]: props.color ? CSS_VARS.palette[props.color] : 'inherit',
          [CSS_VARS.component.icon.index.heightIcon]:
            props.size !== '100%' ? CSS_VARS.size[props.size].heightIcon : '100%',
          [CSS_VARS.component.icon.index.turn]: props.turn ? `${props.turn}deg` : '0deg',
          [CSS_VARS.component.icon.index.order]: props.order ? String(props.order) : 'initial',
        },
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
