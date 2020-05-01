class AdminView{
  constructor(manager){
    this.manager = manager;
    this.students = [];
    this.page = document.querySelector('.admin-container');
  }

  show(){
    this.page.style.display = 'block';
  }

  hide(){
    this.page.style.display = 'none';
  }

  addToDom(place, value){
    document.querySelector(place).innerHTML = value;
  }

  addStudent(name){
    this.students.push(new Person(name))
  }
}
