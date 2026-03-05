/*
* KeyBoard Actions
* ================
* Goal is to (Copy and Paste the Written Text)
* ---------
* i) Write something
* ii) imitate Ctrl+A
* iii) imitate Ctrl+S
* iv) then press tab > for going to next box
* v) imitate Ctrl+V
* ----------
*
* */

import {test, expect} from "@playwright/test";
const _wait = async (_time, page)=>{
    await page.waitForTimeout(_time);
}
test('KeyBoard Actions', async ({page})=>{
    await page.goto("https://gotranscript.com/text-compare");

    await page.fill('[name="text1"]', "Sangramjit Roy");

    await _wait(1000,page);
    // Ctrl + A - Select the text
    await page.keyboard.press('ControlOrMeta+A');
    await _wait(1000,page);
    // Ctrl + C - Copy the text
    await page.keyboard.press('ControlOrMeta+C');
    // Press Tab KeyBoard Button
    await page.keyboard.down('Tab'); // for single key Pressing you can use Mouse Up or Down But for Multiple keys Combination You need to use .press() method
    await page.keyboard.up('Tab');
    await _wait(1000,page);
    // Ctrl + V - Paste the text
    await page.keyboard.press('ControlOrMeta+V');


    await _wait(3800,page);
})