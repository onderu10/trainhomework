// Kullanıcıdan doğum günü ve ayını alın
const gun = parseInt(prompt("Doğum gününüzü girin:"));
const ay = parseInt(prompt("Doğum ayınızı gün olarak girin ):"));

// Doğum tarihine göre burcu belirleyen bir fonksiyon

  if ((ay === mart && gun >= 21) || (ay === nisan && gun <= 19)) {

    console.log("Boğa Burcu");
  }
  else{

    console.log("Akrep Burcu");

  }
  
  
    // return "Koç Burcu";
//   } else if ((ay === 4 && gun >= 20) || (ay === 5 && gun <= 20)) {
//     return "Boğa Burcu";
//   } else if ((ay === 5 && gun >= 21) || (ay === 6 && gun <= 20)) {
//     return "İkizler Burcu";
//   } else if ((ay === 6 && gun >= 21) || (ay === 7 && gun <= 22)) {
//     return "Yengeç Burcu";
//   } else if ((ay === 7 && gun >= 23) || (ay === 8 && gun <= 22)) {
//     return "Aslan Burcu";
//   } else if ((ay === 8 && gun >= 23) || (ay === 9 && gun <= 22)) {
//     return "Başak Burcu";
//   } else if ((ay === 9 && gun >= 23) || (ay === 10 && gun <= 22)) {
//     return "Terazi Burcu";
//   } else if ((ay === 10 && gun >= 23) || (ay === 11 && gun <= 21)) {
//     return "Akrep Burcu";
//   } else if ((ay === 11 && gun >= 22) || (ay === 12 && gun <= 21)) {
//     return "Yay Burcu";
//   } else if ((ay === 12 && gun >= 22) || (ay === 1 && gun <= 19)) {
//     return "Oğlak Burcu";
//   } else if ((ay === 1 && gun >= 20) || (ay === 2 && gun <= 18)) {
//     return "Kova Burcu";
//   } else {
//     return "Balık Burcu";
//   }

// Burcu bul ve konsola yazdır
// const burc = bulBurc(gun, ay);
// console.log(`Doğum tarihinize göre burcunuz: ${burc}`);
