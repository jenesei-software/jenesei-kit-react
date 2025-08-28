import { FC, PropsWithChildren, useEffect, useRef } from 'react';

import { Stack } from '@local/components/stack';
import { addSXProps } from '@local/styles/sx';

type OutsideProps = PropsWithChildren &
  addSXProps & {
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
    <Stack
      sx={(theme) => ({
        ...props?.sx,
        default: {
          display: 'content',
          ...(props?.sx ? (typeof props?.sx === 'function' ? props?.sx(theme).default : props?.sx.default) : {}),
        },
      })}
      ref={elementRef}
    >
      {props.children}
    </Stack>
  );
};
