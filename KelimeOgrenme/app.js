let worte = ["der Amateur", "das Embargo ", "das Ambiente ", "der Amethyst ", "das Amphitheater ", "der Admiral ", "das Ammoniak ", "das Ammonium ", "das Ampere "];
let worte2 = ["Amatör", "Ambargo", "Ambiyans", "Ametist", "Amfi", "Amiral", "Amonyak", "Amonyum", "Amper"];

function randomWorte() {
    return worte[Math.floor(Math.random() * worte.length)].toString();
};

function randomWorte2() {
    return worte2[Math.floor(Math.random() * worte2.length)].toString()
};

function ekleDomCevap(array) {
    const ulMenus = array.map(item => {
            return `<li  id="${item}" class="${item}">${item} 
                                <img id="${item}" class="${item}" src="./img/sag.png" alt="Ekle"></li>`;
        })
        .join('');
    document.querySelector(".sepet").innerHTML = "<li>" + ulMenus + "</li>";
    //ekleDom(".sonuc", ulMenus);
};

function ekleDomSoru(arr) {

    document.querySelector(".soru").innerHTML = "<li>" + arr + "</li>";
};
//renderMenu();
/**
 * Almaca kelimeler gelecek 1 adet
 */
function soruHazirla() {
    ekleDomSoru(randomWorte());
    let cevap = worte2[worte.indexOf(randomWorte)];
    let digerCevap = new Array();
    for (let index = 0; index < 3; index++) {
        /**
         * TODO: dizi içinde kontrol olacak 
         * eğer varsa i-- olacak
         */
        // console.log(cevaplar);
        //   cevaplar.push(randomWorte2()).join();
        digerCevap.push(randomWorte2());
    }
    ekleDomCevap(digerCevap);

    /**
     * en değilde herhangi bir yerde olacak cevap.
     */
    //  arrayToRender(cevaplar);
    // return document.querySelector(".sepet").innerHTML = cevaplar;
};
//soruHazirla();


function sonuc() {
    /***
     * TODO : menus ile seçilen sepet içindeki indexler aynı ise doğru yazdır.
     * değilse yanlış oluyor
     */
    document.querySelector(".cevap").innerHTML = cevaplar;
}
/**
 * opp - object oriented programing
 * 
 *  - board
 *  - piece
 *  - player
 *  - manager
 */