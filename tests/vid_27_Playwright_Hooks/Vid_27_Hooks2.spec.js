import {expect, test} from "@playwright/test";

/*
* Notice:-
* 1) In beforeEach and afterEach We Can't pass "Page" Fixture Directly.
*   1.1) Instead we need to pass "Browser" Fixture
*   1.2) And From there we need to extract page fixture
* 2) and Also remember declare "page" fixture once and use it everywhere when working with Hooks.
*   2.1) share same "page" fixture in every test... while working with hooks
* */
let page;
// Login Before Every test() block executes
test.beforeEach(async ({browser})=>{
    page=await browser.newPage();
    await page.goto('https://www.demoblaze.com/');
    // Login
    await page.locator('id=login2').click();
    await page.locator('#loginusername').fill("pavanol")
    await page.fill("input[id='loginpassword']", 'test@123');
    await page.click("//button[normalize-space()='Log in']");
})
//
test.afterEach(async ({})=>{
    // Logout
    await page.locator("//a[normalize-space()='Log out']").click();
})

test('Validate Products Count Test', async ({})=>{
    await page.waitForTimeout(1890);
    const products=await page.$$('.hrefch');
    expect(products).toHaveLength(9);
})
test('Add Product to Cart Test', async ({})=>{
    // Home Page
    await page.getByRole('link', {name: 'Samsung galaxy s7', exact: true}).click();
    await page.getByRole('link', {name: 'Add to cart', exact: true}).click();
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    })
    await page.waitForTimeout(1890);
})