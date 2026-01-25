import { Stack } from '@local/components/stack';
import { useResolveSx } from '@local/hooks/use-resolve-sx';
import { addSXProps } from '@local/styles/add';

import { FC, PropsWithChildren, useEffect, useMemo, useRef } from 'react';

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

  const { resolveSX } = useResolveSx();
  const sxStack = useMemo(
    () =>
      resolveSX(props?.sx, () => ({
        default: {
          display: 'content',
        },
      })),
    [props?.sx, resolveSX],
  );
  return (
    <Stack sx={sxStack} ref={elementRef}>
      {props.children}
    </Stack>
  );
};
