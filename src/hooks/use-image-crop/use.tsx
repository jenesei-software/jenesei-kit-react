import { Preview } from '@local/areas/preview';
import { Button } from '@local/components/button';
import { ImageSelectItemProps } from '@local/components/image-select';
import { Pagination, PaginationProps } from '@local/components/pagination';
import { Stack } from '@local/components/stack';
import { LIST_IMAGE_SUPPORTED_FORMAT } from '@local/consts';
import { useDialog, useDialogProps } from '@local/contexts/context-dialog';
import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize';
import { THEME_KEY_SIZE } from '@local/styles/theme';
import { IImageFormat } from '@local/types';

import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import { useTheme } from 'styled-components';

import { useImageCropAddProps, useImageCropProps } from './use.types';

export const useImageCrop = (props: useImageCropProps) => {
  const size = useMemo(() => THEME_KEY_SIZE[props.dialog.button.size], [props.dialog.button.size]);
  const br = useMemo(() => `${size.radius}px`, [size.radius]);
  const [images, setImages] = useState<ImageSelectItemProps[]>([]);

  const propsMemo = useDeepCompareMemoize(props);
  const propsDialog: useDialogProps<useImageCropAddProps> = useMemo(
    () => ({
      propsCustom: {
        images: images,
        br: br,
        imageSettings: propsMemo.imageSettings,
        onSave: propsMemo.onSave,
        dialog: propsMemo.dialog,
        locale: propsMemo.locale,
      },
      propsDialog: {
        borderRadius: br,
        padding: '0',
        background: 'transparent',
      },
      onRemove() {
        setImages([]);
      },
      content: (params) => (
        <CropperWrapper params={params.propsCustom} remove={params.remove} isAnimating={params.isAnimating} />
      ),
    }),
    [br, images, propsMemo.dialog, propsMemo.imageSettings, propsMemo.locale, propsMemo.onSave],
  );
  const { add } = useDialog<useImageCropAddProps>(propsDialog);
  const handleAdd = useCallback(
    (images: ImageSelectItemProps[]) => {
      setImages(images);
      add();
    },
    [add],
  );
  const handleAddFiles = useCallback(
    (files: FileList) => {
      const validFiles = Array.from(files).filter((file) => {
        if (file.size > props.imageSettings.maxSize) {
          console.warn(`File ${file.name} exceeds the allowed size of ${props.imageSettings.maxSize} bytes`);
          return false;
        }
        return true;
      });

      const newImages: ImageSelectItemProps[] = validFiles.map((file, idx) => ({
        id: Date.now() + idx,
        file,
        url: URL.createObjectURL(file),
        index: idx,
        isNew: true,
        name: file.name,
        format: file.type as IImageFormat,
      }));
      if (props.refInput && 'current' in props.refInput && props.refInput.current) {
        props.refInput.current.value = '';
      }

      if (newImages.length) handleAdd(newImages);
    },
    [handleAdd, props.imageSettings.maxSize, props.refInput],
  );
  return { handleAdd, handleAddFiles };
};

function getCroppedImg(imageSrc: string, crop: Area, format: string = 'image/png'): Promise<Blob> {
  const mimeType: IImageFormat = LIST_IMAGE_SUPPORTED_FORMAT.includes(format as IImageFormat)
    ? (format as IImageFormat)
    : 'image/png';

  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;

      canvas.width = crop.width;
      canvas.height = crop.height;

      ctx.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);

      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Canvas is empty'));
      }, mimeType);
    };
    image.onerror = () => reject(new Error('Failed to load image'));
  });
}

