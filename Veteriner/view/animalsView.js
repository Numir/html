class AnimalViews{
    animal = null;                    // sadece bu nesnenin görebilecegi, disaridan erisilemeyen bir degisken

    constructor(pAnimal){
        this.animal = pAnimal;
    }

    /**
     * toString methodu JS tarafindan bilinen özel metoddur. Bu nesne bir string ile toplandiginda veya Template literal icinde kullanildiginda.
     * JS otomatik olarak toString methôdunu kullanir.
     * Bu nesnenin toString metodu bu arabayi html'e cevirerek geri dönderir.
     */
    toString(){
        return `<animal id="${this.animal.getId()}" 
                     class="animal-doctor"
                     style="background-color: ${this.animal.getColor()}; >
                     ${this.animal.getName()}
                     <img src="${this.animal.getImage()}"/>
                </animal>`;
    }
}