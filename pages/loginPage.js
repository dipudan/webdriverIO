class LoginPage{
    get pageHeader() {
        return $("//head/title");
    }

    get txtboxUsername() {
        return $('#username');
    }

    get txtboxPassword() {
        return $('#password');
    }

    get btnlogin(){
        return $('#login > button');
    }

    specificValueFromList(index){
        return $(`#login > button(${index})`);
    }
}

module.exports = new LoginPage();