import {test,expect} from "@playwright/test";

test("Bootstrap Dropdown", async ({page})=>{
    // await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
    // await page.locator('.multiselect').click(); // click the dropdown

    //1
    //const options=await page.locator('ui>li label input')
    //await expect(options).toHaveCount(11);

    //2
    // const options=await page.$$('ul>li label input');
    // expect(options.length).toBe(11);

    // 3 select options from dropdown
    // const options=await page.$$('ul>li label');
    // for (let option of options) {
    //     const value = await option.textContent();
    //     //console.log("Value is: ",value);
    //     if(value.includes('Angular') || value.includes('Java'))
    //     {
    //         await option.click();
    //     }
    // }
    // deselect options
    const options=await page.$$('ul>li label');
    for (let option of options) {
        const value = await option.textContent();
        //console.log("Value is: ",value);
        if(value.includes('HTML') || value.includes('CSS'))
        {
            await option.click();
        }
    }


    await page.goto("https://admirhodzic.github.io/multiselect-dropdown/demo.html");
    await page.goto("https://www.htmlelements.com/demos/dropdownlist/multiple-selection/index.htm");



})