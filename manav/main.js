let meyve = ["Elma", "Armut", "Şeftali", "Muz"];
let sebze = ["Patates", "Patlıcan", "Salatalık", "Pırasa"]
let dukkan = meyve.concat(sebze);

var btn1 = document.querySelector("#btnEkle");
var panel = document.querySelector("#panel");
var men = document.querySelector("#men");
var panel1 = document.querySelector("#zemin");


function sırala() {
    return dukkan.sort();
}
const button = document.querySelector('#btnEkle');
button.addEventListener('click', function() {
    divEkle();
    veriTopla();
    s12();
}, false);

function divEkle() {
    var div = document.createElement("div");
    div.textContent = "111SZ";
    div.classList = "kutu";
    panel.appendChild(div);

}

function veriTopla() {
    for (let index = 0; index < meyve.length; index++) {
        var div = document.createElement("div");
        //div.textContent = "<h1 class=\"girisAra\">" + meyve[index] + "</h1><br>";
        // <h1 class="girisAra" type="text">Kaç adet sayı girildi :</h1>
        var h1 = document.createElement("h1");
        var h2 = document.createElement('h2');
        h1.className = "girisAra"
        h2.innerHTML = meyve[index];
        h1.innerHTML = meyve[index];


        div.className = "hesapmenu";

        //div.classList = "hesapmenu";
        div.appendChild(h1);
        div.appendChild(h2);
        men.appendChild(div);

    }
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

/*

btn1.onclick = function() {

    var div = document.createElement("div");
    div.textContent = "Nerdesin Dünya";
    div.classList = "zemin";
    panel1.appendChild(div);
}
*/