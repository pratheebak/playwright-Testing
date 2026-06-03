import{test}from"@playwright/test"
test("all product",async({page})=>{
 await page.goto("https://www.flipkart.com/");
 const allproduct=await page.locator('//div[@id="container"]//descendant::div[@dir="auto"]').allTextContents();
 console.log(allproduct);
 await page.waitForTimeout(3000)



})