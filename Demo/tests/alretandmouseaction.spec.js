import { test, expect } from '@playwright/test';
test.skip('get amzon mouse action link', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.waitForTimeout(6000);
  // mouse hover
//   await page.locator("//a[@href='/fresh?ref_=nav_cs_grocery']").hover();  
//   await page.locator("//a[@href='/fmc/learn-more?ref=nav_cs_dsk_grfl_sag']").click();
//   await page.waitForTimeout(3000);
//mouse right and left
//await page.locator("//a[@href='/fresh?ref_=nav_cs_grocery']").click({button : 'right'});
//await page.waitForTimeout(3000);
//await page.mouse.wheel(0,5000);
//await page.mouse.wheel(5000,0);
//await page.mouse.up();
//await page.mouse.down();

await page.waitForTimeout(6000);

});
test.skip('Alert popup test', async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/alert-and-popup/'); 
  
  page.on('dialog',async dialog=>{
    //await dialog.accept(); //simple alert
    //await dialog.dismiss();//confirm alert for cancel
    //await dialog.accept(); //confirm alert for ok or accept
    //await dialog.accept("yes");
    await dialog.accept("no");
  });
// await page.waitForTimeout(6000);
// await page.locator("//button[@name='alertbox']").click();
  
// await page.locator("//button[@name='confirmalertbox']").click();
//await page.waitForTimeout(6000);
    
   await page.locator("//button[@name='promptalertbox1234']").click();
   await page.waitForTimeout(6000);
});
