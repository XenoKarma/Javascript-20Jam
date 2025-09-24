/* Date Object di JS */

// digunakan untuk bekerja dengan tanggal dan waktu, objek ini
// memungkinkan kita untuk mendapatkan, mengatur dan memanipulasi tnaggal dan waktu

// Membuat Date Object
// Tanggal dan Waktu saat ini:
let now = new Date()
console.log(now) // tanggal dan waktu saat ini hasilnya

// Menggunakan String
let spesificDate = new Date("August 20, 2025 10:30:00")
console.log(spesificDate) //membuat date secara spesifik

// Menggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)
let costumeDate = new Date(2025, 3, 18, 18, 30)
console.log(costumeDate)
// Bulan ke-8 (Agustus, karena bulan dimulai dari 0)

// Mengambil informasi tanggal dan waktu
// let today = new Date()
// console.log(today.getFullYear())//mendapatkan tahun
// console.log(today.getMonth())//mendapatkan bulan
// console.log(today.getDate())//mendapatkan tanggal
// console.log(today.getDay())//mendapatkan hari
// console.log(today.getHours())//mendapatkan jam
// console.log(today.getMinutes())//mendapatkan minit
// console.log(today.getSeconds())//mendapatkan detik
// console.log(today.getTime())//mendapatkan waktu dalam milidetik sejak 1970

// Mengatur Tnaggal dan Waktu
let date = new Date()
// mengatur tahun jadi 2025
date.setFullYear(2025)
// mengatur bulan menjadi desember
date.setMonth(11)
// Mengatur hari menjadi 25
date.setDate(29)
console.log(date)

// Perhitungan waktu dengan Date Object
let startDate = new Date(2024, 7, 20, 10, 30)
let endDate = new Date(2025, 7, 20, 10, 30)

let diff = endDate - startDate
console.log(diff)

let diffInDays = diff / (1000 * 3600 * 24)
console.log(diffInDays)



