class Adres {
    constructor(pStreet, pPlz, pOrt) {
        this.street = pStreet;
        this.plz = pPlz;
        this.ort = pOrt;
        this.Adres = this.adresBirle();
    }
    adresBirle() {
        return this.street + " / " + this.plz + " / " + this.ort;
    }
}