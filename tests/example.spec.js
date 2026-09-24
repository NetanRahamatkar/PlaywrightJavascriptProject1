// @ts-check
import { test, expect } from '@playwright/test';

test('Go to Playwright Websit check the title and click on Get Started link', async ({ browser }) => {
  // Create a brand new context that ignores HTTPS errors
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();

  // Navigate to your application
  await page.goto('https://playwright.dev');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

   // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  
  // Clean up context when done
  await context.close();
});


/*

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

*/
