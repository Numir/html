/**
 * Asagidaki parameterler bilinmektedir:

- Hamsilerin herbirinin tedavi süresi 2 saniye, kargalarin 4 saniye, kedilerin ise 6 saniye sürmektedir.
- Is yerinin bir günü 180 saniyedir.
- Doktrolar tedaviler arasinda 1sn dinlenmektedir
- Her hayvanin yasi ve sahibinin ismi alinmalidir.
- Hamsi tedavisi 40.-, kedi 100.- ve karga 150.- Franktir.

Praxisde su anda asagidaki veterinerler calismaktadir:
- Niyazi Gül, hamsi ve kedi uzmani
- Yasemin hanim, karga uzmani
- Cabbar bey kedi uzmani
- Eleni hanim, hamsi uzmani

Opsiyonel:
- Her hayvan taburcu oldugunda Web Audio API kullanilarak seslendirme yapilir.
- Web Speech API (SpeechSynthesis) kullanilarak sonularin okutulmasi.
- Tüm bu islemlerin web sayfasi üzerinde resmedilmesi.

Program akisi:
================
Sistem, rastgele olarak hayvanlar üretir. Her doktora, bekleyen ve kendisinin uzmanlik alaninda olan hayvan,
 eger müsait ise verilir ve doktor tedavisini görür ve taburcu eder. Gün bittiginde ekrana
- Toplamda kac hayvanin tedav icin kaydoldugu
- Hangi doktorun gün icinde kac hayvana baktigi
- Her bir doktorun be kadar kazandirdigi bilgisi.
- Türlerine göre Islemi yapilamayan hayvan sayisi, tedavisi yapilanlarin yüzdelik sayilari
Gibi Niyazi Gül beye yardimci olabilecek istatsitiki bilgilerin gösterimi yapilmasi gerekiyor.
 */

/**
 * Doktorlar için bir class oluşturacağız ve bu class altında doktorların adı ve hangi 
    alanda uzmanlık yaptıkları biligilerini tutacağız.
 * Hayvanlar için bir class oluşturacağız ve bu alanda random olarak sayılar ve random olarak isimler üreteceğiz 
    *{animalAge:,animalType:,animalOwner:,price:} gibi bilgileri tutacağız ve random olarak ir diziye aktafracağız 
    *price bilgisi dışardanda cekilebilir bunu proje esnasında karar vereceğim.Random sahip ismi icin faker js kullanacağım
    *Bu alanda hayvanları tedavi süresi de tutulabilir .aynı obje icerisinde tutmayı düşünüyorum fakat price ,ve sür ebilgileri başka
    *bir alanda da tıtulabilir. DB'de kullanıldığı gibi ortak bir bağlantı noktası olan type ile bir süzme işlemide yapılabilir projenin 
    *gidişatına gore bu kısmı düzenleyeceğim
*Manager Class olacak ve bu class icerisinde doktor ve hayvanlar classını konusturacagız .burda üretilen veriler view controller üzeirinde ekrana yansıtılacak.
    *Burda opsiyonel adımları goz onunde bulundurursak . Bir calback functionu ile sayfa icerisinde belli aralıklarla mager clasını check
    edip ekrANA bir cıktı vemrsini saglamalıyız.
    ""
 */
let k=new VeterinaryManager;
let kdoc=new DoctorManager;
k.startDay();
console.log(doctor)
console.log(k.animalList)
console.log(kdoc.doctorList)
document.querySelector("veterinary").innerHTML=`
${doctor}<br><br>
${k.animalList.map((list)=>{list.animalAge})}
`
