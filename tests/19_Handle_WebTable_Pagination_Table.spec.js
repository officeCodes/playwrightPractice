import {test,expect} from "@playwright/test";

test("Vid 19 - Handle Pagination Table", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator("#productTable");
    // 1. find total number of rows & columns from the table
        // count columns
    const columns = await table.locator('thead tr th');
    console.log("Total number of Columns: ", await columns.count());
    expect(await columns.count()).toBe(4);
        // count rows
    const rows = await table.locator('tbody tr');
    console.log("Total number of Rows: ", await rows.count());
    expect(await rows.count()).toBe(5);

    // select product 4 ( select checkbox for product 4 )
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Tablet'
    })
    // double check matched row has found any element in the webpage or not
    console.log(await matchedRow.count());
    if (await matchedRow.count()>0){
        console.log("MatchedRow found Element");
        console.log(await matchedRow.first().innerHTML()); // Now you will see the actual row content.
        console.log(await matchedRow.first().innerText()); // Get the full row text
        await matchedRow.first().highlight() // HThis visually marks the element during test run
    }
    console.log(`Type of matchedRow: ${typeof matchedRow}`)
    // console.log(JSON.stringify(matchedRow));
    await page.waitForTimeout(2000);
    await matchedRow.locator('input').check();


    console.log("/*---------------------------------------------------------------------------------------------------------------*/")


    await page.waitForTimeout(1000);
    await selectProduct(rows, page, 'Wireless Earbuds')
    await page.waitForTimeout(1000);
    await selectProduct(rows, page, 'Smartwatch')
    await page.waitForTimeout(1000);
    await selectProduct(rows, page, 'Laptop')
    await page.waitForTimeout(1000);
    await selectProduct(rows, page, 'Smartphone')

    console.log("/*---------------------------------------------------------------------------------------------------------------*/")



    // 2. print all product details (name price id) using loop [pagination is there]
    console.log("Printing starts....");

    console.log("/*---------------------------------------------------------------------------------------------------------------*/")

    // 3. Read data from all the pagination pages from the table

    const pages = await page.locator('.pagination li a');
    console.log('Number of pages in the table: ', await pages.count()); // Time : 41:59

    for (let p=0; p<await pages.count(); p++){
        if (p>0){
            await pages.nth(p).click();
        }
        for (let i=0; i<await rows.count(); i++){
            await page.waitForTimeout(1000);
            // console.log(`Inside ith Loop.... i=${i}`)
            const row = rows.nth(i); // nth() is a JavaScript function
            const tds = row.locator('td');

            for(let j=0; j<await tds.count()-1; j++){
                // console.log(`Inside jth Loop.... j=${j}`);
                console.log(await tds.nth(j).textContent());
            }
        }
    }



    await page.waitForTimeout(2500);
    // await
})

async function selectProduct(rows, page, name){
    const _matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    });
    if (await _matchedRow.count()>0){
        console.log("MatchedRow found Element");
        console.log(await _matchedRow.first().innerHTML()); // Now you will see the actual row content.
        console.log(await _matchedRow.first().innerText()); // Get the full row text
        await _matchedRow.first().highlight() // HThis visually marks the element during test run
    }
    await _matchedRow.locator('input').check();
}