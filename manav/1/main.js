let meyve = ["elma", "armut", "şeftali", "muz"];

function veriTopla() {
    let kullanıcıGiris = "";
    for (let index = 0; index < meyve.length; index++) {



        var div = document.createElement("div");
        div.textContent = meyve[index];
        div.classList = "kutu";
        panel1.appendChild(div);

        /*
                kullanıcıGiris = prompt(index + 1 + ". Sayıyı Giriniz :", "iki");
                this.sayiDizisi.push(kullanıcıGiris);
                this.sayRakam.push(this.mapToNumber(kullanıcıGiris));
                */
    }
    this.gonder(this.sayRakam);
}

const button = document.querySelector('#btnEkle');
button.addEventListener('click', function() {
    veriTopla();
}, false);


var btn1 = document.querySelector("#btnEkle");
var panel = document.querySelector("#panel");

btn1.onclick = function() {

    var div = document.createElement("div");
    div.textContent = meyve[0];
    div.classList = "kutu";
    panel1.appendChild(div);
};