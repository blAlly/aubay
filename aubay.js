import { Selector } from 'testcafe';

fixture `Home`
	.page `www.aubay.pt`;


test('Candidatura espontanea', async t => {
	
	const linkCand = Selector('li.nav-item:nth-child(4) > a:nth-child(1)')
	const txtNome = Selector('#btnApprove')
	const btnLogin = Selector('#btnLogin')
	await t
		
		.typeText('#txtUsername', credentials.username)
		.typeText('#txtPassword', credentials.password)
		.click('#btnLogin')
		.wait(5000)
		.expect(welcomePanel.id).eql('welcome') //Assert that home page is loaded
		//Search for a timesheet
		.click('.quickLaungeContainer > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)')
		.typeText('#employee',"A")
		.click('li.ac_even:nth-child(1)')
		.click('#btnView')
		.expect(btnApprove.value).eql('Approve') //Assert that the timesheet is showing
		//logout
		.click('#welcome')
		.click('#welcome-menu > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
		.expect(btnLogin.value).eql('LOGIN') //Assert that the button login is showing
		
});