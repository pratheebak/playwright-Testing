// @ts-check
import { test, expect } from '@playwright/test';
import { only } from 'node:test';

  test.skip('get amizon link', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.waitForTimeout(5000);  
// await page.locator('[id="nav-link-groceries"]').click();
// await page.waitForTimeout(5000);  
// await page.locator('#nav-link-groceries').click();
// await page.waitForTimeout(5000);  
await page.locator('#searchDropdownBox').selectOption('search-alias=amazon-pharmacy');
await page.waitForTimeout(5000);  



//   await page.locator('.text-sm.capitalize').click();
//   await page.waitForTimeout(5000);
//   await page.screenshot({path:'zieptoLogInpage.png'});
//   await page.waitForTimeout(5000);
//   await page.locator('[placeholder="Enter Phone Number"]').fill('1234567890');
//   await page.waitForTimeout(5000);
// //    await page.locator("//div[text()='Continue']").click();
// //    await page.waitForTimeout(5000);
//    try 
//    {
//   await page.locator("//div[text()='Continue']").click();
//    } 
//    catch (error) 
//    { 
//         await page.screenshot({path:'failed-test.png'});
//         throw error;
//     }
//   await page.waitForTimeout(5000);

 });
  test.skip('Dropdown options testing', async ({ page }) => {
  await page.goto('https://www.booking.com/');
  await page.waitForTimeout(5000);
  await page.locator('[id="flights"]').click();
  await page.waitForTimeout(5000);
  });

//   test.SKIP('get Multi select dropdown link', async ({ page }) => {
//   await page.goto('https://demoqa.com/select-menu');
//   await page.waitForTimeout(5000);  
//  //await page.locator('#cars').selectOption(['Volvo', 'Audi','Opel']); //Select by visible label
//  //await page.locator('#cars').selectOption([{value:'saab'},{value:'opel'}]); // Select by value attribute
//  //await page.locator('#cars').selectOption([{ index: 2},{index: 3}]); // Select by index (0-based)
//  await page.selectOption("('#cars')",['saab']);
//   await page.waitForTimeout(5000);
//     });
// test.only('get Myntra link', async ({ page }) => {
//   await page.goto('https://www.myntra.com/boy-tshirts');
//  const tshirtcount= await page.locator("//li[@class='product-base']").count();
//  // const tshirtcount= await page.locator('.product-base').count();
//   console.log(tshirtcount);
// });

test.skip('get Myntra link', async ({ page }) => {
  await page.goto('https://www.myntra.com');
  await page.locator("div[data-reactid='333']").click();
  await page.waitForTimeout(5000);
  await page.locator("//a[data-reactid='345']").click();
  await page.waitForTimeout(5000);
 // const tshirtcount= await page.locator('.product-base').count();
 //console.log(tshirtcount);
});