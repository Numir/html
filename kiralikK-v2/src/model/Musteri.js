class Musteri {
    constructor(pName) {
        this.name = pName;
        this.maktuller = [];
    }
    maktulEkle(pMaktul) {
        this.maktuller.push(pMaktul);
    }
    getir(names) {
        let bul = this.maktuller.filter(item => item.name == names);
        console.log("bul", bul);


        //return this.maktuller[names];
    }
}