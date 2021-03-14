const loginpage = require ("../pages/loginPage");
const homepage = require ("../pages/homePage");

describe('Login Test', () => {
    it('should login with valid credentials', () => {
        browser.url('https://the-internet.herokuapp.com/login');

        let text = loginpage.pageHeader.getText();
        console.log(text);

        loginpage.txtboxUsername.setValue('tomsmith');
        loginpage.txtboxPassword.setValue('SuperSecretPassword!');
        loginpage.btnlogin.click(); 

        expect($('#flash')).toBeExisting();
        expect(homepage.successLogin.getText()).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

