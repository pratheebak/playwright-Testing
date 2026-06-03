import{test}from'@playwright/test'
test('alert handling',async({page})=>{

await page.goto("https://demoqa.com/alerts");

page.on('dialog',async dialog=>{
 console.log(dialog.message());
 await dialog.accept("hello");
})
//simple alert
await page.click("#timerAlertButton");
await page.waitForTimeout(3000);
//confirm alret
await page.click("#confirmButton");
await page.waitForTimeout(3000);
//prompt 
await page.click("#promtButton");
await page.waitForTimeout(5000)




})







