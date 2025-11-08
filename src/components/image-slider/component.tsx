import { Button } from '@local/components/button/export';
import { Icon } from '@local/components/icon/export';
import { Image } from '@local/components/image/export';
import { Stack, StackMotion } from '@local/components/stack/export';
import { Typography } from '@local/components/typography/export';
import { useImageSlider } from '@local/hooks/use-image-slider';
import { KEY_SIZE_DATA } from '@local/styles/theme/export';

import { AnimatePresence, Variants } from 'framer-motion';
import { FC, useMemo } from 'react';

import { ImageSliderProps, SliderDot, SliderImage } from '.';

export const ImageSlider: FC<ImageSliderProps> = (props) => {
  const { onIndexChange } = props;
  const images = useMemo(() => props.images, [props.images]);
  const size = useMemo(() => KEY_SIZE_DATA[props.size], [props.size]);
  const br = useMemo(() => `${size.radius}px`, [size.radius]);

  const {
    isLengthZero,
    direction,
    activeImageId,
    isLengthOne,
    dragEndHandler,
    activeImageIndex,
    swipeToImage,
    skipToImage,
    handleAdd,
  } = useImageSlider({
    genre: props.genre,
    size: props.size,
    images: images,
    imageSettings: props.imageSettings,
    locales: props.locales,
    onIndexChange: onIndexChange,
    children: props.children,
  });
  return (
    <StackMotion
      {...props.propsStack}
      sx={(theme) => ({
        ...props.propsStack?.sx,
        default: {
          borderRadius: br,
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          width: 'auto',
          maxWidth: '70dvw',
          height: '85dvh',
          ...(props.propsStack?.sx
            ? typeof props.propsStack?.sx === 'function'
              ? props.propsStack?.sx(theme).default
              : props.propsStack?.sx.default
            : {}),
        },
        tablet: {
          maxWidth: '95dvw',
          ...(props.propsStack?.sx
            ? typeof props.propsStack?.sx === 'function'
              ? props.propsStack?.sx(theme).tablet
              : props.propsStack?.sx.tablet
            : {}),
        },
      })}
    >
      {props.isLoading ? (
        <Stack
          sx={{
            default: {
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          <Icon size='large' type='loading' color='blueFocus' name='Line' />
        </Stack>
      ) : !isLengthZero ? (
        <Stack
          sx={{
            default: {
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            },
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <SliderImage
              key={activeImageId}
              style={{
                overflow: 'hidden',
                borderRadius: br,
              }}
              custom={direction}
              variants={sliderVariants}
              initial='initial'
              animate='active'
              exit='exit'
              transition={sliderTransition}
              {...(!isLengthOne
                ? {
                    drag: 'x',
                    dragConstraints: { left: 0, right: 0 },
                    dragElastic: 0.5,
                    onDragEnd: (_, dragInfo) => dragEndHandler(dragInfo),
                  }
                : {})}
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
                alt={images[activeImageIndex]?.imageSrc}
                src={images[activeImageIndex]?.imageSrc}
                componentFallback={
                  <Typography
                    sx={{
                      default: {
                        variant: 'h6',
                      },
                    }}
                  >
                    {props.locales.failedToLoad}
                  </Typography>
                }
              />
              {images[activeImageIndex]?.children}
            </SliderImage>
          </AnimatePresence>
          {typeof props?.children === 'function' ? props?.children?.({ isDialog: false }) : props?.children}

          {!isLengthOne && (
            <>
              <Button
                sx={{
                  default: {
                    position: 'absolute',
                    top: '50%',
                    left: 5,
                    transform: 'translateY(-50%)',
                  },
                }}
                genre={props.genre}
                size={props.size}
                icons={[
                  {
                    type: 'id',
                    name: 'Arrow4',
                    turn: 90,
                  },
                ]}
                isWidthAsHeight
                isHiddenBorder
                isRadius
                onClick={() => swipeToImage(-1)}
              />
              <Button
                sx={{
                  default: {
                    position: 'absolute',
                    top: '50%',
                    right: 5,
                    transform: 'translateY(-50%)',
                  },
                }}
                genre={props.genre}
                size={props.size}
                icons={[
                  {
                    type: 'id',
                    name: 'Arrow4',
                    turn: -90,
                  },
                ]}
                isWidthAsHeight
                isHiddenBorder
                isRadius
                onClick={() => swipeToImage(1)}
              />
              <Stack
                sx={{
                  default: {
                    position: 'absolute',
                    bottom: 5,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    gap: '4px',
                  },
                }}
              >
                {images.map((i) => (
                  <SliderDot
                    onClick={() => skipToImage(i.id)}
                    key={i.id}
                    initial={false}
                    animate={{
                      scale: activeImageId === i.id ? 1.5 : 1,
                      opacity: activeImageId === i.id ? 1 : 0.5,
                    }}
                  />
                ))}
              </Stack>
            </>
          )}

          <Button
            sx={{
              default: {
                position: 'absolute',
                bottom: 5,
                right: 5,
              },
            }}
            genre={props.genre}
            size={props.size}
            icons={[
              {
                type: 'id',
                name: 'Activity',
              },
            ]}
            isWidthAsHeight
            isHiddenBorder
            isRadius
            onClick={() => handleAdd()}
          />
        </Stack>
      ) : (
        <Stack
          sx={{
            default: {
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          <Typography
            sx={{
              default: {
                variant: 'h6',
              },
            }}
          >
            {props.locales.noImagesAvailable}
          </Typography>
        </Stack>
      )}
    </StackMotion>
  );
};
const sliderVariants: Variants = {
  initial: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 1,
    opacity: 0.2,
  }),
};
const sliderTransition = {
  duration: 0.3,
  ease: [0.56, 0.03, 0.12, 1.04],
};
