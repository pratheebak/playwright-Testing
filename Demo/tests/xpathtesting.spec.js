import { test, expect } from '@playwright/test';
test.skip('get Myntra link', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');  
 
const allTotalpricesText=await page.locator("//li[@class='product-base']/descendant::div[@class='product-price']/descendant::span[@class='product-discountedPrice' or (text() and not(@class))]").allTextContents();

const prices1 = allTotalpricesText.map(price => Number(price.replace(/[^\d]/g,"")));
const min_Price = (Math.min(...prices1));

const allBrandNameAndPrice1 = await page.locator(`//li[@class='product-base']/descendant::div[@class='product-price']//descendant::span[(@class='product-discountedPrice'and text()='${min_Price}' or (text()='${min_Price}' and not(@class)))]/ancestor::div/h3[@class="product-brand"]`).allTextContents();
await page.waitForTimeout(1000);

  console.log("Count:\t\t", allTotalpricesText.length);
  console.log('Minimum Price:\t',min_Price);
  console.log("Brand Name:\t",allBrandNameAndPrice1[0]);  
  });