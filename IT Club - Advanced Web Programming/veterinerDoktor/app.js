//============================================================
//doctor.js
const doctor = [
        { name: "Niyazi Gül", expertise: 0, status: false, animal: [] },
        { name: "Cabbar", expertise: 1, status: false, animal: [] },
        { name: "Eleni", expertise: 2, status: false, animal: [] },
        { name: "Yasemin", expertise: 3, status: false, animal: [] },
    ]
    //============================================================
class Faker {

    static generateColor() {
        return faker.internet.color();
    }
    static generatePersonName() {
        return faker.name.findName();
    }
    static generateImage() {
        return faker.image.animals();
    }
    static generateUniqueId() {
        return faker.random.uuid();
    }
}
class Random {
    static generateRandomNumber(pMax, pMin) {
        return Math.floor(Math.random() * (pMax - pMin + 1) + pMin);
    }
}
//============================================================
//animal.js
class Animal {
    owner = Faker.generatePersonName();
    constructor(animalType, animalAge, ) {
        this.animalType = animalType;
        this.animalAge = animalAge;
    }

    //Hayvanları Rasgele Ürettiğim,z methoddur.
    static generator() {
        let animalType = Random.generateRandomNumber(0, 4);
        let animalAge = Random.generateRandomNumber(1, 20);

        return new Animal(animalType, animalAge);
    }
    getOwner() {
        return this.owner;
    }
    getPrice() {
        return this.price
    }
}
//cat.js
/* class Cat {
    catList = [];
    animalsArray=new VeterinaryManager
    filterItems = (query) => {
        return this.animalsArray.animalList.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
    };

    catFilter() {
        this.filterItems(filterItems('1'))
    }
} */
class Cat {
    catMed(pCat) {
        setInterval(() => { pCat.pop() }, 7000)
        console.log("pCAT=", pCat)
    }
}
//============================================================
//doctormanager.js
class DoctorManager {
    doctorList = doctor;
    constructor() {}
    emptyControl() {
        this.doctorList.map((doctorCH) => {
            return doctorCH.status
        })
    }
}
//============================================================
function arrayToTable(arr) {
    let rows = arr;
    let headArr = '';
    headArr += '<tr  class="header">';
    for (let header in rows[0]) {
        //headArr += '<th>' + header + '</th>';
        headArr += '<th  onclick="sortTable(0)"  style="width:40%;">' + header + '</th>';
    }
    headArr += '</tr>';
    let listArr = rows.map(list => `<tr><td>${list.owner} </td><td> ${list.animalAge}</td><td>${list.animalType}</td></tr>`).join("");
    document.getElementById("firmaTable").innerHTML = headArr + listArr;
}
//============================================================
//VeterinaryManager.js
class VeterinaryManager {
    animalList = [];
    catParse = []; //Animaltype 1
    fishParse = []; //Animaltype 2
    ravenParse = []; //Animaltype 3
    rapeutic = []; //Tedavi olan Hayvanların Dizisi
    dayTimer = null;
    maxLimit = 10;
    fishinterval = null;
    catinterval = null;
    raveninterval = null;
    constructor() {
        this.createAnimal(Random.generateRandomNumber(10, this.maxLimit))
        this.cat = new Cat;
        this.doctor = new DoctorManager

    }
    startDay() {
        this.animalParse()
        console.log("catParse", this.catParse)
        console.log("fishParse", this.fishParse)
        console.log("ravenParse", this.ravenParse)
        setTimeout(() => {
            this.catTimer();
            this.fishTimer();
        }, 250);
        this.ravenTimer();
        setTimeout(() => {
            clearInterval(this.fishinterval)
            clearInterval(this.raveninterval)
            clearInterval(this.catinterval)
            console.log("rapeutic", this.rapeutic)
        }, 10000);
    }
    createAnimal(pNumber) {
        for (let index = 0; index < pNumber; index++) {
            this.animalList.push(Animal.generator())
        }
    }
    animalParse() {
        this.animalList.map((parse) => {
            if (parse.animalType == 1) {
                this.catParse.push("Kedi")
            } else if (parse.animalType == 2) {
                this.fishParse.push("Hamsi")
            } else {
                this.ravenParse.push("Karga")
            }
        })
    }
    catTimer() {
        this.catinterval = setInterval(() => {
            this.doctor.doctorList.map((pDr) => {
                if (((pDr.expertise === 1) && (!this.isEmpty(this.catParse)) && (pDr.status == false)) /* || ((pDr.expertise === 0) && (!this.isEmpty(this.catParse)) && (pDr.status == false)) */ ) {
                    //pDr.status = !pDr.status;
                    let queue = this.dequeue(this.catParse)
                    pDr.animal.push(queue)
                    this.rapeutic.push(queue)
                }
            })
            console.log(this.doctor.doctorList)
            console.log(this.catParse)
        }, 7000)
    }
    fishTimer() {
        this.fishinterval = setInterval(() => {
            this.doctor.doctorList.map((pDr) => {
                if (((pDr.expertise === 2) && (!this.isEmpty(this.fishParse)) && (pDr.status == false)) /* || ((pDr.expertise === 0) && (!this.isEmpty(this.fishParse)) && (pDr.status == false)) */ ) {
                    //pDr.status = !pDr.status;
                    let queue = this.dequeue(this.fishParse)
                    pDr.animal.push(queue)
                    this.rapeutic.push(queue)
                }
            })
            console.log(this.fishParse)
            console.log(this.doctor.doctorList)
        }, 3000)
    }
    ravenTimer() {
            this.raveninterval = setInterval(() => {
                this.doctor.doctorList.map((pDr) => {
                    if (((pDr.expertise === 2) && (!this.isEmpty(this.ravenParse)) && (pDr.status == false)) /* || ((pDr.expertise === 0) && (!this.isEmpty(this.fishParse)) && (pDr.status == false)) */ ) {
                        //pDr.status = !pDr.status;
                        let queue = this.dequeue(this.ravenParse)
                        pDr.animal.push(queue)
                        this.rapeutic.push(queue)
                    }
                })
                console.log(this.ravenParse)
                console.log(this.doctor.doctorList)
            }, 5000)
        }
        /*    fishTimer() {
               this.fishinterval = setInterval(() => {
                   this.doctor.doctorList.map((pDr) => {
                       if ((pDr.expertise === 2) && (!this.isEmpty(this.fishParse) && (!pDr.status == false))) {
                           pDr.animal.push(this.dequeue(this.fishParse))
                           this.rapeutic.push(this.dequeue(this.fishParse))
                       }
                   })
                   console.log(this.doctor.doctorList)
               }, 3000)
           }
           ravenTimer() {
               this.raveninterval = setInterval(() => {
                   this.doctor.doctorList.map((pDr) => {
                       if ((pDr.expertise === 3) && (!this.isEmpty(this.ravenParse) && (pDr.status == false))) {
                           
                           pDr.animal.push(this.dequeue(this.ravenParse))
                           this.rapeutic.push(this.dequeue(this.ravenParse))
                       }
                   })
               }, 5000)
           } */
    enqueue(element) {
        this.animalList.push(element);
    }
    dequeue(pData) {
        if (this.isEmpty(pData))
            return "Underflow";
        return pData.shift();
    }
    isFull(maxLimit, pData) {
        return this.maxLimit === this.animalList.length;
    }
    isEmpty(pData) {
        return pData.length === 0;
    }
}
//============================================================

