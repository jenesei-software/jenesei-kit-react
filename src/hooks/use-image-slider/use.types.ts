import { ImageSliderProps } from '@local/components/image-slider';

export type useImageSliderProps = Pick<ImageSliderProps, 'genre' | 'size'> &
  Pick<ImageSliderProps, 'images' | 'imageSettings' | 'onIndexChange' | 'children'> & {
    locales: {
      failedToLoad: string;
    };
  };
