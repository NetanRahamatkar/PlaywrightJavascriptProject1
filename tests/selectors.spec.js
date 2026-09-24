import {test, expect} from '@playwright/test'

test('selectors demo', async({page}) => {


    await page.goto('https://www.saucedemo.com/');
    await page.pause();

    //using any object property
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('edison');
    await page.locator('[id="user-name"]').fill('einstein');

    //using CSS Selector
    //#login-button
    await page.locator('#login-button').click();

    //using XPath
    await page.locator('xpath=//input[@name="password"]').fill('secret_sauce');
    await page.locator('//input[@name="password"]').fill('Ramanujan');

    //using Text
    await page.locator('text=LOGIN').click();
    await page.locator('input:has-text("LOGIN")').click();
});