import { FC, useEffect, useState } from 'react';

import { StyledSkeleton } from './area.styles';
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
    <StyledSkeleton
      {...props}
      $visible={visible}
      $type={props.type}
      $color={props.color}
      $isInheritColor={props.isInheritColor}
    >
      {props.children}
    </StyledSkeleton>
  );
};
