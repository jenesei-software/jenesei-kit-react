import { addSXProps, addSXPropsDollar } from '@local/styles/add/export';

import { ReactNode } from 'react';

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
} & addSXPropsDollar;
