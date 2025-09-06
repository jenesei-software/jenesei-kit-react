import 'styled-components';

import { ITheme } from '@local/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
