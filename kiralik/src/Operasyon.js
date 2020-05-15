class Operasyon {
    constructor(pName) {
        this.name = pName;
        this.musteriler = [];
    }
    musteriEkle(pMusteri) {
        this.musteriler.push(pMusteri);
    }
    geriVer() {
        return this.musteriler;
    }

}
const operasyon = new Operasyon();

const musteriZiya = new Musteri('Ziya');
const musteriYasar = new Musteri('Yaşar');
const musteriArnavut = new Musteri('Arnavut');

const maktulKomsu = new Maktul('Komşu');
const maktulZeki = new Maktul('Zeki');
const maktulKezban = new Maktul('Kezban');
const maktulLeyla = new Maktul('Leyla');

//const adresArnavut = new Adres('Aranıyor', '0000', '0000');
const adresKomsu = new Adres('GrossStrasse 7', '9105', 'ZUG');
const adresZeki = new Adres('Badenstrasse 254', '8803', 'BADEN');
const adresKezban = new Adres('Handstrasse 45', '8105', 'ZURICH');
const adresLeyla = new Adres('Alternstrasse 391', '3105', 'BERN');
const adresLeylaYazlik = new Adres('Felsenstrasse 785', '8787', 'STEFA');

maktulKomsu.AdresEkle(adresKomsu);
maktulZeki.AdresEkle(adresZeki);
maktulKezban.AdresEkle(adresKezban);
maktulLeyla.AdresEkle(adresLeyla);
maktulLeyla.AdresEkle(adresLeylaYazlik);

musteriZiya.maktulEkle(maktulKomsu);
musteriZiya.maktulEkle(maktulZeki);
musteriYasar.maktulEkle(maktulKezban);
musteriArnavut.maktulEkle(maktulLeyla);

operasyon.musteriEkle(musteriZiya);
operasyon.musteriEkle(musteriYasar);
operasyon.musteriEkle(musteriArnavut);

//console.log(musteriZiya.maktuller);
//console.log(operasyon.musteriler);