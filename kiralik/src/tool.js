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

function convert_objectTOarrayOFobjects() {
    let data = {
        "1": "Technology",
        "2": "Startup",
        "3": "IT",
    };

    let result = Object.keys(data)
        .map(key => ({ id: Number(key), name: data[key] }));

    console.log(result);
}