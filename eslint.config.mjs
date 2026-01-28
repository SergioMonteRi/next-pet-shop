import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,
  {
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort,
      'unused-imports': unusedImports,
    },

    files: ['**/*.{js,jsx,ts,tsx}'],

    rules: {
      // React / arrow preferences
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',

      // Disable base rule (conflicts with TS)
      'no-unused-vars': 'off',

      // TS unused vars = ERROR
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Unused imports = ERROR (and autofix)
      'unused-imports/no-unused-imports': 'error',

      // Import sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'src/generated/prisma/**',
    'pgdata/**',
    'node_modules/**',
  ]),
])

export default eslintConfig
