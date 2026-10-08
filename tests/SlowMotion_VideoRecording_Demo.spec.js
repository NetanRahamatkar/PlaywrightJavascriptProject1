import {test, expect, chromium} from '@playwright/test'

test('Slow motion and video recording demo', async() =>{

    const browser = await chromium.launch({

        slowMo: 500,
        headless: false
    });

    const context = await browser.newContext({

        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 600}
        }
    });

    const page = await context.newPage();

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

    await context.close();
})