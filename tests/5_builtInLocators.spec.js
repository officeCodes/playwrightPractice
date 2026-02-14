/*
* Built in Locators in Playwright
* ---------------------------------
* page.getByRole() to locate by explicit and implicit accessibility attributes
* page.getByText() to locate by text content.
* page.getByLabel() to locate a form control by associated label's text.
* page.getByPlaceholder() to locate an input by placeholder.
* page.getByAltText() to locate an element, usually image, by its text alternative.
* page.getByTitle() to locate an element by it's title attribute.
* page.getByTestId() to locate an element based on it's data-testid attribute
* */
// import {test, expect} from "@playwright/test";
import {test, expect} from '@playwright/test';

test('Built-in Locators', async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible(); // assertion

    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    await page.getByRole('button', {type: 'submit'}).click();

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

    await expect(await page.getByText(name)).toBeVisible();

    await expect(await page.getByText('manda user')).toBeVisible();

    await page.waitForTimeout(7000);   
})
// multiple role thakley ki hobe??
// m
// test('getByRole multiple button', async ({page}) => {
//     await page.goto("file:///d:/CodeLer/ofc_playwrightPrac/playwrightPractice/index.html");
//     const buttons = await page.getByRole('button');
//     // await expect(buttons).toHaveCount(2);
//     console.log(typeof buttons);
//     console.log(buttons);    
//     for (const button of buttons) {
//         console.log(await button.textContent());
//     }
// })