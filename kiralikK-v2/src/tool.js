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