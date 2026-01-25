import 'styled-components';

import { ITheme } from '@local/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
