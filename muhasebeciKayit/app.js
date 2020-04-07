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