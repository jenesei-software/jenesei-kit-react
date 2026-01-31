import { Popover, PopoverProps } from '@local/components/popover';
import { Stack } from '@local/components/stack';
import { THEME_KEY_SIZE } from '@local/styles/theme';

import styled, { css } from 'styled-components';

export const TooltipContainer = styled(Stack)`
  display: flex;
  width: fit-content;
  height: fit-content;
`;

export const addTooltipBoxSize = css<PopoverProps>`
  ${(props) =>
    css`
      gap: 0px;
      padding: ${THEME_KEY_SIZE[props.size ?? 'medium'].padding}px ${THEME_KEY_SIZE[props.size ?? 'medium'].padding}px 0px ${THEME_KEY_SIZE[props.size ?? 'medium'].padding}px;
      :after {
        content: '';
        display: block;
        height: ${THEME_KEY_SIZE[props.size ?? 'medium'].padding}px;
        width: 100%;
      }
   `};
`;

/****************************************** TooltipBox *************************************************/
export const TooltipBox = styled(Popover)`
  ${addTooltipBoxSize};
`;
