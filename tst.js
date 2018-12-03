const createTestCafe       = require('testcafe');
var { defineSupportCode } = require('cucumber');
var Selector       = require('testcafe').Selector;
var t       = require('testcafe').t;
defineSupportCode(function ({ Given, When, Then }) {


    Given('I open aubay website', function() {
     
	function runTest () {
    var runner = null;

    createTestCafe('localhost', 1337, 1338)
        .then(function (tc) {
            testcafe = tc;
            runner   = tc.createRunner();

            return runner
                .src('./aubay.js')
                .browsers('chrome')
                .run()
                .catch(function (error) {
                    console.log(error);
                });
        })
        .then(function (report) {
            console.log(report);
        });
     }
	 async function navigateURL (){ 
	 runTest();
     t.navigateTo(`www.aubay.pt`);
	 };
	 
    });

    When('I am typing my search request "github TestCafe" on Google', function () {
     async function enterSearchKeyword (){        
	   t.typeText('#lst-ib', 'github TestCafe')
	 };
    });

    Then('I am pressing {string} key on Google', function (string){
     async function clickSearch (){        
	   t.click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)', 'github TestCafe')
	 };
   
 });


    Then('I should see that the first Googles result', function (){
     async function verifyText (){        
      const URL_testcafe = Selector('#rso > div:nth-child(1) > div > div > div > div > h3 > a');	  
	  t.expect(developerNameInput.value).contains('GitHub - DevExpress/testcafe: A Node.js tool to automate end-to-end ...', 'The search result was found');
	 };

 });
});

