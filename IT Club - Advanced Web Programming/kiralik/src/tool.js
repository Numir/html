/*
Bu dosya bir kütüphane gibi geliştirilecektir.
*/

// Bu fonksiyon verilen id ile dom üzerinden ilgili nesneyi bulur.
function findDomElementById(pId) {
    return document.querySelector(`#${pId}`);
}

function readInputElementValue(pId) {
    let inputElement = findDomElementById(pId);
    return inputElement.value;
}

function generateRandomNumber(pMax, pMin) {
    return Math.floor(Math.random() * (pMax - pMin + 1) + pMin);
}

window.addEventListener("DOMContentLoaded", function() {
    // addrow was declared at a higher scope, so it's accessible here
    // We need to have this function call wait until the DOM is loaded
    // because it needs to scan the DOM for the table elements
    //addrow();
});

//  Objeyi array e çevirir.
function convert_objectTOarrayOFobjects(obj) {

    return Object.keys(obj)
        .map(key => ({ id: Number(key), name: obj[key] }));

}
// array birleştirme işlemini yürütür.
function arrConcat(arrays) {
    return [].concat(...arrays);
    // return Array.prototype.concat.apply([], arrays);

    // Array temizle
    // var s = "[" + JSON.stringify(arrays).replace(/\[|]/g, '') + "]";
    //var flattened = JSON.parse(s);
    //    let b = arrays.reduce((acc, obj) => [...acc, Object.values(obj).map(y => y)], []);
}

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