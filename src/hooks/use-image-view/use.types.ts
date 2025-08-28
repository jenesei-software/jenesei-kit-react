import { ImageSelectProps } from '@local/components/image-select';

export type useImageViewProps = Pick<ImageSelectProps, 'imageSettings' | 'genre' | 'size'> & {
  locale: Pick<ImageSelectProps['locale'], 'imageFallback'>;
};
