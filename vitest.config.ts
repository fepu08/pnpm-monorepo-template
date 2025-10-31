import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Global test configuration for the monorepo
    globals: true,
    environment: 'node',
    include: [
      'packages/*/test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'coverage/**',
        'dist/**',
        'packages/*/test/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/node_modules/**',
      ],
    },
  },
});
