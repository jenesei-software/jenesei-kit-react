import { ReactNode } from 'react';

import { addSXProps, addSXStyleProps } from '@local/styles/sx';

export interface ImageProps {
  alt: string;

  componentFallback?: ReactNode;

  componentLoading?: ReactNode;

  isShowBeforeImage?: boolean;

  src?: string;

  sxImage?: addSXProps['sx'];

  sxStack?: addSXProps['sx'];
}

export type ImageIMGProps = {
  $isPending: boolean;
} & addSXStyleProps;
