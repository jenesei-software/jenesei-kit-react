import { Area } from 'react-easy-crop';

import { ButtonProps } from '@local/components/button';
import { ImageButtonProps } from '@local/components/image-button';
import { addErrorProps } from '@local/styles/error';
import { addSXProps } from '@local/styles/sx';
import { IThemeGenreImageSelect, IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

export type TImageSelectGenre = keyof IThemeGenreImageSelect;

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
