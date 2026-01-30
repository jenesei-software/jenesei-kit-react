import type { Preview } from '@storybook/react-vite';
import { PropsWithChildren, StrictMode } from 'react';

import { ProviderBrowserTheme } from '../src/contexts/context-browser-theme';
import { ProviderDialog } from '../src/contexts/context-dialog';
import { ProviderGeolocation } from '../src/contexts/context-geolocation';
import { ProviderPermission } from '../src/contexts/context-permission';
import { ProviderScreenWidth } from '../src/contexts/context-screen-width';

import '@fontsource/inter/100.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';
import '@fontsource/manrope/300.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/700.css';
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

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <StrictMode>
          <ProviderPermission>
            <ProviderGeolocation>
              <ProviderBrowserTheme>
                <Layout>
                  <Story />
                </Layout>
              </ProviderBrowserTheme>
            </ProviderGeolocation>
          </ProviderPermission>
        </StrictMode>
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
  // const { theme } = useBrowserTheme();
  return (
    <ProviderScreenWidth>
      <ProviderDialog zIndex={1000}>{props.children}</ProviderDialog>
    </ProviderScreenWidth>
  );
};
export default preview;
