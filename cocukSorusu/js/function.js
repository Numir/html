 /**
  * Bu fonksiyon verilen id ile dom üzerinden ilgili nesneyi bulur.
  * @param {*} pId id bilgisi
  */
 function findDomElementById(pId) {
     return document.querySelector(`#${pId}`);
 }

 function readInputElementValue(pId) {
     let inputElement = findDomElementById(pId);
     return inputElement.value;
 }