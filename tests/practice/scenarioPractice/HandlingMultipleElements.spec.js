import {test} from "@playwright/test";

test('Click on latest collector', async ({page}) => {
    await page.goto("https://dev.prot.powerbaar.com:4200/deployments");
    await page.click("//a/span[text()='Deployments']/parent::a");
    await page.fill("//input[@type='search']", "ILM - Reactive Data Collector-baartech-dev-v")
    await page.waitForTimeout(1800);
    const results= await page.$$("//tbody/tr/td[2]/div/a");

    for(const res of results){

    }

});