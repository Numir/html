class Animal{                     
    owner = Faker.generatePersonName();          
    constructor(animalType, animalAge,){
        this.animalType = animalType;
        this.animalAge = animalAge;
    }

    /**
     * Hayvanları Rasgele Ürettiğim,z methoddur.
     */
    static generator(){
        let animalType = Random.generateRandomNumber(0, 4);
        let animalAge = Random.generateRandomNumber(1, 20); 
        
        return new Animal(animalType, animalAge);
    }
    getOwner(){
        return this.owner;
    }
    getPrice(){
        return this.price
    }
    
}