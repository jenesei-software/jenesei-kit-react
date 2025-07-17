import { ImageSupportedFormatsForInput } from '@local/consts';
import { useImageCrop } from '@local/hooks/use-image-crop';
import { useImageView } from '@local/hooks/use-image-view';
import { ErrorMessage } from '@local/styles/error';
import { KEY_SIZE_DATA } from '@local/theme';

import { motion } from 'framer-motion';
import { DragEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import { Button } from '../button';
import { Image } from '../image';
import { Stack } from '../stack';
import { Typography } from '../typography';
import { ImageSelectItemProps, ImageSelectListWrapper, ImageSelectProps, ImageSelectWrapper } from '.';

export const ImageSelect = (props: ImageSelectProps) => {
  const { onChange } = props;

  const size = useMemo(() => KEY_SIZE_DATA[props.size], [props.size]);

  const [images, setImages] = useState<ImageSelectItemProps[]>(props.images || []);

  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const refInput = useRef<HTMLInputElement | null>(null);

  const theme = useTheme();

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) {
      handleAddFilesCrop(e.dataTransfer.files);
    }
  };

  const handleDelete = (id: number) => {
    setImages((prev) => {
      const finalImages = prev.filter((img) => img.id !== id);
      onChange?.(finalImages);
      return finalImages;
    });
  };

  const handleOnSave = useCallback(
    (files: ImageSelectItemProps[] | null) => {
      if (files) {
        setImages((prev) => {
          const newImages = files.map((file, idx) => ({
            ...file,
            index: prev.length + idx,
          }));
          const finalImages = [...prev, ...newImages];
          onChange?.(finalImages);
          return finalImages;
        });
      }
    },
    [onChange],
  );

  const openFileDialog = () => {
    refInput.current?.click();
  };

  const resetImages = () => {
    setImages(props.defaultImages || []);
    onChange?.(props.defaultImages || []);
  };

  const { handleAddFiles: handleAddFilesCrop } = useImageCrop({
    onSave: handleOnSave,
    locale: props.locale,
    dialog: {
      button: {
        genre: props.propsButton.default.genre,
        size: props.propsButton.default.size,
      },
      buttonDelete: {
        genre: props.propsButton.delete.genre,
        size: props.propsButton.delete.size,
      },
    },
    imageSettings: {
      maxSize: props.imageSettings.maxSize,
      maxCount: props.imageSettings.maxCount - images.length,
      aspect: props.imageSettings.aspect,
    },
    refInput: refInput,
  });

  const { handleAdd } = useImageView({
    size: props.size,
    locale: props.locale,
    imageSettings: props.imageSettings,
    genre: props.genre,
  });

  useEffect(() => {
    setImages(props.images || []);
  }, [props.images]);

  return (
    <>
      <ImageSelectWrapper $genre={props.genre} $size={props.size} id={props.id} $sx={props.sx} $error={props.error}>
        <ImageSelectListWrapper
          onDrop={(e) => {
            handleDrop(e);
            setIsDraggingOver(false);
          }}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => setIsDraggingOver(true)}
          onDragLeave={() => setIsDraggingOver(false)}
          animate={{
            borderColor: isDraggingOver
              ? theme.colors.imageSelect[props.genre].border.hover
              : theme.colors.imageSelect[props.genre].border.rest,
          }}
          transition={{ duration: 0.3 }}
          $genre={props.genre}
          $size={props.size}
        >
          <motion.div
            transition={{
              layout: {
                duration: 0.3,
                ease: 'easeInOut',
                type: 'spring',
              },
            }}
            layout
            style={{ display: 'flex', flexWrap: 'wrap', gap: `${size.padding - 2}px` }}
          >
            {images.map(
              (img) =>
                img.url && (
                  <motion.div
                    key={img.id}
                    style={{
                      position: 'relative',
                      width: `${props.imageSettings.width}px`,
                      height: `${props.imageSettings.height}px`,
                      userSelect: 'none',
                      overflow: 'hidden',
                      borderRadius: `${size.radius}px`,
                      flexGrow: 1,
                    }}
                    layout
                    transition={{
                      layout: {
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
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
                      isShowBeforeImage={props.isContain}
                      sxImage={{
                        default: {
                          objectFit: props.isContain ? 'contain' : 'cover',
                        },
                      }}
                      alt={img.name || 'image'}
                      src={img.url}
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
                          top: 5,
                          right: 5,
                        },
                      }}
                      genre={props.genre}
                      size='small'
                      icons={[
                        {
                          type: 'id',
                          name: 'Close',
                        },
                      ]}
                      isWidthAsHeight
                      isHiddenBorder
                      isRadius
                      onClick={() => handleDelete(img.id)}
                    />
                    <Button
                      sx={{
                        default: {
                          position: 'absolute',
                          bottom: 5,
                          right: 5,
                        },
                      }}
                      genre={props.genre}
                      size='small'
                      icons={[
                        {
                          type: 'id',
                          name: 'Activity',
                        },
                      ]}
                      isWidthAsHeight
                      isHiddenBorder
                      isRadius
                      onClick={() => img.url && handleAdd({ id: img.id, imageSrc: img.url })}
                    />
                  </motion.div>
                ),
            )}
            {images.length === 0 ? (
              <div
                onClick={openFileDialog}
                key='empty'
                style={{
                  position: 'relative',
                  width: `${props.imageSettings.width}px`,
                  height: `${props.imageSettings.height}px`,
                  userSelect: 'none',
                  overflow: 'hidden',
                  borderRadius: `${size.radius}px`,
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <Typography
                  style={{
                    color: theme.colors.imageSelect[props.genre].color.rest,
                  }}
                  sx={{
                    default: {},
                  }}
                >
                  {props.locale.dragAndDrop}
                </Typography>
              </div>
            ) : null}
          </motion.div>

          <input
            ref={refInput}
            type='file'
            accept={ImageSupportedFormatsForInput}
            multiple
            style={{ display: 'none' }}
            onChange={(e) => {
              if (e.target.files) handleAddFilesCrop(e.target.files);
            }}
          />
        </ImageSelectListWrapper>
        <Stack sx={{ default: { flexGrow: 1, gap: `${size.padding - 2}px` } }}>
          <Button
            type='button'
            genre={props.genre}
            size={props.size}
            sx={{
              default: {
                flexGrow: 3,
              },
            }}
            isRadius
            onClick={openFileDialog}
          >
            {props.locale.buttonAdd}
          </Button>
          <Button
            isRadius
            type='button'
            sx={{
              default: {
                flexGrow: 1,
              },
            }}
            onClick={resetImages}
            genre={props.genre}
            size={props.size}
          >
            {props.locale.buttonReset}
          </Button>
        </Stack>
      </ImageSelectWrapper>
      {props?.error ? <ErrorMessage {...props.error} size={props?.error.size ?? props.size} /> : null}
    </>
  );
};
