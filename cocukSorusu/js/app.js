class Question {
    constructor(firstNumber, secondNumber, answer) {
        //girilen bilgiler ile alınan cevap burada işleniyor. Karşılaştırılıyor
        this.date = new Date().toDateString();
        this.expected = firstNumber * secondNumber;
        this.score = this.expected == answer;
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.answer = answer;
    }
}
class Quiz {
    constructor() {
        this.quizes = [];
    }
}
class Person {
    constructor(name) {
        this.name = name;
        this.quizes = [];
        this.tests = new Quiz();
        //    this.tests = this.quizes = [];
    }
    addQuiz(quiz) {
        this.tests.quizes.push(quiz);
    }
    printResults() {
        this.tests.quizes.forEach(question => {
            let result = findDomElementById("results");
            result.innerHTML = `<h1>İsim :${this.name}<br>
             Cevabınız = ${question.answer}<br>
             Sonuç = ${question.expected}  ( ${question.score} )<br>
             </h1><br>`;
            console.log(this.name, question.date, question.firstNumber,
                question.secondNumber, question.answer, question.expected,
                question.score);
        })
    }
}

class Manager {
    constructor(name) {
        this.person = new Person(name);
        this.firstNumber = this.random();
        this.secondNumber = this.random();
    }
    random() {
        return Math.floor(Math.random() * 9);
    }
    start() {
        //ismi al
        //  this.person.name = readInputElementValue("ad");
        // inputlari doldur
        let soru = findDomElementById("questions");
        soru.innerHTML = `<h1>${this.firstNumber} x ${this.secondNumber}</h1><br>`;
    }
    check() {
        // ilk, ikinci ve sonuc sayilarini html den al
        this.person.addQuiz(new Question(this.firstNumber, this.secondNumber, answer()));
        this.person.printResults();
    }
}

function answer() {
    let ans = parseInt(readInputElementValue("answer"));
    console.log(ans);
    return ans;
}

let timer = 0;
let timeOver;

function gameTimer() {
    let time = findDomElementById("time");
    timer++;
    time.innerHTML = timer;
    if (timer == 10) {
        stopClock();
        timer = 0;
    }
}

function stopClock() {
    clearInterval(timeOver);
}

function start() {
    let addTodoTriggerElement = findDomElementById("start")
    addTodoTriggerElement.addEventListener("click", function(event) {
        // Yakip başlasın
        //  inportToRandomName();
        startOne();
        fullscreen();
    });
}

function startOne() {
    let isimlerS = readInputElementValue("ad");
    if (isimlerS == '') {
        return;
    };
    const musicP = new music();
    musicP.play();
    user.push(isimlerS);
    //let adlar = isimlerS.innerHTML = isimler[Math.floor(Math.random() * isimler.length)];
    const manager = new Manager(isimlerS);
    manager.start();
    timeOver = setInterval(gameTimer, 1000); //1 saniyede bir tekrarla..
    setTimeout(function() {
        manager.check();
    }, 12000); // 12 saniye sonra fonsiyonu çalıştır..
}
start();

class music {
    //müzik işlerini yöneten yer
    constructor() {
        this.audio = new Audio();
        this.audio.src = "kalimba.mp3";
        this.audio.loop = true;
        this.durum;
    }
    play() {
        if (this.durum == true) {
            this.audio.play();
            this.durum = false;
        }
    }
    pause() {
        if (this.durum == false) {
            this.audio.pause();
            this.durum = true;
        }
    }
}

function fullscreen() {

}