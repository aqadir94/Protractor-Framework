const { elements } = require("./Elements");

describe('lab',()=>{


    it('lab1',()=>{

       browser.waitForAngularEnabled(false);
       browser.get('https://rahulshettyacademy.com/AutomationPractice/');
       
       element(by.cssContainingText('option', 'Option1')).click();

        browser.sleep(5000);




       })
       
 
        

        })



   
