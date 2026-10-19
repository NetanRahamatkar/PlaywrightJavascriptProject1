import {test} from '@playwright/test'

test.skip('Test one', async({page}) => {

    // This test is not run
});


test('not yet ready', async ({ page }) => {

    test.fail();
});

test.fixme('test to be fixed', async ({ page }) => {
    //...
});

test('slow test', async ({ page }) => {
    test.slow();
    //...
});

test.only('focus this test', async({page}) => {
    //Run only focused tests in the entire project
})

test.only('skip this test', async({ page,browserName}) => {
    test.skip(browserName === 'firefox','still working on it');
})

//Tags
test('Test login page @smoke', async ({ page }) => {

})