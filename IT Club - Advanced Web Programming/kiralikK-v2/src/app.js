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

//const operasyon = new Operasyon();


let listKill = [];
$(function() {
    if (localStorage.listKill) {
        listKill = JSON.parse(localStorage.listKill);
        //showCart();
    }
});

var cart = [];
$(function() {
    if (localStorage.cart) {
        cart = JSON.parse(localStorage.cart);
        showCart();
    }
});

function addToCart() {
    var price = $("#products").val();
    var name = $("#products option:selected").text();
    var qty = $("#qty").val();

    for (var i in cart) {
        if (cart[i].Product == name) {
            cart[i].Qty = qty;
            showCart();
            saveCart();
            return;
        }
    }
    var item = {
        Product: name,
        Price: price,
        Qty: qty
    };
    cart.push(item);
    saveCart();
    showCart();
}

function deleteItem(index) {
    cart.splice(index, 1);
    showCart();
    saveCart();
}

function saveCart() {
    if (window.localStorage) {
        localStorage.cart = JSON.stringify(cart);
    }
}

function showCart() {
    if (cart.length == 0) {
        $("#cart").css("visibility", "hidden");
        return;
    }

    $("#cart").css("visibility", "visible");
    $("#cartBody").empty();
    for (var i in cart) {
        var item = cart[i];
        var row = "<tr><td>" + item.Product + "</td><td>" +
            item.Price + "</td><td>" + item.Qty + "</td><td>" +
            item.Qty * item.Price + "</td><td>" +
            "<button onclick='deleteItem(" + i + ")'>Delete</button></td></tr>";
        $("#cartBody").append(row);
    }
}


/***
 * 
 * */


function localStorageSAVE(deger) {

}

function kayitEkle() {
    /*
        let musteri = {
            Müşteri: $("#ad").val(),
            Ücret: $("#para").val(),
            Maktul: $("#maktul").val()
        };
        listKill.push(musteri);
        if (window.localStorage) {
            localStorage.listKill = JSON.stringify(listKill);
        }
    */
    //Verileri temizle..
    // inputDelete();

    // arrayToTableS(musteriZiya.maktuller);


    listele();

    //console.log(musteri);

}

function kayitSil(pId) {
    localStorage.removeItem(`#${pId}`.val());
    listele();
}

function hepsiniSil() {
    localStorage.clear();
    listele();
}

function listele() {
    //tabloyu yenile..maktulTables
    tableMusteri(header = [{
        İsimler: ''
    }], "musteriTables", operasyon.musteriler);



    if (kontrol()) {
        var liste = "<tr><th>İsim</th><th>Değer</th></tr>";
        var anahtar = "";
        var i = 0;
        for (i = 0; i <= localStorage.length - 1; i++) {
            anahtar = localStorage.key(i);
            liste += "<tr><td>" + anahtar + "</td><td>" +
                localStorage.getItem(anahtar) + "</td></tr>";
        }
        document.getElementById("liste").innerHTML = liste;
        if (localStorage.length > 0) {
            document.getElementById("kayitlar").style.visibility = "visible";
        } else {
            document.getElementById("kayitlar").style.visibility = "hidden";
        }
    } else {
        alert("Tarayıcıda local storage desteği bulunmamaktadır!");
    }
}

function kontrol() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}
/***
 * 
 */

let kantonlar = ["", "Vaud(VD)",
    "Bern(BE)",
    "Luzern(Luz",
    "Uri(UR)",
    "Schwyz(SZ)",
    "Obwalden(OW)",
    "NidwalW)",
];

function inportToAbout() {
    let products = findDomElementById("products");
    let listAS = kantonlar.map(list => `<option>${list}</option>`).join("");
    products.innerHTML = listAS;
    kayitEkle();

}


function inputControl() {
    //Buraya uyarı eklenecek. boş ise doldurmasını söyle.
    if (readInputElementValue("ad") == "") {
        hata();
        return false;
    } else if (readInputElementValue("para") == "") {
        hata();
        return false;
    } else if (readInputElementValue("maktul") == "") {
        hata();
        return false;
    }
    return true;
}

