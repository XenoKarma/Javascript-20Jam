/* IF ELSE */

// sintaks dasar
let age = 22

if(age >= 18) {
    console.log('Ciee dah gede ya')
} else {
    console.log('Masih bocah wok wok!')
}

// if-else if = digunakan untuk memeriksa beberapa kondisi secara berurutan.
// blok kode pertama yang kondisinya benar(true) akan dijalankan, dan eksekusi akan berhenti setelah itu.
let score = 90

if(score >= 90) {
    console.log("Grade A")
} else if(score >= 75) {
    console.log("Grade B")
} else if(score >= 65) {
    console.log("Grade C")
}else {
    console.log("Grade D")
}

// Nested if-else, kita juga bisa menempatkan if-else didalam blok if else lainnya.
let num = 10

if(num>0) {
    if(num % 2 == 0){
        console.log('Number ini positif dan ia bilangan GENAP')
    }else {
        console.log('Number ini Positif dan ia bilangan GANJIL')
    }
}else {
    console.log('Number ini bilangan negatif')
}