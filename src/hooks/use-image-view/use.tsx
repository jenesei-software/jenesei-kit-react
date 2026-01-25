import { Button } from '@local/components/button';
import { Image } from '@local/components/image';
import { SliderImageProps } from '@local/components/image-slider';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { useDialog, useDialogProps } from '@local/contexts/context-dialog';
import { KEY_SIZE_DATA } from '@local/styles/theme';

import { useCallback, useMemo, useState } from 'react';

import { useImageViewProps } from './use.types';

export const useImageView = (props: useImageViewProps) => {
  const size = useMemo(() => KEY_SIZE_DATA[props.size], [props.size]);
  const br = useMemo(() => `${size.radius}px`, [size.radius]);
  const [image, setImage] = useState<SliderImageProps | null>(null);
  const propsDialog: useDialogProps<{ br?: string; image: SliderImageProps | null }> = useMemo(
    () => ({
      propsCustom: {
        image: image,
        br: br,
      },
      propsDialog: {
        borderRadius: br,
        padding: '0',
        background: 'whiteStandard',
      },
      onRemove() {
        setImage(null);
      },
      content: (params) => (
        <Stack
          sx={{
            default: {
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: `${props.imageSettings.aspect * 2} / 2`,
              width: 'auto',
              maxWidth: '70dvw',
              height: '85dvh',
              borderRadius: params?.propsCustom?.br,
            },
            breakpoints: {
              tablet: {
                maxWidth: '95dvw',
              },
            },
          }}
        >
          {params?.propsCustom?.image ? (
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
              alt={params.propsCustom?.image.imageSrc}
              src={params.propsCustom?.image.imageSrc}
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
          ) : null}
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
            onClick={() => params.remove?.()}
          />
        </Stack>
      ),
    }),
    [br, props.imageSettings.aspect, props.locale.imageFallback, image],
  );
  const { add } = useDialog<{
    br?: string;
    image: SliderImageProps | null;
  }>(propsDialog);
  const handleAdd = useCallback(
    (image: SliderImageProps) => {
      setImage(image);
      add();
    },
    [add],
  );
  return { handleAdd };
};
