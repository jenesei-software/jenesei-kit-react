import { Stack } from '@local/components/stack/component';
import { dynamicAreaSkeleton } from '@local/theme/theme.dynamic';

import { FC, useEffect, useMemo, useState } from 'react';

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

  const scrollConfig = useMemo(() => {
    return {
      className: [
        dynamicAreaSkeleton.className({
          visible: visible,
          type: props.type,
          color: props.color,
          isInheritColor: props.isInheritColor,
        }),
        props.className,
      ].join(' '),
      style: Object.assign(
        dynamicAreaSkeleton.style({
          visible: visible,
          type: props.type,
          color: props.color,
          isInheritColor: props.isInheritColor,
        }),
        props.style,
      ),
    };
  }, [props.className, props.style, visible, props.type, props.color, props.isInheritColor]);

  return (
    <Stack {...props} {...scrollConfig}>
      {props.children}
    </Stack>
  );
};
