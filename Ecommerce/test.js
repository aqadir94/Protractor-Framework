let ele=require('./elements');
let fun=require('./functions');
let ele1=require('../Elements');
let datas=require('../data');
let using=require('jasmine-data-provider');
const { element, browser, ExpectedConditions } = require('protractor');



describe('Ecom Site Test',()=>{




 it('First Test',()=>{

browser.get(ele.elements.URL);
element(by.xpath(ele.elements.Shop)).click();


element(by.xpath(ele.elements.Hfooter)).getText().then(text=>{


expect(text).toBe("Copyright © ProtoCommerce 2018");

console.log(`expected - Copyright © ProtoCommerce 2018 / found -  ${text}`);





});

 pType=['Nokia Edge','iphone X'];

fun.addToCart(pType[0]);
fun.addToCart(pType[1]);

element(by.xpath(ele.elements.CheckOutBut)).getText().then(text=>{

const textArr=text.split('(');

const textArr1=textArr[1].split(')');

expect(textArr1[0].replace(/\s+/g, '')).toBe('2');




});




});

it('test2',()=>{

    element(by.xpath(ele.elements.CheckOutBut)).click();
    element.all(by.xpath(ele.elements.BasketClass)).each((phone,i)=>{
    
   
    phone.element(by.css('div h4')).getText().then(text=>{
    
    
    expect(text).toBe(pType[i]);
    console.log(i+1+' expected - '+text+' found - '+pType[i]);
    
    });
    
    
    });
    
    
    
    
    });



it('test3',()=>{

    
    fun.checkTotal();
    fun.remFromCart('iphone X');
    fun.checkTotal(); 

    fun.checkPrice();


});



/*
beforeEach(function(){


    browser.get("https://juliemr.github.io/protractor-demo/");

});


using(datas.data, function (data, description) {
it('should behave...', () => {


    console.log(description);
    
element(by.xpath(ele1.elements.textBox1)).sendKeys(data.N1);
element(by.xpath(ele1.elements.textBox2)).sendKeys(data.N2);

element.all(by.css('option')).each(opt=>{

opt.getAttribute('value').then(val=>{
    
    if(val=='ADDITION'){
        opt.click();

    }
    
});


});


element(by.xpath(ele1.elements.goButton)).click();

element(by.xpath(ele1.elements.result)).getText().then(txt=>{

    expect(txt).toBe(data.E);


})



//browser.sleep(5000);

        
    });

});*/
});




/*
*/