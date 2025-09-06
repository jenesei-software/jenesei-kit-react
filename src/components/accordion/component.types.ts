import { StackProps } from '@local/components/stack';
import { AddDollarSign } from '@local/types';

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

export type AccordionStyledIconProps = AddDollarSign<Pick<AccordionProps, 'expanded'>>;

export type AccordionSummaryContentProps = AddDollarSign<Pick<AccordionProps, 'isAccordionIcon'>>;

export type AccordionDetailsProps = AddDollarSign<Pick<AccordionProps, 'expanded'>>;
