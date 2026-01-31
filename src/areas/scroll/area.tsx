import { Stack } from '@local/components/stack';
import { recipeAreaScroll } from '@local/styles/add';

import { FC, useMemo } from 'react';

import { ScrollProps } from './area.types';

export const Scroll: FC<ScrollProps> = (props) => {
  const { children, className, style, ...rest } = props;

  const scrollConfig = useMemo(() => {
    return {
      className: [
        recipeAreaScroll({
          horizontal: Boolean(props.horizontal),
          vertical: Boolean(props.vertical),
          isAlwaysHorizontal: Boolean(props.isAlwaysHorizontal),
          isAlwaysVertical: Boolean(props.isAlwaysVertical),
        }),
        className,
      ].join(' '),
      style: Object.assign({}, style),
    };
  }, [className, style, props.horizontal, props.vertical, props.isAlwaysHorizontal, props.isAlwaysVertical]);

  return (
    <Stack {...rest} className={scrollConfig.className} style={scrollConfig.style}>
      {children}
    </Stack>
  );
};