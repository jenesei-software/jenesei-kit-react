import { Icon } from '@local/components/icon';
import { Stack } from '@local/components/stack';
import { dynamicComponentAccordionDetails, dynamicComponentAccordionSummaryContent } from '@local/theme/theme.dynamic';
import { recipeComponentAccordionStyledIcon } from '@local/theme/theme.recipe.css';
import { styleComponentAccordionSummary, styleComponentAccordionWrapper } from '@local/theme/theme.style.css';

import React, { FC, useCallback } from 'react';

import { AccordionProps } from './component.types';

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
      <div className={styleComponentAccordionWrapper}>
        {/** biome-ignore lint/a11y/noStaticElementInteractions: <explanation> */}
        {/** biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div onClick={() => onClickSummary()} className={styleComponentAccordionSummary}>
          <div
            className={dynamicComponentAccordionSummaryContent.className({
              isAccordionIcon: props.isAccordionIcon,
            })}
            style={dynamicComponentAccordionSummaryContent.style({
              isAccordionIcon: props.isAccordionIcon,
            })}
          >
            {props.accordionSummary}
          </div>
          {props.isAccordionIcon && (
            <Icon
              className={recipeComponentAccordionStyledIcon({
                expanded: props.expanded,
              })}
              onClick={onClickIcon}
              name='Arrow1'
              color='black100'
              type='id'
              size='large'
            />
          )}
        </div>
        <div className={dynamicComponentAccordionDetails.className({ expanded: props.expanded })}>
          {props.accordionDetails}
        </div>
      </div>
    </Stack>
  );
};
