import { Skeleton } from '@local/areas/skeleton';
import { Stack } from '@local/components/stack';

import { FC, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import { ImageIMG } from './component.styles';
import { ImageProps } from './component.types';

export const Image: FC<ImageProps> = (props) => {
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!props.src) return;

    const img = new (window.Image as { new (width?: number, height?: number): HTMLImageElement })();

    img.onload = () => {
      setIsPending(false);
      setIsError(false);
    };

    img.onerror = () => {
      setIsPending(false);
      setIsError(true);
    };

    img.src = props.src;

    if (img.complete) {
      if (img.naturalWidth > 0) {
        setIsPending(false);
        setIsError(false);
      } else {
        setIsPending(false);
        setIsError(true);
      }
    }

    return () => {
      img.onload = null;
      img.onerror = null;
      setIsPending(true);
      setIsError(false);
    };
  }, [props.src]);
  const theme = useTheme();
  const { default: defaultSx, ...rest } = props?.sxStack
    ? typeof props?.sxStack === 'function'
      ? props.sxStack(theme)
      : props.sxStack
    : {};

  return (
    <Stack
      sx={{
        default: {
          position: 'relative',
          overflow: 'hidden',
          ...(props.isShowBeforeImage
            ? {
                '&::before': {
                  width: '100%',
                  height: '100%',
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${props.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(20px)',
                  transform: 'scale(1.1)',
                  zIndex: 0,
                },
              }
            : {}),
          ...defaultSx,
        },
        ...rest,
      }}
    >
      {!isError ? (
        props.componentLoading || isPending ? (
          <Skeleton
            visible
            sx={{
              default: {
                width: '100%',
                height: '100%',
              },
            }}
          />
        ) : null
      ) : null}
      {!isError && (
        <ImageIMG loading='lazy' $isPending={isPending} src={props.src} alt={props.alt} $sx={props.sxImage} />
      )}
      {isError ? props.componentFallback || null : null}
    </Stack>
  );
};
