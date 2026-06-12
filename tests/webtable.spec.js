import { test } from '@playwright/test'

test('Webtable handling', async ({ browser }) => {
    let context = await browser.newContext()
    let newpage = await context.newPage();
    await newpage.goto("https://demoqa.com/webtables")
    //   const alltext=await newpage.locator("table tr th").allTextContents();
    //   console.log(alltext)
    // const alltext = await newpage.locator("xpath=//table//tr//th").allTextContents();
    // console.log(alltext);
    // 
    // const allinnertext = await newpage.locator("table thead tr th:nth-child(2)").allInnerTexts();
    // console.log(allinnertext);


    //   const row =newpage.locator('tr:has-text("Alden")');
    // const dep = await row.locator('td').nth().textContent();
    // console.log(dep);

    const row = newpage.locator('tr:has-text("Alden")');
    const count = await row.locator('td').count();
    console.log('cells:', count);
//Get the entire row data
    const row1 = newpage.locator('tr').filter({hasText: 'Alden'});
    const rowText = await row1.textContent();
    console.log(rowText);

    
})