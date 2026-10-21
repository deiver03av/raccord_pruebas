import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './',
  timeout: 30 * 1000,
  use: {
    baseURL: 'http://localhost:8081',
    trace: 'on-first-retry',
  },
});