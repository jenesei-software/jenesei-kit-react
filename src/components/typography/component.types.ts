import { TooltipProps } from '@local/components/tooltip';
import { I_SX, I_SX_OUTLINE, I_SX_TYPOGRAPHY } from '@local/styles/add';

import { CSSProperties, PropsWithChildren, Ref } from 'react';

export type TypographyProps = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  href?: string;

  isParagraph?: boolean;
  isAnchor?: boolean;
  isSpan?: boolean;

  ref?: Ref<HTMLElement | HTMLHeadingElement | HTMLAnchorElement | null>;

  sx: I_SX_TYPOGRAPHY['sxTypography'];

  sxStandard?: I_SX['sx'];
} & I_SX_OUTLINE;

export type TypographyTooltipProps = {
  typography: TypographyProps;
  tooltip: Omit<TooltipProps, 'children' | 'content'>;
} & PropsWithChildren;
