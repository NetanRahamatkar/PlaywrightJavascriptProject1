import { test, expect } from '@playwright/test';

test('test', async ({ page,context }) => {
  
  //tracing start
  await context.tracing.start({snapshots: true,screenshots: true});
try{
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button123"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
}finally{
  //tracing end
  await context.tracing.stop({path: 'test1_trace.zip'});
}
});