class Hewan {
    constructor(nama, jenis) {
        this.nama = nama
        this.jenis = jenis
    }
    makan() {
        console.log(`${this.nama} sedang makan`)
    }
}

class Kucing extends Hewan {
    constructor(nama, jenis, warna) {
        super(nama,jenis)
        this.warna = warna
    }
    kucingMakan(){
        console.log(super.makan())
        console.log('makannya lahap cuy')
    }
}

let Gemoy = new Kucing("Gemoy", "Kucing Anggora", "Orange")
// console.log(Gemoy.makan())
console.log(Gemoy.kucingMakan())