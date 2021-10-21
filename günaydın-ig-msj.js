var tarih = new Date () ;
var saat = tarih.getHours () ;

adsoyad = prompt("Adınızı ve Soyadınızı giriniz") ;

if (saat >= 6 && saat <12) {
    console.log("Günaydın "+adsoyad);
}

else if (saat >= 12 && saat <16) {
    console.log("İyi öğlenler " +adsoyad);
}

else if (saat >= 16 && saat < 18) {
    console.log("İyi günler " +adsoyad);
}

else if (saat >= 18 && saat < 21) {
    console.log("İyi akşamlar " +adsoyad);
}

else if (saat >=21 && saat < 24) {
    console.log("İyi geceler " +adsoyad);
}

else if (saat >=24 && saat <6) {
    console.log("Uyu artık orospu evladı " +adsoyad);
}
