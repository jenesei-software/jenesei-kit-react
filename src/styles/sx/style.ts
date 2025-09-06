import { CSSObject, css, DefaultTheme } from 'styled-components';

import { addSXStyleProps } from '.';

function toStyledCSS(value: CSSObject | ((theme: DefaultTheme) => CSSObject), theme: DefaultTheme) {
  const styles = typeof value === 'function' ? value(theme) : value;
  return css(styles);
}

export const addSX = css<addSXStyleProps>`
  ${(props) => {
    const rawSX = props.$sx;
    if (!rawSX) return null;

    const sx = typeof rawSX === 'function' ? rawSX(props.theme) : rawSX;
    return toStyledCSS(sx.default, props.theme);
  }}

  ${(props) => {
    const rawSX = props.$sx;
    if (!rawSX) return null;

    const sx = typeof rawSX === 'function' ? rawSX(props.theme) : rawSX;

    return Object.entries(sx)
      .filter(([key]) => key !== 'default')
      .map(([deviceKey, value]) => {
        const screenWidth = props.theme.screens[deviceKey as keyof typeof props.theme.screens]?.width;
        if (!screenWidth) return null;
        return css`
          @media (max-width: ${screenWidth}px) {
            ${toStyledCSS(value, props.theme)}
          }
        `;
      });
  }}
`;
