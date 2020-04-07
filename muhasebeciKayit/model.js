let firmalar = new Array();
let kantonlar = ["", "Vaud(VD)",
    "Bern(BE)",
    "Luzern(Luzern)(LU)",
    "Uri(UR)",
    "Schwyz(SZ)",
    "Obwalden(OW)",
    "Nidwalden(NW)",
    "Glarus(GL)",
    "Zug(ZG)",
    "Fribourg(Freiburg)(FR)",
    "Solothurn(SO)",
    "Basel-Stadt(BS)",
    "Basel-Landschaft(BL)",
    "Schaffhausen(SH)",
    "AppenzellAusserrhoden(AR)",
    "AppenzellInnerrhoden(AI)",
    "St.Gallen(SanktGallen)(SG)",
    "Graubünden(Grigioni,Grischun)(GR)",
    "Aargau(AG)",
    "Thurgau(TG)",
    "Ticino(TI)",
    "Zürih(Zürich)(ZH)",
    "Valais(Wallis)(VS)",
    "Neuchâtel(NE)",
    "Cenevre(GE)",
    "Jura(JU)",
    "İsviçre(Schweiz,Svizzera(CH)"
];

function inportToKanton() {
    let kantonList = findDomElementById("kantonlar");
    let listArr = kantonlar.map(list => `<option>${list} </option>`).join("");
    kantonList.innerHTML = listArr;
}

function inputControl() {
    //Buraya uyarı eklenecek. boş ise doldurmasını söyle.
    if (readInputElementValue("ad") == "") {
        hata();
        return false;
    } else if (readInputElementValue("soyad") == "") {
        hata();
        return false;
    } else if (readInputElementValue("kantonlar") == "") {
        hata();
        return false;
    }
    return true;
}