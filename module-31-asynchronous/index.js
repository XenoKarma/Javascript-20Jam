// Ini adalah contoh synchronous
// console.log("Start")
// for(let i = 0; i < 1000000000; i++) {}
// console.log("End")

// ini contoh Asynchronous
console.log("Start")
setTimeout(()=> {
    console.log("This  is asynchronous code")
}, 5000)

console.log("End")