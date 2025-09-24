/* String di Javascript */

// // membuat strings
// let singleQuote = 'hello';
// let doubleQuote = "World";
// let backtics = `Hello World`;

// // mengakases karakter di dalam string
// let str = 'Javascript'
// console.log(str[0]) //jawabannya j, karena dihitung dari 0,1,2,3,4

// // Property dan methods di dalam string
// console.log(str.length)// hasilnya 10 Javascript = j = 0, ni untuk mengetahui panjang string
// console.log(str.toUpperCase())//mengubah string ke uppercase
// console.log(str.toLowerCase()); // mengubah string ke lowercase

// let testTrim = "    Javascript  "
// console.log(testTrim.trim()) //menghilangkan spasi diawal dan di akhir

// Manipulasi String
// // concat
// let firstName = "Andika"
// let lastName = "Purnama"
// let result = firstName + " " +lastName
// console.log(result)

// concat template literals
// let resultBactics = `${firstName} ${lastName}`
// console.log(resultBactics)

// // mengambil bagian dari string
// let text = "Javascript"
// console.log(text.slice(0, 4))// hasilnya adalah Java
// console.log(text.substring(4))// hasilnya adalah script

// // Mengganti bagian dari string

// let replacement = 'Hello, World'
// let newReplacement = replacement.replace('World', 'There')
// console.log(newReplacement)

// const arr = ['test', 'array', 'di', 'string']
// console.log(arr.join('-'))

// const testString = 'tes-array-di-string'
// console.log(testString.split('-', 2))

// Pencarian di dalam String
// indexOf,
let setence = "Lorem ipsum, dolar sit amet"
let index = setence.indexOf("dolar")
console.log(index)

let lastIndex = setence.lastIndexOf("dolar")
console.log(lastIndex)

let exists = setence.includes("dolarisme")
console.log(exists)