import {test, expect} from "@playwright/test";

test("Handle Dropdown", async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#colors').scrollIntoViewIfNeeded();
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

    // Assertions
    // 1) Check number of options in dropdown
    const options = await page.locator('#colors option')
    await expect(options).toHaveCount(7);

    // 2) Check number of options in dropdown using JS array
    const options1 = await page.$$('#colors option');
    console.log(`Number of Options: ${options1.length}`);
    expect(options1.length).toBe(7);

    // 3) check presence of the value in the dropdown
    const content = await page.locator('#colors').textContent();
    expect(content.includes('Red')).toBeTruthy();
    expect(content.includes('Black')).toBeFalsy();


    // await page.goto("https://www.htmlelements.com/demos/dropdownlist/multiple-selection/index.htm");
    // await page.goto("https://admirhodzic.github.io/multiselect-dropdown/demo.html");

    // select multiple option from multi Select dropdown

    await page.waitForTimeout(2800);
})