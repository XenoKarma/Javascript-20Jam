let number = 124

try {
    if(number === 123) {
        throw new Error("Nomor 123 tidak diperbolehkan")
    }
    console.log(numberd)
} catch(error){
    console.log(`Error Terjadi : ${error.message}`)
}
finally {
    console.log("Ini akan selalu dijalankan")
}

// throw 
function divide(a,b) {
    if(b === 0) {
        throw new Error("Pembagian dengan nol tidak diperbolehkan")
    }
    return a/b
}

try {
    let result = divide(10,0)
}catch (error){
    console.error(`Error : ${error.message}`)
}