class VeterinaryView {
    raceTrack = null; // sadece bu nesnenin görebilecegi bir degisken
    constructor(pRaceTrack) {
            this.raceTrack = pRaceTrack;
        }
        /**
         * toString methodu JS tarafindan bilinen özel metoddur. Bu nesne bir string ile toplandiginda veya Template literal icinde kullanildiginda.
         * JS otomatik olarak toString methôdunu kullanir.
         * Bu nesnenin toString metodu yaris pistindi ve icindeki arabalari html'e cevirerek geri dönderir.
         */
    toString() {
        let cars = this.raceTrack.getCars().map(car => `${new CarView(car)}`).join("");
        return `<main class="race-track"
                      style="width:${this.raceTrack.getTrackDistance()}px">
                   ${cars}
               </main>`;
    }
}
//============================================================
class AnimalViews {
    animal = null; // sadece bu nesnenin görebilecegi, disaridan erisilemeyen bir degisken

    constructor(pAnimal) {
            this.animal = pAnimal;
        }
        /**
         * toString methodu JS tarafindan bilinen özel metoddur. Bu nesne bir string ile toplandiginda veya Template literal icinde kullanildiginda.
         * JS otomatik olarak toString methôdunu kullanir.
         * Bu nesnenin toString metodu bu arabayi html'e cevirerek geri dönderir.
         */
    toString() {
        return `<animal id="${this.animal.getId()}" 
                    class="animal-doctor"
                    style="background-color: ${this.animal.getColor()}; >
                    ${this.animal.getName()}
                    <img src="${this.animal.getImage()}"/>
               </animal>`;
    }
}
//============================================================

//============================================================


let k = new VeterinaryManager;
let kdoc = new DoctorManager;
k.startDay();

console.log("Doktor= ", doctor)
console.log("K=", k.animalList)
console.log(kdoc.doctorList)

arrayToTable(k.animalList);
let listArr = k.animalList.map(list => `<option>${list.animalAge}</option>`).join("");
document.querySelector("veterinary").innerHTML = `${kdoc.name}<br><br>` + listArr;

/*
    document.querySelector("veterinary").innerHTML = `
${doctor}<br><br>
${k.animalList.map(list=>{list.animalAge})}
`;
*/