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