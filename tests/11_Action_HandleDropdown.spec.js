import {test, expect} from "@playwright/test";

test("Handle Single select Dropdown", async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
//     Multiple ways to select option from the dropdown
    await page.locator("#country").scrollIntoViewIfNeeded({timeout: 650});
    await page.waitForTimeout(2500);
//     Way - 1 | label
    await page.locator("#country").selectOption({label: 'India'}); // label / visible text
//     Way - 2 | visible Text
    await page.locator("#country").selectOption('Japan'); // visible text
//     Way - 3 | value
    await page.locator("#country").selectOption({value: 'uk'}); // value
//     Way - 3 | index
    await page.locator("#country").selectOption({index: 4}); // index
//     ALT - Way - 1 | label
    await page.selectOption('#country',{label: 'Canada'}); // label / visible text
//     ALT - Way - 2 | visible Text
    await page.selectOption('#country','Japan'); // visible text
//     ALT - Way - 3 | value
    await page.selectOption('#country',{value: 'uk'}); // value
//     ALT - Way - 3 | index
    await page.selectOption('#country',{index: 4}); // index

    // Assertions in dropdown
    // 1) check number of options in dropdown - Approach 1
    const options=await page.locator('#country option');
    await expect(options).toHaveCount(10);

    // 2) check number of options in dropdown - Approach 2
    // $$ - returns elements in the form of array
    const optionss=await page.$$('#country option');
    console.log(`Number of Optionss: ${optionss.length}`);
    expect(optionss.length).toBe(10);

    // 3) check presence of value in the dropdown - Approach 1
    const content=await page.locator('#country').textContent();
    expect(content.includes('India')).toBeTruthy();
    console.log(content);

    // 4) check presence of value in the dropdown - Approach 2 - Using Looping
    const optionsss = await page.$$('#country option');
    let status = false
    for (const option of optionsss){
        console.log(await option.textContent())
        let value=await option.textContent();
        if(value.includes('France')){
            status=true;
            break;
        }
    }
    expect(status).toBeTruthy();


    // 5) select a perticular option from the value

    const optionssss=await page.$$('#country option');
    for (const option of optionssss){
        let value=await option.textContent();
        if (value.includes('France')){
            await page.selectOption("#country", value);
            break;
        }
    }






    await page.waitForTimeout(2800);
})