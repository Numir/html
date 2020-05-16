class Musteri {
    constructor(pName) {
        this.name = pName;
        this.maktuller = [];
    }
    maktulEkle(pMaktul) {
        this.maktuller.push(pMaktul);
    }
    getir(names) {
        return this.maktuller.filter(item => item.name == names);
        //return this.maktuller[names];
    }
}