class Sekerler {
    constructor() {
        this.seker = [
            { name: "Yuvarlak lolipop", size: 50, price: 3 },
            { name: "Burgulu lolipop", size: 20, price: 2.5 },
            { name: "Jelibon ", size: 45, price: 2.75 },
            { name: "Akide sekeri", size: 26, price: 5 },
            { name: "Lokum ", size: 8, price: 1.5 }
        ]
    }
    start() {

    }
    stop() {

    }
    secmeSeker() {
        return this.seker[Random.generateRandomNumber(this.seker.length, 0)];
    }
}