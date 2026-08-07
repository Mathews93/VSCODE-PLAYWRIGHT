import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dcloudtesting%2Bcontoso%2Btrading%26oq%3Dcloudtesting%2Bcontoso%2Btrading%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDQ4NDJqMGo0qAIAsAIB%26sourceid%3Dchrome%26source%3Dchrome.ob%26ie%3DUTF-8%26sei%3DuOV0auqjO6G05OUP54_C4Qc&q=EhAoBA1JZhjMALBZmnR7DZUSGLnL09MGIjAPA6P-fPJLL1jw_MH9xV7q4N9k8-yPHgKmhPXarWyiQwnrNVBORTxHbWNVpWv9EAMyAVJaAUM');
});