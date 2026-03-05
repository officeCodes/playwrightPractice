import {test,expect} from "@playwright/test";

test('Single File Upload', async ({page})=>{
    await page.goto('https://www.foundit.in/upload');
    await page.waitForSelector('//div[@class=\'heroSection-buttonContainer_secondaryBtn secondaryBtn\']');
    await page.click("//div[@class='heroSection-buttonContainer_secondaryBtn secondaryBtn']");
    await page.waitForSelector('#file-upload');
    await page.locator('#file-upload').setInputFiles("C:\\Users\\sangramjit.roy.baartech.baartech.baariga.local\\Downloads\\bagic-flexi-health-protect-plan-key-feature-document.pdf");
    await page.waitForTimeout(3400);
})

test.only('Multiple File Upload', async ({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.waitForSelector('#filesToUpload');
    await page.locator('#filesToUpload').setInputFiles(["C:\\Users\\sangramjit.roy.baartech.baartech.baariga.local\\Downloads\\bagic-flexi-health-protect-plan-key-feature-document.pdf", "C:\\Users\\sangramjit.roy.baartech.baartech.baariga.local\\Downloads\\baar-iga v12.2.3_SSO_BugSheet.pdf"]);
    await page.waitForTimeout(1800);

    // assertion that the files properly gets uploaded or not
    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('bagic-flexi-health-protect-plan-key-feature-document.pdf');
    await expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('baar-iga v12.2.3_SSO_BugSheet.pdf');

    //=================================================================
    // remove uploaded files
    await page.locator('#filesToUpload').setInputFiles([]);
    await page.waitForTimeout(1800);
    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
})