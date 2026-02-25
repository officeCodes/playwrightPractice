import {expect, test} from '@playwright/test'

test('frames', async ({ page })=>{

    await page.goto('https://ui.vision/demo/webtest/frames');

    // capture total number of frames from the page
    const allframes= page.frames(); // this include both frame and iframe tags
    console.log("Number of frames: ",allframes.length);

    // approach 1: using "Frame objects" # here locators aren't allowed Only frame name or url is allowed
    const frame1=await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill("[name='mytext1']", "hello - urfi");
    //---------------------------------------------------------------------------------------------------------
    // approach 2: Using Frame Locator # here we need to pass frame locator - direct name or css locator will not be acceptable just like approach 1
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    await inputBox.fill("Kiteretsu");

    await page.waitForTimeout(1800);
})