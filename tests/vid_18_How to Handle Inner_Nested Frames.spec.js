import {expect, test} from '@playwright/test'

test('frames', async ({ page })=>{

    await page.goto('https://ui.vision/demo/webtest/frames');

    // capture total number of frames from the page
    const allframes= page.frames(); // this include both frame and iframe tags
    console.log("Number of frames: ",allframes.length);

    // approach 1: using "Frame objects" # here locators aren't allowed Only frame name or url is allowed
    const frame3=await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame3.fill("[name='mytext3']", "hello - urfi");
    //---------------------------------------------------------------------------------------------------------
    // nested frames
    const childFrames = frame3.childFrames();
    await childFrames[0].locator("(//span[text()='Hi, I am the UI.Vision IDE']/parent::div/parent::div/parent::div/div/div)[1]").check();

    await page.waitForTimeout(1800);
})