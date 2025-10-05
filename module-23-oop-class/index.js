/* ES6 cuy */
class Mobil {
    constructor(merk, model, tahun) {
        this.merk = merk
        this.model = model
        this.tahun = tahun
    }
    start(){
        console.log("Mobil Dimulai")
    }
    info() {
        console.log(`Mobil : ${this.merk} ${this.model} ${this.tahun}`)
    }
}

let mobil1 = new Mobil("Toyota", "Avanza", 2021)
let mobil2 = new Mobil("Honda", "Civic", 2021)

mobil1.start()
mobil2.info()

/*
    Class adalah blueprint untuk membuat objek.
    Constructor adalah method khusus untuk menginisialisasi objek baru.
*/