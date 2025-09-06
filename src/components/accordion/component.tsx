import { Stack } from '@local/components/stack';

import React, { FC, useCallback } from 'react';

import {
  AccordionDetails,
  AccordionProps,
  AccordionStyledIcon,
  AccordionSummary,
  AccordionSummaryContent,
  AccordionWrapper,
} from '.';

export const Accordion: FC<AccordionProps> = (props) => {
  const onClickSummary = useCallback(() => {
    if (props.onClickSummary) props.onClickSummary();
  }, [props]);

  const onClickIcon = useCallback(
    (event: React.MouseEvent<SVGSVGElement>) => {
      if (props.onClickIcon) {
        event.stopPropagation();

        props.onClickIcon();
      }
    },
    [props],
  );

  return (
    <Stack {...props.wrapperProps}>
      <AccordionWrapper>
        <AccordionSummary onClick={onClickSummary}>
          <AccordionSummaryContent $isAccordionIcon={props.isAccordionIcon}>
            {props.accordionSummary}
          </AccordionSummaryContent>
          {props.isAccordionIcon && (
            <AccordionStyledIcon
              $expanded={props.expanded}
              onClick={onClickIcon}
              name='Arrow1'
              color='black100'
              type='id'
              size='large'
            />
          )}
        </AccordionSummary>
        <AccordionDetails $expanded={props.expanded}>{props.accordionDetails}</AccordionDetails>
      </AccordionWrapper>
    </Stack>
  );
};
