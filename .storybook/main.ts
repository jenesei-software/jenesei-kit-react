import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../.storybook-stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  staticDirs: ['../.storybook-public'],
  viteFinal: (config) => {
    return config;
  },
  managerHead: (head) => ` 
    ${head}
    <link rel="shortcut icon" href="icons/icon-64x64-favicon.ico" />
    <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href="icons/icon-64x64-favicon.ico"
    />
    <link rel="apple-touch-icon" sizes="57x57" href="icons/icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="icons/icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="icons/icon-76x76.png" />
    <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="icons/icon-114x114.png"
    />
    <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="icons/icon-1204x120.png"
    />
    <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="icons/icon-144x144.png"
    />
    <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="icons/icon-152x152.png"
    />
    <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="icons/icon-180x180.png"
    />
    <link rel="manifest" href="/manifest.webmanifest" />
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
  `,
};
export default config;
