import type { Preview } from '@storybook/react-vite';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { ProviderBrowserTheme, useBrowserTheme } from '../src/contexts/context-browser-theme/export';
import { ProviderDialog } from '../src/contexts/context-dialog/export';
import { ProviderGeolocation } from '../src/contexts/context-geolocation/export';
import { ProviderPermission } from '../src/contexts/context-permission/export';
import { ProviderScreenWidth } from '../src/contexts/context-screen-width/export';
import { JeneseiGlobalStyles, ThemeDark, ThemeLight } from '../src/styles/theme/index';

import '@fontsource/inter/100.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';
import '@fontsource/roboto-mono/100.css';
import '@fontsource/roboto-mono/300.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/500.css';
import '@fontsource/roboto-mono/700.css';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import '@fontsource/work-sans/100.css';
import '@fontsource/work-sans/300.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/700.css';
import '@fontsource/work-sans/900.css';
import '@fontsource/manrope/300.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/700.css';

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ProviderPermission>
          <ProviderGeolocation>
            <ProviderBrowserTheme>
              <Layout>
                <Story />
              </Layout>
            </ProviderBrowserTheme>
          </ProviderGeolocation>
        </ProviderPermission>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const Layout = (props: PropsWithChildren) => {
  const { theme } = useBrowserTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? ThemeLight : ThemeDark}>
      <ProviderScreenWidth>
        <JeneseiGlobalStyles />
        <ProviderDialog zIndex={1000}>{props.children}</ProviderDialog>
      </ProviderScreenWidth>
    </ThemeProvider>
  );
};
export default preview;
