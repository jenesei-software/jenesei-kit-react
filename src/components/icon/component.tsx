import { Skeleton } from '@local/areas/skeleton';
import { ICON_VERSION } from '@local/consts';
import { CSS_VARS } from '@local/styles/utils';
import { CSS_CLASS, CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { useMemo } from 'react';

import { useLazyInjectSprite } from './component.hooks';
import { IIcon } from './component.types';

export const Icon = (props: IIcon) => {
  const iconId = useMemo(() => getIconId({ type: props.type, name: props.name }), [props.name, props.type]);
  const spriteUrl = useMemo(() => getSpriteUrl({ type: props.type }), [props.type]);
  const { loaded, error } = useLazyInjectSprite(spriteUrl);

  const configSkeleton = useMemo(() => {
    return {
      className: setClasses([CSS_CLASS.component.icon.skeleton.root, props.className]),
      style: setStyles([
        {
          [CSS_VARS_RAW.component.icon.skeleton.heightIcon]:
            props.size !== '100%' ? CSS_VARS.size[props.size].heightIcon : '100%',
          [CSS_VARS_RAW.component.icon.skeleton.order]: props.order ? String(props.order) : 'initial',
        },
        props.style,
      ]),
    };
  }, [props.className, props.style, props.order, props.size]);

  const configIcon = useMemo(() => {
    return {
      className: setClasses([CSS_CLASS.component.icon.index.root, props.className, CSS_CLASS.transition.icon]),

      style: setStyles([
        {
          [CSS_VARS_RAW.component.icon.index.color]: props.color ? CSS_VARS.palette[props.color] : 'inherit',
          [CSS_VARS_RAW.component.icon.index.heightIcon]:
            props.size !== '100%' ? CSS_VARS.size[props.size].heightIcon : '100%',
          [CSS_VARS_RAW.component.icon.index.turn]: props.turn ? `${props.turn}deg` : '0deg',
          [CSS_VARS_RAW.component.icon.index.order]: props.order ? String(props.order) : 'initial',
        },
        props.style,
        props?.sx,
      ]),
    };
  }, [props.className, props.style, props.order, props.size, props.color, props.turn, props.sx]);

  if (!loaded || error)
    return (
      <Skeleton
        color={props.color ?? undefined}
        className={configSkeleton.className}
        style={configSkeleton.style}
        visible={false}
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
        if (props.onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
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
  return `https://cdn.jsdelivr.net/gh/jenesei-software/jenesei-id-assets@${ICON_VERSION}/icons/${props.type}.svg`;
}
