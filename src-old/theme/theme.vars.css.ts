import { createVar } from '@vanilla-extract/css';

/**
 * Component/Typography
 */
export const varsComponentTypography = {
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

/**
 * Area/Skeleton
 */
export const varsAreaSkeleton = {
  color: createVar(),
  opacity: createVar(),
};

/**
 * Component/Accordion
 */
export const varsComponentAccordionSummaryContent = {
  iconWidth: createVar(),
};

/**
 * Component/Icon
 */
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
