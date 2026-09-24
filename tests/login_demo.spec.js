import { test, expect } from '@playwright/test'

test('Demo login test 1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');
    //await page.pause();

    await page.locator('[placeholder="Enter your username"]').fill('Raghav');
    await page.locator('[placeholder="Enter your password"]').fill('1234');

    await page.waitForSelector('text=Sign in', { timeout: 5000 })
    await page.locator('text=Sign in').click();

    await page.locator('text=ACME').isVisible();


})




test('Demo login test 2', async ({ page }) => {

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   await page.pause();

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('admin123 user').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  await page.close();

})




test.only('Demo test login 3', async({page}) =>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('admin123 user').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  await page.close();
})
