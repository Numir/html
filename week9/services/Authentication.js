class Authentication{

  constructor(){
    this.dbManager = new DBManager();
  }

  doLogin(password){
    const data = this.dbManager.getItem(Manager.appName) || [];

    const user = data.users.find(a => a.settings.password === password);

    if(user) {
      return user;
    }

    return false;
  }
}