const CropperWrapper: FC<{
  params?: useImageCropAddProps;
  remove?: () => void;
  isAnimating?: boolean;
}> = (props) => {
  const [index, setIndex] = useState(0);
  const [newImages, setNewImages] = useState<ImageSelectItemProps[]>([]);
  const [newImagesCroppedArea, setNewImagesCroppedArea] = useState<(Area | null)[]>([]);

  const theme = useTheme();
  const isMulti = useMemo(() => (props?.params?.images ?? [])?.length > 1, [props.params?.images]);

  const newImageIndex = useMemo(() => newImages?.[index], [newImages, index]);

  const onSave = useCallback(
    async (images: ImageSelectItemProps[]) => {
      const saveImages = await Promise.all(
        images.map(async (image) => {
          const imageCroppedArea = newImagesCroppedArea[image.index] ?? null;
          if (image.isDeleted || !image.isCropped || !image.url || !image.name || !imageCroppedArea) return null;
          const blob = await getCroppedImg(image.url, imageCroppedArea, image.format);
          const croppedFile = new File([blob], image.name, { type: image.format });

          const newImage: ImageSelectItemProps = {
            ...image,
            file: croppedFile,
            url: URL.createObjectURL(croppedFile),
          };
          return newImage;
        }),
      );
      props.params?.onSave?.(saveImages.filter(Boolean) as ImageSelectItemProps[]);
      props.remove?.();
    },
    [newImagesCroppedArea, props],
  );

  const onChange = useCallback(
    async (params: {
      index: number;
      isDeleted?: boolean;
      isCropped?: boolean;
      isNext?: boolean;
      isSave?: boolean;
      crop?: { x: number; y: number };
      croppedArea?: Area | null;
      zoom?: number;
    }) => {
      const image = props?.params?.images?.[params.index];
      if (image) {
        const newImage: ImageSelectItemProps = {
          ...image,
          id: Date.now() + params.index,
          index: params.index,
          croppedArea: params.croppedArea ?? image.croppedArea,
          zoom: params.zoom ?? image.zoom,
          crop: params.crop ?? image.crop,

          isNew: true,
          isCropped: params.isCropped ?? image.isCropped,
          isDeleted: params.isDeleted ?? image.isDeleted,
        };
        setNewImages((prev) => {
          const arr = [...prev];
          arr[params.index] = newImage;
          return arr;
        });

        if (params.isNext) {
          const newIndex = params.index + 1 >= (props?.params?.images ?? []).length ? 0 : params.index + 1;
          setIndex(newIndex);
        }

        if (params.isSave) {
          onSave([newImage]);
        }
      }
    },
    [onSave, props?.params?.images],
  );

  useEffect(() => {
    setNewImages(props?.params?.images ?? []);
    setNewImagesCroppedArea((props?.params?.images ?? []).map((image) => image.croppedArea ?? null));
  }, [props?.params?.images]);

  useEffect(() => {
    return () => {
      setIndex(0);
      setNewImages([]);
      setNewImagesCroppedArea([]);
    };
  }, []);

  const lengthData: PaginationProps['lengthData'] = useMemo(() => {
    return newImages.reduce<PaginationProps['lengthData']>((acc, image) => {
      if (acc && image?.index !== undefined)
        acc[image.index] = {
          genre: image.isDeleted ? 'redTransparent' : image.isCropped ? 'greenTransparent' : 'white',
          icons: image.isDeleted
            ? [{ type: 'id', name: 'CloseMini' }]
            : image.isCropped
              ? [{ type: 'id', name: 'TickMini' }]
              : [],
        };
      return acc;
    }, {});
  }, [newImages]);
  const isDisabledSave = useMemo(() => {
    return newImages.every((image) => image?.isDeleted || !image?.isCropped);
  }, [newImages]);
  const genre = useMemo(() => props.params?.dialog.button.genre || 'product', [props.params?.dialog.button.genre]);
  const size = useMemo(() => props.params?.dialog.button.size || 'medium', [props.params?.dialog.button.size]);
  const genreDelete = useMemo(
    () => props.params?.dialog.buttonDelete.genre || 'product',
    [props.params?.dialog.buttonDelete.genre],
  );
  const sizeDelete = useMemo(() => props.params?.dialog.button.size || 'medium', [props.params?.dialog.button.size]);
  return (
    <Stack
      sx={(theme) => ({
        default: {
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: props.params?.imageSettings.aspect ? `${props.params?.imageSettings.aspect * 2} / 2` : undefined,
          width: 'auto',
          maxWidth: '70dvw',
          height: '85dvh',
          borderRadius: props.params?.br,
          backgroundColor: theme.palette.whiteStandard,
        },
        breakpoints: {
          tablet: {
            maxWidth: '95dvw',
          },
        },
      })}
    >
      <Preview visible={!props.isAnimating} minTime={500}>
        <Stack
          sx={{
            default: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
          }}
        >
          {newImageIndex && (
            <Cropper
              style={{
                containerStyle: {
                  backgroundColor: theme.palette.black80,
                },
              }}
              image={newImageIndex.url}
              crop={newImageIndex?.crop ?? { x: 0, y: 0 }}
              zoom={newImageIndex?.zoom ?? 1}
              aspect={props.params?.imageSettings.aspect}
              onCropChange={(crop) => {
                onChange({
                  ...newImageIndex,
                  crop: crop,
                });
              }}
              onZoomChange={(zoom) => {
                onChange({
                  ...newImageIndex,
                  zoom: zoom,
                });
              }}
              onCropComplete={(_, croppedArea) => {
                setNewImagesCroppedArea((prev) => {
                  const arr = [...prev];
                  arr[index] = croppedArea;
                  return arr;
                });
              }}
            />
          )}
        </Stack>

        <Stack
          sx={{
            default: {
              position: 'absolute',
              top: 15,
              right: 15,
              gap: '10px',
            },
          }}
        >
          <Button genre={genreDelete} size={sizeDelete} isHiddenBorder isRadius onClick={() => props.remove?.()}>
            {props.params?.locale.dialogCancel}
          </Button>
          {isMulti && (
            <Button
              genre={genre}
              size={size}
              isHiddenBorder
              isRadius
              onClick={() => onSave(newImages)}
              isHidden={isDisabledSave}
              isDisabled={isDisabledSave}
            >
              {props.params?.locale.dialogSave}
            </Button>
          )}
        </Stack>
      </Preview>
      {isMulti && index !== props?.params?.images.length && (
        <Button
          sx={{
            default: {
              position: 'absolute',
              top: 15,
              left: 15,
            },
          }}
          genre={genre}
          size={size}
          isHiddenBorder
          isWidthAsHeight
          isRadius
          isDisabled
        >
          {index + 1}
        </Button>
      )}
      <Stack
        sx={(theme) => ({
          default: {
            position: 'absolute',
            bottom: isMulti ? 5 : 15,
            left: isMulti ? 5 : undefined,
            right: isMulti ? undefined : 15,
            width: isMulti ? 'calc(100% - 10px)' : 'fit-content',
            backgroundColor: isMulti ? theme.palette.whiteStandard : theme.palette.transparent,
            padding: '10px',
            borderRadius: '50px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          },
          mobile: {
            borderRadius: '24px',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '10px',
          },
        })}
      >
        {isMulti && (
          <Pagination
            sx={{
              default: {},
              breakpoints: {
                mobile: {
                  justifyContent: 'space-between',
                },
              },
            }}
            lengthData={lengthData}
            length={(props?.params?.images ?? []).length}
            index={index}
            changeIndex={(newIndex) => {
              setIndex(newIndex);
            }}
            isInfinity
            viewQuantity={4}
            buttonControl={{
              genre: genre,
              size: size,
              isRadius: true,
              isWidthAsHeight: true,
            }}
            buttonCount={{
              active: {
                genre: genre,
                size: size,
                isRadius: true,
                isPlaystationEffect: true,
              },
              inactive: {
                genre: 'white',
                size: size,
                isRadius: true,
              },
            }}
            locale={{
              next: 'Next',
              prev: 'Prev',
            }}
          />
        )}
        <Stack
          sx={{
            default: {
              gap: '10px',
            },
            breakpoints: {
              mobile: {
                justifyContent: 'center',
              },
            },
          }}
        >
          {isMulti && (
            <Button
              genre={genreDelete}
              size={sizeDelete}
              isHiddenBorder
              isRadius
              onClick={() => {
                onChange({
                  ...newImageIndex,
                  isDeleted: true,
                  isNext: isMulti,
                });
              }}
            >
              {props.params?.locale.dialogDeleteImage}
            </Button>
          )}
          <Button
            genre={genre}
            size={size}
            isHiddenBorder
            isRadius
            onClick={() => {
              onChange({
                ...newImageIndex,
                isDeleted: false,
                isCropped: true,
                isNext: isMulti,
                isSave: !isMulti,
              });
            }}
          >
            {isMulti ? props.params?.locale.dialogAddImage : props.params?.locale.dialogSave}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
