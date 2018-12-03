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
     t.navigateTo(`https://www.aubay.pt/Home/SpontaneausApp?culture=en-us`);
	 };
	 
    });
	
	const nameField = Selector('div.col-lg-12:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)');
	const senioritySelect = Selector('div.col-lg-12:nth-child(4) > div:nth-child(1) > div:nth-child(4) > select:nth-child(2) > option:nth-child(3)');
	const mobileField = Selector('div.col-lg-12:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > input:nth-child(1)')
	const tecnlogyField = Selectior('.select2-container--above > span:nth-child(1) > span:nth-child(1) > ul:nth-child(1)');
	const tecnologyFieldOption = Selector('#select2-Tecnologias-result-xsoo-2');
	const emailField = Selector('div.col-lg-12:nth-child(4) > div:nth-child(3) > div:nth-child(2) > input:nth-child(2)');
	const integrationCheck = Selector('div.col-lg-12:nth-child(4) > div:nth-child(4) > div:nth-child(1) > p:nth-child(3) > input:nth-child(1)');
    const communicationCheck = Selector('div.col-lg-12:nth-child(4) > div:nth-child(4) > div:nth-child(1) > p:nth-child(4) > input:nth-child(1)');
	const privacyCheck = Selector('div.col-lg-12:nth-child(4) > div:nth-child(4) > div:nth-child(1) > p:nth-child(6) > input:nth-child(1)');
	const captcha = Selector('.recaptcha-checkbox-checkmark');
	const submitButton = Selector('div.col-lg-12:nth-child(4) > div:nth-child(5) > a:nth-child(1)');
	

	
	
    When('I am filling the field name on the form', function () {
     async function enterName (){        
	   t.typeText('nameField', 'Nome')
	 };
    });

	When('I am filling the field seniority on the form', function () {
     async function enterSniority (){        
	   t.click('senioritySelect')
	 };
    });
	
	When('I am filling the field mobile on the form', function () {
     async function enterMobile (){        
	   t.typeText('mobileField', '992955285')
	 };
    });
	
	When('I am filling the tecnlogy field on the form', function () {
     async function selectTecnlogy (){        
	   t.click('tecnlogyField')
	   t.click('tecnologyFieldOption')
	 };
    });
	
	When('I am filling the field email on the form', function () {
     async function enterEmail (){        
	   t.typeText('emailField', 'novo@teste.com')
	 };
    });
	
	When('I am checking the integration checkbox on the form', function () {
     async function chekIntegration (){        
	   t.click('integrationCheck')
	 };
    });
	
	When('I am checking the comunication checkbox on the form', function () {
     async function checkCommunication (){        
	   t.click('communicationCheck')
	 };
    });

	When('I am checking the privacy checkbox on the form', function () {
     async function checkPrivacy (){        
	   t.click('privacyCheck')
	 };
    });
	
	When('I am checking the captcha checkbox on the form', function () {
     async function captchaCheck (){        
	   t.click('captcha')
	 };
    });
	
    Then('I am pressing submit button', function (){
     async function submitButton (){        
	   t.click('submitButton')
	 };
  
 });


});

