import { addFontSizeTransition, addOutline } from '@local/styles/add';
import { addSX as addSXStandard, addSXTypography } from '@local/styles/sx';

import styled, { css } from 'styled-components';

import { TypographyCSSProps } from '.';

const addTypographyCSS = css<TypographyCSSProps>`
  font-style: normal;
  position: relative;
  overflow: visible;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  ${addFontSizeTransition};
  ${addSXTypography};
  ${addSXStandard}
`;

export const Title = styled.span<TypographyCSSProps>`
  ${addTypographyCSS}
  ${addOutline}
`;
