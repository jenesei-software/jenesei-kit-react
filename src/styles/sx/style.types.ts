import { IThemeDevice } from '@local/theme';
import { AddDollarSign } from '@local/types';

import { CSSObject, DefaultTheme } from 'styled-components';

type SXProps =
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

export interface addSXProps {
  sx?: SXProps;
}
export type addSXPropsDollar = AddDollarSign<addSXProps>;
