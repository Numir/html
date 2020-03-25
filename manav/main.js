let meyve = ["Elma", "Armut", "Şeftali", "Muz"];
let sebze = ["Patates", "Patlıcan", "Salatalık", "Pırasa"]
let dukkan = meyve.concat(sebze);

var btn1 = document.querySelector("#btnEkle");
var alici = document.querySelector("#alici");
var manav = document.querySelector("#manav");


function sırala() {
    return dukkan.sort();
}


function bulmaca(event) {

    let bilgi = document.querySelector('#zemin').classList.item(0);
    alert(bilgi);
    console.log(bilgi)
    return bilgi;
}



const button = document.querySelector('#btnEkle');
button.addEventListener('click', function() {

    veriTopla();
    button.style.visibility = "hidden";
}, false);
/*

*/
function veriTopla() {
    for (let index = 0; index < sırala().length; index++) {
        var div = document.createElement("div");
        var h1 = document.createElement("h1");
        h1.className = "giris"
        h1.innerHTML = sırala()[index];
        div.id = "liste" + index;
        div.className = "hesapmenu";
        div.appendChild(h1);
        manav.appendChild(div);
        eklemelik("liste" + index, sırala()[index]);
    }
}

function eklemelik(nedir, divgelen) {
    let aranan = document.querySelector("#" + nedir);
    aranan.addEventListener("click", function() {

        var div = document.createElement("div");
        var h1 = document.createElement("h1");
        h1.className = "sonuc"
        h1.innerHTML = divgelen;
        div.id = "liste" + divgelen;
        div.className = "hesapmenu";
        div.appendChild(h1);
        alici.appendChild(div);


        //    div1.textContent = div;


        aranan.style.visibility = "hidden"; //aranan.innerHTML = "";
    });
}

/*
document.querySelector("#kac").addEventListener("click", function() {
    document.querySelector('#kac').innerHTML = "BUlanık";
});
*/

/*
let enterInputElement = document.querySelector("#enter");
enterInputElement.addEventListener("click", clickEventHandler)

let inputElement = document.querySelector("#sayi");
inputElement.addEventListener("focus", focusEventHandler)


function clickEventHandler(event) {
    let sayiInputElement = document.querySelector("#sayi");
    alert(sayiInputElement.value);
}

function focusEventHandler(event) {
    let sayiInputElement = document.querySelector("#sayi");
    sayiInputElement.value = "";
}
function divEkle() {
    var div = document.createElement("div");
    div.textContent = "111SZ";
    div.classList = "kutu";
    panel.appendChild(div);
}

function s12() {
    var div2 = document.createElement('div');
    div2.className = "div2";
    var h1 = document.createElement('h1');
    h1.innerHTML = "test h1";
    var h2 = document.createElement('h2');
    h2.innerHTML = "test h2";
    var p = document.createElement('P');
    p.innerHTML = "p2";
    div2.appendChild(h1);
    div2.appendChild(h2);
    div2.appendChild(p);
    document.getElementById('div1').appendChild(div2);
};
        //document.getElementById("dikuz").value);
        //divEkle2(document.getElementById(nedir).value);
        //woman.appendChild(document.createElement(div));
btn1.onclick = function() {

    var div = document.createElement("div");
    div.textContent = "Nerdesin Dünya";
    div.classList = "zemin";
    panel1.appendChild(div);
}
*/