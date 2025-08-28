import { Button } from '@local/components/button';
import { Image } from '@local/components/image';
import { SliderImageProps } from '@local/components/image-slider';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { useDialog } from '@local/contexts/context-dialog';
import { KEY_SIZE_DATA } from '@local/theme';

import { useCallback, useMemo } from 'react';

import { useImageViewProps } from '.';

export const useImageView = (props: useImageViewProps) => {
  const size = useMemo(() => KEY_SIZE_DATA[props.size], [props.size]);
  const br = useMemo(() => `${size.radius}px`, [size.radius]);

  const { add } = useDialog<{
    br?: string;
  }>({
    br: br,
    propsDialog: {
      borderRadius: br,
      padding: '0',
      background: 'whiteStandard',
    },
  });
  const handleAdd = useCallback(
    (image: SliderImageProps) => {
      add({
        content: (params, remove) => (
          <Stack
            sx={{
              default: {
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: `${props.imageSettings.aspect * 2} / 2`,
                width: 'auto',
                maxWidth: '70dvw',
                height: '85dvh',
                borderRadius: params?.br,
              },
              tablet: {
                maxWidth: '95dvw',
              },
            }}
          >
            <Image
              sxStack={(theme) => ({
                default: {
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: theme.palette.black10,
                  position: 'absolute',
                  pointerEvents: 'none',
                },
              })}
              isShowBeforeImage
              sxImage={{
                default: {
                  objectFit: 'contain',
                },
              }}
              alt={image?.imageSrc}
              src={image?.imageSrc}
              componentFallback={
                <Typography
                  sx={{
                    default: {
                      variant: 'h6',
                    },
                  }}
                >
                  {props.locale.imageFallback}
                </Typography>
              }
            />
            <Button
              sx={{
                default: {
                  position: 'absolute',
                  bottom: 15,
                  right: 15,
                },
              }}
              genre='realebail-white'
              size='small'
              icons={[
                {
                  type: 'id',
                  name: 'Arrow4',
                },
              ]}
              isWidthAsHeight
              isHiddenBorder
              isRadius
              onClick={() => remove?.()}
            />
          </Stack>
        ),
      });
    },
    [add, props.imageSettings.aspect, props.locale.imageFallback],
  );
  return { handleAdd };
};
