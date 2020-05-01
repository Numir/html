class StudentView{
  constructor(manager){
    this.manager = manager;
    this.page = document.querySelector('.student-container');
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

  setQuestion(){
    this.currentQuestion = Question.newQuestion;
  }

  check(){
    this.currentQuestion.setAnswer(32);
    this.person.addQuiz(question);
    this.person.printResults();
  }
}
