import { FC } from 'react';

import { ScrollProps, StyledScroll } from '.';

export const Scroll: FC<ScrollProps> = (props) => {
  return (
    <StyledScroll
      {...props}
      $horizontal={props.horizontal}
      $vertical={props.vertical}
      $isAlwaysHorizontal={props.isAlwaysHorizontal}
      $isAlwaysVertical={props.isAlwaysVertical}
    >
      {props.children}
    </StyledScroll>
  );
};
