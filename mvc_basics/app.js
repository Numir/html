/**
 * Bu applikasyon kullanicidan, yapilacak islerini alir ve bunlari yönetmesini saglar
 * 
 * Akis
 * - Kullanici html üzerinden yapacagi isleri sisteme girer
 * - Applikasyon bu isleri girisi sirasina bir listede gösterir
 * - Kullanici bitirdigi isleri listeden silebilir
 * - Kullanici istedigi takdirde silinmis olan isleri de görebilecek.
 * 
 * 
 * Analysis kismi
 * - Ekranda bir input alani ve buton olmali
 * - Bunlarin altinda bitirilmis isleri kapatip acabilen bit buton olmali
 * - Butona basildiginda input alanindaki bilgi bir array'e aktarilir
 * - Hemen ardindan bu array listeye yazdiririlir.
 * - Listede görünen her eleman silinebilir (x) olmaldir.
 * - Silinen elemanlar array'de silindi olarak isaretlenir.
 * - Hemen ardindan yeni array tekrar listeye basilir.
 *      - Bitirilen islerin gösterilip gösterilmemsi durumuna göre bastirilir
 */


// Bütün yapilacak isler bu array'de tutulacak
let todoList = new Array();
let isDoneFilterActive = false;

addEventListenerToTriggerElement();
addEventListenerToFilterElement();



/*
var rows = [{ "firstName": "John", "last Name": "Doe", "age": "46" },
    { "firstName": "James", "last Name": "Blanc", "age": "24" }
];
*/


/***
 * 
 * 
 * 
 * 
 **/
const manavOsman = {
    menus: '.menus',
    orders: '.sepet',
    cash: '.cash',
    menuData: ['Seftali', 'Muz', 'Portakal', 'Karpuz', "Patlican", "Salatalik"],
    menuData2: [2, 3, 1, 5, 6, 1], //Fiyatlar buradan güncellenecek

    ordersData: [],
    tutar: 0
};

/***


 */
manavOsman.renderMenu = function() {
        const ulMenus = this.menuData
            .map(item => {
                return `<li  id="${item}" class="${item}">${item} ${this.fiyat(item)} TL
    <img id="${item}" class="${item}" src="./img/sag.png" alt="Ekle"></li>`;
            })
            .join('');
        this.addToDom(this.menus, ulMenus);
    }
    /**
     * Bu fonksiyon. 
     * Tıklanılan ürünlerin fiyatlarını getirmek için
     */
manavOsman.fiyat = function(i) {
    const fiyat = this.menuData2;
    return fiyat[parseInt(this.menuData.indexOf(i))];

}
manavOsman.addToDom = function(selector, html) {
    document.querySelector(selector).innerHTML = html;
}

manavOsman.renderOrder = function() {
        const ulMenus = this.ordersData
            .map((item, index, items) => {
                const count = items.filter(a => a == item).length;
                return { key: item, value: count };
            })
            .reduce((sum, current) => {
                if (!sum.map(a => a.key).includes(current.key)) {
                    sum.push(current);
                }
                return sum;
            }, [])
            .map(info => {
                return `<li class="${info.key}">${info.key}  =  ${parseInt(this.fiyat(info.key)) * info.value}  TL (Toplam: ${info.value} kg)<span class="delete">X</span></li>`;
            })
            .join('');
        this.addToDom(manavOsman.orders, ulMenus);
        console.log(ulMenus)

    }
    /**
     * Bu fonksiyon. 
     * Sepete eklenen ürünlerin toplam fiyatını bulmak maksatlı
     */
manavOsman.toplam = function(t) {
        this.tutar += parseInt(t);
        let yaz = "<strong>Borçunuz Toplam :   " + this.tutar + " TL</strong>";
        this.addToDom(manavOsman.cash, yaz);
        console.log(this.tutar);
    }
    /**
     * Bu fonksiyon. 
     * Sepetten çıkarılan ürünlerde fiyat düşürmek için
     */
manavOsman.cikar = function(t) {
        this.tutar -= parseInt(t);
        let yaz = "<strong>Borçunuz Toplam :   " + this.tutar + " TL</strong>";
        this.addToDom(manavOsman.cash, yaz);
        console.log(this.tutar);
    }
    /**
     * Bu fonksiyon. 
     * Sepete eklenen ürünler için
     */
manavOsman.AddMenuEvents = function() {
    document.querySelector(this.menus)
        .addEventListener('click', function(e) {
            const selectedItem = e.target.className;
            if (e.target.className === "menus") return; //farklı bir yere basınca hata veriyordu.
            this.toplam(parseInt(this.fiyat(e.target.className)));
            this.ordersData.push(selectedItem);
            this.renderOrder();
        }.bind(this))
}


manavOsman.AddOrderEvents = function() {
    document.querySelector(this.orders)
        .addEventListener('click', function(e) {
            const className = e.target.className;
            if (className == 'delete') {
                const parentClass = e.target.parentElement.className;
                const itemIndex = this.ordersData.indexOf(parentClass);
                this.ordersData.splice(itemIndex, 1);
                this.cikar(parseInt(this.fiyat(parentClass)));
                this.renderOrder();
            }
        }.bind(this))
}
manavOsman.start = function() {
        this.renderMenu();
        this.AddMenuEvents();
        this.AddOrderEvents();
    }
    //manavOsman.start();