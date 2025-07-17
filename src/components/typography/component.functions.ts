import { css } from 'styled-components';

import { TypographyDataProps } from '.';

export const getFontSizeStyles = (
  size: TypographyDataProps['size'],
  weight: TypographyDataProps['weight'],
  family: TypographyDataProps['family'],
  height?: TypographyDataProps['height'],
) => css`
  font-family: ${family ? family : 'inherit'};
  font-style: normal;
  line-height: ${(props) => (height ? height : props.theme.font.lineHeight)};
  font-size: ${size}px;
  font-weight: ${weight};
`;
