import { pluginUpdateIcons, pluginUpdateReadmePD } from '@jenesei-software/jenesei-plugin-vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import process from 'process';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

import { peerDependencies } from './package.json';

export default defineConfig(() => {
  const isStorybook = process.env.NODE_ENV === 'storybook';

  console.log('isStorybookBuild: ', String(isStorybook));

  const sizesBackgroundTransparent = [57, 64, 72, 76, 114, 120, 144, 152, 180, 192, 256, 384, 512];
  const sizesBackgroundWhite = [];
  const sizesFavicon = [64];

  return {
    resolve: {
      alias: {
        '@local': path.resolve(__dirname, './src'),
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
      pluginUpdateReadmePD({
        insertionPoint: '# IMPORTANT',
        pathReadme: resolve(__dirname, 'README.md'),
        pathPackageJson: resolve(__dirname, 'package.json'),
      }),
      react(),
      tsconfigPaths(),
      !isStorybook &&
        dts({
          include: ['src/'],
          rollupTypes: true,
          insertTypesEntry: true,
          tsconfigPath: './tsconfig.json',
        }),
    ].filter(Boolean),
    publicDir: false,
    build: {
      sourcemap: true,
      outDir: './build',
      rootDir: './src',
      minify: 'terser',
      lib: {
        entry: {
          index: resolve(__dirname, 'src/index.ts'),
          ['style-theme']: resolve(__dirname, 'src/theme/index.ts'),

          ['style-add']: resolve(__dirname, 'src/styles/add/index.ts'),
          ['style-error']: resolve(__dirname, 'src/styles/error/index.ts'),
          ['style-sx']: resolve(__dirname, 'src/styles/sx/index.ts'),
          ['style-motion']: resolve(__dirname, 'src/styles/motion/index.ts'),

          ['types']: resolve(__dirname, 'src/types.ts'),

          ['functions']: resolve(__dirname, 'src/functions.ts'),

          ['consts']: resolve(__dirname, 'src/consts.ts'),

          ['component-range']: resolve(__dirname, 'src/components/range/index.ts'),
          ['component-accordion']: resolve(__dirname, 'src/components/accordion/index.ts'),
          ['component-button']: resolve(__dirname, 'src/components/button/index.ts'),
          ['component-button-group']: resolve(__dirname, 'src/components/button-group/index.ts'),
          ['component-checkbox']: resolve(__dirname, 'src/components/checkbox/index.ts'),
          ['component-checkbox-group']: resolve(__dirname, 'src/components/checkbox-group/index.ts'),
          ['component-date-picker']: resolve(__dirname, 'src/components/date-picker/index.ts'),
          ['component-icon']: resolve(__dirname, 'src/components/icon/index.ts'),
          ['component-image']: resolve(__dirname, 'src/components/image/index.ts'),
          ['component-image-select']: resolve(__dirname, 'src/components/image-select/index.ts'),
          ['component-image-slider']: resolve(__dirname, 'src/components/image-slider/index.ts'),
          ['component-image-button']: resolve(__dirname, 'src/components/image-button/index.ts'),
          ['component-input']: resolve(__dirname, 'src/components/input/index.ts'),
          ['component-input-otp']: resolve(__dirname, 'src/components/input-otp/index.ts'),
          ['component-map']: resolve(__dirname, 'src/components/map/index.ts'),
          ['component-pagination']: resolve(__dirname, 'src/components/pagination/index.ts'),
          ['component-ripple']: resolve(__dirname, 'src/components/ripple/index.ts'),
          ['component-select']: resolve(__dirname, 'src/components/select/index.ts'),
          ['component-separator']: resolve(__dirname, 'src/components/separator/index.ts'),
          ['component-stack']: resolve(__dirname, 'src/components/stack/index.ts'),
          ['component-textarea']: resolve(__dirname, 'src/components/textarea/index.ts'),
          ['component-toggle']: resolve(__dirname, 'src/components/toggle/index.ts'),
          ['component-tooltip']: resolve(__dirname, 'src/components/tooltip/index.ts'),
          ['component-typography']: resolve(__dirname, 'src/components/typography/index.ts'),

          ['area-outside']: resolve(__dirname, 'src/areas/outside/index.ts'),
          ['area-preview']: resolve(__dirname, 'src/areas/preview/index.ts'),
          ['area-scroll']: resolve(__dirname, 'src/areas/scroll/index.ts'),
          ['area-skeleton']: resolve(__dirname, 'src/areas/skeleton/index.ts'),
          ['area-smooth']: resolve(__dirname, 'src/areas/smooth/index.ts'),

          ['hooks-use-debounced-callback']: resolve(__dirname, 'src/hooks/use-debounced-callback/index.ts'),
          ['hooks-use-deep-compare-memoize']: resolve(__dirname, 'src/hooks/use-deep-compare-memoize/index.ts'),

          ['context-app']: resolve(__dirname, 'src/contexts/context-app/index.ts'),
          ['context-cookie']: resolve(__dirname, 'src/contexts/context-cookie/index.ts'),
          ['context-dialog']: resolve(__dirname, 'src/contexts/context-dialog/index.ts'),
          ['context-geolocation']: resolve(__dirname, 'src/contexts/context-geolocation/index.ts'),
          ['context-local-storage']: resolve(__dirname, 'src/contexts/context-local-storage/index.ts'),
          ['context-permission']: resolve(__dirname, 'src/contexts/context-permission/index.ts'),
          ['context-screen-width']: resolve(__dirname, 'src/contexts/context-screen-width/index.ts'),
          ['context-sonner']: resolve(__dirname, 'src/contexts/context-sonner/index.ts'),
        },
        formats: ['es', 'cjs'],
        fileName: (format, name) => `${name}.${format}.js`,
      },
      rollupOptions: {
        external: Object.keys(peerDependencies),
        output: {
          globals: {
            'styled-components': 'styled',
            'styled-reset': 'reset',
            react: 'React',
            'react-dom': 'ReactDOM',
            moment: 'moment',
            'react-number-format': 'reactNumberFormat',
            '@tanstack/react-virtual': 'reactVirtual',
            'js-cookie': 'Cookies',
            '@tanstack/react-router': 'reactRouter',
          },
        },
      },
    },
  };
});
