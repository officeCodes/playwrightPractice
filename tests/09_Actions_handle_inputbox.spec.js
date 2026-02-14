import {test, expect} from "@playwright/test";

test("Actions - handleInputBox", async ({page}) => {
    // await page.goto('https://itera-qa.azurewebsites.net/home/automation');
    await page.goto('https://demos.telerik.com/kendo-angular-ui/demos/inputs/form/overview');

    //InputBox -- Firstname
    await expect(await page.locator("(//div[@class='k-form-field-wrap']//input)[2]")).toBeVisible();
    await expect(await page.locator("(//div[@class='k-form-field-wrap']//input)[2]")).toBeEmpty();
    await expect(await page.locator("(//div[@class='k-form-field-wrap']//input)[2]")).toBeEditable();
    await expect(await page.locator("(//div[@class='k-form-field-wrap']//input)[2]")).toBeEnabled();
    await page.locator("(//div[@class='k-form-field-wrap']//input)[2]").fill("John"); // if all are true then only fill
    // await page.waitForTimeout(5000);

    await page.goto('https://demos.telerik.com/kendo-react-ui/inputs/radiobutton/overview/func?theme=default-purple');
    // Radio Button
    // await page.locator("(//input[@type='radio'])[3]").check()
    await page.check("(//input[@type='radio'])[3]");
    await expect(await page.locator("(//input[@type='radio'])[3]")).toBeChecked();
    // expect(await page.locator("(//input[@type='radio'])[3]").isChecked()).toBe(true);
    expect(await page.locator("(//input[@type='radio'])[3]").isChecked()).toBeTruthy();

    expect(await page.locator("(//input[@type='radio'])[1]").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
})