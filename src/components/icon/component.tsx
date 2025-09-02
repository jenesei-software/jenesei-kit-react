import { useMemo } from 'react';

import { IconItemProps, IconTypeMap, StyledSVG, useLazyInjectSprite } from '.';

const VERSION = "1.3.15";

export const Icon = <T extends keyof IconTypeMap>(props: IconItemProps<T>) => {
  const iconHref = useMemo(() => `#${props.type}-${props.name}`, [props.name, props.type]);
  const spriteUrl = useMemo(() => `https://jenesei.ru/assets/${props.type}.svg?v=${VERSION}`, [props.type]);
  const loaded = useLazyInjectSprite(spriteUrl);

  if (!loaded) return null;

  return (
    <StyledSVG
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      $size={props.size}
      $turn={props.turn}
      $order={props.order}
      $color={props.primaryColor || undefined}
      $sx={props.sx}
      className={props.className}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
    >
      <use href={iconHref} />
    </StyledSVG>
  );
};
