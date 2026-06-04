import { test, expect } from '@playwright/test';
test.skip('get Yahoo link', async ({ page }) => {
  await page.goto('https://in.search.yahoo.com/?fr2=inr');
  const Name= await page.locator("//li//div//ul/li[@class='keyword-wrapper h-20 mb-12'][5]");
  console.log(Name);
  await page.waitForTimeout(3000);
});

test.skip('get flipkart link', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
 //const ProductNames= await page.locator("//div[text()='For You']//ancestor::div//div//descendant::a//div[@dir='auto']").allTextContents();
 const ProductNames= await page.locator("//div[@data-id='stickyElement']//descendant::div[@dir='auto']").allTextContents();
  console.log(ProductNames);
  await page.waitForTimeout(3000);
});