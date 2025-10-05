/* 
    Polymorphism
*/

// Polymorphism memungkinkan kita untuk menggunakan method dengan nama yang sama pada objek yang berbeda.

class Hewan {
    bersuara() {
        console.log(`Hewan Bersuara`)
    }
}

class Kucing extends Hewan {
    bersuara(){
        super.bersuara()
        console.log('Miaww!')
    }

}

let hewan = new Hewan()
let kucing = new Kucing()




hewan.bersuara()
kucing.bersuara()

// Method bersuara() digunakan untuk semua class, tetapi memberikan output yang berbeda sesuai dengan class-nya.
