import { test } from '@playwright/test'
test('Home page', async ({ page }) => {
  await page.goto("https://www.myntra.com/boy-tshirts")


  // 1.//count 47
  // const pricesText = await page.locator("//li[@class='product-base']/descendant::span[@class='product-discountedPrice']").allTextContents();
  // await page.waitForTimeout(3000);
  // console.log("count:", pricesText.length);

  // 2. //minimum price
  // const prices = pricesText.map(price => Number(price.replace(/[^\d]/g,"")));
  // console.log("minium price:");
  // console.log(Math.min(...prices));
  // const min_price = (Math.min(...prices));


  // mimimum price name
  // const minimumproductname = await page.locator(`//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()='${min_price}']/ancestor::div[@class="product-productMetaInfo"]//h3`).allTextContents();
  // console.log(minimumproductname[0]);


  //total product count
  const totalproductcount=await page.locator(`//li[@class='product-base']/descendant::div[@class='product-price']//descendant::span[@class='product-discountedPrice' or (text() and not(@class))]`).allTextContents();
  await page.waitForTimeout(3000);
  console.log("total product count..",totalproductcount.length);

  //total product minimum price
  const prices = totalproductcount.map(price => Number(price.replace(/[^\d]/g,"")));
  const min_price = (Math.min(...prices));
  const totalproductminiprice=await page.locator(`//li[@class='product-base']/descendant::div[@class='product-price']//descendant::span[@class='product-discountedPrice' and text()='${min_price}' or(text()='${min_price}' and not(@class))]`).allTextContents();
  console.log("totalproductminimumprice..",totalproductminiprice[0]);
  
//minimum product name
const minimumproductname=await page.locator(`//li[@class='product-base']/descendant::div[@class='product-price' or text() and not(@class)]//descendant::span[@class='product-discountedPrice' or text() and not(@class)]/ancestor::div/h3[@class='product-brand']`).allTextContents();
console.log("minimumproduct name..",minimumproductname[0]);



});


















