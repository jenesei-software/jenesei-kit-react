import { ImageButtonProps } from '@local/components/image-button/export';
import { ImageSelectItemProps } from '@local/components/image-select/export';

import { Ref } from 'react';

export type useImageCropProps = Pick<ImageButtonProps, 'onSave' | 'locale' | 'dialog' | 'imageSettings'> & {
  refInput: Ref<HTMLInputElement | null>;
};

export type useImageCropAddProps = Pick<ImageButtonProps, 'imageSettings' | 'onSave' | 'dialog' | 'locale'> & {
  br?: string;
  images: ImageSelectItemProps[]
};
