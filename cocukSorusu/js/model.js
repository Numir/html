let user = new Array();

let isimler = ["Ali", "Mehmet", "Musa"];

function inportToRandomName() {

    let isimlerS = findDomElementById("ad");

    isimlerS.innerHTML = isimler[Math.floor(Math.random() * isimler.length)];

    //   let listArr = kantonlar.map(list => `<option>${list}</option>`).join("");
    //kantonList.innerHTML = listArr;
}