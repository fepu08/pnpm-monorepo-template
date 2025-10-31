import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  {
    files: ['packages/*/src/**/*.{ts,mts,cts,tsx}', 'packages/*/test/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          args: 'all',
        },
      ],
    },
  },
  {
    files: ['**/tailwind.config.js'],
    rules: {},
  },
]);
