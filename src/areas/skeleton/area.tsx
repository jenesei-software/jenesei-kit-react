import { Stack } from '@local/components/stack/component';
import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { FC, useEffect, useState } from 'react';

import styles from './area.styles.module.css';
import { SkeletonProps } from './area.types';
export const Skeleton: FC<SkeletonProps> = (props) => {
  const [visible, setVisible] = useState(props.defaultVisible ?? false);

  useEffect(() => {
    if ('time' in props) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, props.time);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [props]);

  useEffect(() => {
    if ('visible' in props) {
      setVisible(!props.visible);
    }
  }, [props]);

  return (
    <Stack
      {...props}
      className={setClasses([
        styles['area-skeleton'],
        visible === false ? styles['area-skeleton-visible-false'] : false,
        visible === false ? CSS_CLASS.keyframe.backgroundMove : false,
        props.className,
      ])}
      style={setStyles([
        {
          [CSS_VARS_RAW.area.skeleton.color]: props.color
            ? CSS_VARS.palette[props.color]
            : props.isInheritColor
              ? 'inherit'
              : props.type === 'secondary'
                ? CSS_VARS.palette.fillQuaternary
                : CSS_VARS.palette.fillQuinary,
          [CSS_VARS_RAW.area.skeleton.line]:
            props.type === 'secondary'
              ? CSS_VARS.palette.fillQuinary
              : CSS_VARS.palette.fillQuaternary,
        },
        props.style,
      ])}
    >
      {props.children}
    </Stack>
  );
};
