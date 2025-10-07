// function selesaikanTugas(tugas, callback){
//     console.log(`Menyelesaikan tugas: ${tugas}`)
//     callback()
// }

// function tugasSelesai() {
//     console.log(`Tugas telah selesai!`)
// }

// selesaikanTugas("informatika", tugasSelesai)

function getUserData(callback){
    console.log("Fetching user data....")

    setTimeout(() => {
        const userData = {
            id: 1,
            name: "Andika",
            email: "andika@gmail.com"
        }

        callback(null,userData)
    }, 3000);
}

function displayUserData(error, userData) {
    if(error) {
        throw new Error(`Error fetching user data`)
    }else {
        console.log("User Data: ", userData)
    }
}
getUserData(displayUserData)