import { TooltipProps } from '@local/components/tooltip';
import { addOutlineProps } from '@local/styles/add';
import { addSXPropsNew, addSXTypographyPropsNew } from '@local/styles/add/add.types';

import { CSSProperties, PropsWithChildren, Ref } from 'react';

export type TypographyProps = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  href?: string;

  isParagraph?: boolean;
  isAnchor?: boolean;
  isSpan?: boolean;
  isTransitionFontSize?: boolean;

  ref?: Ref<HTMLElement | HTMLHeadingElement | HTMLAnchorElement | null>;

  sx: addSXTypographyPropsNew['sxTypography'];

  sxStandard?: addSXPropsNew['sx'];
} & addOutlineProps;

export type TypographyTooltipProps = {
  typography: TypographyProps;
  tooltip: Omit<TooltipProps, 'children' | 'content'>;
} & PropsWithChildren;
