class VeterinaryManager {
    animalList = [];
    catParse = []; //Animaltype 1
    fishParse = []; //Animaltype 2
    ravenParse = []; //Animaltype 3
    rapeutic = []; //Tedavi olan Hayvanların Dizisi
    dayTimer = null;
    maxLimit = 40;
    constructor() {
        this.createAnimal(Random.generateRandomNumber(10, this.maxLimit))
        this.cat = new Cat;
    }
    startDay() {
        this.animalParse()
        console.log(this.catParse)
        console.log(this.fishParse)
        console.log(this.ravenParse)
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

    enqueue(element) {
        this.animalList.push(element);
    }
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.animalList.shift();
    }
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.animalList[0];
    }

    isEmpty(pData) {
        return this.animalList.length === 0;
    }
}