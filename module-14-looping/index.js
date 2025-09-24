/* LOOPING */
// Digunakan untuk menjalankan blok kode berulang kali selama kondisi tertentu terpenuhi.
// Javascript mendukung beberapa jenis loop: for, while dan do while,
// setiap jenis loop memiliki kegunaannya masing masing, tergantung pada kebutuhan


// For Loop
/*

    for(inisialisasi; kondisi; perubahan) {
    // eksekusi kode
    }

*/

// for(let i = 1; i <= 5; i++) {
//     console.log(`Iterasi ke-${i}`)
// }

// While Loop
/*
    while(kondisi) {
    // eksekusi kode brok
    }

    // kenkawan harus hati2 karena di while ini harus memastikan suatu saat akan jadi false
*/

let y = 1
while(y <= 5) {
    console.log(`Iterasi ke-${y} dengan while loop`)
    y = y + 1 // harus masukin kondisi gini, kalau tidak dia akan looping tampa henti
}

// Do While loop
// memastikan kode kita jalan 1x baru dia akan cek kondisinya

let z = 1
do{
    console.log(`Iterasi ke-${z} dengan do-while`)
    z++
}while(z <= 5)

// for in loop

const object = {nama: "Andika", umur: 22}

for (let property in object) {
    console.log(property)
    console.log(object[property])
}

// for of loop
// melooping array dengan mudah pakai ini
let sum = 0
const array = [1,2,3,4,5]
for (let nilai of array) {
    console.log(nilai)
    sum = sum + nilai
}
console.log(sum)