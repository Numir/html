class Manager{
  static appName = 'kerrat';

  constructor(){
     this.setViews();
     this.showCurrentView(this.views.login);
  }

  setViews(){
    this.views = {
      login: new LoginView(this),
      admin: new AdminView(this),
      student: new StudentView(this)
    }
  }

  showCurrentView(view){
    Object.values(this.views).forEach(a => a.hide());
    view.show();
  }
}

new Manager();
