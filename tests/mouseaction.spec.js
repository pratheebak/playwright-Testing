import{test}from"@playwright/test"
test('mouse action',async({page})=>{

// await page.goto("https://www.amazon.in/")  
// await page.locator('//span[text()="Fresh"]').hover();
// await page.locator('//a[@class="a-size-base a-spacing-top-base a-link-normal"]').click();
// await page.waitForTimeout(3000);
await page.goto("https://demoqa.com/droppable")
const source=await page.locator("#draggable");
const target = page.locator('//*[text()="Drop Here"]');
await source.dragTo(target);
await page.waitForTimeout(3000);







})