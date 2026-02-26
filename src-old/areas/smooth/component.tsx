import { StackMotion, StackProps } from '@local/components/stack';

import { FC } from 'react';

export const Smooth: FC<StackProps> = (props) => {
  return (
    <StackMotion
      transition={{
        layout: {
          duration: 0.3,
          ease: 'easeInOut',
          type: 'spring',
        },
      }}
      layout
      {...props}
    >
      {props.children}
    </StackMotion>
  );
};
