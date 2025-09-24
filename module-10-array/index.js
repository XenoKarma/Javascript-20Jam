// Array di JS

// membuat array
// 1. menggunakan notasi di array literal:
let fruits = ["Apple", "Manggo", "Banana"]
// console.log(fruits)
// 2. menggunakan new Array()
let num = new Array(1, 2, 3, 4, 5)
// console.log(num)

// Mengakses Elemen Array
// console.log(fruits[0]) // Apple
// console.log(fruits[2]) // Banana

// Menambah ataupun Mengubah Array
// fruits[3] = "Strawberry"
// fruits[0] = "Orange"
// console.log(fruits)

// Memanipulasi Array

let numbers = [1,2,3]
// // menambah angka
// numbers.push(4)
// console.log(numbers)
// // menghapus angka paling belakang
// numbers.pop()//menghapus element terakhir
// console.log(numbers)
// // menghapus angka yang paling pertama
// numbers.shift()
// console.log(numbers)
// // menambah angka ke paling depan
// numbers.unshift(100)
// console.log(numbers)

let numbers2 = [4,5]
let newNumbers = numbers.concat(numbers2) //menambahkan array ke array
console.log(newNumbers)
newNumbers.splice(2,1,10)
console.log(newNumbers)
console.log(newNumbers.slice(2,4))


// Multidimensional Array (Array of Arrays)
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matrix[1][2])