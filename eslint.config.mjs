import pluginJs from '@eslint/js'
import configPrettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginStorybook from 'eslint-plugin-storybook'
import globals from 'globals'
import pluginTypescript from 'typescript-eslint'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: pluginTypescript.parser,
      globals: {
        ...globals.node,
        ...globals.browser
      }
    }
  },
  ...pluginTypescript.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginJs.configs.recommended,
  configPrettier,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      storybook: pluginStorybook,
      prettier: pluginPrettier
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'storybook/hierarchy-separator': 'error',
      'storybook/default-exports': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
