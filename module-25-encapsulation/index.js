/* ENCAPSULATION */

class BankAccount{
    #balance
    constructor(owner, balance) {
        this.owner = owner
        this.#balance = balance
    }

    setBalance(amount){
        this.#balance = this.#balance + amount
    }

    getBalance(){
        console.log(`Saldo : ${this.#balance}`)
    }
}

let akunAndika = new BankAccount("Andika", 1000)
akunAndika.#balance = 12000
akunAndika.getBalance()

// Penggunaan _balance mengindikasikan bahwa properti ini "Pribadi"
// Meskipun masi bisa diakses (Javascript tidak mendukung ENCAPSULATION private secara ketat di ES6)

