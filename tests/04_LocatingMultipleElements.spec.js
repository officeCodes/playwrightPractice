import {expect, test} from "@playwright/test";

// test('LocateMultipleElements', async ({page})=>{
//     await page.goto('https://www.demoblaze.com/index.html');
//     const links = await page.$$('a');
//     // console.log(links);
//
//     for (const link of links){
//         const linkText=await link.textContent();
//         console.log('----------------')
//         console.log(linkText);
//         console.log('----------------')
//     }
//
//     await page.waitForTimeout(2000);
// })
test('Locate all the product names inside the page', async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForSelector('//div[@id="tbodyid"]//h4[@class="card-title"]/a');
    const products=await page.$$('//div[@id="tbodyid"]//h4[@class="card-title"]/a');
    await page.waitForTimeout(2000);

    console.log(typeof products);
    console.log("Product Names:----------")
    for (const product of products){
        const productName=await product.textContent();
        console.log(productName);
    }
})