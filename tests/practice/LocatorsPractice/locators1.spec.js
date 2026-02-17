import {expect, test} from '@playwright/test';

// test('getByRole', async ({page}) => {
//     await page.goto('https://selectorshub.com/xpath-practice-page/');
//     const pageHeading = await page.getByRole('heading', {
//         name: 'Find out how to automate these controls without XPath',
//         level: 1
//     });
//     const pgHeading = "Find out how to automate these controls without XPath"
//     console.log(`PageHeading is:- ${await pageHeading.innerText()}`);
//     expect(pgHeading).toBe(pgHeading);
//     // assert that this heading is visible on the page or not
//     // Example:- await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
//     await expect(pageHeading).toBeVisible();
//
// });

test("getByRole('heading')", async ({page})=>{
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    const expectedHeading = "Find Out How To Automate These Controls Without XPath";
    // const livePageHeadingTxt=await page.getByRole('heading', {name: expectedHeading});
    const livePageHeadingTxt22=await page.getByRole('heading', {name: expectedHeading}).innerText();
    console.log(JSON.stringify(livePageHeadingTxt22));
    console.log(livePageHeadingTxt22)
    await expect(page.getByRole('heading', {name: expectedHeading})).toHaveText(expectedHeading);
    //
    /*
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    // const expectedHeading1 = "Find Out How To Automate These Controls Without XPath";
    const livePageHeadingTxt1=await page.getByRole('heading', {name: expectedHeading}).innerText();
    const livePage = await page.getByRole('heading', {name: expectedHeading});
    console.log(await livePage.innerText());
    console.log(livePageHeadingTxt1);
     */
})

// test("getByRole('heading')", async ({page})=>{
//     await page.goto('https://selectorshub.com/xpath-practice-page/');
//     const expectedHeading = "Find Out How To Automate These Controls Without XPath";
//     const livePageHeadingTxt=await page.getByRole('heading', {name: expectedHeading}).innerText();
//     const livePage = await page.getByRole('heading', {name: expectedHeading});
//     console.log(await livePage.innerText());
//     console.log(livePageHeadingTxt);
//     // await expect(lph).toHaveText(expectedHeading);
// })

/*
*
PS E:\self-automation-script\jsPlaywright\1> npx playwright test --project=unitTest locators1.spec.js

Running 1 test using 1 worker
[unitTest] › tests\practice\LocatorsPractice\locators1.spec.js:18:5 › getByRole('heading')
Find Out How To Automate These Controls Without XPath
Find Out How To Automate These Controls Without XPath
Find Out How To Automate
 These Controls Without XPath
Find Out How To Automate
 These Controls Without XPath
  1 passed (12.7s)

To open last HTML report run:

  npx playwright show-report

PS E:\self-automation-script\jsPlaywright\1>
*
* Why same code but different output?
Find Out How To Automate These Controls Without XPath
Find Out How To Automate These Controls Without XPath
Find Out How To Automate
 These Controls Without XPath
Find Out How To Automate
 These Controls Without XPath
*
*
🎯 The Core Reason

When the page loads:

Initially → Text is rendered as a single inline line

After JS animation runs → DOM structure changes

Text nodes get split with line breaks

innerText() now reflects formatted multi-line output

So depending on when you call innerText(), you get:
*
*
*
🧠 Why It Changes After Second goto()

In your test:

await page.goto(...)
console.log(await livePageHeadingTxt.innerText())


At this time:

Animation may not have fully triggered yet

DOM still compact

Then you reload:

await page.goto(...)


Now:

Animation script runs again

DOM text formatting slightly changes

A newline is inserted between text nodes

innerText() reflects visual layout

Remember:

innerText() returns rendered layout text, not raw DOM.

If CSS causes wrapping → innerText() includes newline.

🚨 VERY IMPORTANT CONCEPT
innerText() is layout-dependent.

If browser visually wraps text into 2 lines,
innerText() will include \n.

If not wrapped,
it returns single line.

So even window width can change output.
*
*
*
🧠 Interview-Level Explanation

If interviewer asks:

Why same locator gives different innerText output?

Answer:

innerText depends on rendered layout. If CSS wrapping or animation changes how text is visually displayed, innerText will include line breaks. The DOM didn't change semantically, but rendering did.

That’s senior-level understanding.
*
*
*
💡 Final Takeaway

Your test results changed because:

innerText() → layout dependent

textContent() → raw DOM including formatting

The site uses animated heading + formatted markup

Whitespace is preserved in DOM
 */