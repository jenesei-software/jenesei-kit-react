import { TooltipProps } from '@local/components/tooltip/export';
import { addOutlineProps, addOutlinePropsDollar, addSXProps, addSXTypographyProps } from '@local/styles/add/export';
import { AddDollarSign } from '@local/types';

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

  sx: addSXTypographyProps['sxTypography'];

  sxStandard?: addSXProps['sx'];
} & addOutlineProps;

export type TypographyPropsDollar = AddDollarSign<{
  sxTypography: addSXTypographyProps['sxTypography'];
  sx?: addSXProps['sx'];
  isTransitionFontSize?: boolean;
}> &
  addOutlinePropsDollar;

export type TypographyTooltipProps = {
  typography: TypographyProps;
  tooltip: Omit<TooltipProps, 'children' | 'content'>;
} & PropsWithChildren;
