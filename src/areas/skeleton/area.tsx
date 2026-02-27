import { Stack } from '@local/components/stack/component';
import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { FC, useEffect, useMemo, useState } from 'react';

import styles from './area.styles.module.css';
import { ISkeleton } from './area.types';
export const Skeleton: FC<ISkeleton> = (props) => {
  const [visible, setVisible] = useState(props.defaultVisible ?? false);

  const visibleProps = useMemo(() => {
    if ('visible' in props) {
      return props.visible;
    }
    return null;
  }, [props]);

  const timeProps = useMemo(() => {
    if ('time' in props) {
      return props.time;
    }
    return null;
  }, [props]);

  useEffect(() => {
    if (visibleProps !== null && timeProps === null) {
      setVisible(visibleProps);
    } else if (visibleProps !== null && timeProps !== null) {
      if (visibleProps === false) {
        setVisible(false);
      } else {
        const timer = setTimeout(() => {
          setVisible(true);
        }, timeProps);

        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [visibleProps, timeProps]);

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
                : CSS_VARS.palette.fillQuaternary,
          [CSS_VARS_RAW.area.skeleton.line]:
            props.type === 'secondary' ? CSS_VARS.palette.fillTertiary : CSS_VARS.palette.fillQuinary,
        },
        props.style,
      ])}
    >
      {props.children}
    </Stack>
  );
};
