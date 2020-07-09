let firmalar = new Array();

function inputSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputSearch");
    filter = input.value.toLowerCase();
    table = document.getElementById("musteriTable");
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


//Alıntı = https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("musteriTables");
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







/*
//VeterinaryManager.js
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
function kayitEkle() {
    let musteri = {
        Müşteri: $("#ad").val(),
        Ücret: $("#para").val(),
        Maktul: $("#maktul").val()
    };
    listKill.push(musteri);
    if (window.localStorage) {
        localStorage.listKill = JSON.stringify(listKill);
    }

    //Verileri temizle..
    // inputDelete();
    //tabloyu yenile..
    arrayToTableS(musteriZiya.maktuller);
    // showMaktul();
    //    const musteri = { Ad: readInputElementValue("ad"), Nakit: readInputElementValue("para"), Müşteri: readInputElementValue("maktul") };



        let ad = $("#ad").val();
        let para = $("#para").val();
        let maktul = $("#maktul").val();

        let musteri = {
            Müşteri: ad,
            Ücret: para,
            Maktul: maktul
        };



if (window.localStorage) {
    localStorage.listKill = JSON.stringify(listKill);
}

listele();

console.log(musteri);
}



*/
