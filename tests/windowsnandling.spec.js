import{test}from'@playwright/test'
test('webtable',async({browser})=>{
let context=await browser.newContext()
let page=await context.newPage();
// await page.goto("https://www.amazon.in/");
// await page.locator("input#twotabsearchtextbox").fill("iphone 17 pro max");
// await page.locator('//input[@type="submit"]').click();
// await page.locator('(//img[@class="s-image"])[2]').click();

await page.waitForTimeout(3000)
await page.screenshot({path:'phone.png'});
await page.locator('(//input[@id="add-to-cart-button"])[2]').click();






})