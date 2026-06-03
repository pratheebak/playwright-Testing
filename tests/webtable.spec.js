import{test}from'@playwright/test'

test('Webtable handling',async({page})=>{
    let person={
       name:['pratheeba','deepa','sri','murali'],
       age:[27,23,24,25],
       address:['chennai','madurai','theni','chennai']

    }
    console.table(person)


})