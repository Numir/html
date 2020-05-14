class Adres {
    constructor(pStreet, pPlz, pOrt) {
        this.street = pStreet;
        this.plz = pPlz;
        this.ort = pOrt;
        this.Adres = this.adresBirle();
    }
    adresBirle() {
        return this.street + " / " + this.plz + " / " + this.ort;
    }

}

class AddressForm {
    constructor() {
        this.streetInput = document.querySelector('#street');
        this.plzInput = document.querySelector('#plz');
        this.ortInput = document.querySelector('#ort');
        document.querySelector('#submitAddress').addEventListener('click', () => {
            new Address(this.streetInput.value, this.plzInput.value, this.ortInput.value)
        })
    }
}