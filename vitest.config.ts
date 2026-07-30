import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Must mirror vite.config.ts, otherwise any test importing '@/...' fails to resolve.
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    globals: true,
    // e2e/ is Playwright's. Vitest's default include matches **/*.spec.ts, so
    // without this it picks up the responsive check and dies importing
    // @playwright/test. Extend the defaults rather than replacing them —
    // replacing drops the node_modules exclusion and Vitest then tries to run
    // every spec file in every installed package.
    exclude: [...configDefaults.exclude, 'e2e/**'],
  },
});
