import {test, expect} from "@playwright/test";

test('Hidden Dropdown', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: ' Login ' }).click();

    // assert logged in successfully or not
    // checking logged in with the same user or not
    const expUserName = "manda user";
    await page.waitForSelector("//span[@class='oxd-userdropdown-tab']/p");
    // console.log(await page.getByText('manda user').textContent());
    // console.log(await page.getByText('manda user').innerText());
    // await expect(await page.getByText('manda user')).toBeVisible();
    const userName = await page.locator("//span[@class='oxd-userdropdown-tab']/p").innerText();
    console.log(userName);
    await page.getByText('PIM').click();
    await expect(await page.getByRole('heading', { name: 'PIM', level: 6 })).toBeVisible();
    await page.locator("(//div[@class='oxd-select-text--after'])[3]").click();

    // const dropDownOpts = await page.locator("//div[@class='oxd-select-dropdown --positon-bottom']//span");
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(3500);
    const dropDownOpts = await page.$$("//div[@class='oxd-select-dropdown --positon-bottom']//span");
    let count=0
    console.log(`Length of dropDownOpts: ${dropDownOpts.length}`);
    for (const opts of dropDownOpts){
        console.log(await opts.textContent());
        if (await opts.textContent() === 'Software Architect'){
            await opts.click();
            // break;
        }
        count+=1;
    }
    console.log(`Count: ${count}`);


    await page.waitForTimeout(2000);
})