
module.exports.addToCart=(item)=>{


    element.all(by.xpath("//app-card[@class='col-lg-3 col-md-6 mb-3']")).each(ele=>{

        ele.element(by.css('div h4')).getText().then(name=>{
        
        
        if(name==item){
        
            
            ele.element(by.buttonText("Add")).click();
            
          
        }
        
        
        })
        
        
        
        
        
        })





}

module.exports.remFromCart=(phone)=>{


    element.all(by.css('tbody tr')).each(ph=>{


        ph.element(by.css('td:nth-child(1)')).getText().then(text=>{
    
    
    if(text.includes(phone)){
    
    ph.element(by.buttonText('Remove')).click();
    
    browser.sleep(5000);
    }
    
    
        })
    
    
    
    });
    
}


module.exports.checkTotal=()=>{



    let total=0;

    element.all(by.css('tbody tr')).each((ele,index)=>{

        ele.element(by.css('td:nth-child(3)')).getText().then(pri=>{

   let price=pri.split('.');

         if(typeof(price[1])!='undefined'){
           let pc=parseInt(price[1].trim());

                
            total=total+pc;
            
        }
        })

    }).then(()=>{


        

        element(by.xpath("//td[@class='text-right']")).getText().then(text=>{

            let tArr=text.split('.');
            let tA=parseInt(tArr[1].trim());

            console.log(`Expected - ${total} found ${tA}`);
            expect(total).toBe(tA);



        })

    })


}

module.exports.checkPrice=()=>{


    let unitPrice,totPrice;
    let quantity=element(by.xpath("//input[@id='exampleInputEmail1']"));
    quantity.clear();

    quantity.sendKeys('2');

    element.all(by.css('tbody tr')).each((ele,index)=>{

        ele.element(by.css('td:nth-child(3)')).getText().then((ele2)=>{

            if (index==0){
            eleArr=ele2.split('.');

            unitPrice=parseInt(eleArr[1].trim());

            
        }


        });

        ele.element(by.css('td:nth-child(4)')).getText().then((ele3)=>{

            if (index==0){
            eleArr1=ele3.split('.');

            totPrice=parseInt(eleArr1[1].trim());

           
        }


        });


    }).then(()=>{
    
    expect(unitPrice*2).toBe(totPrice);

    console.log(`Expected ${unitPrice*2} to be ${totPrice}`);
});





}
