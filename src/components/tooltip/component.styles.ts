import { Popover, PopoverProps } from '@local/components/popover/export';
import { Stack } from '@local/components/stack/export';
import { KEY_SIZE_DATA } from '@local/styles/theme/export';

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
      padding: ${KEY_SIZE_DATA[props.size ?? 'medium'].padding}px ${KEY_SIZE_DATA[props.size ?? 'medium'].padding}px 0px ${KEY_SIZE_DATA[props.size ?? 'medium'].padding}px;
      :after {
        content: '';
        display: block;
        height: ${KEY_SIZE_DATA[props.size ?? 'medium'].padding}px;
        width: 100%;
      }
   `};
`;

/****************************************** TooltipBox *************************************************/
export const TooltipBox = styled(Popover)`
  ${addTooltipBoxSize};
`;
