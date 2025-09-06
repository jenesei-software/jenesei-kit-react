import { ReactNode } from '@tanstack/react-router';

import { useImageSliderProps } from '@local/hooks/use-image-slider';
import { IThemeSize } from '@local/theme';

import { TImageSelectGenre } from '../image-select';
import { StackProps } from '../stack';

export type ImageSliderProps = {
  genre: TImageSelectGenre;
  size: IThemeSize;
  imageSettings: {
    aspect: number;
  };
  images: { id: number; imageSrc: string; children?: ReactNode }[];
  children?: (props: { isDialog: boolean }) => ReactNode | ReactNode;
  onIndexChange?: (index: number) => void;
  propsStack?: StackProps;
  isLoading?: boolean;
  locales: {
    noImagesAvailable: string;
  } & useImageSliderProps['locales'];
};
export type SliderImageProps = { id: number; imageSrc: string; children?: ReactNode };
