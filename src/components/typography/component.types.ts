import { ISx, ISxTypography } from '@local/styles/utils';

import { CSSProperties, PropsWithChildren, Ref } from 'react';

import { ITooltip } from '../tooltip';

export type ITypographyComponent = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  href?: string;

  isParagraph?: boolean;
  isAnchor?: boolean;
  isSpan?: boolean;
  ref?: Ref<HTMLElement | HTMLHeadingElement | HTMLAnchorElement | null>;

  sx: ISxTypography['sxTypography'];

  sxStandard?: ISx['sx'];
};

export type ITypographyTooltip = {
  typography: ITypographyComponent;
  tooltip: Omit<ITooltip, 'children' | 'content'>;
} & PropsWithChildren;
