class Question{
  static newQuestion = new Question();

  constructor(){
     this.date = new Date().toDateString();

     this.firstNumber = this.random();
     this.secondNumber = this.random();
  }

  random(){
    return Math.floor(Math.random() * 9);
  }

  setAnswer(answer){
    this.answer = answer;
    this.expected = this.firstNumber * this.secondNumber;
    this.score = this.expected == answer;
  }
}
