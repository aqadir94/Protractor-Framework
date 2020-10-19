
describe('autoSuggest',()=>{


it('google',()=>{

    browser.waitForAngularEnabled(false);
    browser.get('https://www.google.com');



  browser.actions().mouseMove(element(by.xpath("//input[@name='q']"))).sendKeys("CNN").perform(); 
  //browser.element(by.xpath("//input[@name='q']")).sendKeys("CNN");

   browser.actions().mouseMove(element(by.xpath("//input[@name='q']"))).sendKeys(protractor.Key.ARROW_DOWN).perform();
   browser.actions().mouseMove(element(by.xpath("//input[@name='q']"))).sendKeys(protractor.Key.ARROW_DOWN).perform();

   //browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
   //browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();

  
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
   

    browser.actions().click(element(by.xpath("//span[contains(text(),'cnn')]")),protractor.Button.RIGHT).perform();
    browser.actions().mouseMove(element(by.xpath("//span[contains(text(),'cnn')]"))).keyDown(protractor.Key.CONTROL).click().perform();
//browser.actions().mouseMove(element(by.xpath("//span[contains(text(),'alternate')]"))).keyDown(protractor.Key.CONTROL).click().keyUp(protractor.Key.CONTROL).perform();
    


    browser.getAllWindowHandles().then((wh)=>{


     browser.switchTo().window(wh[1]);   



    })

    browser.sleep(5000);

});

});