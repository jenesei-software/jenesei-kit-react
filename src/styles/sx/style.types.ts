import { CSSObject, DefaultTheme } from 'styled-components';

import { IThemeDevice } from '@local/theme';
import { AddDollarSign } from '@local/types';

export interface addSXProps {
  sx?: SXProps;
}
export type SXProps =
  | ({
      default: CSSObject;
    } & {
      [K in IThemeDevice]?: CSSObject;
    })
  | ((theme: DefaultTheme) => {
      default: CSSObject;
    } & {
      [K in IThemeDevice]?: CSSObject;
    });

export type addSXStyleProps = AddDollarSign<addSXProps>;
