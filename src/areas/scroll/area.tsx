import { Stack } from '@local/components/stack';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { FC } from 'react';

import styles from './area.styles.module.css';
import { ScrollProps } from './area.types';

export const Scroll: FC<ScrollProps> = (props) => {
  const { children, className, style, ...rest } = props;

  return (
    <Stack
      {...rest}
      className={setClasses([
        className,
        styles['area-scroll'],
        props.horizontal && styles['area-scroll-horizontal'],
        props.vertical && styles['area-scroll-vertical'],
        props.isAlwaysHorizontal && styles['area-scroll-is-always-horizontal'],
        props.isAlwaysVertical && styles['area-scroll-is-always-vertical'],
      ])}
      style={setStyles([style])}
    >
      {children}
    </Stack>
  );
};
