function writeTextFile(afilename, output) {
    var txtFile = new File(afilename);
    txtFile.writeln(output);
    txtFile.close();
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
    arrayToTable(firmalar);
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

function arrayToTable(arr) {
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