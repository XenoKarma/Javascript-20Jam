/* Object di Javascript */

// Membuat Object
// 1. Object Literal
let mobil = {
    merk: "toyota",
    model: "avanza",
    tahun: 2020
}

console.log(mobil)

// 2. Menggunakan Constructor new Object()
let buku = new Object();
buku.judul = 'Belajar Javascript'
buku.penulis = 'Andika'
console.log(buku)

// Mengakses Properti Object
// 1. Menggunakan Notasi titik (Dot Notation)
let mahasiswa = {
    nama: "Andika Purnama",
    nim: 21411009,
    jurusan: 'Sistem Informasi'
}
console.log(mahasiswa.nim)

// 2. Menggunakan Notasi Kurung (Bracket Notasi)
console.log(mahasiswa['jurusan'])// kalau key nya 2 kata lebih baik pakai Notasi Kurung

// Menambah dan Mengubah Properti Object
// 1. Menambah Properti:
mahasiswa.alamat = 'Jakarta'
console.log(mahasiswa)

// Mengubah Properti
mahasiswa.nama = 'Rahmad Wahyudi'
console.log(mahasiswa)

// Menghapus Properti
delete mahasiswa.nim
console.log(mahasiswa)

// Nosted Object = didalam object ada object
let kampus = {
    nama : "STMIK Widuri",
    fakultas: {
        nama: "Teknologi",
        jurusan: "Sistem Informasi"
    }
}
console.log(kampus)

// Destructuring Object
let {nama, alamat} = mahasiswa //bisa ambil semua key
console.log(nama)