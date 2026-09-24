
import test, {page, expect} from '@playwright/test'

test('Assertions Demo', async({page}) => {

    await page.goto('https://kitchen.applitools.com/');
    await page.pause();
    //ASSERTIONS
    //check element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);

    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click();
    }

})