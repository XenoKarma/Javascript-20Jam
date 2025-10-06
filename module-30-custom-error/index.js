let num = 123

// CUNTOME ERROR
class CustomError extends Error{
    constructor(message) {
        super(message)
    }
}

try {
    if (num === 123) {
        throw new Error("Num tidak boleh bernilai 123")
    }
} catch(error){
    console.error(`Error : ${error.name}`)
    console.error(`Error : ${error.message}`)
}
