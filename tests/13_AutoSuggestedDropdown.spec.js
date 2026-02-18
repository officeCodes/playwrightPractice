//13_AutoSuggestedDropdown.spec.js
import {test, expect} from '@playwright/test';

test('Auto Suggest dropdown',async ({page})=>{
    await page.goto('https://www.redbus.in/');

    // Try to locate this element by Search | SearchInput --- getByRole() Locator
    await page.getByLabel('From').fill("Delhi");
    await page.waitForTimeout(2000); // manually putting wait to load the updated search value
    //div[contains(@class, 'searchCategory')][1]//div[@role='heading'] # search suggestionBox Text
    await page.waitForSelector("//div[contains(@class, 'searchCategory')][1]//div[@role='heading']");
    const from_city_options = await page.$$("//div[contains(@class, 'searchCategory')][1]//div[@role='heading']");

    for (const dropdownSuggestion of from_city_options){
        const value = await dropdownSuggestion.textContent();
        console.log(value);
        if(value.includes('Morigate, Delhi')){
            await dropdownSuggestion.click();
            break;
        }
    }



    await page.waitForTimeout(2000);
});