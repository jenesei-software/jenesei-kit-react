import { Stack } from '@local/components/stack';
import { I_SX } from '@local/styles/add';

import { FC, PropsWithChildren, useEffect, useRef } from 'react';

type OutsideProps = PropsWithChildren &
  I_SX & {
    onOutsideClick: (event: MouseEvent) => void;
  };

export const Outside: FC<OutsideProps> = (props) => {
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
