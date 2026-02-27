import {test,expect} from "@playwright/test";

test("Vid 19 - Handle Pagination Table", async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.fill("#datepicker", '03/15/2024');

    // handle date picker
    const expectedYear='2029'
    const expectedMonth='March'
    const expectedDate='20'

    await page.click("#datepicker"); // opens calendar
    while(true){
        const currentYear=await page.locator('.ui-datepicker-year').textContent();
        const currentMonth=await page.locator('.ui-datepicker-month').textContent();

        if (currentYear===expectedYear && currentMonth===expectedMonth){
            break;
        }
        await page.locator('[title="Next"]').click() // Next
        // await page.locator('[title="Prev"]').click() // Previous
    }

    const dates=await page.$$("//a[@class='ui-state-default']");
    // date selection in loop
    for (const dt of dates){
        if(await dt.textContent()===expectedDate){
            await dt.click();
            break;
        }
    }
    const expectedDate2=29
    // date selection - without loop
    await page.locator(`//a[@class='ui-state-default'][text()=${expectedDate2}]`);

    await page.waitForTimeout(3000);
})