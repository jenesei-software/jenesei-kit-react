import 'styled-components';

import { ITheme } from '@local/styles/theme/export';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
