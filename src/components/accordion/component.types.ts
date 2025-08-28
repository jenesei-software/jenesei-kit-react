import { ReactNode } from 'react';

import { StackProps } from '@local/components/stack';
import { AddDollarSign } from '@local/types';

export interface AccordionProps {
  wrapperProps: StackProps;
  accordionSummary: ReactNode;
  accordionDetails: ReactNode;
  expanded: boolean;
  isAccordionIcon?: boolean;
  onClickSummary?: () => void;
  onClickIcon?: () => void;
  triggerUpdate?: unknown[];
}

export type AccordionStyledIconProps = AddDollarSign<Pick<AccordionProps, 'expanded'>>;

export type AccordionSummaryContentProps = AddDollarSign<Pick<AccordionProps, 'isAccordionIcon'>>;

export type AccordionDetailsProps = AddDollarSign<Pick<AccordionProps, 'expanded'>>;
