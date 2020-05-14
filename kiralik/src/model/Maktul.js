class Maktul {

    constructor(pName) {
        this.name = pName;
        this.hayattaMI = true;
        this.durum = this.maktulDurum(); // öldü ne, 
        this.adresler = [];
    }

    AdresEkle(pAdres) {
        this.adresler.push(pAdres);
    }
    maktulDurum() {
        if (this.hayattaMI) return "Nefes alıyor"
        else {
            return "Kütükten Silindi :( ";
        }

    }
}