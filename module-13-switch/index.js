/* SWITCH DI JS */

// // switch-case adalah pernyataan kondisional di Js yang digunakan untuk membandingkan sebuah ekspresi
// dengan beberapa kemungkinan nilai dan mengeksekusi blok kode tertentu berdasarkan kecocokan
// nila tersebut. Switch-case sering digunakan sebagai alternatif dari beberapa pernyataan if-else 
//     yang berturut turut.

const hari = 3
let namaHari;

switch(hari){
    case 1:
        namaHari = 'Senin'
        break;
    case 2:
        namaHari = 'Selasa'
        break;
    case 3:
        namaHari = 'Rabu'
        break;
    case 4:
        namaHari = 'Kamis'
        break;
    case 5:
        namaHari = 'Jumat'
        break;
    case 6:
        namaHari = 'Sabtu'
        break;
    case 7:
        namaHari = 'Minggu'
        break;
    default:
        namaHari = 'Hari tidak valid'   
}

console.log(namaHari)

// eksekusi tampa break
switch(hari){
    case 1:
        namaHari = 'Senin'
        
    case 2:
        namaHari = 'Selasa'
        
    case 3:
        namaHari = 'Rabu'
        
    case 4:
        namaHari = 'Kamis'
        
    case 5:
        namaHari = 'Jumat'
        
    case 6:
        namaHari = 'Sabtu'
        
    case 7:
        namaHari = 'Minggu'
        
    default:
        namaHari = 'Hari tidak valid'   
}
// untuk mencegahnya harus pakai break, jangan sampai engga pakai break
console.log(namaHari)
// ingat pakai break

// Switch-case dengan Ekspresi atau Operasi
let nilai = 85
switch(true) {
    case nilai >= 90 :
        console.log('Grade : A');
        break;
    case nilai >= 80 :
        console.log('Grade : B');
        break;
    case nilai >= 70 :
        console.log('Grade : C');
        break;
    case nilai >= 60 :
        console.log('Grade : D');
        break;
    default:
        console.log('Grade : GAGAL')
}