import pluginJs from '@eslint/js'
import prettier from 'eslint-config-prettier'
import pluginReact from 'eslint-plugin-react'
import sort from 'eslint-plugin-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  sort.configs['flat/recommended'],
  prettier,
  {
    files: ['index.ts'],
    rules: {
      'sort/exports': [
        'error',
        {
          caseSensitive: false,
          groups: [],
          natural: true,
          typeOrder: 'preserve',
        },
      ],
    },
  },
  {
    rules: {
      'sort/imports': [
        'warn',
        {
          groups: [
            { order: 10, type: 'side-effect' },
            { order: 20, type: 'dependency' },
            { order: 30, regex: '^(.*?)pages(.*?)$' },
            { order: 31, regex: '^(.*?)layouts(.*?)$' },
            { order: 32, regex: '^(.*?)widgets(.*?)$' },
            { order: 33, regex: '^(.*?)features(.*?)$' },
            { order: 34, regex: '^(.*?)entities(.*?)$' },
            { order: 35, regex: '^(.*?)shared(.*?)$' },
            { order: 40, type: 'other' },
          ],
          separator: '\n',
        },
      ],
    },
  },
  {
    rules: {
      'sort/object-properties': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    ignores: ['dist'],
  },
]