function inputArray() {
    let newMusteri = new Musteri(readInputElementValue("ad"));
    let newMaktul = new Maktul(readInputElementValue("maktul"));
    let newMaktulAdres = new Adres(readInputElementValue("maktulstreet"), readInputElementValue("maktulplz"), readInputElementValue("maktulort"));
    newMaktul.AdresEkle(newMaktulAdres);
    newMusteri.maktulEkle(newMaktul);
    operasyon.musteriEkle(newMusteri);
}


function tableMusteri(header, table, arr) {
    let rows = arr;
    let baslik = header;
    let headArr = '';
    headArr += '<tr  class="header">';
    for (let header in baslik[0]) {
        headArr += '<th  onclick="sortTable(0)"  style="width:100%;">' + header + '</th>';
    };
    headArr += '</tr>';
    let listArr = rows.map(item => `<tr class="${item.name}"   onclick="maktulGoster('${item.name}')" ><td>${item.name} </td></tr>`).join("");
    document.getElementById(table).innerHTML = headArr + listArr;
}

//Müşteri listedeki seçim sonrası maktulleri getirir.
function maktulGoster(maktul) {
    let maktulolacak = operasyon.geriVer().filter(item => {
        if (item.name == maktul) {
            //let result = item.map(a => a.maktul); //_.map(item,"maktul")
            let liste = new Musteri(item.name);
            console.log("LISTE = ", liste);
            return liste;
        }
    });
    const newAR = Object.keys(maktulolacak).map(function(key, index) {
        return [Number(key), maktulolacak[key]];
    });
    tableMaktul(header = [{
        İsimler: '',
        Durum: '',
        Adresler: '',
        İşlemDurumu: ''
    }], "maktulTables", newAR[0][1].maktuller);
}

function tableMaktul(header, table, arr) {
    let rows = arr;
    let baslik = header;
    let headArr = '';
    headArr += '<tr  class="header">';
    for (let header in baslik[0]) {
        headArr += '<th  onclick="sortTable(0)"  style="width:30%;">' + header + '</th>';
    };
    headArr += '</tr>';
    let listArr = rows.map(item => `<tr><td>${item.name} </td><td> ${item.durum}</td><td>${item.adresler[0].Adres}</td>  
        <td><button onclick='deleteItem(" + i + ")'>Öldü</button></td></tr>`).join("");
    document.getElementById(table).innerHTML = headArr + listArr;
}

function arrayToTableS(header, table, arr) {

    let rows = arr;
    let baslik = header;
    if (rows.length == 0) {
        $(`#${table}`).css("visibility", "hidden");
        return;
    }
    //$("#musteriTable").css("visibility", "visible");
    $(`#${table}`).css("visibility", "visible");

    let headArr = '';
    headArr += '<tr  class="header">';
    for (let header in baslik[0]) {
        //headArr += '<th>' + header + '</th>';
        headArr += '<th  onclick="sortTable(0)"  style="width:20%;">' + header + '</th>';
    }
    headArr += '</tr>';
    //let listArr = rows.map(item => `<tr><td>${item.name} </td><td> ${item.durum}</td><td>${item.adresler[0].Adres}</td>
    let listArr = rows.map(item => `<tr><td>${item.name} </td>
        <td><button onclick='deleteItem(" + i + ")'>Öldü</button></td></tr>`).join("");
    document.getElementById(table).innerHTML = headArr + listArr;
}

function hata() {
    document.getElementById("hata").innerHTML = "Tüm bilgileri doldurunuz..";
    setTimeout(hatasil, 2500)
}

function hatasil() {
    document.getElementById("hata").innerHTML = "";
}
var table = document.getElementById("musteriTable");
if (table != null) {
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].cells[j].onclick = function() {
                tableText(this);
            };
    }
}

function tableText(tableCell) {
    alert(tableCell.innerHTML);
}

function start() {


    //Arama çubuğu hareketlenince burayı işle
    let inputTosearch = findDomElementById("inputSearch");
    inputTosearch.addEventListener("keyup", function(event) {
        inputSearch();
    });

    //Kaydet butonuna basınca burdayım.
    let buttonTosave = findDomElementById("save");
    buttonTosave.addEventListener("click", function(event) {
        if (inputControl()) {
            inputArray()
        };
        kayitEkle();
    });

    listele();
    inportToAbout(); // Önceden girilen verilerin yüklenmesi..

}

start();