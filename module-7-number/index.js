// contoh penggunaan numbers
let bilanganBulat = 26
let bilanganPecahan = 27.5
let bilanganNegatif = -5
let infintyValue = Infinity
let infintyValueNegatif = -Infinity
let notANumber = NaN
console.log(bilanganBulat)
console.log(bilanganPecahan)
console.log(bilanganNegatif)
console.log(bilanganNegatif)
console.log(infintyValue)
console.log(infintyValueNegatif)
console.log(notANumber)

// Js menyediakan beberapa properti pada objek number yg berguna
// 1. Number.Max_VALUE
console.log(Number.MAX_VALUE)
// 2. Number.MIN_VALUE
console.log(Number.MIN_VALUE)
// 3. Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY)
// 4. Number.NEGATIFE_INFINITY
console.log(Number.NEGATIVE_INFINITY)
// 5. Number.NaN
console.log(Number.NaN)

// Metode Bawaan Number
// 1. toString(), mengubah angka menjadi string
let num = 732.9
let str = num.toString()
console.log(str, typeof str)

// 2. toFixed(digits), mengubah angka menjadi string, dengan jumlah digit desimal yang ditentukan
let floating = 3.124824
console.log(floating.toFixed(4))

// 3. toPrecision(digits), mengubah angka menjadi string dengan panjang total yang ditentukan
let float = 3.14289
console.log(float.toPrecision(2))

// 4. parseInt() dan parseFloat(), mengubah string menjadi integer atau floating point.
let str2 = "123"
let int = parseInt(str2)
console.log(int)

