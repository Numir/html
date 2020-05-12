let merhum = {
    menu: [{
        name: 'Croatia',
        link: '0',
        sub: null
    }, {
        name: 'England',
        link: '1',
        sub: [{
            name: 'Arsenal',
            link: '0-0',
            sub: null
        }, {
            name: 'Liverpool',
            link: '0-1',
            sub: null
        }, {
            name: 'Manchester United',
            link: '0-2',
            sub: null
        }]
    }, {
        name: 'Spain',
        link: '2',
        sub: [{
            name: 'Barcelona',
            link: '2-0',
            sub: null
        }, {
            name: 'Real Madrid',
            link: '2-1',
            sub: null
        }]
    }, {
        name: 'Germany',
        link: '3',
        sub: [{
            name: 'Bayern Munich',
            link: '3-1',
            sub: null
        }, {
            name: 'Borrusia Dortmund',
            link: '3-2',
            sub: null
        }]
    }]
};


let firmalar = new Array();
let kantonlar = ["", "Vaud(VD)",
    "Bern(BE)",
    "Luzern(Luz",
    "Uri(UR)",
    "Schwyz(SZ)",
    "Obwalden(OW)",
    "NidwalW)",
];

function inportToKanton() {
    let kantonList = findDomElementById("kantonlar");
    let listArr = kantonlar.map(list => `<option>${list}</option>`).join("");
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

function inputSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputSearch");
    filter = input.value.toLowerCase();
    table = document.getElementById("firmaTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function veriDelete(idDel) {
    let valueDel = findDomElementById(idDel);
    valueDel.value = ""
}

function inputDelete() {
    veriDelete("ad");
    veriDelete("soyad");
    veriDelete("kantonlar");
    veriDelete("inputSearch");
}

function inputArray() {
    firmalar.push({ Ad: readInputElementValue("ad"), Soyad: readInputElementValue("soyad"), Kanton: readInputElementValue("kantonlar") });
    //Verileri temizle..
    inputDelete();
    //tabloyu yenile..
    arrayToTableS(firmalar);
}
// Bu fonksiyon verilen id ile dom üzerinden ilgili nesneyi bulur.
function findDomElementById(pId) {
    return document.querySelector(`#${pId}`);
}

function readInputElementValue(pId) {
    let inputElement = findDomElementById(pId);
    return inputElement.value;
}

function hata() {
    document.getElementById("hata").innerHTML = "Tüm bilgileri doldurunuz..";
    setTimeout(hatasil, 2500)
}

function hatasil() {
    document.getElementById("hata").innerHTML = "";
}

function arrayToTableS(arr) {
    let rows = arr;
    let headArr = '';
    headArr += '<tr  class="header">';
    for (let header in rows[0]) {
        //headArr += '<th>' + header + '</th>';
        headArr += '<th  onclick="sortTable(0)"  style="width:40%;">' + header + '</th>';
    }
    headArr += '</tr>';
    let listArr = rows.map(list => `<tr><td>${list.Ad} </td><td> ${list.Soyad}</td><td>${list.Kanton}</td></tr>`).join("");
    document.getElementById("firmaTable").innerHTML = headArr + listArr;
}
//Alıntı = https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("firmaTable");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function start() {
    inputDelete(); //Girişleri temizle
    inportToKanton(); //kantonlar yükleniyor..
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
    });
}

start();





/*


//VeterinaryManager.js
class VeterinaryManager2 {
    animalList = [];
    catParse = []; //Animaltype 1
    fishParse = []; //Animaltype 2
    ravenParse = []; //Animaltype 3
    rapeutic = []; //Tedavi olan Hayvanların Dizisi
    dayTimer = null;
    maxLimit = 40;
    constructor() {
        this.createAnimal(Random.generateRandomNumber(10, this.maxLimit))
        this.cat = new Cat;
    }
    startDay() {
        this.animalParse()
        console.log("catParse", this.catParse)
        console.log("fishParse", this.fishParse)
        console.log("ravenParse", this.ravenParse)
    }
    createAnimal(pNumber) {
        for (let index = 0; index < pNumber; index++) {
            this.animalList.push(Animal.generator())
        }
    }
    animalParse() {
        this.animalList.map((parse) => {
            if (parse.animalType == 1) {
                this.catParse.push("Kedi")
            } else if (parse.animalType == 2) {
                this.fishParse.push("Hamsi")
            } else {
                this.ravenParse.push("Karga")
            }
        })
    }

    enqueue(element) {
        this.animalList.push(element);
    }
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.animalList.shift();
    }
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.animalList[0];
    }

    isEmpty(pData) {
        return this.animalList.length === 0;
    }
}

*/