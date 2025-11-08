import { ButtonProps } from '@local/components/button/export';
import { addErrorProps } from '@local/components/error/export';
import { ImageButtonProps } from '@local/components/image-button/export';
import { addSXProps } from '@local/styles/add/export';
import { ITheme, IThemeSize } from '@local/styles/theme/export';
import { AddDollarSign } from '@local/types';

import { Area } from 'react-easy-crop';

export type TImageSelectGenre = keyof ITheme['colors']['imageSelect'];

export type ImageSelectItemProps = {
  crop?: {
    x: number;
    y: number;
  };

  croppedArea?: Area | null;

  file?: File;

  format?: string;

  id: number;

  index: number;

  isCropped?: boolean;

  isDeleted?: boolean;

  isNew?: boolean;

  name?: string;

  url?: string;

  zoom?: number;
};
export type ImageSelectProps = {
  locale: {
    imageFallback: string;
    buttonReset: string;
    dragAndDrop: string;
  } & ImageButtonProps['locale'];
  genre: TImageSelectGenre;
  size: IThemeSize;
  propsButton: {
    default: Pick<ButtonProps, 'size' | 'genre'>;
    delete: Pick<ButtonProps, 'size' | 'genre'>;
  };
  id?: string;
  onChange?: (images: ImageSelectItemProps[]) => void;
  isContain?: boolean;
  imageSettings: {
    maxSize: number;
    maxCount: number;
    width: number;
    height: number;
    aspect: number;
  };
  defaultImages: ImageSelectItemProps[];
  images: ImageSelectItemProps[];
} & addErrorProps &
  addSXProps;

export type ImageSelectWrapperProps = AddDollarSign<Pick<ImageSelectProps, 'sx' | 'error' | 'genre' | 'size'>>;
