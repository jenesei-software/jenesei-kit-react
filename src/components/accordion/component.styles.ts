import { Icon } from '@local/components/icon/export';
import { addTransition } from '@local/styles/add/export';

import styled, { css } from 'styled-components';

import { AccordionDetailsProps, AccordionStyledIconProps, AccordionSummaryContentProps } from '.';

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const AccordionSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;
export const AccordionSummaryContent = styled.div<AccordionSummaryContentProps>`
  width: 100%;

  ${(props) =>
    props.$isAccordionIcon &&
    css`
      width: calc(100% - 26px);
    `}
`;
export const AccordionDetails = styled.div<AccordionDetailsProps>`
  max-height: ${(props) => (props.$expanded ? '9999px' : '0')};
  height: ${(props) => (props.$expanded ? '100%' : '0')};
  opacity: ${(props) => (props.$expanded ? 1 : 0)};
  overflow: hidden;
  ${addTransition};
`;
export const AccordionStyledIcon = styled(Icon)<AccordionStyledIconProps>`
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  ${(props) =>
    props.$expanded
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `}
`;
