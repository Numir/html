/**
 
SENARYO :
- Otomat doldurulur.
- müşteri gelir talepte bulunur.
- müşteri parayı yatırır
- herşey çok güzel
    - gerekli hesaplama yapılır ona göre poşete şeker konur.
    - varsa para üstü teslim edilir.
- para eksik tamamlaması beklenir
    - iade edilebilir
    - veya olduğu kadar şeker verilir.
- depodaki şeker kontrol edilir.
- sıradaki müşteri beklenir

 */


class Random {
    static adet() {
        return Math.floor(Math.random() * 4);
    }
    static generateRandomNumber(pMax, pMin) {
        return Math.floor(Math.random() * (pMax - pMin + 1) + pMin);
    }

}
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
    secmeSeker() {
        return this.seker[Random.generateRandomNumber(this.seker.length, 0)];
    }
}
class Posetler {
    constructor() {
        this.poset = [
            { name: "Küçük", size: 250, price: 0.2 },
            { name: "Orta", size: 400, price: 0.35 },
            { name: "Büyük", size: 750, price: 0.70 }
        ]
    }
}

class Musteri {
    constructor() {
        this.musteriSekeri = [];
        this.sekerotomat = Sekerler.seker;
        this.sekerOlustur(Random.adet());
    }
    geldi() {

    }
    sekerOlustur(adet) {
        for (let index = 0; index < adet; index++) {
            this.musteriSekeri.push(Sekerler.secmeSeker);
        }
        //   this.musteriSekeri.map(list => console.log(list.name));
        //console.log(this.musteriSekeri.join(""));

        let sayı = Random.generateRandomNumber(Sekerler.seker.length, 0);
        console.log(sayı);

        console.log(Sekerler.secmeSeker);

    }
    rasgeleSecim() {}
}
const musteri = new Musteri();
const sekerler = new Sekerler();
const posetler = new Posetler();
musteri.sekerOlustur();

/*
Merhabalar arkadaslar

Ferruh emminin sekerci dükkani, cocuklarin cok ilgisini ceken ve cesit cesit sekerler bulunan bir dükkandir. 
Ferruh emmi, dükkana daha hizli ve kaliteli hizmet vermek icin bir kac tane seker otomati koymak
 istemektedir. Her müsteri degisik miktarlarda sekeri sistemin ekranindan secebilir ve satin alma 
 islemini ödemesini yaparak bitir. Otomat satin alinan sekerlerin toplam ücretini ekranda gösterir 
 ve sekerlerin hacimlerine göre, sekerlerin konulacagi 3 fakli büyüklükte kagit posetten hangi(sini/lerini)
  kullanacagina karar verir ve sekeleri o posetler ile disari cikarir.

Seker Cesitleri
=======================
- Yuvarlak lolipop (50cm3), CHF 3.-
- Burgulu lolipop (20cm3), CHF 2.5
- Jelibon (45cm3), CHF 2.75
- Akide sekeri (26cm3), CHF 5.-
- Lokum (8cm3), CHF 1.5

Posetlerin hacimleri
=======================
- Kücük poset: 250cm3, tanesi 20 Rappen
- Orta büyüklükteki poset 400cm3, tanesi 35 Rappen
- En büyük olani ise 750cm3, tanesi 70 Rappen

Kriterler:
=======================
- Analiz bölümünün bulunmasi (user interaction ve technical details)
- Programin düzgün calismasi
- Güzel bir dizayn (bootstrap kullanimi olmali)
- Isimlendirmelerinin dogru yapilmasi (class, degisken, method)
- Data Modelin class kullanilarak olusturulmasi (her classin kendine ait bir dosyasi olacak)
- Kod içine JAVA Doc style yorumların eklenmesi
- Kod makyajina dikkat edilmesi

Teslimat Formatı:
=======================
isim_soyisim_AWP_M105_seker_automati.zip
- index.html
- style.css
- src
--- view (klasörü)
--- model (klasörü)
- app.js

Happy Coding!
 */