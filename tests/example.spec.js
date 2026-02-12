// @ts-check
import { test, expect } from '@playwright/test';

test('Home Page', async ({ page })=>{
    await page.goto('https://www.demoblaze.com/');
    const pageTitle = await page.title();
    console.log('Page title is: ',pageTitle);

    // verify title
    expect(pageTitle).toEqual('STORE');
    await expect(page).toHaveTitle('STORE');

    // verify url
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    const pageURL= page.url();
    console.log('Page URL is: ',pageURL);

    await page.waitForTimeout(2000);

    await page.close();
})