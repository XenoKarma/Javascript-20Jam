// OOP DI JS

// Non OOP (gapake OOP)
/*let mobil1 = {
    merk: 'Toyota',
    model: 'Avanza',
    tahun: 2021,
    start: function() {
        console.log("Mobil dimulai")
    },
    info: function() {
        console.log(`Mobil: ${this.merk} ${this.model} ${this.tahun}`)
    }
}
let mobil2 = {
    merk: 'Toyota',
    model: 'Avanza',
    tahun: 2021,
    start: function() {
        console.log("Mobil dimulai")
    },
    info: function() {
        console.log(`Mobil: ${this.merk} ${this.model} ${this.tahun}`)
    }
}
let mobil3 = {
    merk: 'Toyota',
    model: 'Avanza',
    tahun: 2021,
    start: function() {
        console.log("Mobil dimulai")
    },
    info: function() {
        console.log(`Mobil: ${this.merk} ${this.model} ${this.tahun}`)
    }

    mobil.start()
}*/

// Diatas ribet karena harus ngetik lama
// Constructur Function
function Mobil(merk,model,tahun) {
    this.merk = merk
    this.model = model
    this.tahun = tahun

    this.start = function() {
        console.log("Mobil Dimulai")
    }
    this.info = function() {
        console.log(`Mobil: ${this.merk} ${this.model} ${this.tahun}`)
    }
}

let mobil1 = new Mobil("Toyota", "Avanza", 2021)
let mobil2 = new Mobil("Honda", "Civic Type-R", 2022)

console.log(typeof mobil1)

// Konsep Prototype Inheritence adalah
// JS menggunakan prototypeal inheritence, yang berarti objek dapat mewarisi properti dan method dari
// objek lainnya.

// Prototype adalah objek dari mana objek lain mewarisi properti dan method. 

function Hewan(nama,jenis) {
    this.nama = nama
    this.jenis = jenis
}

Hewan.prototype.makan = function() {
    console.log(`${this.nama} Makan`)
}

let kucing = new Hewan("Kitty", "Anggora")
kucing.makan()