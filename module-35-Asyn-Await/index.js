function checkStock(product) {
    return new Promise((resolve, reject) => {
        console.log(`Checking stock for${product}`)

        // Simulasi cek stock (butuh 3 detik)
        setTimeout(()=> {
            const stockAvailable = false

            if(stockAvailable){
                resolve(`${product} is available in stock`)
            }else {
                reject(`${product} is out of the stock`)
            }
        })
    })
}

// Asyn / Await
async function main() {

    try{
        const data = await checkStock("Laptop")
        console.log(data)
    } catch(error) {
        console.log(error)
    }

}

main()


// checkStock("Laptop").
//     then(message => {
//         console.log(message)})
//     .catch(error => {
//         console.log(error)
//     })
// Enakan pakai promise dari pada callback, tapi coba Asyn/Await