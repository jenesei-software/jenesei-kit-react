import { Stack } from '@local/components/stack';
import { ISx } from '@local/styles/utils';

import { FC, PropsWithChildren, useEffect, useRef } from 'react';

type IOutside = PropsWithChildren &
  ISx & {
    onOutsideClick: (event: MouseEvent) => void;
  };

export const Outside: FC<IOutside> = (props) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        props.onOutsideClick(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [props]);

  return (
    <Stack sx={props.sx} ref={elementRef}>
      {props.children}
    </Stack>
  );
};
