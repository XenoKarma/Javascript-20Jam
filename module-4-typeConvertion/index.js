// Implicit Conversion
// javascript sendiri yang secara otomatis melakukan konversi untuk kita
// terjadi ketika js menyesuaikan tipe data secara otomatis selama operasi tertentu seperti operator matematika
let result = "5" + 10

// Falsy value = 0, null, undefined, ""
let bool = !0
let bool1 = !null
let bool2 = !undefined
let bool3 = !""
let bool4 = !1

// Eksplisit Conversion
// kita yang menentukan tipe datanya mau jadi apa

let num = 100;
// let string = String(num)//cara pertama
let string = num.toString()//cara kedua

let string2 = "200"
let string3 = "200.88"
let num2 = parseInt(string2)
let num3 = parseFloat(string3)

let numm2 = Boolean(0)

// NaN
let result2 = "abc" - 10


console.log(result2, typeof result2)//cara 
