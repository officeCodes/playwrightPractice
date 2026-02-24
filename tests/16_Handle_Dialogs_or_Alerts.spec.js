import {test,expect} from "@playwright/test";

test.skip("Vid16 Alert Handling",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling alert handling  // Dialog window handler
    page.on('dialog', async dialog =>{
        await page.waitForTimeout(2500);
        console.log(dialog.message());
        console.log(dialog.type());
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.dismiss();
    })
    await page.click('//button[normalize-space()="Simple Alert"]');
    // await page.waitForTimeout(2500);
})

test.skip('Confirmation Dialog-Alert with Ok and cancel', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling Dialog window handler
    page.on('dialog', async dialog =>{
        await page.waitForTimeout(2500);
        // console.log(dialog.message());
        // console.log(dialog.type());
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        // await dialog.dismiss();
        await dialog.accept();
    })
    await page.click('//button[normalize-space()="Confirmation Alert"]');
    // await page.waitForTimeout(2500);
})
test('Prompt Dialog', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling Dialog window handler
    page.on('dialog', async dialog =>{
        await page.waitForTimeout(2500);
        // console.log(dialog.message());
        // console.log(dialog.type());
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        // await dialog.dismiss();
        await dialog.accept("Sinchan");
    })
    await page.click('//button[normalize-space()="Prompt Alert"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You Pressed Ok!')
    // await page.waitForTimeout(2500);
})