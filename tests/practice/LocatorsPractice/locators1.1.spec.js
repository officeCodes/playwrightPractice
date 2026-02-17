import {expect, test} from "@playwright/test";

test("get Animated Heading Text", async ({page})=>{
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    const expectedHeading = "Find out how to automate these controls without XPath";
    await expect(page.locator("//h1[@class='elementor-headline e-animated']")).toHaveText(expectedHeading); // working passed
    console.log("First Assertion Passed...");

    const a = await page.getByRole('heading', { name: expectedHeading })

    // console.log(JSON.stringify(await a.textContent()));
    // console.log(JSON.stringify(await a.innerText())); // innerText() gives us the exact text that is rendered inside the page

    await expect(await page.getByRole('heading', { name: expectedHeading })).toHaveText(expectedHeading);

})
/*
1️⃣ What does this return?
await page.locator("//h1[@class='elementor-headline e-animated']") // returns Locator Object

Important:
👉 page.locator() does NOT return a Promise
👉 It returns a Locator object
* */