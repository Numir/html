class DBManager{
  constructor(){
    this.db = localStorage;
    this.setInitialData();
  }

  setInitialData(){
    if(!this.getItem(Manager.appName)){
      const initialData = {
        users: [
          {
            settings: {
              userName: 'Ahmet',
              type: 'admin',
              password: 'secret',
              date : new Date().toDateString()
            },
            works: []
          },
          {
            settings: {
              userName: 'ayse',
              type: 'student',
              password: 'ayse',
              date : new Date().toDateString()
            },
            works: []
          }
        ]
      };

      this.setItem(Manager.appName, initialData);
    }
  }

  setItem(key, value){
    value = JSON.stringify(value);
    this.db.setItem(key, value);
  }

  getItem(key){
    const data = this.db.getItem(key);
    return JSON.parse(data);
  }
}
