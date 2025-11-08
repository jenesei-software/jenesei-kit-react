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
  const sizesBackgroundWhite: number[] = [];
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
          ['style-theme']: resolve(__dirname, 'src/styles/theme/export.ts'),
          ['style-add']: resolve(__dirname, 'src/styles/add/export.ts'),
          ['style-sx']: resolve(__dirname, 'src/styles/sx/export.ts'),
          ['style-motion']: resolve(__dirname, 'src/styles/motion/export.ts'),

          ['types']: resolve(__dirname, 'src/types.ts'),

          ['functions']: resolve(__dirname, 'src/functions.ts'),

          ['consts']: resolve(__dirname, 'src/consts.ts'),

          ['components-error']: resolve(__dirname, 'src/components/error/export.ts'),
          ['component-range']: resolve(__dirname, 'src/components/range/export.ts'),
          ['component-accordion']: resolve(__dirname, 'src/components/accordion/export.ts'),
          ['component-button']: resolve(__dirname, 'src/components/button/export.ts'),
          ['component-button-group']: resolve(__dirname, 'src/components/button-group/export.ts'),
          ['component-checkbox']: resolve(__dirname, 'src/components/checkbox/export.ts'),
          ['component-checkbox-group']: resolve(__dirname, 'src/components/checkbox-group/export.ts'),
          ['component-date-picker']: resolve(__dirname, 'src/components/date-picker/export.ts'),
          ['component-icon']: resolve(__dirname, 'src/components/icon/export.ts'),
          ['component-image']: resolve(__dirname, 'src/components/image/export.ts'),
          ['component-image-select']: resolve(__dirname, 'src/components/image-select/export.ts'),
          ['component-image-slider']: resolve(__dirname, 'src/components/image-slider/export.ts'),
          ['component-image-button']: resolve(__dirname, 'src/components/image-button/export.ts'),
          ['component-input']: resolve(__dirname, 'src/components/input/export.ts'),
          ['component-input-otp']: resolve(__dirname, 'src/components/input-otp/export.ts'),
          ['component-pagination']: resolve(__dirname, 'src/components/pagination/export.ts'),
          ['component-ripple']: resolve(__dirname, 'src/components/ripple/export.ts'),
          ['component-select']: resolve(__dirname, 'src/components/select/export.ts'),
          ['component-separator']: resolve(__dirname, 'src/components/separator/export.ts'),
          ['component-stack']: resolve(__dirname, 'src/components/stack/export.ts'),
          ['component-textarea']: resolve(__dirname, 'src/components/textarea/export.ts'),
          ['component-toggle']: resolve(__dirname, 'src/components/toggle/export.ts'),
          ['component-tooltip']: resolve(__dirname, 'src/components/tooltip/export.ts'),
          ['component-typography']: resolve(__dirname, 'src/components/typography/export.ts'),

          ['area-outside']: resolve(__dirname, 'src/areas/outside/export.ts'),
          ['area-preview']: resolve(__dirname, 'src/areas/preview/export.ts'),
          ['area-scroll']: resolve(__dirname, 'src/areas/scroll/export.ts'),
          ['area-skeleton']: resolve(__dirname, 'src/areas/skeleton/export.ts'),
          ['area-smooth']: resolve(__dirname, 'src/areas/smooth/export.ts'),

          ['hooks-use-debounced-callback']: resolve(__dirname, 'src/hooks/use-debounced-callback/export.ts'),
          ['hooks-use-deep-compare-memoize']: resolve(__dirname, 'src/hooks/use-deep-compare-memoize/export.ts'),

          ['context-app']: resolve(__dirname, 'src/contexts/context-app/export.ts'),
          ['context-cookie']: resolve(__dirname, 'src/contexts/context-cookie/export.ts'),
          ['context-dialog']: resolve(__dirname, 'src/contexts/context-dialog/export.ts'),
          ['context-geolocation']: resolve(__dirname, 'src/contexts/context-geolocation/export.ts'),
          ['context-local-storage']: resolve(__dirname, 'src/contexts/context-local-storage/export.ts'),
          ['context-permission']: resolve(__dirname, 'src/contexts/context-permission/export.ts'),
          ['context-screen-width']: resolve(__dirname, 'src/contexts/context-screen-width/export.ts'),
          ['context-sonner']: resolve(__dirname, 'src/contexts/context-sonner/export.ts'),
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
