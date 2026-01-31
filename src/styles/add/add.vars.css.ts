import { createVar } from '@vanilla-extract/css';

import { THEME_GLOBAL } from '../theme';

export const varsTypography = {
  letterSpacing: createVar(),
  line: createVar(),
  flex: createVar(),
  cursor: createVar(),
  overflow: createVar(),
  family: createVar(),
  weight: createVar(),
  height: createVar(),
  color: createVar(),
  align: createVar(),
  wrap: createVar(),
  decoration: createVar(),
  transform: createVar(),
  size: createVar(),
  variant: createVar(),
};

export const varsAreaSkeleton = {
  color: createVar(),
  opacity: createVar(),
};

export const varsComponentAccordionSummaryContent = {
  iconWidth: createVar(),
};

export const varsComponentStyledIcon = {
  color: createVar(),
  heightIcon: createVar(),
  order: createVar(),
  turn: createVar(),
};

export const varsComponentStyledIconSkeleton = {
  heightIcon: createVar(),
  order: createVar(),
};