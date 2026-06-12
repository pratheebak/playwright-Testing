// import{test}from'@playwright/test'
// test('handling windows',async({browser})=>{
//    const context=await browser.newContext();
//    const newpage=await context.newPage(); 
//    await newpage.goto("https://www.amazon.in/")
//    await newpage.locator("input#twotabsearchtextbox").fill("dell laptop i7");
//    await newpage.locator('//input[@type="submit"]').click();
//    await newpage.waitForTimeout(3000)
//    await newpage.locator("//span[contains(text(),'Inspiron 3530')]").click();
//    await newpage.waitForTimeout(3000)
//    await newpage.selectOption('//div[@id="selectQuantity"]//descendant::span[@class="a-dropdown-container"]//descendant::select[@name="quantity"])',{value:2})
//    await newpage.waitForTimeout(4000)
// })



import { test } from '@playwright/test';

test('handling windows', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.amazon.in/');

  await page.locator('#twotabsearchtextbox').fill('dell laptop i7');
  await page.locator('//input[@type="submit"]').click();

  const [productPage] = await Promise.all([
    context.waitForEvent('page'),
    // page.locator("//span[contains(text(),'Inspiron 3530')]").click()
    await page.locator("//span[contains(text(),'Inspiron 3530')]").first().click()
  ]);

  await productPage.waitForLoadState();
  
  await  productPage.mouse.wheel(0, 500);
  await  productPage.waitForTimeout(4000)
  await productPage.locator('select[name="quantity"]').selectOption('2');
  await  productPage.waitForTimeout(4000)
  await productPage.locator('(//input[@id="add-to-cart-button"])[2]').click();
  await productPage.waitForTimeout(3000)
});