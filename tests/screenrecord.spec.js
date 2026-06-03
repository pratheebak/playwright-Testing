import{test}from'@playwright/test'
test('video record',async({browser})=>{

  const context=await browser.newContext({

    recordVideo:{
        dir:'./videorecorder'
   }
})
const page=await context.newPage();
await page.goto("https://www.amazon.in/");
await page.waitForTimeout(3000);

await context.close();

});