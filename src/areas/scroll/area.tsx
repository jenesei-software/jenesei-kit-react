import { Stack } from '@local/components/stack';
import { CSS_CLASS } from '@local/styles/utils';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { FC } from 'react';

import { IScroll } from './area.types';

export const Scroll: FC<IScroll> = (props) => {
  const { children, className, style, ...rest } = props;

  return (
    <Stack
      {...rest}
      className={setClasses([
        className,
        CSS_CLASS.area.scroll.root,
        props.horizontal && CSS_CLASS.area.scroll.horizontal,
        props.vertical && CSS_CLASS.area.scroll.vertical,
        props.isAlwaysHorizontal && CSS_CLASS.area.scroll.isAlwaysHorizontal,
        props.isAlwaysVertical && CSS_CLASS.area.scroll.isAlwaysVertical,
      ])}
      style={setStyles([style])}
    >
      {children}
    </Stack>
  );
};
