// 2 syntax of locators
// 1. await page.locator('locator').click()
// 2. await page.click('locator')
import {expect, test} from "@playwright/test";

test('Locators', async ({page})=>{
    await page.goto('https://www.demoblaze.com/');

    // click on login button - property
    await page.locator('id=login2').click();
    // await page.click('#login2');

    // provide text in the input box - CSS selector
    await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername', 'pavanol');

    // provide password - CSS selector
    await page.fill("input[id='loginpassword']", 'test@123');

    // xpath selector
    await page.click("//button[normalize-space()='Log in']")

    // verify logout link is visible or not
    const logoutLink = await page.locator("//a[normalize-space()='Log out']");

    // verify logout link is visible or not
    await expect(logoutLink).toBeVisible();

    await page.waitForTimeout(2000);

    await page.close();
})

// Locators element in playwright
// i. property selector
// ii. css selector
// iii. xpath selector

// -----------------------
//Locate single webElement
// -----------------------
// Link / button
// ---------
// await page.locator('locator').click()
// await page.click('locator');
// ---------
// input box
// ---------
// await page.locator('locator').fill('value')
// await page.locator('locator').type('value') // may be deprecated have to see
// await page.fill('locator', 'value');
// await page.type('locator', 'value');
// -----------------------
//Locate multiple webElements
// -----------------------
// const elements = await page.$$(locator)