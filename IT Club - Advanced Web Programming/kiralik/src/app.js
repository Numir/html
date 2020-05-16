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
+ ekleme yapılacak ise yapılır
+ liste kontrol edilir.
+ işi biten emekliğe ayrılır. karartırılır. 
*/

let listKill = [];
$(function() {
    if (localStorage.listKill) {
        listKill = JSON.parse(localStorage.listKill);
        //showCart();
    }
});
/***
 *  local belleğe kayıt yaptırılacak
 * */
function localStorageSAVE(deger) {
    let musteri = {
        Müşteri: $("#ad").val() || "",
        Ücret: $("#para").val() || "",
        Maktul: $("#maktul").val() || ""
    };
    listKill.push(musteri);
    if (window.localStorage) {
        localStorage.listKill = JSON.stringify(listKill);
    }
    //Verileri temizle..
    inputDelete();
    listele();
}

function inputDelete() {
    veriDelete("ad");
    veriDelete("para");
    veriDelete("maktul");
    veriDelete("maktulstreet");
    veriDelete("maktulplz");
    veriDelete("maktulort");
}

function veriDelete(idDel) {
    let valueDel = findDomElementById(idDel);
    valueDel.value = ""
}

function deleteItem(index) {
    // işi biten maktul buradan pasif hale getirilecek
}

function listele() {
    //tabloyu yenile..musteriTables
    tableMusteri(header = [{
        İsimler: ''
    }], "musteriTables", operasyon.musteriler);
    if (kontrol()) {} else {
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
        localStorageSAVE();
    });

    listele();
}

start();