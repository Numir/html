class Faker{
    
    static generateColor(){
        return faker.internet.color();
    }
    static generatePersonName(){
        return faker.name.findName();
    }
    static generateImage(){
        return faker.image.animals();
    }
    static generateUniqueId(){
        return faker.random.uuid();
    }
}
class Random{
    static generateRandomNumber(pMax, pMin){
        return Math.floor(Math.random() * (pMax - pMin + 1) + pMin);
    }
}