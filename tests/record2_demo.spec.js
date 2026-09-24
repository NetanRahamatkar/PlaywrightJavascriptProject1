import { test } from '@playwright/test';

test('record demo2', async ({ browser }) => {
  // Setup isolated tracing context locally inside the test
  const context = await browser.newContext();
  await context.tracing.start({ snapshots: true, screenshots: true });
  const page = await context.newPage();

  try {
    await page.goto('https://saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    
    // Failing action
    await page.locator('[data-test="logout-sidebar-link123"]').click(); 
  } catch (error) {
    // Catch the error early so we can safely save the trace before closing down
    await context.tracing.stop({ path: 'test3_trace.zip' });
    await context.close();
    
    // Re-throw the error so the test correctly reports as FAILED in your terminal
    throw error; 
  }

  // Fallback for when the test passes completely
  await context.tracing.stop();
  await context.close();
});
