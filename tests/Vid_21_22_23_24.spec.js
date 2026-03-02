import {test, expect} from "@playwright/test";
/*
* Summary:-
* Vid_21 ->  await page.locator("//a[normalize-space()='Desktop']").hover()
*        --  use of .hover() function
* Vid_22 ->  await button.click({button: 'right'});
*        --  use of right click
* Vid_23 ->  await button.dblclick();
*        --  use of double click
* Vid_24 -> Drag and drop element
*        -- await rome.dragTo(italy);
* */
// Vid_21
test.skip('Mouse Hover', async ({page})=>{
    await page.goto("https://demo.opencart.com/");
    const desktopTab = await page.locator("//a[normalize-space()='Desktop']");
    const macbookOption = await page.locator("//a[normalize-space()='Mac (1)']");

    // Mouse Hover
    await desktopTab.hover();
    await macbookOption.hover();
    await page.waitForTimeout(5000);
})

// Vid_22
test.skip('Mouse Right Click', async ({page})=>{
    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
    const button = await page.locator("//span[normalize-space()='right click me']");
    // right click
    await button.click({button: 'right'});
    await page.waitForTimeout(5000);
})
// Vid_23
test.skip('Mouse Double Click', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const button = await page.locator("//*[normalize-space()='Copy Text']");
    // right click
    await button.dblclick();

    const f2=await page.locator('#field2');
    await expect(f2).toHaveValue('Hello World!');
    await page.waitForTimeout(3800);
})
// Vid_24
test('Drag and Drop', async ({page})=>{
    await page.goto("https://codepen.io/EpsilonDeltaCriterion/full/jLoPgE");
    // const frame = page.frameLocator('#result');
    const mainFrame=await page.frame({url: 'https://codepen.io/EpsilonDeltaCriterion/fullpage/jLoPgE?anon=true&view=fullpage'});
    /*
    const rome = await page.locator('#box6');
    const italy = await page.locator('#box106');

    // Approach 1
    await rome.hover();
    await page.mouse.down();

    await italy.hover();
    await page.mouse.up();
    */
    // await mainFrame.locator('#box6').hover();
    // // Approach 1
    // // await rome.hover();
    // await page.mouse.down();
    //
    // await page.locator('#box106').hover();
    // // await italy.hover();
    // await page.mouse.up();


        //gpt
        const frame = page.frameLocator('#result');

        const rome = frame.locator('#box6');
        const italy = frame.locator('#box106');

        await rome.dragTo(italy);

    // await rome.hover();
    // await page.mouse.up();
    // await italy.hover()
    // await page.mouse.down();

    // washington ----> us
    const washington = frame.locator('#box3');
    const usa = frame.locator('#box103');

    await washington.dragTo(usa);

    await page.waitForTimeout(3800);
})

