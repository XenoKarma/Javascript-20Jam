/* tipe data primitif */

// String
const nama = "Andika Purnama";
const negara = "indonesaia"
const domisili = `${nama}, Bandung`

// Number
const umur = 20;

// Boolean
const isMarried = false;

//undefined
let x;

// Null
const person = null;

// Symbol
const symbol = Symbol("description 1");

// BigInteger
const bigInt1 = 212123123121231231123n;

/* tipe data reference */

// Object
// terdiri dari key dan value
const orang = {
    nama : "Andika",
    umur : 26,
    negara : "Indonesia"
}

// Array
const hobby = ["Basket","Football","Catur"];


// Function

function sayHello() {
    return "Hello dari Javascript"
}
const output = sayHello;
console.log(output,typeof output);

/* Perbedaan tipe data primitif dan reference */

// tipe data primitif
let a = 10;
let b = a; //karena b menyimpan nilai salinan dari a, maka b jadi = 10

a = 20
console.log(b) // output : 10

// tipe data reference

let obj1 = {nama: "Andika"}
let obj2 = obj1 //objt 2 itu akan menyimpan referensi yang sama dengan obj 1

obj1.nama = "budiman"

console.log(obj2)
