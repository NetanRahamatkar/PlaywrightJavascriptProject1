const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  // ---------------------
  await context.close();
  await browser.close();
})();