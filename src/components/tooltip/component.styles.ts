import styled, { css } from 'styled-components';

import { IThemeSizePropertyDefault, KEY_SIZE_DATA } from '@local/theme';

import { Popover, PopoverProps } from '../popover';
import { Stack } from '../stack';

export const TooltipContainer = styled(Stack)`
  display: flex;
  width: fit-content;
  height: fit-content;
`;

export const addTooltipBoxSize = css<PopoverProps>`
  ${(props) =>
    addTooltipBoxSizeConstructor({
      ...KEY_SIZE_DATA[props.size ?? 'medium'],
    })};
`;
export const addTooltipBoxSizeConstructor = (props: IThemeSizePropertyDefault) => css`
  gap: 0px;
  padding: ${props.padding}px ${props.padding}px 0px ${props.padding}px;
  :after {
    content: '';
    display: block;
    height: ${props.padding}px;
    width: 100%;
  }
`;

/****************************************** TooltipBox *************************************************/
export const TooltipBox = styled(Popover)`
  ${addTooltipBoxSize};
`;
