import { defineConfig } from '@playwright/test';

/**
 * Responsive layout check. Deliberately NOT wired into the deploy workflow: a
 * flaky viewport assertion must never be able to block shipping a content fix.
 * Run it locally before merging anything that touches layout.
 *
 *   npm run test:responsive
 *
 * It runs against `vite preview`, i.e. the real built output, not the dev
 * server — dev injects its own client and styles differently.
 */
export default defineConfig({
  testDir: './e2e',
  // Layout is deterministic; a retry would only hide a real overflow.
  retries: 0,
  workers: 4,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4173',
  },
  webServer: {
    command: 'npm run build && npx vite preview --port 4173 --strictPort',
    url: 'http://localhost:4173',
    // Never reuse. A preview server left running from an earlier session serves
    // the build from that session, so the check passes against code that is no
    // longer on disk. The rebuild costs about five seconds.
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
