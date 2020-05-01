class LoginView{
  constructor(manager){
    this.manager = manager;
    this.loginContainer = '.login-form .password';
    this.page = document.querySelector('.login-form');
    this.authentication = new Authentication();
    this.addLoginEventListener();
  }



  getPassword(){
    const password = document.querySelector(this.loginContainer).value;

    if(!password){
      this.addToDom('.message', 'Lütfen gecerli bir password giriniz');
      return;
    }

    return password;
  }

  addLoginEventListener(){
    document.querySelector('.login-button')
            .addEventListener('click', this.login.bind(this));
  }

  show(){
    this.page.style.display = 'block';
  }

  hide(){
    this.page.style.display = 'none';
  }

  login(){
    const password = this.getPassword();

    const user = this.authentication.doLogin(password);

    if(!user) {
      this.addToDom('.message', 'Lütfen gecerli bir password giriniz!');
    } else{
      if(user.settings.type === 'student')
        this.manager.showCurrentView(new StudentView(this.manager));

      if(user.settings.type === 'admin')
        this.manager.showCurrentView(new AdminView(this.manager));
    }
  }

  addToDom(place, value){
    document.querySelector(place).innerHTML = value;
  }
}
