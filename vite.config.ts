import { pluginUpdateIcons, pluginUpdateReadmePD } from '@jenesei-software/jenesei-plugin-vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { logger } from './src/cores/logger';
import process from 'node:process';

export default defineConfig(() => {
  const isStorybook = process.env.NODE_ENV === 'storybook';
  const rollupExternal = ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'];

  logger.info('isStorybookBuild: ', String(isStorybook));
  
  const sizesBackgroundTransparent = [57, 64, 72, 76, 114, 120, 144, 152, 180, 192, 256, 384, 512];
  const sizesBackgroundWhite: number[] = [];
  const sizesFavicon = [64];

  return {
    resolve: {
      tsconfigPaths: true,
      alias: {
        '@local': path.resolve(__dirname, './src'),
      },
    },
    css: {
      postcss: {
        plugins: [autoprefixer({})],
      },
    },
    plugins: [
      isStorybook &&
        pluginUpdateIcons({
          pathInputFile: path.resolve(__dirname, '.storybook-public/logos/logo-jenesei-kit-react.png'),
          pathOutputDirectory: path.resolve(__dirname, '.storybook-public/icons'),
          prefix: 'icon',
          sizesBackgroundTransparent: sizesBackgroundTransparent,
          sizesBackgroundWhite: sizesBackgroundWhite,
          sizesFavicon: sizesFavicon,
        }),
      isStorybook &&
        pluginUpdateReadmePD({
          insertionPoint: '# IMPORTANT',
          pathReadme: resolve(__dirname, 'README.md'),
          pathPackageJson: resolve(__dirname, 'package.json'),
        }),
      react(),
      !isStorybook &&
        dts({
          tsconfigPath: './tsconfig.json',
          outDir: './build',
          entryRoot: './src',
          compilerOptions: {
            rootDir: './src',
          },
          insertTypesEntry: true,
          logLevel: 'info',
        }),
    ].filter(Boolean),
    publicDir: false,
    build: {
      sourcemap: true,
      outDir: './build',
      rootDir: './src',
      minify: 'esbuild',
      lib: !isStorybook
        ? {
            entry: {
              index: resolve(__dirname, 'src/index.ts'),
              'style-motion': resolve(__dirname, 'src/styles/motion/index.ts'),
              'style-utils': resolve(__dirname, 'src/styles/utils/index.ts'),

              'components-error': resolve(__dirname, 'src/components/error/index.ts'),
              'component-button': resolve(__dirname, 'src/components/button/index.ts'),
              'component-checkbox': resolve(__dirname, 'src/components/checkbox/index.ts'),
              'component-date-picker': resolve(__dirname, 'src/components/date-picker/index.ts'),
              'component-icon': resolve(__dirname, 'src/components/icon/index.ts'),
              'component-input': resolve(__dirname, 'src/components/input/index.ts'),
              'component-input-otp': resolve(__dirname, 'src/components/input-otp/index.ts'),
              'component-pagination': resolve(__dirname, 'src/components/pagination/index.ts'),
              'component-popover': resolve(__dirname, 'src/components/popover/index.ts'),
              'component-select': resolve(__dirname, 'src/components/select/index.ts'),
              'component-separator': resolve(__dirname, 'src/components/separator/index.ts'),
              'component-stack': resolve(__dirname, 'src/components/stack/index.ts'),
              'component-textarea': resolve(__dirname, 'src/components/textarea/index.ts'),
              'component-toggle': resolve(__dirname, 'src/components/toggle/index.ts'),
              'component-tooltip': resolve(__dirname, 'src/components/tooltip/index.ts'),
              'component-typography': resolve(__dirname, 'src/components/typography/index.ts'),

              'area-outside': resolve(__dirname, 'src/areas/outside/index.ts'),
              'area-preview': resolve(__dirname, 'src/areas/preview/index.ts'),
              'area-skeleton': resolve(__dirname, 'src/areas/skeleton/index.ts'),

              'hooks-use-debounced-callback': resolve(__dirname, 'src/hooks/use-debounced-callback/index.ts'),
              'hooks-use-deep-compare-memoize': resolve(__dirname, 'src/hooks/use-deep-compare-memoize/index.ts'),
              'hooks-use-deep-memo': resolve(__dirname, 'src/hooks/use-deep-memo/index.ts'),
              'hooks-use-merge-refs': resolve(__dirname, 'src/hooks/use-merge-refs/index.ts'),
              'hooks-use-overflowing': resolve(__dirname, 'src/hooks/use-overflowing/index.ts'),
              'hooks-use-overflowing-advanced': resolve(__dirname, 'src/hooks/use-overflowing-advanced/index.ts'),
              'hooks-use-overflowing-in-container': resolve(
                __dirname,
                'src/hooks/use-overflowing-in-container/index.ts',
              ),
              'hooks-use-responsive-layout': resolve(__dirname, 'src/hooks/use-responsive-layout/index.ts'),
              'hooks-use-typography-styles': resolve(__dirname, 'src/hooks/use-typography-styles/index.ts'),

              'context-app': resolve(__dirname, 'src/contexts/context-app/index.ts'),
              'context-browser-theme': resolve(__dirname, 'src/contexts/context-browser-theme/index.ts'),
              'context-cookie': resolve(__dirname, 'src/contexts/context-cookie/index.ts'),
              'context-dialog': resolve(__dirname, 'src/contexts/context-dialog/index.ts'),
              'context-geolocation': resolve(__dirname, 'src/contexts/context-geolocation/index.ts'),
              'context-local-storage': resolve(__dirname, 'src/contexts/context-local-storage/index.ts'),
              'context-permission': resolve(__dirname, 'src/contexts/context-permission/index.ts'),
              'context-screen-width': resolve(__dirname, 'src/contexts/context-screen-width/index.ts'),
              'context-sonner': resolve(__dirname, 'src/contexts/context-sonner/index.ts'),
            },
            formats: ['es', 'cjs'],
            fileName: (format, name) => `${name}.${format}.js`,
          }
        : false,
      rollupOptions: {
        external: rollupExternal,
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            moment: 'moment',
            'react-number-format': 'reactNumberFormat',
            '@tanstack/react-virtual': 'reactVirtual',
            'js-cookie': 'Cookies',
          },
        },
      },
    },
  };
});
