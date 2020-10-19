let Elements=require('./Elements.js');
const { hasUncaughtExceptionCaptureCallback } = require('process');
let Functions=require('./functions');

describe("Practice",()=>{


it('should behave...', () => {

browser.waitForAngularEnabled(true);
browser.get("https://juliemr.github.io/protractor-demo/");


Functions.calc(2,4,"ADDITION");

element(by.xpath(Elements.elements.result)).getText().then((val)=>{

expect(val).toBe('6');

console.log("expected 6 found "+val);


})
browser.sleep(5000);


    
});


it("Test 2",()=>{


element.all(by.repeater('result in memory')).each((res)=>{


res.element(by.css('td:nth-child(3)')).getText().then((text)=>{


console.log(text);


});



});



});
});