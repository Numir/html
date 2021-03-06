/**
 * Yapilacak olan bir isin tüm bilgilerini bir arada tutar
 */
class ToDoItem {
    constructor(pToDoText, pIsFinished) {
        this.text = pToDoText;
        this.isDone = pIsFinished;
    }
}

/**
 * Bu fonksiyon verilen id ile dom üzerinden ilgili nesneyi bulur.
 * @param {*} pId id bilgisi
 */
function findDomElementById(pId) {
    return document.querySelector(`#${pId}`);
}

function readInputElementValue(pId) {
    let inputElement = findDomElementById(pId);
    return inputElement.value;
}

/**
 * Ekranda ekleme butonuna bir event listener ekler
 */
function addEventListenerToTriggerElement() {
    // to-do eklemek icin butona bir eventlistener ekle
    let addTodoTriggerElement = findDomElementById("addTodoTriggerElement")
    addTodoTriggerElement.addEventListener("click", function(event) {
        // modeli güncelle
        // Datayi alip bir array'e eklemesi
        // event.targetElement.innerHTML
        let toDoText = readInputElementValue("todoItemElement");
        if (checkToDoText(toDoText)) {
            addToDoItem(toDoText);
            renderToDoList();
        }
    });
}
let todoList = new Array();
let isDoneFilterActive = false;

addEventListenerToTriggerElement();
addEventListenerToFilterElement();

/**
 * Ekranda filtert checkboxuna bir event listener ekler
 */
function addEventListenerToFilterElement() {
    // filteri ative etmek icin checkboxa bir eventlistener ekle
    let todoDoneFilterElement = findDomElementById("todoDoneFilter")
    todoDoneFilterElement.addEventListener("click", function(event) { // todo "burasi change eventi olabilir"
        // modele güncelle
        isDoneFilterActive = !isDoneFilterActive;
        renderToDoList();
    });
}

/**
 * Bu fonksiyon yapilacak is yazisini alir ve yeni bir ToDo list objesi 
 * olusturarak global listeye ekler.
 * @param {*} pToDoText 
 */
function addToDoItem(pToDoText) {
    let todoItem = new ToDoItem(pToDoText, false);
    todoList.push(todoItem);
}

/**
 * Modeldeki yapilacvak olan isler listesini html'de <li></li> taglari ile 
 * DOM'a ekler
 */
function renderToDoList() {
    let todoListElement = findDomElementById("todoListContainer");

    todoListElement.innerHTML =
        todoList.filter(todo => todo.isDone == isDoneFilterActive)
        .map(todo => `<li>${todo.text}<span onclick="finishToDoItem('${todo.text}')">x</span></li>`)
        .join("");

    /* Alternatif eski cözüm yöntemi
        let htmlListItems = "";
        for (let index = 0; index < todoList.length; index++) {
            const todoItem = todoList[index];
            if(todoItem.isDone == false){
                htmlListItems = "<li>" + todoItem.text + "</li>";
            }
        }
        todoListElement.innerHTML = htmlListItems;
    */
}

function checkToDoText(pToDoText) {
    if (!pToDoText || pToDoText.trim() === "") {
        let errMessageElement = findDomElementById("errorMessage");
        errMessageElement.innerHTML = "Yapilacak is bos olamaz!";
        return false;
    }
    return true;
}

/**
 * 
 * @param {*} pToDoText silinecek yapilacak is..
 */
function finishToDoItem(pToDoText) {
    let todoItemTobeFinished =
        todoList.find(todo => todo.text == pToDoText);
    todoItemTobeFinished.isDone = true;
    renderToDoList();
}




/*

//[23:29, 15.04.2020] Cemil Doğan ITClub: 

class Question{
  constructor(firstNumber, secondNumber, answer){
     this.date = new Date().toDateString();
     this.expected = firstNumber * secondNumber;
     this.score = this.expected == answer;
     this.firstNumber = firstNumber;
     this.secondNumber = secondNumber;
     this.answer = answer;
  }
}

class Quiz{
  constructor(){
    this.quizes = [];
  }
}

class Person{
  constructor(name){
    this.name = name;
    this.tests = new Quiz();
  }

  addQuiz(quiz){
    this.tests.quizes.push(quiz);
  }

  printResults(){
    this.tests.quizes.forEach(question => {
      console.log(this.name, question.date, question.firstNumber,
                question.secondNumber, question.answer, question.expected,
                question.score);
    })
  }
}



class Manager{
  constructor(name){
     this.person = new Person(name);
     this.firstNumber = this.random();
     this.secondNumber = this.random();
  }

  random(){
    return Math.floor(Math.random() * 9);
  }

  start(){
    // inputlari doldur
  }

  check(){
    // ilk, ikinci ve sonuc sayilarini html den al
    this.person.addQuiz(new Question(this.firstNumber, this.secondNumber, 22));
    this.person.printResults();
  }
}

const manager = new Manager('ahmet');
manager.check();
[23:29, 15.04.2020] Cemil Doğan ITClub: Quiz clasina gerek yok person icindede this.quizes = [] olarak tutlabilinir

*/