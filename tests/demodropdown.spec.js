import{test}from'@playwright/test'
test('Home page',async({page})=>{
  // await page.goto("https://www.amazon.in/");
  // await page.waitForTimeout(3000);
  // //await page.reload();
  // //await page.screenshot({path:'Amazon.png'})
  // await page.locator("input#twotabsearchtextbox").fill("pink color kurti");
  // await page.waitForTimeout(5000)
  // await page.locator("#nav-search-submit-button").click();
  // await page.waitForTimeout(3000)

  //drop down
  await page.goto("https://www.testautomationcentral.com/demo/dropdown.html")
  await page.waitForTimeout(3000);
  //simple dropdown
  await page.selectOption("(//select[@class='form-select block w-full mt-1'])[1]",{value:'option3'});
  await page.waitForTimeout(3000);
  await page.selectOption("(//select[@class='form-select block w-full mt-1'])[1]",{label:'Option 2'});
  await page.waitForTimeout(3000);
  await page.selectOption("(//select[@class='form-select block w-full mt-1'])[1]",{index:2});
  await page.waitForTimeout(3000);

  //multidropdown
    await page.locator("//button[text()='Multi-Select']").click();
    await page.waitForTimeout(3000);
    await page.selectOption("//select[@class='form-multiselect block w-full mt-1']",['option1','option2','option3']);
    await page.waitForTimeout(3000);


    





  










})