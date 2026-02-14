import {test,expect} from "@playwright/test";

test("Handle CheckBoxes", async ({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
//     single checkbox
    const btn = await page.locator("((//tbody)[1]/tr/td[1]/input)[1]");
    await btn.isVisible();
    await btn.isEnabled();
    await btn.isEditable();
    await btn.click();``
//     await page.locator("((//tbody)[1]/tr/td[1]/input[@wfd-id='id13'])").check();
    await page.check("((//tbody)[1]/tr/td[1]/input)[2]");
    await expect(btn).toBeChecked();
    expect(btn.isChecked()).toBeTruthy();
    await page.waitForTimeout(650);
    await page.check("((//tbody)[1]/tr/td[1]/input)[3]");
    await page.waitForTimeout(650);
    await page.check("((//tbody)[1]/tr/td[1]/input)[4]");
    await page.waitForTimeout(650);
    await page.check("((//tbody)[1]/tr/td[1]/input)[5]");
    await page.waitForTimeout(650);
    await page.check("((//tbody)[1]/tr/td[1]/input)[6]");
    await page.waitForTimeout(650);

    // Multiple checkBoxes
    const checkboxLocators=[
        "((//tbody)[1]/tr/td[1]/input)[1]",
        "((//tbody)[1]/tr/td[1]/input)[2]",
        "((//tbody)[1]/tr/td[1]/input)[3]",
        "((//tbody)[1]/tr/td[1]/input)[4]",
        "((//tbody)[1]/tr/td[1]/input)[5]",
        "((//tbody)[1]/tr/td[1]/input)[6]",
    ];
    for (const locator of checkboxLocators){ // select multiple checkboxes
        await page.locator(locator).check();
    }
    for (const locator of checkboxLocators){ // Un-select multiple checkboxes if not selected
        await page.waitForTimeout(650);
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck();
        }
    }
    // ((//tbody)[2]//input)[1-25]

//

})