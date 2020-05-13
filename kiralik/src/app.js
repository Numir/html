/**
* KULLANICI ETKİLEŞİMİ
+  Müdür sisteme girer. Önceden girilen müşteri varsa onları görür.
    - Eğer eklemek isterse müşteri ekler
    - müşterilere maktul tanımlar    
+ İşe başlamak için müşterilerindeki maktullere bakar, kesin ölecek insan olarak görür.
    - maktullerin birkaç adresi bulunmaktadır.
        -boş zamanında teknik takip yapıp adres kontrolü yapacaktır.
        - adres ekleme ve çıkarma olacaktır.
    - işi biten maktul pasif hale geçer.
 */

/** 
*TEKNIK DETAY
+ Operasyon başlar.
 
*/
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

console.log(musteriZiya.maktulEkle);