import { Stack } from '@local/components/stack/component';
import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { FC, useEffect, useMemo, useState } from 'react';

import { ISkeleton } from './area.types';

export const Skeleton: FC<ISkeleton> = (props) => {
  const [visible, setVisible] = useState(props.defaultVisible ?? false);

  const propsVisible = useMemo(() => ('visible' in props ? props.visible : null), [props]);
  const propsTime = useMemo(() => ('time' in props ? props.time : null), [props]);

  useEffect(() => {
    if (propsVisible !== null && propsTime === null) {
      setVisible(propsVisible);
    } else if (propsVisible !== null && propsTime !== null) {
      if (propsVisible === false) {
        setVisible(false);
      } else {
        const timer = setTimeout(() => {
          setVisible(true);
        }, propsTime);

        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [propsVisible, propsTime]);

  return (
    <Stack
      {...props}
      className={setClasses([
        CSS_CLASS.area.skeleton.root,
        visible === false ? CSS_CLASS.area.skeleton.visibleFalse : false,
        visible === false ? CSS_CLASS.keyframe.backgroundMove : false,
        CSS_CLASS.transition.color,
        props.className,
      ])}
      style={setStyles([
        {
          [CSS_VARS_RAW.area.skeleton.color]: props.color
            ? CSS_VARS.palette[props.color]
            : props.isInheritColor
              ? 'inherit'
              : props.type === 'secondary'
                ? CSS_VARS.palette.fillQuaternaryLight
                : CSS_VARS.palette.fillQuaternaryLight,
          [CSS_VARS_RAW.area.skeleton.line]:
            props.type === 'secondary' ? CSS_VARS.palette.fillTertiaryLight : CSS_VARS.palette.fillQuinaryLight,
        },
        props.style,
      ])}
    >
      {props.children}
    </Stack>
  );
};
