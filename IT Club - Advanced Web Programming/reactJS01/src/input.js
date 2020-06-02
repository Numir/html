import React from 'react';

export class InputList extends React.Component {
/*  constructor(){
    super();
  document.write(" Maktul Adını Giriniz..")
  }
componentWillMound(){
  document.write(" Maktul Adını Giriniz..")
}*/

    render() {
      const myInput = 'Müşteri Girişi :.';
        return (
            <div>
                <h1>{myInput} </h1><hr/>
                  <input type="text" id="ad" placeholder="Adını Giriniz.."/>
                  <input type="text" id="para" placeholder="Soyadınızı Giriniz.."/>
                  <input type="text" id="para" placeholder="Doğum Tarihinizi Giriniz.."/>
                  <button id="save">Kaydet</button>
          </div>
        )
    }
}
