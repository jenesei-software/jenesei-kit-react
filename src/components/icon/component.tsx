import { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { IconItemProps, StyledSVG, useLazyInjectSprite } from '.';

export const Icon = (props: IconItemProps) => {
  const theme = useTheme();
  const iconId = useMemo(
    () => theme.icon.getIconId({ type: props.type, name: props.name }),
    [props.name, props.type, theme.icon.getIconId],
  );
  const spriteUrl = useMemo(() => theme.icon.getSpriteUrl({ type: props.type }), [props.type, theme.icon.getSpriteUrl]);
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
      $color={props.color || undefined}
      $sx={props.sx}
      className={props.className}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
    >
      <use href={iconId} />
    </StyledSVG>
  );
};
