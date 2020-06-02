import React, { Component } from 'react';
import { InputList } from './input';

class App extends Component {
    render() {
        return (
          <div >
            <h3>Merhaba SüleyMAN </h3> <h2>   React App Denemesi </h2>
            <hr /> <br/>
            <InputList > < /InputList>
           </div>
        );
    }
}

export default App;
/*
<div class="giris">
    <h2>Müşteri Girişi.</h2>
    <input type="text" id="ad" placeholder="Müşteri Adını Giriniz..">
    <input type="text" id="para" placeholder="KDV Dahil Tutarı Giriniz..">
    <h4>Maktul Bilgileri :</h4>
    <input type="text" id="maktul" placeholder="Maktul Adını Giriniz..">
    <input type="text" id="maktulstreet" placeholder="Cadde / Sokak Bilgisi">
    <input type="text" id="maktulplz" placeholder="Posta Kodu">
    <input type="text" id="maktulort" placeholder="İlçe / İL">
    <button id="save">Kaydet</button>
*/
