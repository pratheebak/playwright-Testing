import{test}from'@playwright/test'
test('Frame handling',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");
    await page.frameLocator("#singleframe").locator('//input[@type="text"]').fill("deepa sri");
    await page.waitForTimeout(3000);

    // await page.click("//a[text()='Iframe with in an Iframe']");
    
    // const multiframe=page.frameLocator('//*[@src="MultipleFrames.html"]');
    
    // const innerframe= multiframe.frameLocator('#singleframe');
    // await page.locator('//input[@type="text"]').fill("deepa sri");
    
    // await page.waitForTimeout(3000);

await page.click("//a[text()='Iframe with in an Iframe']");

// Outer frame
const multiframe = page.frameLocator('iframe[src="MultipleFrames.html"]');

// Inner frame
const innerframe = multiframe.frameLocator('//iframe[@src="SingleFrame.html"]');

// Locate element inside inner frame
await innerframe.locator('//input[@type="text"]').fill("deepa sri");

await page.waitForTimeout(3000);
    
    

})