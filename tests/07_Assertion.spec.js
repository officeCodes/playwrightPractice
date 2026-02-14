import {expect, test} from '@playwright/test';

test('AssertionTest', async ({page})=>{
  // open app url
  await page.goto('https://demo.nopcommerce.com/register');

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
  //
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  //3) expect('locator').toBeVisible();  # Element is visible
  const _locator = await page.locator('.header-logo');
  await expect(_locator).toBeVisible();

  //4) expect('locator').toBeEnabled();   # control is enable
  const searchStoreBox = await page.locator('#small-searchterms');
  await expect(searchStoreBox).toBeEnabled();

  //5) expect(locator).toBeChecked()  # Radio/Checkbox is checked
  const maleRadioButton = await page.locator('#gender-male');
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();

  // check box
    const checkBox = await page.locator('//label[text()="Newsletter"]');

  await expect(checkBox).toBeChecked();

  // 6) expect(locator).toHaveAttribute() Element has attribute
  const regBtn = await page.locator('#register-button');
  await expect(regBtn).toHaveAttribute('type', 'submit');

//   7) expect(locator).toHaveText()     # Exact Text Match  -  Element Matches Exact Text or Not
//   8) expect(locator).toContainText()  # Partial Text Matching  -  It Only Checks Text is Partially Matching or not
//   7) Exact Text - Element Matches Text
  await expect(await page.locator('.page-title h1')).toHaveText('Register'); // exact text we need to write here
//   8) Partial value of the text - Element Contains Text
  await expect(await page.locator('.page-title h1')).toContainText('Reg');
//   9) expect(locator).toHaveValue(value) # input has a value
  const emailInp = await page.locator('#Email');
  const s = 'abcde@gmail.com';
  await emailInp.fill(s);
  await expect(emailInp).toHaveValue(s);
  // -----------
  await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
//   10) expect(locator).toHaveCount()  List of element has given length
  const options = await page.locator('select option');
  console.log(await options.count());
  await expect(options).toHaveCount(249);
});

// test('AssertionTest', async ({page})=>{
//   await page.goto('D:\\CodeLer\\ofc_playwrightPrac\\playwrightPractice\\index.html');
//   const decreaseBtn = await page.locator('#decrease');
//   await expect(decreaseBtn).toHaveAttribute('disabled', '');
//   console.log("Or alternatively");
//   await expect(decreaseBtn).toBeDisabled();
//   await page.waitForTimeout(4000);
//   await page.close();
// })