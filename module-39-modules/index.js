// import {add as tambah, subtrack as kurang} from './main.js'
// import great from "./main.js"

// console.log(tambah(10,20))
// console.log(kurang(10,5))

// great("Andika")

document.getElementById('addButton').addEventListener('click', async () => {
    const mathOperation = await import('./main.js');
    const result = mathOperation.add(5, 3);
    console.log(result);
});

document.getElementById('subtrackButton').addEventListener('click', async () => {
    const mathOperation = await import('./main.js');
    const result = mathOperation.subtrack(5, 3);
    console.log(result);
});
