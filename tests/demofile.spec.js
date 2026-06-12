// import{chromium, test}from"@playwright/test"
// test('upload the file',async({page})=>{

// const filepath='./Amazon.png';
// await page.goto("https://demoqa.com/upload-download");
// await page.waitForTimeout(3000);
// await page.setInputFiles('#uploadFile',filepath);
// await page.waitForTimeout(3000);

// //download
// const [imgdownload]=await Promise.all([page.waitForEvent('download'),page.click("#downloadButton")]);
// await page.waitForTimeout(3000);
// await imgdownload.saveAs("./Amazon.png");
//video recorder
import{test}from"@playwright/test"
 test('video',async({browser})=>{
  const context=await browser.newContext({
  
  recordVideo:{
    dir:'/video recorder'
  }
  });
 const page=await context.newPage();
  await page.goto("https://www.amazon.in/")
  await page.locator("input#twotabsearchtextbox").fill("mobiles");
  
  await page.click();
  await page.waitForTimeout(3000);

  await context.close()

  


 });














