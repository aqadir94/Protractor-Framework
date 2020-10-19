let Elements=require('./Elements');
module.exports.calc=(num1,num2,op)=>{


    element(by.xpath(Elements.elements.textBox1)).sendKeys(num1);
    element(by.xpath(Elements.elements.textBox2)).sendKeys(num2);
   

    element.all(by.css('option')).each((opt)=>{


        opt.getAttribute('value').then((val)=>{

            if(val==op){



                opt.click();
            }



        })




    });



        
 
    element(by.xpath(Elements.elements.goButton)).click();

}








