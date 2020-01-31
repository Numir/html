//daire hesapları
function daire_alan_cev(c) {
    let cap = parseInt(document.getElementById("daire_cap").value);
    if (c != null) {
        cap = c;
    }
    let alan = 3.14 * cap * cap;
    let cevre = 2 * 3.14 * cap;
    document.getElementById("daire_alan").innerHTML = "Alanı : " + alan;
    document.getElementById("daire_cev").innerHTML = "Çevresi : " + cevre;
}
//dikdörtgen hesapları
function dikdortgen_alan_cev(u, g) {
    let uzunluk = parseInt(document.getElementById("dikuz").value);
    let genislik = parseInt(document.getElementById("dikge").value);
    if (u != null && g != null) {
        uzunluk = u;
        genislik = g;
    }
    let alan = uzunluk * genislik;
    let cevre = 2 * topla(uzunluk, genislik);
    document.getElementById("dik_alan").innerHTML = "Alanı : " + alan;
    document.getElementById("dik_cev").innerHTML = "Çevresi : " + cevre;
}
//küpün hesapları
function kup_alan_cev(k) {
    let kenar = parseInt(document.getElementById("kup").value);
    if (k != null) {
        kenar = k;
    }
    let alan = 6 * kenar * kenar;
    let hacim = kenar * kenar * kenar;
    document.getElementById("kup_alan").innerHTML = "Alanı : " + alan;
    document.getElementById("kup_hacim").innerHTML = "Hacmi : " + hacim;
}
//Toplama
function topla(a, b) {
    return a + b;
}

function saat() {
    let d = new Date();
    let zaman =
        "Saat Lazım..: " +
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds();
    return zaman;
}
console.log(saat());