import { StackProps } from '@local/components/stack';

import { ReactNode } from 'react';

export interface AccordionProps {
  accordionDetails: ReactNode;

  accordionSummary: ReactNode;

  expanded: boolean;

  wrapperProps: StackProps;

  isAccordionIcon?: boolean;

  onClickIcon?: () => void;

  onClickSummary?: () => void;

  triggerUpdate?: unknown[];
}

export type AccordionStyledIconProps = Pick<AccordionProps, 'expanded'>;

export type AccordionSummaryContentProps = Pick<AccordionProps, 'isAccordionIcon'>;

export type AccordionDetailsProps = Pick<AccordionProps, 'expanded'>;
