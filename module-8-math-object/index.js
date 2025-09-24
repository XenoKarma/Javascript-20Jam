/* MATH Object */

// math object di javascript adalah objek bawaan yang berisi berbagai properti
// dan metode untuk melakukan operasi matematika

// Properti Math
// Math.PI:
// Math.E:

console.log(Math.PI)
console.log(Math.E)

// Metode Math
console.log(Math.abs(-7))// akan jadi 7 karena menjadi absolute(positif)
console.log(Math.pow(2,5))// pangkat 2^5 = 32
console.log(Math.sqrt(16))// akar
console.log(Math.cbrt(27))// akar dari 27 = 3
console.log(Math.max(1,13,89,1000,1))// hasil maximun adalah 1000
console.log(Math.min(0,-1,-1000,1,22,45434234))// hasil minimum 


// Pembulatan Angka
console.log(Math.round(3.49))// dibulatkan ke 3, kalau 3.5 dibulatkan jadi 4
console.log(Math.ceil(4.1))// dibulatkan keatas walau ada lebih sedikit kayak 4.00000001
console.log(Math.floor(3.9))// membulatkan kebawah atau kebalikan ceil, hasilnya 3
console.log(Math.trunc(4.1))// nilainya akan tetap walau ada 4. sekian2, dia akan menghilangkan koma, kayak 4.1 = 4

// Random Number
console.log(Math.random()*100)//mendapatkan angka gacha