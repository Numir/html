class VeterinaryManager {
    animalList = [];
    catParse = []; //Animaltype 1
    fishParse = []; //Animaltype 2
    ravenParse = []; //Animaltype 3
    rapeutic = []; //Tedavi olan Hayvanların Dizisi
    dayTimer = null;
    maxLimit = 100;
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
        console.log(this.catParse)
        console.log(this.fishParse)
        console.log(this.ravenParse)
        setTimeout(() => {
            this.catTimer();
            this.fishTimer();
        }, 250);
        this.ravenTimer();
        setTimeout(() => {
            clearInterval(this.fishinterval)
            clearInterval(this.raveninterval)
            clearInterval(this.catinterval)
            console.log(this.rapeutic)

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
                if (((pDr.expertise === 1) && (!this.isEmpty(this.catParse)) && (pDr.status == false)) /* || ((pDr.expertise === 0) && (!this.isEmpty(this.catParse)) && (pDr.status == false)) */) {
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
                if (((pDr.expertise === 2) && (!this.isEmpty(this.fishParse)) && (pDr.status == false))/* || ((pDr.expertise === 0) && (!this.isEmpty(this.fishParse)) && (pDr.status == false)) */) {
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
                if (((pDr.expertise === 2) && (!this.isEmpty(this.ravenParse)) && (pDr.status == false))/* || ((pDr.expertise === 0) && (!this.isEmpty(this.fishParse)) && (pDr.status == false)) */) {
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