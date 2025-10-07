console.log("Mulai")
setTimeout(()=> {
    console.log("kode ini dijeda 3 detik")
}, 3000)
console.log("Selesai akan muncul sebelum delay")

// setInterval()
let timer = 0
const interValid = setInterval(()=>{
    timer +=1
    console.log(`Timer: ${timer} detik`)

    if(timer === 5) {
        clearInterval(interValid)
        console.log("Time out!")
    }

},1000)