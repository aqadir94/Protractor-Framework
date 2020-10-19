var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config={

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['./Ecommerce/test.js'],
    capabilities:{'browserName':'chrome',
    'goog:chromeOptions': {
    w3c: false
    }


},
onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots',
        cleanDestination: false,
        fileNamePrefix: 'Prefix'+Math.random().toString(36).substring(7)
      })
    );
 }

}