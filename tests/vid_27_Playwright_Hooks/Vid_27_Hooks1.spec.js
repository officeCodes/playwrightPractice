import {expect, test} from "@playwright/test";

test('Hooks Test 1', async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    // Login
    await page.locator('id=login2').click();
    await page.locator('#loginusername').fill("pavanol")
    await page.fill("input[id='loginpassword']", 'test@123');
    await page.click("//button[normalize-space()='Log in']");

    await page.waitForTimeout(1890);
    // Home Page
    const products=await page.$$('.hrefch');
    expect(products).toHaveLength(9);

    // Logout
    await page.locator("//a[normalize-space()='Log out']").click();
    await page.close();
})
test('Hooks Test 2', async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    // Login
    await page.locator('id=login2').click();
    await page.locator('#loginusername').fill("pavanol")
    await page.fill("input[id='loginpassword']", 'test@123');
    await page.click("//button[normalize-space()='Log in']");

    // Home Page
    await page.getByRole('link', {name: 'Samsung galaxy s6', exact: true}).click();
    await page.getByRole('link', {name: 'Add to cart', exact: true}).click();

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    })

    await page.waitForTimeout(1890);
    // Logout
    await page.locator("//a[normalize-space()='Log out']").click();
    await page.close();
})