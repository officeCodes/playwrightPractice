import {test, expect} from "@playwright/test";

test('Page Screnshot', async({page})=>{
    await page.goto("https://petstore.octoperf.com/actions/Catalog.action");
    // way - 1
    // Bydefault it will save the file inside project directory
        // and if you run multiple times with the same name then it will Override the old file with new file
    await page.screenshot({path: 'PetStore.png'}); // E:\self-automation-script\jsPlaywright\1\PetStore.png

    // way - 2
    await page.goto("https://petstore.octoperf.com/actions/Catalog.action?viewItem=&itemId=EST-8");
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await page.screenshot({
        path: `tests/screenshots/${timestamp}_MyFavDog.png`
    });

    // way - 3 // take full page screenshot
    await page.goto("https://www.amazon.in");
    await page.waitForTimeout(3800);
    await page.screenshot({path: `tests/screenshots/${timestamp}_AmazonHome.png`, fullPage: true});

    // way - 4 // capture specific area or locator or element inside that webpage
    await page.goto("https://www.neal.fun");
    await page.waitForTimeout(1800);
    await page.getByAltText('Wonders of Street View').screenshot({path: `tests/screenshots/${timestamp}_neal.png`}) // await page.locator().screenshot() also works

    // continue here....
    // 17:38min vid 29
})