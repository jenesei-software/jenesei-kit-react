import { addFontSizeTransition, addOutline, addSX as addSXStandard, addSXTypography } from '@local/styles/add';

import styled, { css } from 'styled-components';

import { TypographyPropsDollar } from './component.types';

const addTypographyCSS = css<TypographyPropsDollar>`
  font-style: normal;
  position: relative;
  overflow: visible;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  ${addFontSizeTransition};
  ${addSXTypography};
  ${addSXStandard}
`;

export const Title = styled.span<TypographyPropsDollar>`
  ${addTypographyCSS}
  ${addOutline}
`;
