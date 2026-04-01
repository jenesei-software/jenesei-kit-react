import { ITooltip } from '@local/components/tooltip';
import { ITypography } from '@local/styles/utils';

import { CSSProperties, PropsWithChildren, Ref } from 'react';

export type ITypographyComponent = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  href?: string;

  isParagraph?: boolean;
  isAnchor?: boolean;
  isSpan?: boolean;
  ref?: Ref<HTMLElement | HTMLHeadingElement | HTMLAnchorElement | null>;
  sx?: ITypography;
};

export type ITypographyTooltip = {
  typography: ITypographyComponent;
  tooltip: Omit<ITooltip, 'children' | 'content'>;
} & PropsWithChildren;
