import { test, expect, chromium } from '@playwright/test';
import { promises } from 'node:dns';
test.skip('File upload test', async ({ page }) => {
  await page.goto('https://testing.qaautomationlabs.com/file-upload.php'); 
  await page.setInputFiles('#fileInput','tests/zieptohomepage.png');
  await page.waitForTimeout(6000);
  const d=await Promise.all([page.waitForEvent('download'),page.click('')])
  await d.saveAs('./download/img.jpeg');
}); 

test.skip('Recording test', async ({}) => {
  const browser = await chromium.launch();
  const context= await browser.newContext({
  //const page=await context.newPage();
  recordVideo: {dir:'tests/recorder'}
  });
  const page=await context.newPage();
  await page.goto('https://www.myntra.com/boy-tshirts');
  await context.close();
});
